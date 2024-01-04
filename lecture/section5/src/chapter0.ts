/*
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number): void;
  sayHi(a: number, b: number): void; // 호출 시그니처를 이용해 메서드 타입을 정의하면 오버로딩 구현 가능
}

const person: Person = {
  name: "유의진",
  // age: 25,
  sayHi: function () {
    console.log("Hi");
  },
};

// person.name = '아무개' → error
person.sayHi();
person.sayHi(1);
