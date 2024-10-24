import Config from '../config.js';
/**
 * Base class for custom errors.
 * @category Errors
 */
export class CustomError extends Error {
    value;
    /**
     * Creates an instance of {@link CustomError}.
     * @param message - The error message.
     * @param options - {@link CustomErrorOptions}
     */
    constructor(message, options) {
        super(message);
        this.cause = options?.cause;
        const { clearStack = Config.clearErrorStack, maskValue = Config.maskValues, verbose = Config.verboseErrors, verboseData, } = options ?? {};
        Object.defineProperty(this, 'value', {
            value: maskValue ? '********' : verboseData?.value,
            enumerable: !maskValue && !!verboseData?.value,
        });
        Object.defineProperty(this, 'valueType', {
            value: typeof verboseData?.value,
            enumerable: verbose && !!verboseData?.value,
        });
        if (clearStack) {
            this.stack = undefined;
        }
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
/**
 * Error for validation failures. Extends {@link CustomError}.
 * @category Errors
 */
export class ValidationError extends CustomError {
    /**
     * Creates an instance of {@link ValidationError}.
     * @param message - The error message.
     * @param options - {@link CustomErrorOptions}
     */
    constructor(message, options) {
        super(message, options);
    }
}
