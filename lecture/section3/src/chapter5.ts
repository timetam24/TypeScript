/*
 * 타입 추론
 */

// 1. number 타입으로 추론
let a = 10;

// 2. 함수의 매개변수 타입은 자동 추론 불가
// function func(param){
// } → error

// 3. 기본값이 설정된 매개변수 타입은 기본값을 기준으로 추론 가능 → string
function func2(message = "hello") {}

// 4. 함수의 반환값 타입은 return 문을 기준으로 추론 가능 → string
function func3() {
  return "hello";
}

// 5. 초기타입을 정해주지 않을 경우 암묵적인 any 타입의 진화
let d; // any
d = 10; // any
d.toFixed(); // number

d = "hello"; // any
d.toUpperCase(); // string

// 6. const 상수의 추론
const num = 10; //  → 10 number literal 타입으로 추론
const str = "hi"; // → "hi" string literal 타입으로 추론

// 7. 최적 공통 타입
let arr = [1, "string"]; // (string | number)[] 타입으로 추론
