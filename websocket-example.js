import React, { useState, useEffect } from "react";

const WebsocketExample = () => {
    const [messages, setMessages] = useState([]);
    let socket;

    useEffect(() => {
        // Устанавливаем соединение
        socket = new WebSocket("wss://echo.websocket.org");

        socket.onmessage = (event) => {
            setMessages((prevMessages) => [...prevMessages, event.data]);
        };

        return () => {
            socket.close(); // Закрываем соединение при размонтировании
        };
    }, []);

    const sendMessage = () => {
        socket.send("Привет, сервер!");
    };

    return (`
        <div>
            <button onClick={sendMessage}>Отправить сообщение</button>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
        </div>
    `);
};

export default WebsocketExample;
