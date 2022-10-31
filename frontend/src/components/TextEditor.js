import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = () => {
  const [value, setValue] = useState("");
  return (
    <div className="" style={{ backgroundColor: "#1B2124" }}>
      <div className="mx-auto bg-gray-200 w-96 h-96 py-9">
        <ReactQuill
          className="w-full h-full"
          theme="snow"
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
  );
};

export default TextEditor;
