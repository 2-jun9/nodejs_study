const util = require("util");
const crypto = require("crypto");

const dontUseMe = util.deprecate((x, y) => {
  console.log(x + y);
}, "dontUseMe 함수는 deprecated 됐으므로 사용하지 마세요!");

// utils.promisify -> 콜백 패턴을 프로미스 패턴으로 바꿔줌
