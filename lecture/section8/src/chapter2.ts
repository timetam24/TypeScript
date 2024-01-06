/*
 * keyof 연산자
 * 객체 타입으로부터 프로퍼티의 모든 key들을 String Literal Union 타입으로 추출하는 연산자
 * 오직 타입에만 적용할 수 있는 연산자
 */

interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
  // keyof 연산자로 변경 전 → key: "name" | "age"
  return person[key];
}

const person = {
  name: "유의진",
  age: 25,
};

getPropertyKey(person, "name"); // 유의진

/*
 * typeof와 keyof 함께 사용하기
 * typeof 연산자는 타입을 정의할 때 사용하면 특정 변수의 타입을 추론하는 기능을 갖고 있다
 */
type Animal = typeof dog;
// 결과
// {name: string, color: string}

function getPropertyKey2(animal: Animal, key: keyof typeof dog) {
  return animal[key];
}

const dog = {
  name: "멈무",
  color: "white",
};

getPropertyKey2(dog, "color");
