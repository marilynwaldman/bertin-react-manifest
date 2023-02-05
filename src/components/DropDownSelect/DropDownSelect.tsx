import React, { useContext, useEffect, useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { MapContext } from '../../widgets/MapWidget/MapWidget'
import Select from '@material-ui/core/Select/Select';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';




export const DropDownSelect = () => {
  const {csv, setCSV} = useContext(MapContext) as any
  //const [items , setItems] = useState([]as any);

  var keys = Object.keys({})
  if(csv != null && csv.length > 0){
     keys = Object.keys(csv[0])
  }
  
  const options = [{value: '', text: '--Choose an option--'}] as any
  const list = keys.map(option => {
    const item = { value: option,  text: option }
    options.push(item)
  })

  const handleChange = event => {
    console.log("in dropdown select")
    console.log(event.target.value);
  };

  return (
    <div>
      <select onChange={handleChange} name="fruits" id="fruit-select">
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  )
}
