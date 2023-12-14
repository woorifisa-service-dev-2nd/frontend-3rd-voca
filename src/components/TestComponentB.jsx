import React from 'react'
import { useDataContext } from '../contexts/DataContext'
function TestComponentB() {
    const context = useDataContext();
    const dataDispatch = context.dataDispatch;
    const dispatch = () => dataDispatch({type:'actionB'})
  return (
    <div >
        <div>
            <button onClick = {() => dispatch()}>DISPATCH</button>
        </div>
        {context.data}
        
    </div>
  )
}

export default TestComponentB