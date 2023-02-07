// Get Manifest

import * as d33 from 'd3-geo-projection'
import * as d3 from 'd3' 
import { resolve } from 'node:path/win32';
import manifests from '../../resources/manifests/index.json'
import { merge } from 'd3';

const bertin = require('bertin');
const _ = require('lodash');

const projections = {
    "geoEckert3" : d33.geoEckert3()
  }

    

export const getManifests = () => {
  
       var data : any= {};
       manifests.manifests.forEach(obj => {
           var manifest = require('../../resources/manifests/' + obj.file)
           var csv = require('../../resources/data/' + obj.dependencies.population.file)
           manifest.params.projection = projections[obj.projection]
           var geojson = require('../../resources/geojson/' + obj.dependencies.world.file)
           if (obj.id != "bubble"){
              var mergedJson = bertin.merge(geojson, "ISO3", csv, "id")
              manifest.layers[0].geojson = mergedJson
           } else {
            manifest.layers[0].geojson = csv
            manifest.layers[1].geojson = geojson

           }
           


           data[obj.id] = manifest
       })
      
       return data
       
  
}
  