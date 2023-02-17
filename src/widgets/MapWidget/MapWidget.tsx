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

  manifests: {}
  setManifests: React.Dispatch<React.SetStateAction<any>>
  bertinType: {}
  setbertinType: React.Dispatch<React.SetStateAction<any>>  
  }

export const MapContext = React.createContext<MapContext>({
      manifests: {},
      setManifests: () => {},
      bertinType: "typo",
      setbertinType: () => String
})    
      


const MapWidget = () => {

  
  const [manifests, setManifests] = useState<any>(null)
  //const [csv, setCSV] = useState<any>(null) 
  //const [bertinTypes, setbertinTypes] = useState<any>(null) 
  const [bertinType, setbertinType] = useState<any>(null) 
  const [isManifestsLoading, setIsManifestsLoading] = useState(true);
  //const [isCSVLoading, setIsCSVLoading] = useState(true);
  //const [isbertinTypesLoading, setIsbertinTypesLoading] = useState(true);
  const [isbertinTypeLoading, setIsbertinTypeLoading] = useState(true);
  
  
  
    useEffect(() => {
      // get geojson and manifest
      //https://stackoverflow.com/questions/70077470/how-to-design-multiple-await-in-useeffect

      //getGeoJSON().then(data => setworldGeoJSON(data))
      //getManifest().then(data => setManifest(data))
      //getCSV().then(data => setCSV(data))
      
      //var data = require('../../resources/manifests/choro.json')
      //console.log("data", data)
      
      if(isManifestsLoading) {
        var data = getManifests()
        setManifests(data)
        setIsManifestsLoading(false);   
      }
      else {
         
         console.log("new manifests :  ", manifests.bubble)
      
      }
      //if(isCSVLoading) {
      //  getCSV().then(data => setCSV(data))
      //  setIsCSVLoading(false);   
      //}
      //else {
      //   console.log("csv :  ", csv)    
      //}
      //if(isbertinTypesLoading) {
      //  getBertinTypes().then(data => setbertinTypes(data))
      //  console.log("Bertin Types for lsit ", bertinTypes)
      //  setIsbertinTypesLoading(false);   
      //}
      //else {
      //   console.log("bertinTypes :  ", bertinTypes)    
      //}
      if(isbertinTypeLoading) {
        setbertinType("typo")
        setIsbertinTypeLoading(false);   
      }
      else {
         console.log("bertinType :  ", bertinType)    
      }
    })
    return (
      <>
        { (
          <>
            <MapContext.Provider value={{ manifests,setManifests, bertinType, setbertinType}}>
              
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


