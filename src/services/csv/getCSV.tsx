// get csv to demonstrate choropleth -

import * as d3 from 'd3'

export const getCSV = () =>
  new Promise((resolve) =>
      d3
        .csv('/data/data6.csv')
    .then(function results(data) {
      return resolve((data as unknown) as any[])
    })
)