const express = require("express");
const path = require("path");
const app = express();

app.set("port", process.env.PORT || 3000);

app.use(
  (req, res, next) => {
    console.log("1 모든 요청에 실행하려구요");
    next();
  },
  (req, res, next) => {
    console.log("2 모든 요청에 실행하려구요");
    next();
  }
); // 미들웨어 : 공통부분을 묶어주는 역할, 미들웨어를 use라는 라우터에 장착함, 여러개 장착가능

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
  res.send("안녕하세요."); // writeHead + end
  res.json({ hello: "zerocho" });
});
app.post("/", (req, res) => {
  res.send("hello espress");
});

app.get("category/js", (req, res) => {
  res.send("Hello JavaScript");
});

app.get("/about", (req, res) => {
  res.send("hello espress");
});

app.use((req, res, next) => {
  res.status(200).send("404임");
}); // 404 핸들링 미들웨어

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("에러남");
}); // 에러 미들웨어

app.listen(app.get("port"), () => {
  console.log("익스프레스 서버 실행");
});
