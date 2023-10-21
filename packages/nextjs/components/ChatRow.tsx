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
    <Link
      href={`/chat/${id}`}
      className={`rounded-xl p-2 grid justify-items-stretch text-xs justify-start ${!active && "bg-primary"} ${
        active && "bg-secondary"
      }`}
    >
      <div>
        <ChatBubbleLeftIcon className="inline h-5 w-5 justify-self-auto" />
        <TrashIcon
          className="h-5 w-5 inline hover:text-red-700 justify-self-auto hover:animate-pulse"
          onClick={removeChat}
        />
      </div>
      <p className="flex-1 hidden md:inline-flex truncate">{message + "..."}</p>
    </Link>
  );
}

export default ChatRow;
