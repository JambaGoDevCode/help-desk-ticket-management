export class Result<T> {

    public readonly success: boolean;

    public readonly data?: T;

    public readonly error?: Error;

    private constructor(
        success: boolean,
        data?: T,
        error?: Error
    ) {

        this.success = success;

        this.data = data;

        this.error = error;

        Object.freeze(this);
    }

    static ok<T>(
        value?: T
    ): Result<T> {

        return new Result<T>(
            true,
            value
        );
    }

    static fail<T = never>(
        error: Error | string
    ): Result<T> {

        return new Result<T>(
            false,
            undefined,
            typeof error === "string"
                ? new Error(error)
                : error
        );
    }

    isSuccess(): boolean {

        return this.success;
    }

    isFailure(): boolean {

        return !this.success;
    }

    getValue(): T {

        if (!this.success) {

            throw new Error(
                "Cannot get value of failed Result."
            );
        }

        return this.data as T;
    }

    getError(): Error {

        if (this.success) {

            throw new Error(
                "Successful Result has no error."
            );
        }

        return this.error as Error;
    }

}