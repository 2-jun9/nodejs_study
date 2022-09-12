// FormData Ajax 요청으로 보내고 싶은 경우

const formData = new FormData();
formData.append("name", "zeroCho");
// 데이터를 하나씩 추가

formData.has("item");
// 데이터 존재 여부 확인

formData.get("item");
// 데이터 조회

formData.getAll("item");
// 데이터 모두 조회

formData.delete("test");
// 데이터 삭제

formData.set("item", "apple");
// 데이터 수정

// POST 데이터 자리에 formdata 넣으면 됨
