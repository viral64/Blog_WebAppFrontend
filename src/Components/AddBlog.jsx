import React, { useState, useRef } from "react";

function AddBlog() {
  const [toolbarVisible, setToolbarVisible] = useState(false);
  const [toolbarPosition, setToolbarPosition] = useState({ top: 0, left: 0 });
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleMouseUp = () => {
    const selection = window.getSelection();

    const selectedText = selection?.toString();

    if (selectedText) {
      const range = selection.getRangeAt(0).getBoundingClientRect();
      const parentRect = inputRef.current.getBoundingClientRect();

      setToolbarPosition({
        top: range.top - parentRect.top - 40,
        left: range.left - parentRect.left,
      });

      setToolbarVisible(true);
    } else {
      setToolbarVisible(false);
    }
  };

  const handleFormatting = (format) => {
    const selection = window.getSelection();
    const selectedText = selection?.toString();

    if (selectedText && inputRef.current) {
      const start = inputValue.indexOf(selectedText);
      const end = start + selectedText.length;

      let formattedText = inputValue;

      if (format === "bold") {
        formattedText = `${inputValue.slice(
          0,
          start
        )}**${selectedText}**${inputValue.slice(end)}`;
      } else if (format === "italic") {
        formattedText = `${inputValue.slice(
          0,
          start
        )}*${selectedText}*${inputValue.slice(end)}`;
      } else if (format === "h1") {
        formattedText = `${inputValue.slice(
          0,
          start
        )}# ${selectedText}${inputValue.slice(end)}`;
      } else if (format === "h2") {
        formattedText = `${inputValue.slice(
          0,
          start
        )}## ${selectedText}${inputValue.slice(end)}`;
      }

      setInputValue(formattedText);
      setToolbarVisible(false);
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
            <input
              ref={inputRef}
              className="bg-white focus:outline-none"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onMouseUp={handleMouseUp}
            ></input>
          </div>
        </div>
        {toolbarVisible && (
          <div
            className=" bg-gray-200 border rounded shadow-md p-2 flex"
            style={{
              top: toolbarPosition.top,
              left: toolbarPosition.left,
              zIndex: 1000,
            }}
          >
            <button
              className="mr-2 font-bold"
              onClick={() => handleFormatting("bold")}
            >
              B
            </button>
            <button
              className="mr-2 italic"
              onClick={() => handleFormatting("italic")}
            >
              I
            </button>
            <button className="mr-2" onClick={() => handleFormatting("h1")}>
              H1
            </button>
            <button className="mr-2" onClick={() => handleFormatting("h2")}>
              H2
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddBlog;
