import axios from 'axios';

export const axiosCall = async ({
  path, payload, method,
}) => {
  const app = process.env.APP_URL;
  const url = `${app}${path}`;
  const result = await axios[method](url, payload);

  const data = result && result.data;
  return data;
};

export const saveToLocalStorage = (user) => {
  if (user) {
    const { token } = user;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
