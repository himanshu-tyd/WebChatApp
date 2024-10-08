import { ScrollArea } from "@/components/ui/scroll-area";
import useGetMessages from "../hooks/useGetMessages.js";
import MessageCard from "../components/MessageCard.jsx";
import { useRef, useEffect } from "react";
import useListeneEvent from "../hooks/useListeneEvent.js";

const Message = () => {
  const lastMessage = useRef();
  useListeneEvent();
  const { messages, loading } = useGetMessages();

  useEffect(() => {
    if (messages && messages.length > 0) {
      const timer = setTimeout(() => {
        lastMessage.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [messages, lastMessage]);

  if (!loading && messages.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen ">
        <h3 className="text-[18px] font-inter" >send a message to start the conversation.</h3>
      </div>
    );
  }

  return (
    <ScrollArea className="flex flex-col h-full sticky top-0 mt-auto  ">
      {messages &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessage}>
            <MessageCard allMessages={message} loading={loading} />
          </div>
        ))}
    </ScrollArea>
  );
};

export default Message;
