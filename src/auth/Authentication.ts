import jwt from "jsonwebtoken";

async function generateAccessToken(credentials: object, secrect: string) {
  const accessToken = jwt.sign(credentials, secrect, {
    expiresIn: "24h"
  });

  return accessToken;
}

export {
  generateAccessToken,
};