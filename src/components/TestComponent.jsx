import React from 'react';
import { useDataContext } from '../contexts/DataContext';
function TestComponent() {
    const context = useDataContext();
    const dataDispatch = context.dataDispatch;
    const dispatch = () => dataDispatch({type:'actionA'})
    
  return (
    <div >
      <div >
        <button onClick = {() => dispatch()}>DISPATCH</button>
            
      </div>
      {context.data}
    </div>
    
  )
}

export default TestComponent