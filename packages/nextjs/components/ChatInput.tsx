"use client";

import { FormEvent, useState } from "react";
import { db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { PaperAirplaneIcon } from "@heroicons/react/20/solid";

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  //useSWR to fetch model
  const model = "text-davinci-003";

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    const isID = session && session.user && session.user.email ? session.user.email : undefined;
    const isName = session && session.user && session.user.name ? session.user.name : undefined;
    const isAvatar = session && session.user && session.user.image ? session.user.image : undefined;

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: isID,
        name: isName,
        avatar:
          isAvatar ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}&background=random&color=fff&rounded=true&size=128`,
      },
    };

    if (isID !== undefined) {
      await addDoc(collection(db, "users", isID, "chats", chatId, "messages"), message);
    }

    const notification = toast.loading("ChatGPT is thinking...");

    await fetch("api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      toast.success("ChatGPT has responded!", { id: notification });
    });
  };

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
      <form onSubmit={sendMessage} className="p-5 space-x-5 flex">
        <input
          className="bg-transparent flex-1 focus:outline-none disabled:cursor-not-allowed disabled:text-gray-300"
          disabled={!session}
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          type="text"
          placeholder="Type your message"
        />
        <button
          disabled={!prompt || !session}
          type="submit"
          className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          <PaperAirplaneIcon className="h-5 w-5 -rotate-45" />
        </button>
      </form>
      <div></div>
    </div>
  );
}

export default ChatInput;
