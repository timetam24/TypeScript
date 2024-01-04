/*
 * 사용자 정의 타입 가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// in 연산자로 타입 좁히기 => Not Good
// 만약 Dog 타입의 프로퍼티 이름이 중간에 변경된다면 타입가드가 동작하지 않을 수 있음(ex. isBark -> isBarked)
// 함수를 이용해 커스텀 타입 가드를 만들어 타입 좁히기 => Good

// Not Good 예시
// function warning(animal: Animal) {
//   if ("isBark" in animal) {
//     // 강아지
//   } else if ("isScratch" in animal) {
//     // 고양이
//   }
// }

// Good 예시
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    // 강아지
  } else if (isCat(animal)) {
    // 고양이
  }
}
