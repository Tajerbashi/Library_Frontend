import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
const items = [
    {
        id: 1,
        title: "Picture 1",
        src: "./../../assets/1.jpg",
        name: "Piture Name 1",
        description:
          "Objects are not valid as a React child Objects are not valid as a React child Objects are not valid as a React child",
      },
      {
        id: 2,
        title: "Picture 1",
        src: "./../../assets/1.jpg",
        name: "Piture Name 1",
        description:
          "Objects are not valid as a React child Objects are not valid as a React child Objects are not valid as a React child",
      },
      {
        id: 3,
        title: "Picture 1",
        src: "./../../assets/1.jpg",
        name: "Piture Name 1",
        description:
          "Objects are not valid as a React child Objects are not valid as a React child Objects are not valid as a React child",
      },
      {
        id: 4,
        title: "Picture 1",
        src: "./../../assets/1.jpg",
        name: "Piture Name 1",
        description:
          "Objects are not valid as a React child Objects are not valid as a React child Objects are not valid as a React child",
      },
      {
        id: 5,
        title: "Picture 1",
        src: "./../../assets/1.jpg",
        name: "Piture Name 1",
        description:
          "Objects are not valid as a React child Objects are not valid as a React child Objects are not valid as a React child",
      },
      {
        id: 6,
        title: "Picture 1",
        src: "./../../assets/1.jpg",
        name: "Piture Name 1",
        description:
          "Objects are not valid as a React child Objects are not valid as a React child Objects are not valid as a React child",
      },
      {
        id: 7,
        title: "Picture 1",
        src: "./../../assets/1.jpg",
        name: "Piture Name 1",
        description:
          "Objects are not valid as a React child Objects are not valid as a React child Objects are not valid as a React child",
      },
  
];
const SliderComponent = () => {
  console.log("Items ", items);
  const elements = items.map((item, key) => (
    <MDBCarouselItem key={key} itemId={item.id}>
      <img src={item.src} className="d-block w-100" alt="..." />
      <MDBCarouselCaption>
        <h5>{item.title}</h5>
        <p>{item.description}</p>
      </MDBCarouselCaption>
    </MDBCarouselItem>
  ));
  console.log("elements : ", elements);
  return (
    <MDBCarousel className="bg-danger rounded p-1 m-1" showIndicators showControls fade>
      {elements}
      <img src={""} alt="pic"/>
    </MDBCarousel>
  );
};
export default SliderComponent;
