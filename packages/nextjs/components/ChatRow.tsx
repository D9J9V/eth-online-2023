import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { db } from "@/firebase";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/20/solid";

type Props = {
  id: string;
};

function ChatRow({ id }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState(false);
  const isID = session && session.user && session.user.email ? session.user.email : undefined;

  let queryChats = null;
  if (isID !== undefined) {
    queryChats = collection(db, "users", isID, "chats", id, "messages");
  }

  const [messages] = useCollection(queryChats);

  useEffect(() => {
    if (!pathname) return;

    setActive(pathname.includes(id));
  }, [pathname]);

  const removeChat = async () => {
    if (isID !== undefined) {
      await deleteDoc(doc(db, "users", isID, "chats", id));
      router.replace("/");
    } else {
      alert("Session Error (no email)");
    }
  };

  return (
    <Link href={`/chat/${id}`} className={`chatRow justify-center ${active && "bg-grey-700/50"}`}>
      <ChatBubbleLeftIcon className="h-5 w-5" />
      <p className="flex-1 hidden md:inline-flex truncate">
        {messages?.docs[messages?.docs.length - 1]?.data().text || "New Chat"}
      </p>
      <TrashIcon className="h-5 w-5 text-gray-700 hover:text-red-700" onClick={removeChat} />
    </Link>
  );
}

export default ChatRow;
