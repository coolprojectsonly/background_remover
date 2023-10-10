import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getImage = createAsyncThunk("/post/getimage", async ({ file }) => {
  // Create a FormData object and append the file to it
  const formData = new FormData();
  formData.append("file", file);

  const options = {
    method: "POST",
    url: "https://background-removal13.p.rapidapi.com/api/v1/uploadFile",
    headers: {
      "X-RapidAPI-Key": "721955d12emsh12900079c7be162p1e7203jsnb805721c4d3d",
      "X-RapidAPI-Host": "background-removal13.p.rapidapi.com",
      // Set the Content-Type header to multipart/form-data
      "Content-Type": "multipart/form-data",
    },
    // Pass the FormData object as the data property
    data: formData,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // You should re-throw the error to propagate it
  }
});
