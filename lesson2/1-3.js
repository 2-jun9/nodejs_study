function oneMore() {
  console.log("one more");
}

function run() {
  console.log("run run");
  setTimeout(() => {
    console.log("wow");
  }, 0);
  new Promise((resolve) => {
    resolve("hi");
  }).then(console.log);
  //  태스크 큐에서 타이머 등의 순서를 먼저 가져감
  oneMore();
}

setTimeout(run, 5000);
// 호출 스택, 백그라운드, 태스크 큐, 메모리, 콘솔창의 동작 이해 => 이벤트 루프
