// var는 힘수 스코프, let/const는 블록 스코프를 존중

if (true) {
  var x = 3;
}
console.log(x);

function xx() {
  var x = 5;
}
console.log(x); // error

if (true) {
  const y = 3;
}
console.log(y); //error

// const는 처음 이후에 값 변경이 힘듬, 값 변경시 에러
// let은 변경 가능
