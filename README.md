# react-jsontotable

> JSONtoTABLE component helps to convert json to table with remove key&#x27;s

[![NPM](https://img.shields.io/npm/v/react-jsontotable.svg)](https://www.npmjs.com/package/react-jsontotable) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-jsontotable
```

## Usage

```jsx
import React from 'react'

import { JsonTable } from 'react-jsontotable'
import 'react-jsontotable/dist/index.css'
const App = () => {
  const data=[
  {name:'bala',age:500,address:'Paramakudi',country:'USA'},
  {name:'chandra',age:600,address:'Melur',country:'USA'},
  {name:'varun',age:700,address:'Thuraiyur',country:'USA'}]
  const removeArray=['address','country']
  return <>  
      <h2 align='center'>Json Table without filter</h2>
      <table className='timecard'>
        <JsonTable data={data}/>
      </table>  
      <br/>
      <h2 align='center'>Json Table with filter (age)</h2>
      <table className='timecard'>
        <JsonTable data={data} removeField={removeArray}/>
      </table>  
      <br/>
  </>
}

export default App


```

## License

MIT © [Balamurugan](https://github.com/Balamurugan)
