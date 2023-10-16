import { useRouter } from "next/navigation";
import { db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { PlusCircleIcon } from "@heroicons/react/20/solid";

function NewChatBtn() {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
    if (!session || !session.user || !session.user.email) {
      // Handle the case where session or user data is missing.
      return;
    }

    const userEmail = session.user.email;

    const doc = await addDoc(collection(db, "users", userEmail, "chats"), {
      userID: userEmail,
      createdAt: serverTimestamp(),
    });

    router.push(`/chat/${doc.id}`);
  };

  return (
    <div onClick={createNewChat} className="border-gray-700 border chatRow">
      <p>New Chat</p>
      <PlusCircleIcon className="h-4 w-4" />
    </div>
  );
}

export default NewChatBtn;
