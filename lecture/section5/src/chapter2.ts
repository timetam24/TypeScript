/*
 * 인터페이스 선언 합치기
 */

// 타입 별칭은 동일한 스코프 내에서 중복된 이름으로 선언 불가
// type Person = {
//   name: string;
// };

// type Person = {  → error
//   age: number;
// };

// 인터페이스는 중복된 이름으로 선언 가능!
interface Person {
  name: string;
}

interface Person {
  // name: number; → error (충돌! 동일한 프로퍼티의 타입을 다르게 정의할 수 없음)
  age: number;
}

const person: Person = {
  name: "유의진",
  age: 25,
};

/*
 * 사용 예: 모듈 보강
 */
interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hi",
};
