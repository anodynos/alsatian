import "reflect-metadata";
export declare class LoadTestTests {
    private _originalStdErr;
    private _originalExit;
    private _spyOnProcess;
    private _resetProcess;
    ignoredShouldBeFalseByDefault(): void;
    ignoredShouldBeTrueIfMetadataSet(): void;
    ignoreReasonShouldBeSetFromMetadata(reason: string): void;
    focussedShouldBeFalseByDefault(): void;
    focussedShouldBeTrueIfMetadataSet(): void;
    noTestsReturnsEmptyArray(): void;
    descriptionShouldBeSetWhenNotConstructor(propertyName: string): void;
    descriptionShouldBeSetToConstructorNameWhenConstructor(constructorName: string): void;
    descriptionShouldBeSetWhenMetadataOnDefault(testFixtureDescription: string): void;
    descriptionShouldBeSetWhenMetadataOnExportedMember(testFixtureDescription: string): void;
    shouldIgnoreTestsIfFixtureIgnored(): void;
    shouldIgnoreTestsWithReasonIfFixtureIgnored(reason: string): void;
    shouldWriteToErrorLogWithCorrectMessage(path: string, stack: string): void;
}
