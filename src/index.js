import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const JsonTable=({data,removeField=[]})=>{    
  let head=[]     
  let body=[...data]  
  head=Object.keys(data[0]).filter(el=>!removeField.includes(el)).map(el=>el.toUpperCase().replaceAll('_',' '))
  body=body.map(el=>
      Object.keys(el).filter(key =>
          removeField.every(el=>el!==key)
          ).reduce((obj, key) =>
          {
              obj[key] = el[key];
              return obj;
          }, {}
      )  
  )
  head=head.map((x,i)=><th key={i}>{x}</th>)
  body=body.map((el,i)=>Object.keys(el).map(x=>el[x])).map((el,i)=>
          <tr key={i}>
              {el.map((x,i)=><td key={i}>{x}</td>)}
          </tr>)
return <React.Fragment>
        <thead>
            <tr>{head}</tr>
        </thead>
        <tbody>
            {body}
        </tbody>
       </React.Fragment>
}