import { Route, Routes } from "react-router-dom";
import RoomPage from "./pages/RoomPage";
import ChatPage from "./pages/ChatPage";
import { useEffect, useState } from "react";

function App()
{
    const [username, setUsername] = useState("");

    useEffect(() => {
        if (localStorage.getItem("username")) {
            setUsername(localStorage.getItem("username") as string);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("username", username);
    }, [username]);

    return (
        <>
            <Routes>
                <Route path="/*" element={<RoomPage username={username} setUsername={setUsername} />} />
                <Route path="/chat/:id" element={<ChatPage username={username}/>} />
                <Route path="/chat" element={<ChatPage username={username}/>} />
            </Routes>
        </>
    );
}

export default App;
