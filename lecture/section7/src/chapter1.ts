/*
 * 타입 변수 응용하기
 */

/*
 * 첫 번째 사례
 * 2개의 타입 변수 사용 가능
 */
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

/*
 * 두 번째 사례
 */
function returnFirstValue<T>(data: T[]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// number

let str = returnFirstValue([1, "hello", "mynameis"]);
// number | string

/*
 * 세 번째 사례
 * 반환값의 타입을 배열의 첫번째 요소의 타입이 되도록 하는 방법: 튜플 타입과 나머지 파라미터 이용하기
 */
function returnSecondValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num2 = returnSecondValue([0, 1, 2]);
// number

let str2 = returnSecondValue([1, "hello", "mynameis"]);
// number

/*
 * 네 번째 사례
 * 확장(extends) 이용하여 타입 변수 제한하기
 */

function getLength<T extends { length: number }>(data: T) {
  return data.length;
} // T는 무조건 number 타입의 프로퍼티 length를 가지고 있는 타입이 되어야 한다.

getLength("123");
getLength([1, 2, 3]);
getLength({ length: 1 });
// getLength(undefined); → 에러
// getLength(null); → 에러
