// import axios from "axios";
import React, { createRef, useState } from "react";
import ImageInput from "../components/ImageInput";

const Tasks = () => {
  const [file, setFile] = useState(null);
  const fileInput = createRef();
  const title = createRef();
  const body = createRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("data");

    const date = {
      title: title.current.value,
      body: body.current.value,
      file,
    };
    console.log(date);

    // if (file) {
    //   try {
    //     axios.post("url", date, {});
    //   } catch (e) {
    //     console.log(e.message);
    //   }
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ImageInput file={file} setFile={setFile} />

      <label>
        Upload file:
        <input
          type="file"
          ref={fileInput}
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
      </label>
      <input ref={title} />
      <input ref={body} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Tasks;
