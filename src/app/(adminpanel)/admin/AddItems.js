"use client"
import axios from 'axios';
import React, { useState } from 'react'
import { BsUpload } from 'react-icons/bs';
const AddItems = () => {
     
 const [file, setFile] = useState();
 const [form, setForm] = useState({
   title: "",
   description: "",
   chalisa: "",
 });

const handleChange = (e) => {
  const { name, value } = e.target;
  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};


 const handleChangeImg = (e) => {
   const target = e.target;
   const item = target.files[0];
   setFile(item);
 };

 const upload = async () => {
   try {
     const data = new FormData();
     data.append("file", file);
     data.append("upload_preset", "restaurant");
     data.append("cloud_name", "drl9gdm1l");

     const res = await fetch(
       "https://api.cloudinary.com/v1_1/drl9gdm1l/image/upload",
       {
         method: "POST",
         body: data,
       }
     );

     const resData = await res.json();



     return resData.url;
   } catch (err) {
  
   }
 };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const url = await upload();
   

        const res = await axios.post(`/api/addchalisa`, {
          image: url,
          ...form,
        });

        const data = await res.data();
   
        if(data.ok){
          
        }else{

        }
      } catch (err) {

      }
    };
  return (
    <div className="max-w-md mx-auto">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-gray-700 text-sm font-bold mb-2 cursor-pointer"
          >
            Upload Image
          </label>
          <input
            id="image"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleChangeImg}
          />
          <label htmlFor="image" className="cursor-pointer">
            <BsUpload className="w-6 h-6 text-blue-500" />
          </label>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Enter title"
            onChange={handleChange}
            value={form.title}
            name="title"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Enter description"
            value={form.description}
            onChange={handleChange}
            name="description"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="chalisa"
          >
            Chalisa
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="chalisa"
            value={form.chalisa}
            placeholder="Enter Chalisa"
            onChange={handleChange}
            name="chalisa"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Chalisa
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddItems
