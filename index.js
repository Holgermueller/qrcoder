let qrcode = new QRCode("qrcode");

const makeCode = () => {
  const text = document.getElementById("text").value;

  if (!text) {
    alert("Input a text");
    text.focus();
    return;
  }

  qrcode.makeCode(text.value);
};

$("#text")
  .on("blur", function () {
    makeCode();
  })
  .on("keydown", function (e) {
    if (e.keyCode == 13) {
      makeCode();
    }
  });
