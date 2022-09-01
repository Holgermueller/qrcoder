let qrcode = new QRCode("qrcode");

const makeCode = () => {
  qrcode.clear();

  const text = document.getElementById("text").value;

  new QRCode(document.getElementById("qrcode"), {
    text: text,
    width: "100",
    height: "100",
  });

  resetForm();
};

const resetForm = () => {
  document.getElementById("text").value = "";
};
