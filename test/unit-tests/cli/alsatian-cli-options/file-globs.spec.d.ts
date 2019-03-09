export declare class FileGlobsTests {
    fileGlobsDefaultToEmpty(): void;
    fileGlobSet(...expectedFileGlobs: Array<string>): void;
    multipleFileGlobSet(...expectedFileGlobs: Array<string>): void;
    knownArgumentsIgnoredFromFileGlobs(inputArguments: Array<string>, expectedFileGlobs: Array<string>): void;
}
