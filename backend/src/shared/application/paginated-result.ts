import { Result } from "./result";

export interface PaginationMeta {

    page: number;

    limit: number;

    total: number;

    totalPages: number;

    hasNext: boolean;

    hasPrevious: boolean;

}

export interface PaginatedData<T> {

    items: T[];

    meta: PaginationMeta;

}

export class PaginatedResult<T>
    extends Result<PaginatedData<T>> {

    private constructor(
        success: boolean,
        data?: PaginatedData<T>,
        error?: Error
    ) {
        super(success, data, error);
    }

    static ok<T>(
        items: T[],
        page: number,
        limit: number,
        total: number
    ): PaginatedResult<T> {

        const totalPages = Math.ceil(total / limit);

        return new PaginatedResult<T>(
            true,
            {
                items,
                meta: {
                    page,
                    limit,
                    total,
                    totalPages,
                    hasNext: page < totalPages,
                    hasPrevious: page > 1
                }
            }
        );
    }

    static fail<T>(
        error: Error | string
    ): PaginatedResult<T> {

        return new PaginatedResult<T>(
            false,
            undefined,
            typeof error === "string"
                ? new Error(error)
                : error
        );
    }

}