'use client';

import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    if (!title.trim()){
      return ("Title is required!")
    } else if (!description.trim()){
      return ("Description is required!")
    } else if (description.trim().length < 20){
      return ("Description must be atleast 20 characters long")
    } else if (!category){
      return("Select a Category")
    } else {
      return null
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validate();

    if (error){
      setError(error);
      return;
    }
    setError("");

    console.log(title, description, category)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-500 to-black">
      <form onSubmit={handleSubmit} className="flex flex-col backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl w-96 space-y-4 text-white">
        <textarea
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
          placeholder="Title"
          rows={1}
          className="w-full px-4 py-3 bg-white/20 rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
        >
        </textarea>
        <textarea
          value={description}
          onChange={(e)=> setDescription(e.target.value)}
          placeholder="Description"
          rows={5}
          className="w-full px-4 py-3 bg-white/20 rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
        >
        </textarea>
        <select
          value={category}
          onChange={(e)=> setCategory(e.target.value)}
          className="w-full px-4 py-3 bg-white/20 rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <option value={''}>Select Category</option>
          <option value={"bug"}>Bug</option>
          <option value={"feature"}>Feature Request</option>
          <option value={"improvement"}>Improvement</option>
          <option value={"other"}>Other</option>
        </select>
        {error && <p>{error}</p>}
        <button
          type="submit"
          className="w-full bg-white text-black py-3 rounded-xl font-medium hover:bg-gray-200 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
