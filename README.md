# AI Voice Assistant


A smart **AI-powered Voice Assistant** that listens, understands, and responds — built using the **MERN stack (MongoDB, Express, React, Node.js)**.  
It uses the **Web Speech API** for voice input/output and integrates with **Cloudinary** for user avatars and **JWT** for secure authentication.

## Instalation

Follow these steps to set up and run the project on your local machine.

### Prerequisites

Make sure you have these installed:
- **Node.js** (v18+ recommended)
- **npm** (comes with Node)
- **MongoDB** (local or cloud)
- **Cloudinary account** (for storing profile images)

 Setup Process

```bash
1. Clone the repository
git clone https://github.com/<your-username>/<your-repo-name>.git
```
```bash
2. Install frontend dependencies
cd client
npm install
```
```bash
3. Install backend dependencies
cd ../server
npm install
```
```bash
4. Set up environment variables in a .env file inside the server/ directory:
PORT=5000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
CLOUDINARY_NAME=<your-cloud-name>
CLOUDINARY_API_KEY=<your-api-key>
CLOUDINARY_API_SECRET=<your-api-secret>
```
```bash
5. Run both servers
# Backend
cd server
npm run dev

# Frontend
cd client
npm run dev
```

Then open your browser at http://localhost:5173
.
## Usage

Once both servers are running:

```bash
Create a new account or log in.

Customize your assistant (name + avatar).

Click the mic button to start speaking.

The assistant listens, understands, and replies using voice + text.
```


## Technologies Used

* [React](https://reactjs.org/) - Frontend library for building UI  
* [Node.js](https://nodejs.org/) - JavaScript runtime for backend logic  
* [Express.js](https://expressjs.com/) - Backend framework for creating REST APIs  
* [MongoDB](https://www.mongodb.com/) - Database for storing user and chat data  
* [Cloudinary](https://cloudinary.com/) - For secure and fast avatar image uploads  
* [JSON Web Token (JWT)](https://jwt.io/) - Authentication mechanism for user sessions  
* [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) - For speech recognition and synthesis 
