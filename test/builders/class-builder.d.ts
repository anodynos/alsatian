import { Constructor } from "../../core/_interfaces";
export declare class ClassBuilder {
    private name;
    ClassBuilder(): void;
    withName(name: string): ClassBuilder;
    build(): Constructor;
}
