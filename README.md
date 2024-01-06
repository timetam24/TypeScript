# TypScript 학습

## 1. 타입스크립트 개론

### 점진적 타입 시스템이다

- 타입이 정의된 변수들에 대해서는 타입을 미리 결정하고,  
  타입이 정의되어 있지 않은 변수들에 대해서는 타입스크립트가 초기화된 값을 기준으로 알아서 타입을 추론한다
- 코드 실행 전 검사를 통해 타입 안정성을 확보한다

<br/>

### 컴파일 과정

- 타입스크립트는 AST(추상 문법 트리)와 Type 검사 과정을 거치는데 성공하면 AST가 JavaScript 코드로 변환된다
- 만약 코드에 오류가 있어서 Type 검사를 실패하게 되면 컴파일은 종료된다
- 타입 오류가 없는 타입스크립트 코드는 컴파일 시 Type 검사를 통과하고 타입 관련 문법들은 삭제된 안전한 자바스크립트 코드로 변환된다

<br/>

<img src="https://github.com/timetam24/TIL/assets/135303974/77e7ac54-e40d-48fa-827d-9784c5b646d4">
<p style="text-align: right">자료 출처: winterlood</p>

<br/>

### 컴파일 옵션 설정

- tsconfig.json 자동 생성

  ```
  tsc --init
  ```

- tsconfig.json 커스텀
  ```
  {
   "compilerOptions": {
     "target": "ESNext", //컴파일 결과 생성되는 자바스크립트 코드의 버전을 설정
     "module": "ESNext", //변환되는 자바스크립트 코드의 모듈 시스템을 설정
     "outDir": "dist", //컴파일 결과 생성할 자바스크립트 코드의 위치를 결정
     "strict": true, //타입스크립트 컴파일러의 타입 검사 엄격함 수준
     "moduleDetection": "force" //타입스크립트의 모든 파일은 기본적으로 전역 파일(모듈)로 취급되는데 해당 옵션을 "force"로 설정하면 자동으로 모든 타입스크립트 파일이 로컬 파일(모듈)로 취급
  },
   "include": ["src"] //tsc에게 컴파일 할 타입스크립트 파일의 범위와 위치를 알려줌
  }
  ```

<br/>

## 2. 타입스크립트 기본

