// 클래스 - 프로토타입 문법을 깔끔하게 작성할 수 있는 class 문법 도입
class Human {
  constructor(type = "human") {
    this.type = type;
  }
  static isHuman(human) {
    return human instanceof Human;
  }

  breathe() {
    alert("h-a-a-a-m");
  }
}

class Zero extends Human {
  constructor(type, firstName, lastName) {
    super(type);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayName() {
    super.breathe(); //부모의 breathe 실행
    alert(`${this.firstName} ${this.lastName}`);
  }
}
// extends로 클래스 자동 상속
