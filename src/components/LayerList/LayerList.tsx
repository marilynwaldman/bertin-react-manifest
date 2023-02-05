import React, { useContext, useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { MapContext } from '../../widgets/MapWidget/MapWidget'
import { csvFormat } from 'd3-dsv'
import { constSelector } from 'recoil'
import { addAbortSignal } from 'stream'
import { DataGrid } from '@material-ui/data-grid';

function convertDataToCSVFormatString(input, columnsToBeIncluded = []) {
  if (columnsToBeIncluded.length === 0) {
    return csvFormat(input);
  }
  return csvFormat(input, columnsToBeIncluded);
}

export const LayerList = () => {
  const {csv, setCSV} = useContext(MapContext) as any
  const [pageSize, setPageSize] = React.useState<number>(5);
  //const [items , setItems] = useState([]as any);

  var keys = Object.keys({})
  if(csv != null && csv.length > 0){
     keys = Object.keys(csv[0])
  }
  
  const columns = [] as any
  const list = keys.map(column => {
    const item = { field: column,  headerName: column,  flex: 1, minWidth: 150, }
    columns.push(item)
  })
  
  if (csv != null){
    return(
      <div style={{ height: 400, width: '100%' }}>
          <DataGrid pageSize={pageSize} rowsPerPageOptions={[5, 10, 20]}
           pagination rows={csv} columns={columns}/> 
      </div>     
    )}
  else  { return(<div></div>)
  }   

}


