import { io } from 'socket.io-client';

const URL = 'https://socketio-chat-server-iota.vercel.app/';

export const socket = io(URL);