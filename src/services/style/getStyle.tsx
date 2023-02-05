// Get Manifest

import { Feature, Geometry } from 'geojson'
import * as d33 from 'd3-geo-projection'

export const getStyle = () =>
  new Promise((resolve) =>
    fetch('/data/style.json').then((response) => {
      if (response.status !== 200) {
        // eslint-disable-next-line no-console
        console.log(`Houston, we have a problem! ${response.status}`)
        return
      }
      response.json().then((styleData) => {
        const style: any = styleData
        return resolve(style)
        //return manifest        
      })
    })
  )