import React, { useContext, useState } from 'react';
import { userDataContext } from '../context/userContext';
import axios from 'axios';
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function Customize2() {
  const { userData, selectedImage, serverUrl, setUserData } = useContext(userDataContext);
  const [AssistantName, setAssistantName] = useState(userData?.assistantName || "");
  const [loading,setLoading]=useState(null)
  const navigate=useNavigate()
  const [file, setFile] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpdateAssistant = async () => {
    setLoading(true)
    try {
      const formData = new FormData();
      formData.append("assistantName", AssistantName);

      if (file) {
        formData.append("assistantImage", file); 
      } else if (selectedImage) {
        formData.append("imageUrl", selectedImage); 
      }

      const result = await axios.post(
        `${serverUrl}/api/user/update`,
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setLoading(false)
      setUserData(result.data);
      console.log(result.data);
      navigate("/")
    } catch (error) {
      setLoading(false)
      console.error("Update failed:", error.response?.data || error.message);
    }
  };

  return (
    <div className='w-full h-[100vh] bg-gradient-to-t from-black to-[#030353] flex justify-center items-center flex-col p-5 relative'>
      <MdKeyboardBackspace className='absolute text-white top-[30px] left-[30px] w-[25px] h-[25px] cursor-pointer' onClick={()=>navigate("/customize")}/>
      <h1 className='text-white text-3xl text-center p-5'>
        Enter your <span className='text-blue-200'>Assistant name</span>
      </h1>
      <input
        type="text"
        placeholder='eg. shifra'
        className='w-full max-w-lg h-14 outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-5 rounded-full'
        required
        value={AssistantName}
        onChange={(e) => setAssistantName(e.target.value)}
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mt-5"
      />

      {AssistantName && (
        <button
          className='min-w-[300px] h-12 mt-5 bg-white rounded-full text-black font-semibold text-lg cursor-pointer'
          disabled={loading} onClick={handleUpdateAssistant}
        >
          {!loading?"Finally create your Assistant":"Loading..."}
        </button>
      )}
    </div>
  );
}

export default Customize2;
