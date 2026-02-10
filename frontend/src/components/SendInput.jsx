import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from '../redux/messageSlice';
const SendInput = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const {selectedUser} = useSelector(store => store.user)
  const {messages} = useSelector(store => store.message);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/message/send/${selectedUser?._id}`, {message}, {
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true
      });
      const newMessage = res.data.newMessage;
      dispatch(setMessages([...(messages || []), newMessage]));
      setMessage('')
    } catch (error) {
      console.log(error);
    }
    // setMessage('')
  }
  return (
    <form onSubmit={onSubmitHandler}>
    <div className="p-4 border-t-4 border-black bg-[#FFE5EC] flex gap-3">
        <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="Type a message..."
          className="input flex-1 bg-white border-2 text-black border-black rounded-xl"
        />
        <button type='submit' className="btn bg-[#FACC15] border-4 border-black rounded-xl shadow-[3px_3px_0px_#000] hover:translate-y-1 hover:shadow-none transition">
          ➤
        </button>
      </div>
      </form>
  )
}

export default SendInput