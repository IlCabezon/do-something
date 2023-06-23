// modules
import { SignJWT, decodeJwt } from 'jose';

const privateKey = import.meta.env.VITE_PRIVATE_KEY;
const alg = import.meta.env.VITE_TOKEN_ALG;
const secret = new TextEncoder().encode(privateKey);
const auxToken = import.meta.env.VITE_AUX_TOKEN;

export const signToken = async (data) => {
  const { origin } = window.location;

  // jwt sign method only works on safe sites or localhost
  // this is an aux solution for when you are working
  // on local net trough local port

  if (!origin.includes('https') && !origin.includes('localhost')) {
    return auxToken;
  }


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
