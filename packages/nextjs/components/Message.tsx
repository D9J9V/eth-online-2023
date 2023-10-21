import Image from "next/image";
import { DocumentData } from "firebase/firestore";

// Añade esta línea

type Props = {
  message: DocumentData;
};

function Message({ message }: Props) {
  const isChatGPT = message.user.name === "ChatGPT";

  return (
    <div className={`py-5 ${isChatGPT && "bg-[#43454]"}`}>
      <div className="text-white flex space-x-5 px-10 mx-auto">
        <Image src={message.user.avatar} className="w-16 h-16" alt="User Avatar" width={50} height={40} />{" "}
        {/* Modifica esta línea */}
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
