import "reflect-metadata";
export declare class TeardownDecoratorTests {
    teardownFunctionAddedAsMetaData(): void;
    teardownFunctionMetaDataAdded(key: string): void;
    teardownFunctionIsAsyncMetaDataAdded(key: string): void;
    correctTestCountAdded(teardownFunctionCount: number): void;
}
