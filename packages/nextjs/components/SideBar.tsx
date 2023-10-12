"use client";

// Desc: Sidebar component
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import NewChatBtn from "./NewChatBtn";
import { collection, orderBy, query } from "firebase/firestore";
import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";

function SideBar() {
  const { data: session } = useSession();
  const isID = session && session.user && session.user.email ? session.user.email : undefined;
  const isAvatar = session && session.user && session.user.image ? session.user.image : undefined;

  let queryChats = null;

  if (isID !== undefined) {
    queryChats = query(collection(db, "users", isID, "chats"), orderBy("createdAt", "asc"));
  }

  const [chats] = useCollection(queryChats);

  console.log(chats);
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/*New Chat btn*/}
          <NewChatBtn />

          <div>{/* Model Selection */}</div>

          {/* Map throught ChatRows  */}
          {chats?.docs.map(chat => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>

      {session && (
        <img
          onClick={() => signOut()}
          src={isAvatar}
          alt="profile pic"
          className="rounded-full h-12 w-12 cursor-pointer mb-2 mx-auto hover:opacity-50"
        />
      )}
    </div>
  );
}

export default SideBar;
