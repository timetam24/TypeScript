/*
 * 1. 타입 단언
 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "유의진";
person.age = 25;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "말콩이",
  color: "white",
  breed: "말티즈",
} as Dog; // 초과 프로퍼티 검사에 걸리지 않음

/*
 * 2. 타입 단언의 규칙
 * 값 as 단언
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string; → 에러

/*
 * 3. const 단언
 */

let num4 = 10 as const; // 10 number literal 타입으로 단언됨

// 객체에서 const 단언을 사용하면 모든 프로퍼티가 read-only를 갖도록 단언됨
let cat = {
  name: "야옹이",
  color: "brown",
} as const;

/*
 * 4. Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "유의진",
};

const len: number = post.author!.length;
// 프로퍼티 바로 뒤에 '!'를 붙여서 TypeScript 컴파일러에게 이 값이 null이나 undefined가 아닐 것이라고 단언함
