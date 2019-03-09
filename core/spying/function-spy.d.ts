import { ISpyCall } from "../_interfaces";
export declare class FunctionSpy {
    protected returnValue: any;
    protected hasReturnValue: boolean;
    protected isStubbed: boolean;
    protected context: any;
    private _fakeFunction;
    private _calls;
    readonly calls: ISpyCall[];
    callsWithArguments(...args: Array<any>): Array<ISpyCall>;
    call(...args: Array<any>): any;
    andReturn(returnValue: any): void;
    andCall(fakeFunction: () => any): void;
}
