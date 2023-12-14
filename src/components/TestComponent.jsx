import React from 'react'
import { useDataContext } from '../context/DataContext'
function testComponent() {
    const data = useDataContext();

    console.log(data)
  return (
    <div>
        <div>
          {/** Test context data */}
        {data}
        </div>
      
    </div>
    
  )
}

export default testComponent