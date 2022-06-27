// ./sms.js
require("dotenv").config(); // 환경변수파일을 불러온다
const accountSid = process.env.TWILIO_SID; // TWILIO에서 받은 SID코드를 입력
const authToken = process.env.TWILIO_AT; // TWILIO에서 받은 AT코드 입력
const client = require("twilio")(accountSid, authToken); // twilio npm모듈에 위 2개의 인자를 입력하고 client생성

// client로 메세지 보내기
client.messages
  .create({
    body: "Test Message Alex", // 해당 client에 보낼 메세지(sms)
    from: process.env.TWILIO_FROM, // 보내는 사람의 번호
    to: process.env.TWILIO_TO, // 받는 사람의 번호
  })
  .then((message) => console.log(message)); // TWILIO 응답 결과
