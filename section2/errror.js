// 에러 처리하기, 예외 처리하기

// try catch로 에러를 해결
setInterval(() => {
  console.log("시작");
  try {
    throw new Error("서버를 고장내주마");
  } catch (err) {
    console.error(err);
  }
});

// 노드가 기본적으로 제공하는 메서드들의 콜백 에러들은 노드 프로세스를 멈추지는 않으므로 try catch 안써도 됨
