import * as React from 'react';
//import Box from '@mui/material/Box';
import Box from '@material-ui/core/Box';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { ListItemText } from '@material-ui/core'
import ListItemButton from '@material-ui/core/List'
import { useState } from "react"
import { css } from "@emotion/react";




export default function UploadFileListScroll( props2: any) {
    const [selected, setSelected] = React.useState(1);

    const handleListItemClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
      index: number,
    ) => {
      console.log("index:  ", index)
      setSelected(index);
    };
    
    function renderRow(props: ListChildComponentProps) {
        const { index, style } = props;
        return (
          <ListItem style={style} key={index} button  
                onClick={(event) => handleListItemClick(event, index)}>
              <ListItemText>
                   {props2.files[index].name} 
              </ListItemText>           
          </ListItem>
        );
      }
       
  return (
    <Box
      sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={100}
        width={160}
        itemSize={26}
        itemCount={props2.files.length}
        overscanCount={5}
      >
        {renderRow}   
      </FixedSizeList>
    </Box>
  );
}

