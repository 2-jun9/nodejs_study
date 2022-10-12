// worker_threads 노드에서 멀티 스레드 방식으로 작업할 수는 있게 지원해줌
const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");

if (isMainThread) {
  // 메인스레드
  const threads = new Set();
  threads.add(
    new Worker(__filename, {
      workerData: { start: 1 },
    })
  );
  threads.add(
    new Worker(__filename, {
      workerData: { start: 2 },
    })
  );
  for (let worker of threads) {
    worker.on("message", (value) => console.log("워커로부터", value));
    worker.on("exit", () => {
      threads.delete(worker);
      if (threads.size === 0) {
        console.log("워커 끝~");
      }
    });
  }
} else {
  // 워커스레드
  const data = workerData;
  parentPort.postMessage(data.start + 100);
}
// 메인스레드에서 일을 분배해주고 워커스레드에서 작업이 끝나면 메인에서 병합해서 출력
