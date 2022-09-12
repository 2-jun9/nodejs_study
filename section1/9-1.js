// 프론트엔드에서 GET 요청 보내기
// axios.get 함수의 인수로 요청을 보낼 주소를 넣으면 됨

axios
  .get("https://www.zerocho.com/api/get")
  .then((result) => {
    console.log(result);
    console.log(result.data);
  })
  .catch((error) => {
    console.log(error);
  });

// 프로미스 기반 코드라 async/await 사용가능
