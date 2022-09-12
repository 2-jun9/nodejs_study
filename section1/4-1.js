function add1(x, y) {
  return x + y;
}

const add2 = (x, y) => {
  return x + y;
};

const add3 = (x, y) => x + y;

const add4 = (x, y) => x + y;

// 2
function not1(x) {
  return !x;
}

const not2 = (x) => !x;

// function은 this 사용 가능, const는 불가능 하지만 e 전달로 해결가능
