// utils
import { hashString, compareHash } from '../utils/hash.utils';
import { signToken, decodeToken } from '../utils/token.utils';


const returnErrorMessage = (message) => ({ message });

// it'll emulate an account creation
export const createAccount = async (user) => {
  const userRegister = { ...user };

  if (userRegister['password-check']) {
    delete userRegister['password-check'];
  }

  const hashedPassword = hashString(userRegister.password);
  userRegister.password = hashedPassword;

  const token = await signToken(userRegister);

  localStorage.setItem('token', token);

  return token;
};

export const generateSession = ({ email, password }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return returnErrorMessage('User does not exist');
  }

  const decodedToken = decodeToken(token);
  const { email: tokenEmail, password: tokenPassword } = decodedToken;

  if (tokenEmail !== email) {
    return returnErrorMessage('Invalid email');
  }
  console.log({ password, tokenPassword });
  if (!compareHash(password, tokenPassword)) {
    return returnErrorMessage('Invalid password');
  }

  return { session: decodedToken };
};


