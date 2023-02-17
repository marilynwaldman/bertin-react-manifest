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
  const {bertinType, setbertinType} = useContext(MapContext) as any
  const {manifests, setManifests} = useContext(MapContext) as any
  
  console.log("in bertinlist")
  console.log(bertinTypes)

  if(manifests !=null) {
      Object.keys(manifests).forEach(function(key, index) {
         console.log(manifests[key])
      });
      
      var mylist:any = []
      Object.keys(manifests).forEach(function(key, index) {
        var myobj:any = {"type" : manifests[key].id,
                         "thumbnail" : manifests[key].thumbnail}
        mylist.push({"type" : manifests[key].id,
                     "thumbnail" : manifests[key].thumbnail,
                     "name" : manifests[key].name})
     });
     console.log("mylist ", mylist)
     const listItems2 = mylist.map((item: any, index: number) => 
     <ListItem key = {item.index} button onClick={() => {
                             console.log("clicked ", item.type)
                             setbertinType(item.type)}}>
        <ListItemAvatar >
            <Avatar  style={{borderRadius: 0.00, height: '80px', width: '100px' }} alt={item.name} src={process.env.PUBLIC_URL + `/img/${item.thumbnail}`}>
            </Avatar>    
           
        </ListItemAvatar>
        <ListItemText>{item.name}</ListItemText>
     </ListItem>)
     return(
          <List  > 
            {listItems2}
          </List>    
      )
    }   
    else {
       return <p> loading</p>
    }     

  }
  

