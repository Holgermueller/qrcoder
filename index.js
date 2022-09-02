const error = document.getElementById("error");

const makeCode = () => {
  const text = document.getElementById("text").value;
  const size = document.getElementById("size").value;
  resetQRDIV();

  if (text === "") {
    showError();
  } else {
    new QRCode(document.getElementById("qrcode"), {
      text: text,
      width: size,
      height: size,
    });

    const successMessage = document.getElementById("successMessage");
    successMessage.innerHTML = "Code Generated";

    generateButton();

    hideError();
    resetForm();
  }
};

const resetQRDIV = () => {
  const qrcode = document.getElementById("qrcode");

  qrcode.innerHTML = "";
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

const generateButton = () => {
  const node = document.createElement("button");
  const text = document.createTextNode("Copy to Clipboard");
  node.appendChild(text);
  node.classList.add("copy-button");

  document.getElementById("btnDiv").appendChild(node);
};
