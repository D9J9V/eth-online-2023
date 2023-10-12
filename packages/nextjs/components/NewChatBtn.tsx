import { useRouter } from "next/navigation";
import { db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { PlusCircleIcon } from "@heroicons/react/20/solid";

function NewChatBtn() {
  const router = useRouter();
  const { data: session } = useSession();

  const isID = session && session.user && session.user.email ? session.user.email : undefined;
  const createNewChat = async () => {
    try {
      if (isID !== undefined) {
        const doc = await addDoc(collection(db, "users", isID, "chats"), {
          userID: isID,
          createdAt: serverTimestamp(),
        });

        router.push(`/chat/${doc.id}`);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div onClick={createNewChat} className="border-gray-700 border chatRow">
      <PlusCircleIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
}

export default NewChatBtn;
