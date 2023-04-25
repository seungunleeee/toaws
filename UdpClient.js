var dgram = require("dgram");
var socket = dgram.createSocket("udp4");

var msg = new Buffer("Hello UDP Receiver");
socket.send(msg, 0, msg.length, 3000, "127.0.0.1", function (err) {
  console.log(err);
  if (err) {
    console.log("UDP message send error", err);
    return;
  }
  console.log("메세지 전송 성공");
  socket.close();
});

socket.on("message", function (msg, rinfo) {
  console.log("응답 : " + msg, " info : " + rinfo);
});

socket.on("listening", function () {
  console.log("listening event");
});
