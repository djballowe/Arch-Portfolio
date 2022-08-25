import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";

const getImages = async () => {
  const res = await fetch("http://localhost:8080/api/");
  return res.json();
};

const ExteriorSlide = (props) => {
  const { data, status } = useQuery("images", getImages);
  const [currentImage, setCurrentImage] = useState("");
  const [slide, setSlide] = useState([]);

  const handleClick = (e) => {
    const button = e.target.id;
    if (button === "+") {
      currentImage === slide.length - 1
        ? setCurrentImage(0)
        : setCurrentImage(currentImage + 1);
    } else {
      currentImage === 0
        ? setCurrentImage(slide.length - 1)
        : setCurrentImage(currentImage - 1);
    }
  };

  console.log(currentImage);

  useEffect(() => {
    if (status === "success" && !slide.length) {
      setCurrentImage(parseInt(props.src) - 1);
      let slideShow = data.filter((item) => item.type === "exteriors");
      setSlide(slideShow);
    }
  }, [currentImage, data, props.src, status]);

  if (
    currentImage === "" ||
    currentImage === undefined ||
    currentImage === null
  ) {
    return <p>Loading</p>;
  } else {
    return (
      <div className="overlay">
        <div className="interior-slide-img">
          <img
            src={require(`../../Images/Exteriors/${slide[currentImage].file}`)}
            alt=""
          />
        </div>
        <div className="slide-controls-view">
          <p onClick={handleClick} id="-">
            Prev
          </p>
          <p>/</p>
          <p onClick={handleClick} id="+">
            Next
          </p>
        </div>
      </div>
    );
  }
};

export default ExteriorSlide;