// get csv of Bertin Map Types for Display list

import * as d3 from 'd3'

export const getBertinTypes = () =>
  new Promise((resolve) =>
      d3
        .csv('/data/bertin_types.csv')
    .then(function results(data) {
      return resolve((data as unknown) as any[])
    })
)