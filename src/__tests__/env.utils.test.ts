// __tests__/env.utils.test.ts
import { clearEnvCache, requireEnv } from '../env/utils';
import {
  EnvMissingError,
  EnvTransformError,
  EnvValidationError,
} from '../errors/env';
import { toInt } from '../env/transformers';

describe('requireEnv', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    clearEnvCache();
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it('should retrieve a required string environment variable', () => {
    process.env.TEST_VAR = 'testValue';
    expect(requireEnv('TEST_VAR')).toBe('testValue');
  });

  it('should throw EnvMissingError if the environment variable is missing', () => {
    expect(() => requireEnv('TEST_VAR')).toThrow(EnvMissingError);
  });

  it('should return the default value if the environment variable is missing', () => {
    expect(requireEnv('TEST_VAR', { defaultValue: 'default' })).toBe('default');
  });

  it('should apply a transformer function', () => {
    process.env.NUM_VAR = '42';
    expect(requireEnv('NUM_VAR', { transformer: toInt })).toBe(42);
  });

  it('should throw EnvTransformError if the transformer fails', () => {
    process.env.NUM_VAR = 'invalid';
    expect(() => requireEnv('NUM_VAR', { transformer: toInt })).toThrow(
      EnvTransformError
    );
  });

  it('should apply validators and throw EnvValidationError on failure', () => {
    process.env.NUM_VAR = '-1';
    const isPositive = (val: number): string | null =>
      val > 0 ? null : 'Must be positive.';
    expect(() =>
      requireEnv('NUM_VAR', { transformer: toInt, validators: [isPositive] })
    ).toThrow(EnvValidationError);
  });

  it('should log a warning when using a default value', () => {
    console.warn = jest.fn();
    requireEnv('TEST_VAR', {
      defaultValue: 'default',
      defaultWarning: true,
      maskValue: true,
    });
    expect(console.warn).toHaveBeenCalledWith(
      'Environment variable "TEST_VAR" is missing, using default value "********"'
    );
  });

  it('should mask the default value in logs when maskValue is true', () => {
    console.warn = jest.fn();
    requireEnv('TEST_VAR', {
      defaultValue: 'secret',
      defaultWarning: true,
      maskValue: true,
    });
    expect(console.warn).toHaveBeenCalledWith(
      'Environment variable "TEST_VAR" is missing, using default value "********"'
    );
  });

  it('should not mask the default value in logs when maskValue is false', () => {
    console.warn = jest.fn();
    requireEnv('TEST_VAR', {
      defaultValue: 'secret',
      defaultWarning: true,
      maskValue: false,
    });
    expect(console.warn).toHaveBeenCalledWith(
      'Environment variable "TEST_VAR" is missing, using default value "secret"'
    );
  });
});
