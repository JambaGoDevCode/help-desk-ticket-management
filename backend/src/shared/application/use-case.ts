import { Result } from "./result";

export interface UseCase<
    Input = void,
    Output = unknown
> {
    execute(input: Input): Promise<Result<Output>>;
}

export abstract class BaseUseCase<
    Input = void,
    Output = unknown
> implements UseCase<Input, Output> {

    abstract execute(
        input: Input
    ): Promise<Result<Output>>;
}