import { Route, Routes } from "react-router-dom";
import RoomPage from "./pages/RoomPage";
import ChatPage from "./pages/ChatPage";
import { socket } from "./socket";
import { useState, useEffect } from "react";

function App()
{
    const [isConnected, setIsConnected] = useState(socket.connected);

    useEffect(() => {
        function onConnect() {
          setIsConnected(true);
        }
    
        function onDisconnect() {
          setIsConnected(false);
        }
    
        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
    
        return () => {
          socket.off('connect', onConnect);
          socket.off('disconnect', onDisconnect);
        };
    }, []);

    return (
        <>
            {
                isConnected ? null : <div className="bg-red-500 text-white text-center p-2">Disconnected from server</div>
            }
            <Routes>
                <Route path="/" element={<RoomPage />} />
                <Route path="/chat" element={<ChatPage />} />
            </Routes>
        </>
    );
}

export default App;
