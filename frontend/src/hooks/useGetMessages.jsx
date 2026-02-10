import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMessages } from '../redux/messageSlice'

const useGetMessages = () => {
    const {selectedUser} = useSelector(store => store.user)
    const dispatch = useDispatch();
    // const [messages, setMessages] = useState(null)

    useEffect(()=>{
        const fetchMessages = async () => {
                    if (!selectedUser?._id) {
                        dispatch(setMessages(null))
                        return
                    }
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/message/${selectedUser._id}`);
                console.log('Messages fetched:', res.data);
                dispatch(setMessages(res.data))
                // setMessages(res.data)
            } catch (error) {
                console.log('Fetch error:', error);
                // setMessages(null)
            }
        }
        fetchMessages();
    }, [selectedUser])

}

export default useGetMessages