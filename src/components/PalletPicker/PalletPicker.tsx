import React, { useContext } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import {colorList} from './palletColors'
import { MapContext } from '../../widgets/MapWidget/MapWidget'
import { Box, FormControl, FormHelperText, MenuItem, Select, Slider, Typography } from '@material-ui/core';


export const PalletPicker = (props: any) => { 
  const {style, setStyle} = useContext(MapContext) as any
  const list = colorList as any    
  const handleChange = e => {
    const deepClone = JSON.parse(JSON.stringify(style))
    deepClone.fill.colors = (e.target.value)            
    setStyle(deepClone)
    
  };   
  if(style != null) {       
  return(
    <div>             
    <FormControl style={{ marginTop: 10, marginLeft: 0 }}>
    <Select value={style.fill.colors} onChange={handleChange}>
        {list.map(color => {
            return (
              <MenuItem value={color}>
                <li>{color}</li>
              </MenuItem>
            );
        })}  
    </Select>
    <FormHelperText>Color</FormHelperText>
   </FormControl> 
   </div>
  )
      } else {
        return <></>
      }
}