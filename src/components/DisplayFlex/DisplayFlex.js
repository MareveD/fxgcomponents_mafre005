import React, { useState } from 'react';
import { Image } from 'antd';
import PropTypes from 'prop-types';

export const DisplayFlex = ({width, imagesurl, height, size = "md"}) => {

  const imageslist = [];

  for(let [i, url] of imagesurl.entries()) {
    imageslist.push(<Image key={i} src={url} width={width} height={height}/>)
  }

  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;

  const divStyle = {
    padding: `${scale * 0.5}rem`,
    border: `${scale * 0.5}rem solid black`,
    borderRadius: `${scale * 0.5}rem`,
    display: "flex",
    justifyContent: "space-around",
    alignContent: "space-around",
    flexWrap: "wrap",
    rowGap: `${scale * 0.5}rem`
  }

  return (
    <>
      <div style={divStyle}>
        <Image.PreviewGroup>
            {imageslist}
        </Image.PreviewGroup>
      </div>
    </>
  );
}

DisplayFlex.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};






