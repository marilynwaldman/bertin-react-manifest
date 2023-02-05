import React, { useCallback, useState, useMemo, useContext} from 'react';
//import { useDropzone } from 'react-dropzone';
import { FileError, FileRejection, useDropzone } from 'react-dropzone';
import * as d3 from 'd3'
import { csv } from 'd3';
import { MapContext } from '../../widgets/MapWidget/MapWidget';
import { Grid, makeStyles } from '@material-ui/core';
import UploadFileListScroll2 from '../UploadFileListScroll2';


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

export interface UploadableFile {
  // id was added after the video being released to fix a bug
  // Video with the bug -> https://youtube-2021-feb-multiple-file-upload-formik-bmvantunes.vercel.app/bug-report-SMC-Alpha-thank-you.mov
  // Thank you for the bug report SMC Alpha - https://www.youtube.com/channel/UC9C4AlREWdLoKbiLNiZ7XEA
  id: number;
  file: File;
  errors: FileError[];
  url?: string;
  type?: string;
  name?: string;
}


export function DropzoneCSVComponent(props) {
  
  
  const {csv, setCSV} = useContext(MapContext) 
  const {csvFiles, setcsvFiles} = useContext(MapContext) as any
  const [files, setFiles] = useState<UploadableFile[]>([]);
  console.log("in DropZoneCSVFIles")
  console.log("files:  ")
  console.log(files)
  



  const parseCSVFile = file => {
    const data = d3.csvParse(file);
    console.log("columns")
    console.log(data['columns'])
    setCSV(data)
    return data
    
  };

  //console.log("parsed csv file from DropzonCSVComponent")
  //console.log(csv)

  let currentId = 2;

  function getNewId() {
     // we could use a fancier solution instead of a sequential ID :)
     return ++currentId;
  }
  
  const onDrop = useCallback((acceptedFiles) => {
      const mappedAcc = acceptedFiles.map((file) => ({ 
                name: file.name, file, errors: [], id: getNewId() }));
      //setFiles((curr) => [...curr, ...mappedAcc]);
      setFiles(mappedAcc);
       
      acceptedFiles.forEach((file) => {
        
        const reader = new FileReader()
        //reader.readAsText(file, "UTF-8");
        let newfile = {filetype : file.type};
  
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
        // Do whatever you want with the file contents
          console.log("In Load")
          //const textStr = reader.result
          //console.log(textStr)
          var file_array = {
            name: file.name,
            
            id: getNewId(),
            type : "csv",
            data:  parseCSVFile(reader.result)
          }  
          console.log("file_array:  ", file_array)
          console.log("csvFiles: ", csvFiles)
          setcsvFiles(csvFiles => [...csvFiles, file_array] );
          console.log("csvFiles: ", csvFiles)
          
          parseCSVFile(reader.result)
          
          
        }
        //reader.readAsArrayBuffer(file)
        reader.readAsText(file, "UTF-8");
      })
      
  }, [])

  
  
  
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

  const removeAll = () => {
    console.log("in remove all")
    setFiles([])
  }

  //return (
  //  <div {...getRootProps({style})}>
  //  <input {...getInputProps()} />
  //  <div>Drag and drop your file here.</div>
  //</div>
    //)
  return (
    <React.Fragment>
      <Grid item>
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />

          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
      </Grid>
      <Grid item>
      
          <p>Recently Uploaded</p>
          <p>{new Date(Date.now()).toUTCString()}</p>
      
      </Grid>
      <Grid item>
          <UploadFileListScroll2 files={files}></UploadFileListScroll2>
      </Grid>    
      
    </React.Fragment>
  );
  //
}

export default DropzoneCSVComponent;