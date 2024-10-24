import { CustomError } from './base.js';
export function logError(error, options = {}) {
    let customError = null;
    if (typeof error === 'string') {
        customError = new CustomError(error, options);
    }
    if (customError) {
        console.error(customError);
        return customError;
    }
    console.error(error);
    return error;
}
