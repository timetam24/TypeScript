/*
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number) {
  return a + b;
}

/*
 * 화살표 함수의 타입을 정의하는 방법
 */
const add = (a: number, b: number) => a + b;

/*
 * 함수의 매개변수
 */
function introduce(name = "유의진", age: number, tall?: number) {
  //선택적 매개변수는 필수 매개변수 앞에 위치할 수 없다
  console.log(`name: ${name}`);
  if (typeof tall === "number") {
    console.log(`tall: ${tall + 10}`); // 선택적 매개변수 타입으로 undefined와 유니온된 타입으로 자동 추론되어, 연산 불가할 때 조건문 사용하여 타입 좁히기
  }
}
introduce("유의진", 25, 163);
introduce("유의진", 25);

// rest 파라미터
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}
getSum(1, 2, 3); //6
getSum(1, 2, 3, 4, 5); //15
