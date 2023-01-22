// import axios from 'axios';

const URL = 'http://127.0.0.1:3000';

export const fetchUserData = async () => {
  const res = await fetch(`${URL}/api/users`)
    .then((response) => response.json());
  return res;
};

// export const postSignupData = async (user) => {
//   const res = await axios.post(`${URL}/users`, {
//     user: {
//       name: user.name,
//       email: user.email,
//       password: user.password,
//       confirm_password: user.confirm_password,
//     },
//   });
//   return res.data;
// };

// export const postSigninData = async (user) => {
//   const res = await axios.post(`${URL}/api/auth`, {
//     user: {
//       email: user.email,
//       password: user.password,
//     },
//   });
//   return res;
// };

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/FN12ot9XO2ctzueymCoY/books';
export const fetchBook = async () => {
  const res = await fetch(url);
  return res.json();
};
export const postBook = async (id, title, author, category) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: id,
      title,
      author,
      category,
    }),
  });
  return res.text();
};

export const deleteBook = async (id) => {
  const res = await fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  return res.text();
};
