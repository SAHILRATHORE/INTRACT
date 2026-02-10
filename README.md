# 💬 Interact — Real-Time Chat Application

Interact is a modern, full-stack real-time chat application built with **React, Node.js, Socket.io, and MongoDB**.  
It enables users to chat instantly, see online status, share messages in real time, and enjoy a smooth, cartoon-styled UI optimized for both desktop and mobile devices.

---

## 🌟 Features

- 🔐 User Authentication (Register / Login)
- 💬 Real-time Messaging using **Socket.io**
- 🟢 Online / Offline User Status
- 📜 Persistent Chat History
- 👤 Profile Photos
- 🎨 Cartoon-style, mobile-first UI
- 🔄 Auto-reconnect sockets
- 🌍 Fully deployed (Frontend + Backend)

---

## 🛠 Tech Stack

### Frontend
- React (Create React App)
- Redux Toolkit + Redux Persist
- Tailwind CSS
- Axios
- Socket.io Client

### Backend
- Node.js
- Express.js
- Socket.io
- MongoDB + Mongoose
- JWT Authentication
- Cloudinary (Media uploads)

### Deployment
- Frontend: **Vercel**
- Backend: **Render**
- Database: **MongoDB Atlas**
- Media Storage: **Cloudinary**

---

## 📁 Project Structure

Streamify/
├── frontend/
│ ├── src/
│ └── .env
├── backend/
│ ├── src/
│ └── .env


---

## ⚙️ Environment Variables

### Backend (`backend/.env`)

PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:3000


### Frontend (`frontend/.env`)

REACT_APP_API_URL=http://localhost:8080

REACT_APP_SOCKET_URL=http://localhost:8080


⚠️ **Important:**  
Never commit `.env` files to GitHub.

---

## ▶️ Run Locally

### Clone Repository

git clone https://github.com/your-username/interact.git

cd interact


### Start Backend

cd backend
npm install
npm run dev

Backend runs on: http://localhost:8080


### Start Frontend

cd frontend
npm install
npm start

Frontend runs on: http://localhost:3000


---

## 🌍 Deployment (Suggested)

- Frontend: Vercel / Netlify
- Backend: Render / Railway
- Database: MongoDB Atlas

---

## 👨‍💻 Author

**Sahil Rathore**  
Full-Stack Developer

---

## ⭐ Support

If you like this project, don’t forget to ⭐ star the repository!
