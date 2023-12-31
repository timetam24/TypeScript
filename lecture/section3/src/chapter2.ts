/*
 * unknown 타입 ------------------------------------------------------------
 */
function unknownExam() {
  // 업캐스팅
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  // 다운캐스팅
  let unknownVar: unknown;
  // let num:number = unknownVar; → 에러
  // let str:string = unknownVar; → 에러
  // let bool:boolean = unknownVar; → 에러
}

/*
 * never 타입 ------------------------------------------------------------
 */
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // 업캐스팅
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 다운캐스팅
  // let never1: never = 1; → 에러
  // let never2: never = "string"; → 에러
  // let never3: never = false; → 에러
}

/*
 * void 타입 ------------------------------------------------------------
 */
function voidExam() {
  function voidFunc(): void {
    console.log("void");
  }

  // 업캐스팅
  let voidVar: void = undefined;
}

/*
 * any 타입 ------------------------------------------------------------
 */
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  // 다운캐스팅 가능
  anyVar = unknownVar;
  undefinedVar = anyVar;
  // any 타입은 타입계층도를 다 무시하는 치트키 타입!

  // 하지만 never 타입의 변수는 any 타입이라도 다운캐스팅 불가
  // neverVar = anyVar; → 에러
}
