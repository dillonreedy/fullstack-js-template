import io from "socket.io-client";
const SOCKET_URL = "http://localhost:8080";
const socketConfig = {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
};

export const socket = io(SOCKET_URL, socketConfig);