/*
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
// string

let b: StringNumberSwitch<string>;
// number

let c: StringNumberSwitch<number | string>;
// string | number

/*
 * Exclude 조건부 타입 구현
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// number | boolean

/*
 * Extract 조건부 타입 구현
 */

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// string