- [원시타입과 리터럴타입](https://github.com/timetam24/TypeScript/commit/063e8e1cab49efd260c3baccb78a93fddadbcc59)
- [배열과 튜플](https://github.com/timetam24/TypeScript/commit/c5f23d0372ba21206c53ea1d64ba8b5f56b88e6b)
- [객체](https://github.com/timetam24/TypeScript/commit/13f4e563faec03428de16086c4e7fd0b57cce317)
- [타입 별칭과 인덱스 시그니처](https://github.com/timetam24/TypeScript/commit/475b344e6d2816672b19e98ed444c04261547912)
- [enum 타입](https://github.com/timetam24/TypeScript/commit/42625d29fa627d97a736e125878ef241458e119c)
- [any와 unknown 타입](https://github.com/timetam24/TypeScript/commit/f5a367bcbdfcee93aca81be4caf564d11595401a)
- [void와 never 타입](https://github.com/timetam24/TypeScript/commit/a67f7bce20ae9de0037fa0c998e0f8c9fc9ffbd9)

<br/>

## 3. 타입스크립트 이해하기

### 타입 계층도

 <img src="https://github.com/timetam24/TypeScript/assets/135303974/0659ec6a-b372-4c7f-a3e4-1cc562b48925" />

 <br/>

- [타입 계층도와 함께 기본타입 살펴보기](https://github.com/timetam24/TypeScript/commit/9a4c4d12d7da36c46dc7c5087993eecb104483a8)
- [객체 타입의 호환성](https://github.com/timetam24/TypeScript/commit/3a20eaa53053355499cf437d9dc4ca2d13373472)
- [대수 타입](https://github.com/timetam24/TypeScript/commit/b66196979b4c51f33b933276c0845f7b96499f59)
- [타입 추론](https://github.com/timetam24/TypeScript/commit/fd7c92d015f1e44b480aece4f4e473d60a8e9e1d)
- [타입 단언](https://github.com/timetam24/TypeScript/commit/43457778547fd2498b4ab2ab8a9062720ef17f94)
- [타입 좁히기](https://github.com/timetam24/TypeScript/commit/9b5b5bf59966b7697660c74f8d59b84fc206842a)
- [서로소 유니온 타입](https://github.com/timetam24/TypeScript/commit/a30fab65c89779a267299dac7af0fb9635ad1f7d)

<br/>

## 4. 함수와 타입

- [함수 타입](https://github.com/timetam24/TypeScript/commit/517953f787e576600d5ac05bd87e2b1f7ec56f2f)
- [함수 타입 표현식과 호출 시그니쳐](https://github.com/timetam24/TypeScript/commit/c70217e75d0296189e66f47373d8588e5f25b81b)
- [함수 타입의 호환성](https://github.com/timetam24/TypeScript/commit/b167ec305619251224f8b1762fc3044dd8348234)
- [함수 오버로딩](https://github.com/timetam24/TypeScript/commit/c55dc21806ae83b0dd238cc23db2429f8fe495d1)
- [사용자 정의 타입 가드](https://github.com/timetam24/TypeScript/commit/26708c01d131a0ab5dacbf951d216cc97b65bd2f)

<br/>

## 5. 인터페이스

- [인터페이스](https://github.com/timetam24/TypeScript/commit/acc1b91b31be3f6e9a35bb2208ecfda699fc5982)
- [인터페이스 확장하기](https://github.com/timetam24/TypeScript/commit/a89d892f85ca608c1a19b12eaee93d388464d81b)
- [인터페이스 선언 합치기](https://github.com/timetam24/TypeScript/commit/02adab1807cb5067ce9e7d4b38f141ece1d0875d)

<br/>

## 6. 클래스

- [타입스크립트의 클래스](https://github.com/timetam24/TypeScript/commit/9e66d63fab5537e5eecf71990a9c8d8c5e308d04)
- [접근 제어자](https://github.com/timetam24/TypeScript/commit/af3a9b03375772ca8626854b7fbbbd8d5ee005f9)
- [인터페이스와 클래스](https://github.com/timetam24/TypeScript/commit/decf2c6b396c978b9ed22faf07a59575e6ceb540)

<br/>

## 7. 제네릭

- [제네릭 소개](https://github.com/timetam24/TypeScript/commit/0293fa7ad223e437a9f69484f7e5e2d6209bd283)
- [타입 변수 응용하기](https://github.com/timetam24/TypeScript/commit/e1980d74212baa838b53622d7c1add54f3db325a)
- [map, forEach 메서드 타입 정의하기](https://github.com/timetam24/TypeScript/commit/4b83190288e92121903e7ca6351a01df41e186bf)
- [제네릭 인터페이스, 제네릭 타입 별칭](https://github.com/timetam24/TypeScript/commit/ea2540ba72fdc67d1823ec4ccc90549f47f7a822)
- [제네릭 클래스](https://github.com/timetam24/TypeScript/commit/5513baf5a172d7166855b8ce79ee6b96498ddce8)
- [프로미스와 제네릭](https://github.com/timetam24/TypeScript/commit/051a7b8b299b2937e7a5db092b4ec3b120de498b)

<br/>

## 8. 타입 조작하기

- [Indexed Access 타입](https://github.com/timetam24/TypeScript/commit/9652538dbf1375c5ad9b45e2694dbd297cb5a645)
- [keyof 연산자](https://github.com/timetam24/TypeScript/commit/081089dcb3f7abf7df02bec34d18ef032e1d377e)
- [Mapped 타입](https://github.com/timetam24/TypeScript/commit/6c6b644ae0ee23551c5434782905482096e07d78)
- [Template Literal 타입](https://github.com/timetam24/TypeScript/commit/8f6dff074c6f74a74ac5346634dcbc3d352f28af)

 <br/>

## 9. 조건부 타입

- [조건부 타입](https://github.com/timetam24/TypeScript/commit/1abe56ba33c56835cad25baf3a69c8337037cacb)
- [분산적인 조건부 타입](https://github.com/timetam24/TypeScript/commit/8d2c7d176f132a35c7d0438159d1522c28bd1717)
- [infer - 조건부 타입 내에서 타입 추론하기](https://github.com/timetam24/TypeScript/commit/362966f4983a01160480ff39c896d15836df250e)

 <br/>

<!-- ## 10. 유틸리티 타입 -->
