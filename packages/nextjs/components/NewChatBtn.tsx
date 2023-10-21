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
    <button
      onClick={createNewChat}
      className="w-full hover:animate-pulse drop-shadow-md grid justify-items-center border-gray-700 bg-gray-100 px-4 border rounded-xl chatRow"
    >
      <p>
        <PlusCircleIcon className="inline h-4 w-4" />
        <span> New Chat</span>
      </p>
    </button>
  );
}

export default NewChatBtn;
