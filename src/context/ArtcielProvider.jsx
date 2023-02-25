import React, { useState } from 'react';
import articleContext from './articleContext';


const ArtcielProvider = (props) => {

// const [cartItem, setCartItem] = useState(0)

  return (
    <articleContext.Provider value={'hi'}>
        {props.children}
    </articleContext.Provider>
  );
};

export default ArtcielProvider;