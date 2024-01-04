/*
 * 접근 제어자
 * access modifier
 * → public: 모든 범위에서 접근 가능
 * → private: 클래스 내부에서만 접근 가능
 * → protected: 클래스 내부 또는 파생 클래스 내부에서만 접근 가능
 */

class Employee {
  // 필드
  // name: string,
  // age: number,
  // position: string, → 생략 해야 함 (생성자에 접근 제어자를 설정했기 때문에 자동으로 필드가 선언됨)

  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {
    // this.name = name;
    // this.age = age;
    // this.position = position; → 생략 가능 (접근제어자가 설정된 매개변수들은 this.필드 = 매개변수가 자동 수행됨)
  }

  // 메서드
  work() {
    console.log(`${this.name}은 근무중`); // 클래스 내부에서 접근 가능
  }
}

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

  func() {
    // this.name → 에러 (파생된 클래스 내부에서 접근 불가)
    this.age; // → 파생된 클래스 내부에서 접근 가능
  }
}

const employee = new Employee("유의진", 25, "developer");
// employee.name = "아무개"; → 에러 (클래스 외부에서 접근 불가)
// employee.age = 28; → 에러 (클래스 외부에서 접근 불가)
employee.position = "designer";
