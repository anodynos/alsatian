import { SpyCall } from "./spy-call";
export declare class PropertySpy<PropertyType> {
    private _originialGetter;
    private _originialSetter;
    private _value;
    private _descriptorTarget;
    private _getter;
    private _setter;
    private _returnValue;
    private _propertyName;
    private _getCalls;
    private _setCalls;
    readonly setCalls: SpyCall[];
    constructor(target: any, propertyName: string);
    andReturnValue(value: PropertyType): PropertySpy<PropertyType>;
    andCallGetter(getter: () => PropertyType): PropertySpy<PropertyType>;
    andCallSetter(setter: (value: PropertyType) => void): PropertySpy<PropertyType>;
    restore(): void;
    private _get;
    private _set;
}
