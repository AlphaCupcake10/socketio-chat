import Button from "../components/common/Button"
import Input from "../components/common/Input"
import { useState } from "react";

function ChatPage()
{
    const [messages, setMessages] = useState<string[]>(["Hello","World"]);

    const [input, setInput] = useState("");

    async function sendMessage(e:React.FormEvent<HTMLFormElement>)
    {
        e.preventDefault();

        //API CALL HERE

        setMessages([...messages, input]);
        setInput("");
    }

    return (
        <main className="flex max-w-2xl mx-auto flex-col h-screen p-4 gap-2">
            <div className="card p-4 grow">
                {
                    messages.map((message, index) => (
                        <div key={index} className="">
                            {message}
                        </div>
                    ))
                }
            </div>
            <div className="p-4 card flex flex-col gap-4">
                <form onSubmit={sendMessage} className="flex gap-2 justify-stretch">
                    <Input value={input} onChange={e => setInput(e.target.value)} className="grow"/>
                    <Button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                    </Button>
                </form>
            </div>
        </main>
    )
}

export default ChatPage