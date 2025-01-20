// Create QR Code instance

var qrcode = new QRCode("qrcode", {
  colorDark: "#000",
  colorLight: "#fff",
});

// Function to generate QR Code
const makeCode = () => {
  var Text = document.getElementById("text");

  if (!Text.value) {
    alert("Input a text");
    Text.focus();
    return;
  }

  qrcode.makeCode(Text.value);
};

// Initial QR Code generation
makeCode();

// Trigger QR Code generation on blur or Enter key
$("#text")
  .on("blur", function () {
    makeCode();
  })
  .on("keydown", function (e) {
    if (e.keyCode == 13) {
      makeCode();
    }
  });
