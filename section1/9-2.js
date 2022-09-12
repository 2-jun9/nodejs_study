// POST 요청을 하는 코드, 로그인 처럼 데이터를 담아 서버에 요청

(async () => {
  try {
    const result = await axios.post("https://www.zerocho.com/api/post/json", {
      name: "zerocho",
      birth: 1994,
    });
    console.log(result);
    console.log(result.data);
  } catch (error) {
    console.error(error);
  }
})();
