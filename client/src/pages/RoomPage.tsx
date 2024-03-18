import Button from "../components/common/Button"
import Input from "../components/common/Input"


function RoomPage() {

    async function joinRoom(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        //API CALL HERE
    }

    return (
        <main className="py-24">
            <form onSubmit={joinRoom} className="max-w-lg p-4 mx-auto card flex flex-col gap-4">
                <Input label="Room Code" />
                <Button>Enter Room</Button>
            </form>
        </main>
    )
}

export default RoomPage