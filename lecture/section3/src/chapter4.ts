/*
 * 대수 타입
 * → 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
 * → 합집합 타입과 교집합 타입이 존재함
 */

/*
 * 1. 합집합 타입 - Union 타입
 */
let a: string | number;
a = 1;
a = "hello";

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
}; // Dog 타입에 해당하는 객체 허용!

let union2: Union1 = {
  name: "",
  language: "",
}; // Person 타입에 해당하는 객체 허용!

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
}; // Dog 타입과 Person 타입의 교집합에 해당하는 객체 허용!

// let union4: Union1 = {
//   name: "",
// } → 에러
// 이유: Dog 타입, Person 타입, 두 타입의 교집합 중 어디에도 속하지 않음

/*
 * 2. 교집합 타입 - Intersection 타입
 */
let b: number & string; // → never 타입으로 추론됨 대다수의 기본 타입들 간에는 서로 공유하는 교집합이 없기 때문에 이런 인터섹션 타입은 보통 객체 타입들에 자주 사용됨

type Teacher = {
  name: string;
  subject: string;
};

type Student = {
  name: string;
  class: string;
};

type Intersection = Teacher & Student;

let intersection: Intersection = {
  name: "",
  subject: "",
  class: "",
}; // → Teacher 타입과 Student 타입의 프로퍼티 중 하나라도 빠지면 에러 발생
