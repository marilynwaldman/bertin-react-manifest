import { Canvas }  from '../../components/Canvas/Canvas'
import { LeftSidebar}  from '../../components/LeftSidebar/LeftSidebar'
import { RightSidebar } from '../../components/RightSidebar/RightSidebar';
import { useEffect } from 'react';
import { GlobalStyles } from '../../components/ui/ui';
import styled from 'styled-components';
import { getGeoJSON } from '../../services/geojson/getGeoJSON';
import { getManifest } from '../../services/manifest/getManifest';
import { getManifests } from '../../services/manifests/getManifests';
import { getCSV } from '../../services/csv/getCSV';
import { getBertinTypes } from '../../services/bertin_types/getBertinTypes';
import { getStyle } from '../../services/style/getStyle';
import {  useState } from "react";
import { Feature, Geometry } from 'geojson'
import { csvFile } from '../../model/csvfile';
import React from 'react';
import { Typography } from '@material-ui/core';


const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;  
    `   

type MapContext = {
    worldGeoJSON: {}
    setworldGeoJSON: React.Dispatch<React.SetStateAction<any>>
    manifest: {}
    setManifest: React.Dispatch<React.SetStateAction<any>>
    manifests: {}
    setManifests: React.Dispatch<React.SetStateAction<any>>
    csv: []
    setCSV: React.Dispatch<React.SetStateAction<any>>
    style: {}
    setStyle: React.Dispatch<React.SetStateAction<any>>
    csvFiles : csvFile[]
    setcsvFiles: React.Dispatch<React.SetStateAction<csvFile>>
    bertinTypes: []
    setbertinTypes: React.Dispatch<React.SetStateAction<any>>
  
  }

export const MapContext = React.createContext<MapContext>({
      worldGeoJSON: {},
      setworldGeoJSON: () => {},
      manifest: {},
      setManifest: () => {},
      manifests: {},
      setManifests: () => {},
      csv: [],
      setCSV: () => [],
      style: {},
      setStyle: () => {},
      csvFiles: [],
      setcsvFiles: () =>  [],
      bertinTypes:  [],
      setbertinTypes: () => []
          
})    
      


const MapWidget = () => {

  const [worldGeoJSON, setworldGeoJSON] = useState<any>(null)
  const [manifest, setManifest] = useState<any>(null)
  const [manifests, setManifests] = useState<any>(null)
  const [csv, setCSV] = useState<any>(null) 
  const [bertinTypes, setbertinTypes] = useState<any>(null) 
  const [csvFiles, setcsvFiles] = useState<any>(null) 
  const [style, setStyle] = useState<any>(null)
  const [isGeoLoading, setIsGeoLoading] = useState(true);
  const [isManifestLoading, setIsManifestLoading] = useState(true);
  const [isManifestsLoading, setIsManifestsLoading] = useState(true);
  const [isCSVLoading, setIsCSVLoading] = useState(true);
  const [isStyleLoading, setIsStyleLoading] = useState(true);
  const [isCSVFilesLoading, setIsCSVFilesLoading] = useState(true);
  const [isbertinTypesLoading, setIsbertinTypesLoading] = useState(true);
  
  
  
    useEffect(() => {
      // get geojson and manifest
      //https://stackoverflow.com/questions/70077470/how-to-design-multiple-await-in-useeffect

      //getGeoJSON().then(data => setworldGeoJSON(data))
      //getManifest().then(data => setManifest(data))
      //getCSV().then(data => setCSV(data))
      
      //var data = require('../../resources/manifests/choro.json')
      //console.log("data", data)
      if(isGeoLoading) {
          getGeoJSON().then(data => setworldGeoJSON(data))
          setIsGeoLoading(false);   
      }
      else {
        console.log("world geojson:  ", worldGeoJSON)
        
      }
      if(isManifestLoading) {
        getManifest().then(data => setManifest(data))
        setIsManifestLoading(false);   
      }
      else {
         console.log("manifest :  ", manifest)
      
      }
      if(isManifestsLoading) {
        var data = getManifests()
        setManifests(data)
        setIsManifestsLoading(false);   
      }
      else {
         console.log("new manifests :  ", manifests)
      
      }
      if(isCSVLoading) {
        getCSV().then(data => setCSV(data))
        setIsCSVLoading(false);   
      }
      else {
         console.log("csv :  ", csv)    
      }
      if(isbertinTypesLoading) {
        getBertinTypes().then(data => setbertinTypes(data))
        setIsbertinTypesLoading(false);   
      }
      else {
         console.log("bertinTypes :  ", bertinTypes)    
      }
      if(isCSVFilesLoading) {
        getCSV().then(data =>{ setCSV(data)
          var file = [{
            name:"data6.csv",
            
            id: 1,
            type : "csv",
            data:  data
          }  ]
          console.log("csv file:  ")  
          console.log(file)
          setcsvFiles(file)
          setIsCSVFilesLoading(false); 
        
        })  
      }
      else {
         console.log("csvFiles :  ", csvFiles)
         
      
      }
      if(isStyleLoading) {
        getStyle().then(data => setStyle(data))
        setIsStyleLoading(false);   
      }
      else {
         console.log("style :  ", style)
      
      }
        
    })
    return (
      <>
        { (
          <>
            <MapContext.Provider value={{worldGeoJSON, setworldGeoJSON, manifest,
               setManifest, csv, setCSV, style, setStyle, csvFiles, setcsvFiles,
               bertinTypes, setbertinTypes,
               manifests,
               setManifests,}}>
              
              <Container>
                  <LeftSidebar/>
                  <Canvas />
                  <RightSidebar/> 
                  <GlobalStyles />
              </Container>
              
            </MapContext.Provider>  
          </>
        )}
      </>
    )
  }
  export default MapWidget 


