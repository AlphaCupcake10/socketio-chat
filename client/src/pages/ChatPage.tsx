import Button from "../components/common/Button"
import Input from "../components/common/Input"
import { useState } from "react";

type MessageType = {
    message: string,
    sender: 0 | 1 | 2 // 0 for system, 1 for user, 2 for others
    senderName?: string
}

function ChatPage()
{
    const [messages, setMessages] = useState<MessageType[]>([{message: "Welcome to the chat", sender: 0}, {message: "Hello", sender: 1}, {message: "Hi", sender: 2, senderName: "John"}]);

    const [input, setInput] = useState("");

    async function sendMessage(e:React.FormEvent<HTMLFormElement>)
    {
        e.preventDefault();
        if(input === "") return;
        //API CALL HERE

        pushMessage({message: input, sender: 2});
        setInput("");
    }

    async function pushMessage(message:MessageType) {
        setMessages([...messages, message]);
    }

    return (
        <main className="flex max-w-2xl mx-auto flex-col h-screen p-4 gap-2">
            <div className="card p-4 grow flex flex-col gap-2 overflow-auto">
                {
                    messages.map((message, index) => {
                        if(message.sender === 0)
                        {
                            return <div key={index} className="text-center">{message.message}</div>
                        }
                        if(message.sender === 1)
                        {
                            return <div key={index} className="bg-primary min-w-12 text-center w-fit rounded p-2 self-end">{message.message}</div>
                        }
                        if(message.sender === 2)
                        {
                            return <div key={index}>
                                <div className="text-left text-sm text-gray-500">{message.senderName}</div>
                                <div key={index} className="bg-background2 min-w-12 text-center w-fit rounded p-2">{message.message}</div>
                            </div>
                        }
                        return <></>
                    })
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