# json-react-table

> JSONtoTABLE component helps to convert json to table with remove key&#x27;s

[![NPM](https://img.shields.io/npm/v/json-react-table.svg)](https://www.npmjs.com/package/json-react-table) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i json-react-table
```

## Usage

```jsx
import React from 'react'

import { JsonTable } from 'json-react-table'
import 'json-react-table/dist/index.css'
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
## Output
![alt text](https://github.com/balacoder/react-jsontotable/blob/main/src/asset/npm.png)

## License

MIT © [Balamurugan](https://github.com/Balamurugan)
