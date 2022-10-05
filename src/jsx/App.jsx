import React, { useCallback, useEffect, useRef } from 'react';
import '../styles/styles.less';

// https://d3js.org/
import * as d3 from 'd3';
// https://www.npmjs.com/package/topojson
import * as Datamap from 'datamaps';
import { geoRobinson } from 'd3-geo-projection';

function App() {
  const map = useRef();
  const initMap = useCallback(() => {
    map.current = new Datamap({
      data: { // http://www.worldatlas.com/aatlas/ctycodes.htm
        AUT: { fillKey: 'authorHasTraveledTo' },
        BEL: { fillKey: 'authorHasTraveledTo' },
        CAN: { fillKey: 'authorHasTraveledTo' },
        CHE: { fillKey: 'authorHasTraveledTo' },
        CYP: { fillKey: 'authorHasTraveledTo' },
        DEU: { fillKey: 'authorHasTraveledTo' },
        DNK: { fillKey: 'authorHasTraveledTo' },
        ECU: { fillKey: 'authorHasTraveledTo' },
        ESP: { fillKey: 'authorHasTraveledTo' },
        EST: { fillKey: 'authorHasTraveledTo' },
        FIN: { fillKey: 'authorHasTraveledTo' },
        FRA: { fillKey: 'authorHasTraveledTo' },
        GBR: { fillKey: 'authorHasTraveledTo' },
        HUN: { fillKey: 'authorHasTraveledTo' },
        ITA: { fillKey: 'authorHasTraveledTo' },
        LIE: { fillKey: 'authorHasTraveledTo' },
        LVA: { fillKey: 'authorHasTraveledTo' },
        MEX: { fillKey: 'authorHasTraveledTo' },
        MKD: { fillKey: 'authorHasTraveledTo' },
        NOR: { fillKey: 'authorHasTraveledTo' },
        SWE: { fillKey: 'authorHasTraveledTo' },
        TUN: { fillKey: 'authorHasTraveledTo' },
        TUR: { fillKey: 'authorHasTraveledTo' },
        USA: { fillKey: 'authorHasTraveledTo' }
      },
      element: document.querySelector('.map'),
      fills: {
        authorHasTraveledTo: 'rgba(114, 159, 152, 1.0)',
        defaultFill: 'rgba(188, 213, 209, 1.0)'
      },
      geographyConfig: {
        highlightOnHover: false,
        popupOnHover: true
      },
      responsive: true,
      setProjection(element) {
        const projection = geoRobinson().center([0, 0]).scale(element.offsetWidth / 6).translate([element.offsetWidth / 2, element.offsetHeight / 2]);
        const path = d3.geoPath().projection(projection);
        return { path, projection };
      }
      // projection: 'georobinson',
    });
  }, []);
  useEffect(() => {
    initMap();
    window.addEventListener('resize', (event) => {
      map.current.resize(event);
    });
  }, [initMap, map]);

  return (
    <div className="app">
      <div className="map" />
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
