import React, { useContext, useEffect, useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { MapContext } from '../../widgets/MapWidget/MapWidget'
import Select from '@material-ui/core/Select/Select';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import { FormControl, FormHelperText, InputLabel } from '@material-ui/core';




export const MaterialSelect = () => {
  const {csv, setCSV} = useContext(MapContext) as any
  const {style, setStyle} = useContext(MapContext) as any
  const {manifest, setIsManifestLoading} = useContext(MapContext) as any


  var keys = Object.keys({})
  var selected = ""
  
  if(csv != null && csv.length > 0 && style != null){
     //keys = Object.keys(csv[0])
     keys = csv['columns']
     selected = style.fill.values
  }


  
  const options = [] as any
  const list = keys.map(option => {
    const item = { value: option,  text: option }
    options.push(item)
  })
  

  const handleChange = event => {
    
    const deepClone = JSON.parse(JSON.stringify(style))
        deepClone.fill.values = String(event.target.value)
        setStyle(deepClone)
    
  };

  return (
        <FormControl style={{ marginTop: 15, marginLeft: 0 }}>
          <InputLabel></InputLabel>
          <Select value={selected} onChange={handleChange}>
              {options?.map(option => {
                  return (
                     <MenuItem key={option.value} value={option.value}>
                       {option.text ?? option.value}
                     </MenuItem>
              );
          })} 
          </Select>
          <FormHelperText>Column</FormHelperText>
        </FormControl>
  )
}
