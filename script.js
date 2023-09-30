const input_pass = document.getElementById("input1");
const input_car = document.getElementById("input2");
const encryptButton = document.getElementById("encrypt-btn");
const decryptButton = document.getElementById("decrypt-btn");
const encryptedDiv = document.getElementById("encrypted-div");
const decryptedDiv = document.getElementById("decrypted-div");

encryptButton.addEventListener("click", () => {
  const password = input_pass.value;
  const characters = input_car.value;
  const encryptedPassword = encryptPassword(password, characters);
  encryptedDiv.innerText = encryptedPassword;
});

decryptButton.addEventListener("click", () => {
    const password = input_pass.value;
    const characters = input_car.value;
    const decryptedPassword = decryptPassword(encryptPassword(password, characters), characters);
    decryptedDiv.innerText = decryptedPassword;
  });

function encryptPassword(password, characters) {
  let encryptedPassword = "";
  for (i in password) {
    encryptedPassword += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return encryptedPassword;
}

function decryptPassword() {
  return Password;
}