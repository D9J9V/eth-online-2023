"use client";

import Message from "./Message";
import { db } from "@/firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { ArrowDownCircleIcon } from "@heroicons/react/20/solid";

type Props = {
  chatId: string;
};

function Chat({ chatId }: Props) {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;

  const [messages] = useCollection(
    userEmail
      ? query(collection(db, "users", userEmail, "chats", chatId, "messages"), orderBy("createdAt", "asc"))
      : null,
  );

  return (
    <div className="bg-primary-content flex-1 overflow-y-auto overflow-x-hidden">
      {messages?.empty && (
        <>
          <p className="mt-10 text-center text-white">Type a prompt to get started!</p>
          <ArrowDownCircleIcon className="w-10 h-10 mx-auto mt-10 animate-bounce text-white" />
        </>
      )}

      {messages?.docs.map(message => (
        <Message key={message.id} message={message.data()} />
      ))}
    </div>
  );
}

export default Chat;
