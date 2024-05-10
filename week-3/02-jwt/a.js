/*
const jwt = require("jsonwebtoken");

const generateJWT = (payload, secret, expiresIn) => {
  return jwt.sign(payload, secret, { expiresIn });
};

const payload = { userId: 123 };
const secret = "mySecretKey";
const expiresIn = "1h";

const token = generateJWT(payload, secret, expiresIn);
console.log(token);
*/
try {
  function getLength(name) {
    return name.length;
  }
} catch (e) {
  console.error("u fcked up");
}

const ans = getLength(0);
console.log(ans);
