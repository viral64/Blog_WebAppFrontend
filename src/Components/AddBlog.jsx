import React, { useState, useRef } from "react";

function AddBlog() {
  const [inputValue, setInputValue] = useState("");
  const [tag, setTag] = useState(null);
  const [flag, setFlag] = useState(false);
  const [bold,setBold]=useState(false)
  const [italic,setItalic]=useState(false)
  const [largeText,setLargeText]=useState(false)


  const handleMouseUp = () => {
    console.log(inputValue);
  };

  const renderTag = () => {
    console.log(inputValue)
    if (tag === 'b') {
      return <b>{inputValue}</b>
    }
    if (tag === 'em') {
      return <em>{inputValue}</em>
    }
    if (tag === "h1") {
      return <h1>{inputValue}</h1>
    }
    if (tag === "h2") {
      return <h2>{inputValue}</h2>
    }
    return ""
  };

  const handleFormatting = (format) => {
    setFlag(true);
    if (format === "bold") {
      setTag('b');
    }
    if (format === "italic") {
      setTag('em');
    }
    if (format === "h1") {
      setTag('h1');
    }
    if (format === "h2") {
      setTag('h2');
    }
  };

  return (
    <div>
      <div className="mt-20 flex-col flex ml-44 mr-32 justify-center">
        <div className="content mt-5 flex">
          <div className="text-base">Content</div>
        </div>
        <div className="content mt-5 flex">
          <div className="mr-3 border-black border rounded-full hover:cursor-pointer">
            <svg className="svgIcon-use" width="25" height="25">
              <path d="M20 12h-7V5h-1v7H5v1h7v7h1v-7h7" fill="evenodd"></path>
            </svg>
          </div>
          <div className="text-base">
            <p
              className="bg-white focus:outline-none w-32"
              contentEditable={true}
              onMouseUp={handleMouseUp}
              onInput={(e) => setInputValue(e.target.innerText)}
              suppressContentEditableWarning={true}
            >
              {flag ? renderTag() : ""}
            </p>
          </div>
        </div>

        {/* Formatting buttons */}
        <div className="bg-gray-200 mt-2 ml-4 w-52 border rounded shadow-md p-2 flex">
          <button className="mr-2 font-bold" onClick={() => handleFormatting("bold")}>
            B
          </button>
          <button className="mr-2 italic" onClick={() => handleFormatting("italic")}>
            I
          </button>
          <button className="mr-2" onClick={() => handleFormatting("h1")}>
            H1
          </button>
          <button className="mr-2" onClick={() => handleFormatting("h2")}>
            H2
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddBlog;
