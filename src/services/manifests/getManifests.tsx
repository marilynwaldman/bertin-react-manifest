// Get Manifest

import * as d33 from 'd3-geo-projection'
import * as d3 from 'd3' 
import manifests from '../../resources/manifests/index.json'
import { merge } from 'd3';

const bertin = require('bertin');
const _ = require('lodash');

const projections = {
    "geoEckert3" : d33.geoEckert3(),
    "mercator" : d3.geoMercator()
  }

    

export const getManifests = () => {
  
       var data : any= {};
           
          
       manifests.manifests.forEach(obj => {
             
             var manifest = require('../../resources/manifests/' + obj.file)
             var csv = require('../../resources/data/' + obj.dependencies.population.file)
             manifest.params.projection = projections[obj.projection]
             var geojson = require('../../resources/geojson/' + obj.dependencies.world.file)
             manifest.thumbnail = obj.thumbnail
             manifest.id = obj.id
             manifest.name = obj.name

           if (obj.id === "bubble"){
              manifest.params.projection = projections[obj.projection]
              manifest.layers[0].geojson = csv
              manifest.layers[1].geojson = geojson
           }
           else if  (obj.id === "simplelayer"){
              manifest.params.projection = projections[obj.projection]
              manifest.params.extent = geojson
              manifest.layers[0].geojson = geojson
           }
            else {
              manifest.params.projection = projections[obj.projection]
              var mergedJson = bertin.merge(geojson, "ISO3", csv, "id")
              manifest.layers[0].geojson = mergedJson

           }
           data[obj.id] = manifest
       })
       console.log("in getManifests ", data)
       return data
       
  
}
  