// modules
import { SHA256 } from 'crypto-js';

export const hashString = (value) => {
  const hashedString = SHA256(value).toString();
  return hashedString;
};

export const compareHash = (value, valueToCompare) => {
  const hashed = hashString(value);


  return hashed === valueToCompare;
};
