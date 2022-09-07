import React, { useState, useEffect } from "react";
import { images } from "../../Images/Data";
import { useNavigate } from "react-router-dom";

const ExteriorSlide = (props) => {
  let navigate = useNavigate();
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

  useEffect(() => {
    setCurrentImage(parseInt(props.src));
    let slideShow = images.filter((item) => item.type === "exteriors");
    setSlide(slideShow);

    if (!props.src) {
      navigate("/exteriors");
    }
  }, []);

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
            src={require(`../../Images/exteriors/${slide[currentImage].file}`)}
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
