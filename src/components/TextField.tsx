import React, { useState, useEffect, ChangeEventHandler } from "react";
import axios from "axios";

function TextField() {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    // Make an HTTP GET request to fetch the initial text from the backend
    axios
      .get("https://example.com/")
      .then((response) => {
        console.log("Query executed!")
        console.log(response)
        setText(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // The empty dependency array [] ensures this effect runs only once on component mount

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={handleTextChange}
      />
      <p>You entered: {text}</p>
    </div>
  );
}

export default TextField;
