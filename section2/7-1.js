// 암호화는 멀티 스레드로 동작
// 비밀번호는 해시 기법 : 단방향 암호화
// createHash 사용할 알고리즘을 넣어줌 -> sha512

const crypto = require("crypto");

console.log(
  "base64:",
  crypto.createHash("sha512").update("비밀번호").digest("base64")
);
console.log(
  "hex:",
  crypto.createHash("sha512").update("비밀번호").digest("hex")
);
console.log(
  "base64:",
  crypto.createHash("sha512").update("다른 비밀번호").digest("base64")
);
