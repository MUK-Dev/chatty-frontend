import { motion } from "framer-motion";
import moment from "moment";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface ChatMsgProps {
  message: string;
  avatar: string;
  timestamp: Date;
}

function ChatMsg({ avatar, message, timestamp }: ChatMsgProps) {
  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ type: "keyframes" }}
      className="flex justify-start"
    >
      <Avatar>
        <AvatarImage src={avatar} />
        <AvatarFallback>...</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-start flex-1 ml-2 pt-2">
        <p className="text-sm">{message}</p>
        <p className="text-xs text-muted-foreground">
          {moment(timestamp).format("hh:mm A")}
        </p>
      </div>
    </motion.div>
  );
}

export default ChatMsg;
