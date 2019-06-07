import React from "react";

const AboutUsList = props => {
    const list = props.list;

    return !list.length
        ? null
        : list.map((text, index) =>
              index >= 3 ? <li key={index}>{text}</li> : null
          );
};

export default AboutUsList;
