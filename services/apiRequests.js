const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:3000/api/',
    headers: {'Content-type': 'application/json'},
  });

export const addUsers = async ({ username, password }) => {
    await instance.post('/handleDatabase', { username, password })
}
export const getUsers = async () => {
    await instance.get('/users')
}