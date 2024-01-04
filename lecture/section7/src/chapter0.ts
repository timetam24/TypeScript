/*
 * 제네릭
 */

// 제네릭 함수: 다양한 타입의 매개변수를 받고 해당 매개변수를 그대로 반환해주는 함수
function func<T>(value: T): T {
  return value;
}

// T에 어떤 타입이 할당될 지는 '함수가 호출'될 때 결정된다.
let num = func(10);
let bool = func(true);
let str = func("string");

// 제네릭 함수를 호출할 때 타입 변수에 할당할 타입을 직접 명시해줄 수 있다.
let arr = func<[number, number, number]>([1, 2, 3]);
// 1. T에 [number, number, number] 튜플 타입이 할당됨
// 2. 매개변수 value와 반환값 타입이 모두 튜플 타입이 됨

// 만약 튜플 타입으로 설정하지 않았다면 T는 number[]타입으로 추론된다.
// 타입스크립트는 타입을 추론할 때 항상 일반적이고 좀 더 범용적인 타입으로 추론하기 때문이다.
