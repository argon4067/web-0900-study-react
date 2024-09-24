import React from 'react';

const Component03 = ({address, phone, style}) => {
  // const {address, phone, style} = props;
  return (
    <div>
    <p style={style}>
      {address}
      {phone}
    </p>
    </div>
  );
};

export default Component03;