import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.module.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (searchImg) => {
    console.log("Searching ...", searchImg);
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${searchImg}&client_id=LR1QbJLuDubiauHG4EJpH1Er6NSmPFMisyOCH_plkf0`
    );
    const data = await response.json();
    console.log(data.results);
    setImages(data.results);
    //LR1QbJLuDubiauHG4EJpH1Er6NSmPFMisyOCH_plkf0  Access Key
  };
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery images={images} />
    </>
  );
}

export default App;
