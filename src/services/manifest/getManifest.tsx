// Get Manifest

import { Feature, Geometry } from 'geojson'
import * as d33 from 'd3-geo-projection'

export const getManifest = () =>
  new Promise((resolve) =>
    fetch('/data/manifest.json').then((response) => {
      if (response.status !== 200) {
        // eslint-disable-next-line no-console
        console.log(`Houston, we have a problem! ${response.status}`)
        return
      }
      response.json().then((manifestData) => {
        const manifest: any = manifestData
        //manifest.params.projection = d33.geoEckert3()
        return resolve(manifest)
        //return manifest        
      })
    })
  )