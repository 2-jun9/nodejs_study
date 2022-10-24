const dotenv = require("dotenv");

const express = require("express");
const path = require("path");
const morgan = require("morgan");
const session = require("express-session");
const multer = require("multer"); //업로드 관련
const cookieParser = require("cookie-parser");

dotenv.config(); // 설정값을 사용하는 패키지보다 위에 위치해야함
const app = express();

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev")); // 요청과 응답을 기록해주는 라우터
// app.use("요청경로", express.static(path.join(__dirname, "실제 경로")));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
    },
  })
);
app.use("/", (req, res, next) => {
  if (req.session.id) {
    express.static(path.join(__dirname, "public"))(req, res, next); // 미들웨어 확장법
  } else {
    next();
  }
}); // next를 호출하지 않음
app.use("/user", userRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.data;
  res.sendFile(path.join(__dirname));
});

// app.use(
//   (req, res, next) => {
//     req.cookies;
//     res.cookie("name", encodeURIComponent(name), {
//       expires: new Date(),
//       httpOnly: true,
//       path: "/",
//     });
//     console.log("1 모든 요청에 실행하려구요");
//     next();
//   },
//   (req, res, next) => {
//     try {
//       console.log("error");
//     } catch (error) {
//       next(error); //next에 인수가 있으면 에러처리 미들웨어로 넘어감
//     }
//   }
// ); // 미들웨어 : 공통부분을 묶어주는 역할, 미들웨어를 use라는 라우터에 장착함, 여러개 장착가능

app.get(
  "/",
  (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
    if (true) {
      next("route"); // 다음 라우터가 실행됨
    } else {
      next();
    }
    // res.send("안녕하세요.");
    // writeHead + end
    // res.json({ hello: "zerocho" });
    // return이 아니므로 함수가 종료되지 않음
    // res.render()
  },
  (req, res) => {
    console.log("works?");
  }
);
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
