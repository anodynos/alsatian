import "reflect-metadata";
import { Constructor } from "../_interfaces";
export declare function IgnoreTests(reason?: string): (constructor: Constructor) => void;
