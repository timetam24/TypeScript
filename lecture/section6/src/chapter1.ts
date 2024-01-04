/*
 * 타입스크립트의 클래스
 */

const employee = {
  name: "유의진",
  age: 25,
  position: "developer",
  work() {
    console.log("근무");
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("근무");
  }
}

const employeeB = new Employee("아무개", 28, "개발자");
console.log(employeeB);

// 타입스크립트의 클래스는 타입으로도 사용 가능하다.
const employeeC: Employee = {
  name: "홍길동",
  age: 28,
  position: "개발자",
  work() {},
};

// 타입스크립트의 클래스 상속
class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}
