import React, { useCallback, useState, useMemo, useContext} from 'react';
import { useDropzone } from 'react-dropzone';
import * as d3 from 'd3'
import { csv } from 'd3';
import { MapContext } from '../../widgets/MapWidget/MapWidget';


const baseStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  transition: 'border .3s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};


export function DropzoneCSVComponent(props) {
  
  //const [files, setFiles] = useState({});
  const {csv, setCSV} = useContext(MapContext)
  console.log("in DropZoneCSV")
  console.log(csv)
  



  const parseCSVFile = file => {
    const data = d3.csvParse(file);
    console.log("columns")
    console.log(data.columns)
    setCSV(data)
    
  };

  //console.log("parsed csv file from DropzonCSVComponent")
  //console.log(csv)

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles[0])
    const reader = new FileReader()
    reader.readAsText(acceptedFiles[0], "UTF-8");
   
    
    reader.onload = () => {
        if (!!reader.result) {
           console.log("reader.result")
           console.log(reader.result)
          parseCSVFile(reader.result)
        }
    }
    
   
  }, []);

  
  
  
  
  const {
    
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({ 
    onDrop,
    accept: {
      'text/csv': ['.csv'], 
    }
  
  });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);

  return (
    <div {...getRootProps({style})}>
    <input {...getInputProps()} />
    <div>Drag and drop your file here.</div>
  </div>
    
  )
}

export default DropzoneCSVComponent;