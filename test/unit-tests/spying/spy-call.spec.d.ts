export declare class SpyCallTests {
    spyCallArgsAreSameAsInput(args: Array<any>): void;
    allArgumentsMatchIfIdenticalInput(expectedArgs: Array<any>): void;
    allArgumentsDoNotMatchIfIdenticalInputInWrongOrder(expectedArgs: Array<any>, actualArguments: Array<any>): void;
    allArgumentsDoNotMatchIfMissingArguments(expectedArgs: Array<any>, actualArguments: Array<any>): void;
    allArgumentsDoNotMatchIfArgumentsAreDifferentInstances(expectedArgs: Array<any>, actualArguments: Array<any>): void;
}
