import React from "react";
import OtherUser from "./OtherUser";
import useGetOtherUsers from "../hooks/useGetOtherUsers";
import { useSelector } from "react-redux";

const OtherUsers = ({ search }) => {
  useGetOtherUsers();
  const { OtherUsers } = useSelector((store) => store.user);

  if (!OtherUsers) return null;

  // 🔍 filter users
  const filteredUsers = OtherUsers.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="overflow-y-scroll h-full p-2">
      {search && filteredUsers.length === 0 && (
        <p className="text-center mt-6 text-gray-600 font-semibold">
          ❌ No user found
        </p>
      )}

      {filteredUsers.map((user) => (
        <OtherUser key={user._id} user={user} />
      ))}
    </div>
  );
};

export default OtherUsers;
