import React from 'react'
import { setSelectedUser } from '../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'

const OtherUser = ({ user }) => {
  const dispatch = useDispatch();
  const { selectedUser, onlineUsers } = useSelector(store => store.user);

  const isOnline = onlineUsers?.includes(user?._id);

  const selectedUserHandler = () => {
    dispatch(setSelectedUser(user));
  };

  return (
    <div className="text-black overflow-y-auto p-3">
      <div
        onClick={selectedUserHandler}
        className={`${
          selectedUser?._id === user?._id ? 'bg-[#185160] shadow-none translate-y-1 transition' : ''
        } p-2 rounded-xl border-2 border-black bg-[#E0F2FE] font-bold cursor-pointer 
        hover:bg-[#1894b4] hover:shadow-none hover:translate-y-1 transition flex gap-3 items-center text-2xl shadow-[4px_4px_0px_#000]`}
      >
        {/* Avatar */}
        <div className="w-10 h-10 relative rounded-full border-2 border-black flex-shrink-0">
          <img
            className="w-full h-full object-cover"
            src={user?.profilePhoto}
            alt=""
          />

          {/* 🟢 Online indicator */}
          {isOnline && (
            <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-black rounded-full" />
          )}
        </div>

        <h1>{user.username}</h1>
      </div>
    </div>
  );
};

export default OtherUser;
