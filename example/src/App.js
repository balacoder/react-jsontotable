import React from 'react'

import { JsonTable } from 'react-jsontotable'
import 'react-jsontotable/dist/index.css'
const App = () => {
  const data=[{name:'bala',age:500,address:'Paramakudi'},{name:'chandra',age:600,address:'Melur'},{name:'varun',age:700,address:'Thuraiyur'}]
  return <>  
      <h2 align='center'>Json Table without filter</h2>
      <table className='timecard'>
        <JsonTable data={data}/>
      </table>  
      <br/>
      <h2 align='center'>Json Table with filter (age)</h2>
      <table className='timecard'>
        <JsonTable data={data} removeField={['age']}/>
      </table>  
      <br/>
  </>
}

export default App
