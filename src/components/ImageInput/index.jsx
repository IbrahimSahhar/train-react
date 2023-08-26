import styled from "@emotion/styled";
// import axios from "axios";
import React, { useState } from "react";
const StyledWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  & input {
    width: 100%;
    height: 100%;
    position: "absolute";
    opacity: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  & img {
    width: 100%;
    height: 100%;
    position: "absolute";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  & label {
    width: 100%;
    height: 100%;
    position: "absolute";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    font-size: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 2px orange;
  }
`;

const ImageInput = ({ file, setFile }) => {
  const [filePath, setFilePath] = useState(file || null);
  const [isLoading, setIsLoading] = useState(false);

  const uploadFile = async (e) => {
    const file = e.target.files[0];
    const formDate = new FormData();
    formDate.append("image", file);
    try {
      setIsLoading(true);
      //   const res = await axios.post("url", formDate, {});
      const res =
        "https://alamphoto.com/wp-content/uploads/2017/07/%D8%B1%D9%85%D8%B2%D9%8A%D8%A9-%D8%B5%D9%88%D8%B1-%D8%A3%D8%B7%D9%81%D8%A7%D9%84-388x276.jpg";
      setFilePath(res);
      setFile(res);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <StyledWrapper>
      {isLoading ? <div>loading...</div> : <img src={filePath} alt="image2" />}
      <input id="file" type="file" onChange={uploadFile} />
      {!filePath ? <label htmlFor="file">+</label> : ""}
    </StyledWrapper>
  );
};

export default ImageInput;
