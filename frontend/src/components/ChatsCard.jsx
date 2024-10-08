/* eslint-disable react/prop-types */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useMessagesStore from "../zustand/useConversation.js";
import { dateFormat } from "../lib/utils.js";
import { useSocketContext } from "../context/SocketContex.jsx";

const ChatsCard = ({ allUsers }) => {
  const { user, lastMessage } = allUsers;
  const { onlineUsers } = useSocketContext();
  const { selectedChats, setSelectedChats } = useMessagesStore();
  let lastDate = dateFormat(lastMessage?.createdAt); // THIS CUSTOME FUNCTION IS DATA MONGODB DATE FORMAT CONVERTER
  let isSelected = selectedChats?._id === user?._id;
  const isOnline = onlineUsers.includes(user?._id);

  return (
    <div
      className={`w-full h-16 flex hover:bg-gray-100 hover:cursor-pointer duration-100 items-center px-2 ${
        isSelected ? "bg-gray-200" : ""
      } `}
      onClick={() => setSelectedChats(user)}
    >
      <div>
        <div
          className={` ${
            isOnline ? "w-2 h-2 bg-green-400 rounded-full z-10 shadow-lg " : ""
          }   `}
        ></div>
        <Avatar className="h-12 w-12">
          <AvatarImage src={user?.image} className="object-cover"></AvatarImage>
          <AvatarFallback>
            {user?.fullName.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>

      <div className="w-full ml-3 flex flex-col ">
        <div className="w-full flex">
          <h2 className="font-inter font-bold">{user?.fullName}</h2>
          <span className="text-gray-600 ml-auto text-[12px] font-roboto ">
            {lastDate}
          </span>
        </div>

        <p className="text-[14px] font-roboto text-gray-900">
          {lastMessage == null ? "Start new chat." : `${lastMessage.message}`}
        </p>
      </div>
    </div>
  );
};

export default ChatsCard;
