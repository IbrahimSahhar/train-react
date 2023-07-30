import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

export const Gifs = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const API_KEY = "Ura1eoVqMbKSqasQhIbVt3YPlwrx9fh5";

  const handelChange = (e) => {
    setValue(e.target.value);
  };

  const handelClick = () => {
    axios
      .get(
        `https://api.giphy.com/v1/stickers/search?api_key=${API_KEY}&q=${value}`
      )
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      });
  };

  return (
    <div>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        onChange={(e) => handelChange(e)}
        value={value}
      />
      <button
        onClick={() => {
          handelClick();
        }}
      >
        click me{" "}
      </button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((gif) => {
          return (
            <div key={gif.id}>
              <img src={gif.images.original.url} alt="gif" width={"100px"} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
