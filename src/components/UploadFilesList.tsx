import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { ListItemText } from '@material-ui/core'


export const UploadFilesList = (props: any) => {
  const listItems = props.files.map((d: any, index: number) => 
         <ListItem button>
             <ListItemText>
                {d.name}
             </ListItemText>
        </ListItem> )    
  return(
    <List>   
        {listItems}
   </List>
  )

}

export default UploadFilesList;