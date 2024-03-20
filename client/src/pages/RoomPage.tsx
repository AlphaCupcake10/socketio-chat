import { Link, useNavigate } from "react-router-dom";
import Button from "../components/common/Button"
import Input from "../components/common/Input"
import { useState } from "react";


function RoomPage(props:{username:string,setUsername:React.Dispatch<React.SetStateAction<string>>})
{
    const [roomCode, setRoomCode] = useState("");
    
    const navigate = useNavigate();
    async function joinRoom(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        navigate(`/chat/${roomCode}`);
    }

    return (
        <main className="py-24">
            <form onSubmit={joinRoom} className="max-w-lg p-4 mx-auto card flex flex-col gap-4">
                <Input className="mb-4" value={props.username} onChange={e => props.setUsername(e.target.value)} placeholder="Username" />
                <Input value={roomCode} onChange={e => setRoomCode(e.target.value)} placeholder="Enter room code" />
                <Button>Join Room</Button>
                <Link to={`/chat/${"RANDOMSHIT"}`} className="text-center hover:text-primary duration-100">
                    Create a new room
                </Link>
            </form>
        </main>
    )
}

export default RoomPage