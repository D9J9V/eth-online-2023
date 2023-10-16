"use client";

import { FormEvent, useState } from "react";
import ModelSelection from "./ModelSelection";
import { db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import useSWR from "swr";
import { PaperAirplaneIcon } from "@heroicons/react/20/solid";

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  const { data: model } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    // Define user data with optional chaining and safe defaults.
    const user = {
      _id: session?.user?.email || "UnknownEmail",
      name: session?.user?.name || "UnknownName",
      avatar:
        session?.user?.image ||
        `https://ui-avatars.com/api/?name=${session?.user?.name}&background=random&color=fff&rounded=true&size=128`,
    };

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user,
    };

    await addDoc(collection(db, "users", session?.user?.email || "UnknownEmail", "chats", chatId, "messages"), message);

    const notification = toast.loading("ChatGPT is thinking...");

    console.log("Sending data:", {
      prompt: input,
      chatId,
      model,
      session,
    });

    const response = await fetch("/api/askQuestion", {
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
    });

    const responseData = await response.json();
    console.log("API Response:", responseData);

    if (response.ok) {
      toast.success("ChatGPT has responded!", { id: notification });
    } else {
      toast.error("Something went wrong with ChatGPT.");
    }
  };

  return (
    <div className="bg-neutral-content m-2 rounded-lg text-sm">
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
      <div className="md:hidden">
        <ModelSelection />
      </div>
    </div>
  );
}

export default ChatInput;
