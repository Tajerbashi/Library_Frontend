import React from "react";
import { TwicImg } from "@twicpics/components/react";
const ImageComponent = (props) => {
  const { src, ratio, placeholder, focus, alt } = props;
  return (
    <div>
      <TwicImg
        src={require(src)}
        ratio={ratio}
        placeholder={placeholder}
        focus={focus}
        alt={alt}
      />
    </div>
  );
};

export default ImageComponent;
