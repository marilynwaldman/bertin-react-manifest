// Get GeoJson 
import { Feature, Geometry } from 'geojson'
import * as d3geo from 'd3-geo'

export const getGeoJSON = () =>
  new Promise((resolve) =>
    fetch('/data/world.json').then((response) => {
      if (response.status !== 200) {
        // eslint-disable-next-line no-console
        console.log(`Houston, we have a problem! ${response.status}`)
        return
      }
      response.json().then((worldData) => {
        //console.log("have world map data")
        //const worldFeatures: Array<Feature<Geometry | null>> = ((feature(worldData, worldData.objects.countries) as unknown) as FeatureCollection).features
        const worldFeatures: Array<Feature<Geometry | null>> = worldData
        //console.log("worldFeatures")
        //console.log(`Result: ${JSON.stringify(worldFeatures)}`)
        //console.log(worldFeatures)
        //resolve(setMapObject(worldFeatures))
      
        
         return resolve(worldFeatures)
         
      })
    })
  )






