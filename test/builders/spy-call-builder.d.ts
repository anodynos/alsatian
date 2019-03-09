import { ISpyCall } from "../../core/_interfaces";
export declare class SpyCallBuilder {
    private args;
    SpyCallBuilder(): void;
    withArguments(args: Array<any>): SpyCallBuilder;
    build(): ISpyCall;
}
