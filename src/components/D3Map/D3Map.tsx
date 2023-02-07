//

import React, { useState, RefObject, useEffect, useRef , useContext} from 'react';
import './D3Map.scss';
import styled from 'styled-components'
//import * as d3 from 'd3';
import * as d33 from 'd3-geo-projection'
import { MapContext } from '../../widgets/MapWidget/MapWidget';
import { merge } from 'd3';




const bertin = require('bertin');
const _ = require('lodash');

const CanvasContainer = styled.div`
    flex: 1;
    position: relative;        
`


export const D3Map = () => {

  //const {csv, setCSV} = useContext(MapContext) as any
  //const {worldGeoJSON, setworldGeoJSON} = useContext(MapContext) as any
  //const {manifest, setManifest} = useContext(MapContext) as any
  //const {style, setStyle} = useContext(MapContext) as any
  const {manifests, setManifests} = useContext(MapContext) as any

  const projections = {
    "geoEckert3" : d33.geoEckert3()
  }


  
  const  basicMap  = {
    params: {
      projection: d33.geoVanDerGrinten4(),
      clip: true,
    },
    layers: [
      { type: "outline", geojson: null },
      { type: "graticule" }
    ],
  }
  var manifestCopy = _.cloneDeep(basicMap);
  //if(worldGeoJSON !=null && csv !=null && manifests !=null && manifest !=null && style !=null){
  if( manifests !=null ){
    //manifestCopy  = JSON.parse(JSON.stringify(manifest)) as any
    //console.log("d3map manifest typo: ", manifests.typo)
    //manifestCopy = _.cloneDeep(manifest);
    //manifestCopy.layers[0].fill.values = String(style.fill.values)
    //manifestCopy.layers[0].fill.colors = String(style.fill.colors)
    
    
    //const projection = manifest.params.projection
    //manifestCopy.params.projection = projections[projection]
    
    //var geojson = require('../../resources/geojson/' + manifest.layers[0].geojson + '.json')

    //var xx = require('../../resources/geojson/world.json')

    //var mergedJson = bertin.merge(geojson, "ISO3", csv, "id")
    //console.log("after merge  ", mergedJson)
    
    //manifestCopy.layers[0].geojson = mergedJson

    manifestCopy = manifests.bubble
  
    
  } 
  //const mergedJson = bertin.merge(worldGeoJSON, "ISO3", csv, "id")
  

  const bertinmap = bertin.draw(manifestCopy)
  
  console.log("in bertinmap - choro")
  const ref: RefObject<HTMLDivElement> = React.createRef()
  
  

  useEffect(() => {  
      //console.log("in d3 useEffect")
      //console.log(worldgeojson)
      draw()
    
  })

  const draw = () => {

    ref.current?.appendChild(bertinmap)

    if (ref.current?.childElementCount  == 2) {
      ref.current?.childNodes[0].remove()
    }
  
    
  }
  return (
    <CanvasContainer>  
      <div ref={ref} />  
    </CanvasContainer>
  )
}

  
  

  
interface IWorldMapProps {



}

function appendChild(bertinmap: any) {
  throw new Error('Function not implemented.');
}

function props(props: any, ref: any) {
  throw new Error('Function not implemented.');
}

function ref(props: (props: any, ref: any) => void, ref: any) {
  throw new Error('Function not implemented.');
}
//export default D3Map
