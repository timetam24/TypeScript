// any
// 특정 변수의 타입을 우리가 확실히 모를 때

let anyVar: any = 10;
anyVar = "hello";
// any 타입은 어떠한 타입 검사도 받지 않기 때문에 아무 타입의 값이나 범용적으로 담아 사용 가능

anyVar.toUpperCase();
anyVar.toFixed();
// 다양한 타입의 메서드도 마음대로 호출해서 사용 가능하지만 런타임 오류 발생

let num: number = 20;
num = anyVar;
// any 타입의 값은 어떤 타입으로 정의된 변수던 문제없이 다 할당 가능

console.log(num); //hello
console.log(anyVar); //hello

// unknown
// any 타입과 비슷하지만 보다 안전한 타입
let unknownVar: unknown;
unknownVar = "";
unknownVar = () => {};
unknownVar = 4;

// unknown 타입의 변수는 위처럼 어떤 타입의 값이든 다 저장 가능하지만 반대로는 안됨
// unknown 타입의 값은 어떤 타입의 변수에도 저장할 수 없음
let num2: number = 99;
// num2 = unknownVar → 오류 발생

// unknown 타입의 값은 어떤 연산에도 참여 불가, 어떤 메서드도 사용 불가
// unknownVar * 2 → 오류 발생

// 조건문을 이용해 이 값이 number 타입의 값임을 보장한다면 연산도 가능
if (typeof unknownVar === "number") {
  num2 = unknownVar;
}

console.log(num2); //4
console.log(unknownVar); //4

// 결론! 특정 변수가 당장 어떤 값을 받게 될 지 모른다면
// any 타입으로 정의하는 것 보단 unknown 타입을 이용하는게 훨씬 안전한 선택이다!
