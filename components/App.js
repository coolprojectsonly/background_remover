import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImage } from "./action";
import Banner from "../components/Banner";

function App() {
  const [file, setFile] = useState();

  const dispatch = useDispatch();

  const { data, error, status } = useSelector((state) => state.post);

  const [imgUrl, setImageUrl] = useState();

  console.log(data);

  const handleClick = () => {
    dispatch(getImage({ file }));

    setImageUrl(URL.createObjectURL(file));
  };

  const getData = () => {
    if (data && data.base64) {
      const url = `data:image/jpeg;base64,${data.base64}`;

      setImageUrl(url);
    }
  };

  if (status === "loading") {
    return (
      <div>
        <h1 style={{ textAlign: "center", color: "indigo" }}>Processing...</h1>
      </div>
    );
  }

  if (status === error) {
    return <div>Something went wrong</div>;
  }
  return (
    <div>
      <Banner></Banner>

      <div className="imageWrapper">
        <div className="inputContainer">
          <h1>Image Background Remover</h1>
          <h3>Simple Easy to use Image Remover</h3>

          <label htmlFor="inputFile" className="lableInput">
            {" "}
            Choose image File
            <input
              className="inputSelector"
              type="file"
              id="inputFile"
              onChange={(e) => setFile(e.target.files[0])}
            ></input>
          </label>

          {Object.keys(data).length > 0 ? (
            ""
          ) : (
            <button className="processButton" onClick={handleClick}>
              Process
            </button>
          )}
          {Object.keys(data).length > 0 && (
            <button className="getButton" onClick={getData}>
              Remove Background
            </button>
          )}
        </div>
        <div className="imageContainer">
          {imgUrl && <img src={imgUrl}></img>}
        </div>
      </div>
    </div>
  );
}

export default App;
