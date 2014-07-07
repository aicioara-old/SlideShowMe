socket = io('http://10.0.0.36:3000');
socket.emit('mynumber', window.location.href);
