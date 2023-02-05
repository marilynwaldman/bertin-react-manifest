import React, { useContext } from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import { MapContext } from '../../widgets/MapWidget/MapWidget'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { Avatar, ListItemText } from '@material-ui/core';




export default function BertinList() {
  const {bertinTypes} = useContext(MapContext) as any
  console.log("in bertinlist")
  console.log(bertinTypes)


  if(bertinTypes !=null) {
    
    const listItems = bertinTypes.map((item: any, index: number) => 
         <ListItem key = {item.index} button onClick={() => console.log("clicked ", index)}>
            <ListItemAvatar >
                <Avatar variant="square" style={{borderRadius: .5, height: '30px', width: '50px' }} alt={item.name} src={`./img/${item.image}`}>
                </Avatar>    
            </ListItemAvatar>
            <ListItemText>{item.name}</ListItemText>
         </ListItem>
    
           
           
   
    )

    return(
        <List  > 
          {listItems}
       </List>    
    )
  }   
  else {
    return <p> loading</p>
  }       

    
  
}