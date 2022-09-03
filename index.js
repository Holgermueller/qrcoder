const qrcode = document.getElementById("qrcode");
const error = document.getElementById("error");

const makeCode = () => {
  const text = document.getElementById("text").value;
  const size = document.getElementById("size").value;
  resetQRDIV();

  if (text === "") {
    showError();
  } else {
    showProcessing();

    setTimeout(() => {
      hideProcessing();
      const successMessage = document.getElementById("successMessage");
      successMessage.innerHTML = "Code Generated";

      generateCode(text, size);
      hideError();
      resetForm();

      setTimeout(() => {
        const saveUrl = qrcode.querySelector("img").src;
        generateButton(saveUrl);
      }, 50);
    }, 1000);
  }
};

const generateCode = (text, size) => {
  new QRCode(document.getElementById("qrcode"), {
    text: text,
    width: size,
    height: size,
  });
};

const resetQRDIV = () => {
  const node = document.getElementById("btnDiv");

  qrcode.innerHTML = "";
  node.innerHTML = "";
};

const showProcessing = () => {
  const proc = document.getElementById("processing");
  proc.style.display = "block";
};

const hideProcessing = () => {
  const proc = document.getElementById("processing");
  proc.style.display = "none";
};

const resetForm = () => {
  document.getElementById("text").value = "";
  document.getElementById("size").selectedIndex = 0;
};

const showError = () => {
  error.style.display = "block";
};

const hideError = () => {
  error.style.display = "none";
};

const generateButton = (saveUrl) => {
  const node = document.createElement("a");
  const text = document.createTextNode("Copy to Clipboard");
  node.appendChild(text);
  node.classList.add("copy-button");
  node.id = "copyCode";
  node.href = saveUrl;
  node.download = "qrcode";

  document.getElementById("btnDiv").appendChild(node);
  console.log(node);
};

hideProcessing();
