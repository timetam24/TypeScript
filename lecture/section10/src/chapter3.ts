/*
 * 맵드 타입 기반의 유틸리티 타입
 * Exclude<T, K>, Extract<T, K>, ReturnType<T>
 */

/*
 * Exclude<T, K>
 * T로부터 K를 제거하는 타입
 */
type A = Exclude<string | boolean, string>; // boolean

// Exclude<T, K> 직접 구현하기
type Exclude<T, K> = T extends K ? never : T;

/*
 * Extract<T, K>
 * T로부터 K를 추출하는 타입
 */
type B = Extract<string | boolean, boolean>; // boolean

// Extract<T, K> 직접 구현하기
type Extract<T, K> = T extends K ? T : never;

/*
 * ReturnType<T>
 * 타입변수 T에 할당된 함수 타입의 반환값 타입을 추출하는 타입
 */
type ReturnType<T extends (...args: any) => any> = T extends (
  ...agrs: any
) => infer R
  ? R
  : never;

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>; // string

type ReturnB = ReturnType<typeof funcB>; // number
