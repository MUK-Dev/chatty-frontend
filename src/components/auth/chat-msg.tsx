import { motion } from "framer-motion";
import moment from "moment";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface ChatMsgProps {
  message: string;
  avatar: string;
  timestamp: Date;
  sender: string;
}

function ChatMsg({ avatar, message, timestamp, sender }: ChatMsgProps) {
  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ type: "keyframes" }}
      className="flex justify-start pt-3"
    >
      <Avatar>
        <AvatarImage src={avatar} />
        <AvatarFallback>...</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-start flex-1 ml-2">
        <p className="font-bold">
          {sender}{" "}
          <span className="text-xs font-light">
            {" "}
            {moment(timestamp).format("hh:mm A")}
          </span>
        </p>
        <p className="text-sm">{message}</p>
      </div>
    </motion.div>
  );
}

export default ChatMsg;
