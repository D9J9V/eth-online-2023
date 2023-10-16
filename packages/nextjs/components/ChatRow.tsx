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

  const userEmail = session?.user?.email;
  const [messages] = useCollection(userEmail ? collection(db, "users", userEmail, "chats", id, "messages") : null);

  useEffect(() => {
    if (!pathname) return;

    setActive(pathname.includes(id));
  }, [pathname, id]);

  const removeChat = async () => {
    try {
      if (userEmail) {
        await deleteDoc(doc(db, "users", userEmail, "chats", id));
        router.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const lastMessage = messages?.docs[messages?.docs.length - 1];
  const message = lastMessage?.data().text.substring(0, 14) || "New Chat";

  return (
    <Link href={`/chat/${id}`} className={`chatRow justify-center ${active && "bg-grey-700/50"}`}>
      <ChatBubbleLeftIcon className="h-5 w-5" />
      <p className="flex-1 hidden md:inline-flex truncate">{message}</p>
      <TrashIcon className="h-5 w-5 hover:text-red-700" onClick={removeChat} />
    </Link>
  );
}

export default ChatRow;
