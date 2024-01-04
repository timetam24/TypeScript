/*
 * 인터페이스 확장하기
 */

interface Animal {
  name: string;
  age: number;
}

// 타입 별칭으로 정의된 객체도 인터페이스 확장 가능
// type Animal {
//   name: string;
//   age: number;
// }

interface Dog extends Animal {
  name: "멈무"; // 타입 재정의 가능 (단, 프로퍼티 타입이 원본 프로퍼티 타입의 서브 타입이 되도록 정의해야 함)
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

const dog: Dog = {
  name: "멈무",
  age: 1,
  isBark: true,
};

// 다중 확장 가능
interface CatChicken extends Cat, Chicken {}

const catchicken: CatChicken = {
  name: "꼬꼬냥",
  age: 3,
  isScratch: true,
  isFly: true,
};
