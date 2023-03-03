import axios from "axios";

// Why 127.0.0.1? bug in Node.js https://github.com/node-fetch/node-fetch/issues/1624
// https://github.com/node-fetch/node-fetch/issues/1624
// This would be since localhost resolves to ::1 which is the "equivalent" of 127.0.0.1 but in IPv6 instead of IPv4. Since the server seems to be listening only on IPv4 this means that the connection will be refused when trying ::1.
const api = axios.create({
  baseURL: `http://127.0.0.1:8000/api/v1/`,
});

export function getApiRoot() {
  return api;
}
