import React, { useState } from 'react';
import { Image } from 'antd';
import PropTypes from 'prop-types';

export const Height = ({height, imagesurl}) => {
  const [visible, setVisible] = useState(false);
  
  const imageslist = [];

  for(let [i, url] of imagesurl.entries()) {
    imageslist.push(<Image key={i} src={url} height={height}
      />)
  }

  return (
    <>
      <Image
        preview={{ visible: true }}
        src=""
        onClick={() => setVisible(true)}
      />
      <div>
        <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
            {imageslist}
        </Image.PreviewGroup>
      </div>
    </>
  );
}

Height.propTypes = {
  imagesurl: PropTypes.array,
  height: PropTypes.number
};
