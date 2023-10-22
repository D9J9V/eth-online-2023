"use client";

import { db } from "../firebase";
import ModelSelection from "./2ModelSelection";
import ChatRow from "./ChatRow";
import NewChatBtn from "./NewChatBtn";
import { collection, orderBy, query } from "firebase/firestore";
import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";

// Añade esta línea

function SideBar() {
  const { data: session } = useSession();

  const [chats, loading] = useCollection(
    session
      ? query(collection(db, "users", session.user?.email || "unknown-email", "chats"), orderBy("createdAt", "asc"))
      : null,
  );

  return (
    <div className="p-2 text-gray-100 flex flex-col h-[94vh] bg-neutral shadow-lg">
      <div className="flex-1 basis-[92%]">
        <div>
          {/* New Chat btn */}
          <NewChatBtn />

          <div className="hidden sm:inline">
            <ModelSelection />
          </div>

          <div className="flex flex-col space-y-2 my-2">
            {loading && (
              <div className="animating-pulse text-neutral text-center ">
                <p>Loading Chats ...</p>
              </div>
            )}

            {/* Map through ChatRows */}
            {chats?.docs.map(chat => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex basis-[8%]">
        <button
          className="grow rounded-xl h-12 px-10 cursor-pointer bg-accent text-neutral mx-auto hover:animate-pulse"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default SideBar;
