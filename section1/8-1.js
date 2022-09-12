// Async/await : await이 then의 역할을 대신함

async function findAndSaveUser(Users) {
  let user = await Users.findOne({});
  user.name = "zero";
  user = await user.save();
  user = await Users.findOne({ gender: "m" });
}

// 변수 = await promise 인 경우 promise가 resolve된 값이 변수에 저장
// 변수 await 값 인 경우 그 값이 변수에 저장
