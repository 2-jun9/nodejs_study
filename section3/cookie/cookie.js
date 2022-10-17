const http = require("http");

http
  .createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, { "Set-Cookie": "mycookie=test" }); //요청 헤더에 입력하는 메서드, Set-Cookie 브라우저에 쿠키를 실행하라는 명령
    res.sendDate("Hello Cookie");
  })
  .listen(8083, () => {
    console.log("8083번 포트에서 서버 대기 중입니다!");
  });
