// Promise : 내용이 실행되었지만 결과를 아직 반환하지 않은 객체
// Then을 붙이면 결과를 반환함

setTimeout(callback, 3000);

const promise = setTimeoutPromise(3000);

console.log("딴짓");
console.log("딴짓");
console.log("딴짓");
console.log("딴짓");
console.log("딴짓");

promise.then(() => {
  console.log("지금 ㄱ");
}); //필요할 때 사용
