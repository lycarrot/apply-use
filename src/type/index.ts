export type AnyPromiseFunction = (...arg: any[]) => PromiseLike<any>;

export type AnyNormalFunction = (...arg: any[]) => any;

export type AnyFunction = AnyNormalFunction | AnyPromiseFunction;
