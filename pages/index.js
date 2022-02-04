import Head from "next/head";
import Editor from "../components/Editor";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [addedText, setAddedText] = useState("Thank you Precily, change this text");

  const handleCount = (event) => {
    event.preventDefault();
    if (text) {
      setCount(count + 1);
      setAddedText(text);
      setText("");
    }
  };

  return (
    <div className="m-6">
      <Head>
        <title>Precily-Yashodhan</title>
        <meta
          name="description"
          content="Created by Yashodhan, internship program purposes"
        />
      </Head>

      <Editor textInside={addedText} />

      <form onSubmit={handleCount} className="mt-4 flex space-x-2 items-center justify-start">
        <input
          id="usertext"
          type="text"
          placeholder="Enter your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="outline-none p-2 text-black w-1/3 rounded-lg"
        />

        <button className="p-2 text-sm text-bold bg-yellow-100 hover:bg-[#EE4E34] hover:border hover:text-white rounded-lg">
          Add Text
        </button>
        <a href="https://github.com/iYashodhan/precily-app-yxn" className="p-2 text-sm text-bold bg-yellow-100 hover:bg-[#EE4E34] hover:border hover:text-white rounded-lg">
          Check on Github
        </a>
      </form>


      <p className="text-center text-bold counter my-4 text-white text-xl">
        Your changed the text {count} times
      </p>

      <footer className="text-center text-white">@Yashodhan Sharma
      </footer>
    </div>
  );
}
