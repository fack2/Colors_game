import React from 'react';
import colors from '../../data';
import Timer2 from '../Game/timer_score';


const App = () => (
  <>
    <Timer2 />
    <h1 style={{ color: colors[1] }}>
      {colors[0]}
    </h1>


  </>
);

export default App;
