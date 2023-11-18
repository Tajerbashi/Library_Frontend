import React from "react";
import { toPersian } from "./dateUtilities";
import { Badge } from "reactstrap";

export const renderDate = date => {
  return toPersian(date);
};

export const renderReferralStatus = (title, color) => {
  return <Badge color={color}>{title}</Badge>;
};

export const renderVaribales = cartableVariables => {
  return (
    cartableVariables &&
    cartableVariables.map(
      cartableVariable =>
        cartableVariable.value && (
          <p className="m-0" key={cartableVariable.key}>
            {cartableVariable.title}:{" "}
            <span dir="ltr">{cartableVariable.value}</span>
          </p>
        )
    )
  );
};
