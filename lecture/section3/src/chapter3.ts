/*
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // 업캐스팅
// num2 = num1; 다운캐스팅 → 에러

/*
 * 객체 타입간의 호환성
 */

// 예제 1
// --------------------------------------------------
type Animal = {
  name: string;
  color: string;
}; // 슈퍼 타입

type Dog = {
  name: string;
  color: string;
  breed: string;
}; // 서브 타입

let animal: Animal = {
  name: "청룡",
  color: "blue",
};

let dog: Dog = {
  name: "멈뭉",
  color: "white",
  breed: "시바",
};

animal = dog;
// dog = animal; → 에러

// 예제 2
// --------------------------------------------------
type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook;
// programmingBook = book; → 에러

/*
 * 초과 프로퍼티 검사
 */
// 변수를 객체 리터럴로 초기화 할 때 발동
// 타입에 정의된 프로퍼티 외의 다른 초과된 프로퍼티를 갖는 객체를 변수에 할당할 수 없음

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs" → 에러
};

// 변수를 초기화할 때 객체 리터럴을 사용하지 않는다면, 초과 프로퍼티 발생 x
let book3: Book = programmingBook;
