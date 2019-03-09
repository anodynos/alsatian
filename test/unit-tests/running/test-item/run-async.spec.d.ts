export declare class TestItemRunAsyncTests {
    successfulAsyncTest(): Promise<void>;
    ignoreAsyncTest(): Promise<void>;
    failAsyncTest(): Promise<void>;
    errorAsyncTest(): Promise<void>;
    testErrorAsyncTest(): Promise<void>;
    timeoutAsyncTest(timeout: number): Promise<void>;
}
