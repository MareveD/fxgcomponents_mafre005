import React, { useState } from 'react';
import { Image } from 'antd';
import PropTypes from 'prop-types';

export const Width = ({width, imagesurl}) => {
  const [visible, setVisible] = useState(false);
  
  const imageslist = [];

  for(let [i, url] of imagesurl.entries()) {
    imageslist.push(<Image key={i} src={url} width={width}
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

Width.propTypes = {
  imagesurl: PropTypes.array,
  width: PropTypes.number,
};




