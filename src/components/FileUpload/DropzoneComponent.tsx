import React, { useCallback, useState, useMemo, useContext} from 'react';
import { useDropzone } from 'react-dropzone';
import { setConstantValue } from 'typescript';
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


export function DropzoneComponent(props) {
  
//const [files, setFiles] = useState({});
const {csv, setCSV} = useContext(MapContext)

  
  
  const onDrop = useCallback(acceptedFiles => {
    
    //console.log(acceptedFiles[0])
    const reader = new FileReader()
    reader.readAsText(acceptedFiles[0], "UTF-8");
   
    
    reader.onload = () => {
        if (!!reader.result) {
            //console.log('reader', reader.result)
            //setFiles(reader);
            setCSV(reader)
            console.log("new csv")
            console.log(csv)
            
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
    onDrop
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

export default DropzoneComponent;