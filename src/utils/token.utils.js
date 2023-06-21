// modules
import { SignJWT, decodeJwt } from 'jose';

const privateKey = import.meta.env.VITE_PRIVATE_KEY;
const alg = import.meta.env.VITE_TOKEN_ALG;
const secret = new TextEncoder().encode(privateKey);

export const signToken = async (data) => {
  const token = await new SignJWT(data)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer('urn:example:issuer')
    .setAudience('urn:example:audience')
    .setExpirationTime('2h')
    .sign(secret);

  return token;
};

export const decodeToken = (token) => {
  const content = decodeJwt(token);

  return content;
};
