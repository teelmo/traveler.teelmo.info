import React, { useCallback, useEffect, useRef } from 'react';
import '../styles/styles.less';

// https://www.highcharts.com/
import Highcharts from 'highcharts';
import highchartsMap from 'highcharts/modules/map';
import highchartsAccessibility from 'highcharts/modules/accessibility';
import highchartsExporting from 'highcharts/modules/exporting';
import highchartsExportData from 'highcharts/modules/export-data';

// Load helpers.
highchartsMap(Highcharts);
highchartsAccessibility(Highcharts);
highchartsExporting(Highcharts);
highchartsExportData(Highcharts);

function App() {
  const map = useRef();
  const initMap = useCallback(() => {
    (async () => {
      const topology = await fetch(
        './assets/data/countries.geo.json'
      ).then(response => response.json());

      // Initialize the chart
      Highcharts.mapChart('map_container', {
        accessibility: {
          description: 'Map where city locations have been defined using lat/longitude.'
        },
        chart: {
          map: topology,
          height: 800
        },
        credits: {
          enabled: false
        },
        legend: {
          enabled: false
        },
        mapNavigation: {
          enabled: true
        },
        mapView: {
          center: [20, 10],
          projection: {
            name: 'EqualEarth',
          },
        },
        plotOptions: {
          series: {
            enableMouseTracking: true,
            states: {
              hover: {
                color: '#f00',
                enabled: false
              }
            }
          }
        },
        series: [{
          borderColor: '#fff',
          borderWidth: 2,
          tooltip: {
            headerFormat: '',
            pointFormat: '<b>{point.name}</b>'
          },
          data: [{
            name: 'Austria',
            color: '#2ab7ca'
          }, {
            name: 'Belgium',
            color: '#2ab7ca'
          }, {
            name: 'Canada',
            color: '#2ab7ca'
          }, {
            name: 'Switzerland',
            color: '#2ab7ca'
          }, {
            name: 'Cyprus',
            color: '#2ab7ca'
          }, {
            name: 'Germany',
            color: '#2ab7ca'
          }, {
            name: 'Denmark',
            color: '#2ab7ca'
          }, {
            name: 'Ecuador',
            color: '#2ab7ca'
          }, {
            name: 'Spain',
            color: '#2ab7ca'
          }, {
            name: 'Estonia',
            color: '#2ab7ca'
          }, {
            name: 'Finland',
            color: '#2ab7ca'
          }, {
            name: 'France',
            color: '#2ab7ca'
          }, {
            name: 'Great Britain',
            color: '#2ab7ca'
          }, {
            name: 'Hungary',
            color: '#2ab7ca'
          }, {
            name: 'Italy',
            color: '#2ab7ca'
          }, {
            name: 'Liechtenstein',
            color: '#2ab7ca'
          }, {
            name: 'Latvia',
            color: '#2ab7ca'
          }, {
            name: 'Mexico',
            color: '#2ab7ca'
          }, {
            name: 'Macedonia',
            color: '#2ab7ca'
          }, {
            name: 'Norway',
            color: '#2ab7ca'
          }, {
            name: 'Sweden',
            color: '#2ab7ca'
          }, {
            name: 'Tunisia',
            color: '#2ab7ca'
          }, {
            name: 'Turkey',
            color: '#2ab7ca'
          }, {
            name: 'United States of America',
            color: '#2ab7ca'
          }],
          name: 'World',
          nullColor: '#f4f4f8',
          showInLegend: false,
          joinBy: ['name', 'name'],
        }, {
          tooltip: {
            headerFormat: '',
            pointFormat: '<b>{point.name}</b>'
          },
          type: 'mappoint',
          name: 'Cities',
          color: '#000',
          data: [{
            name: 'Austin',
            lat: 30.2672,
            lon: -97.7431
          }, {
            name: 'Vancouver',
            lat: 49.2827,
            lon: -123.1207
          }, {
            name: 'New York',
            lat: 40.7128,
            lon: -74.0060
          }, {
            name: 'Mexico City',
            lat: 19.4326,
            lon: -99.1332
          }, {
            name: 'Guayaquil',
            lat: -2.1894,
            lon: -79.8891
          }, {
            name: 'Quito',
            lat: 0.1807,
            lon: -78.4678
          }, {
            name: 'Cuenca',
            lat: -2.9001,
            lon: -79.0059
          }, {
            name: 'Barcelona',
            lat: 41.3874,
            lon: 2.1686
          }, {
            name: 'Madrid',
            lat: 40.4168,
            lon: -3.7038
          }, {
            name: 'Alicante',
            lat: 38.3460,
            lon: -0.4907
          }, {
            name: 'Alicante',
            lat: 36.5103,
            lon: -4.8853
          }, {
            name: 'London',
            lat: 51.5072,
            lon: -0.1276
          }, {
            name: 'Glasgow',
            lat: 55.8617,
            lon: -4.2583
          }, {
            name: 'Paris',
            lat: 48.8566,
            lon: 2.3522
          }, {
            name: 'Berlin',
            lat: 52.5200,
            lon: 13.4050
          }, {
            name: 'Hamburg',
            lat: 53.5488,
            lon: 9.9872
          }, {
            name: 'Munich',
            lat: 48.1351,
            lon: 11.5820
          }, {
            name: 'Cologne',
            lat: 50.9375,
            lon: 6.9603
          }, {
            name: 'Vienna',
            lat: 48.2082,
            lon: 16.3738
          }, {
            name: 'Skopje',
            lat: 41.9981,
            lon: 21.4254
          }, {
            name: 'Milan',
            lat: 45.4642,
            lon: 9.1900
          }, {
            name: 'Florence',
            lat: 43.7696,
            lon: 11.2558
          }, {
            name: 'Catania',
            lat: 37.5079,
            lon: 15.0830
          }, {
            name: 'Budapest',
            lat: 47.4979,
            lon: 19.0402
          }, {
            name: 'Stockholm',
            lat: 59.3293,
            lon: 18.0686
          }, {
            name: 'Hudiksvall',
            lat: 61.7274,
            lon: 17.1074
          }, {
            name: 'Oslo',
            lat: 59.9139,
            lon: 10.7522
          }, {
            name: 'Ålesund',
            lat: 62.4722,
            lon: 6.1495
          }, {
            name: 'Tallinn',
            lat: 59.4370,
            lon: 24.7536
          }, {
            name: 'Riga',
            lat: 56.9677,
            lon: 24.1056
          }, {
            name: 'Copenhagen',
            lat: 55.6761,
            lon: 12.5683
          }, {
            name: 'Aarhus',
            lat: 56.1629,
            lon: 10.2039
          }, {
            name: 'Antalya',
            lat: 36.8969,
            lon: 30.7133
          }, {
            name: 'Tunis',
            lat: 36.8065,
            lon: 10.1815
          }, {
            name: 'Brussels',
            lat: 50.8476,
            lon: 4.3572
          }, {
            name: 'Geneva',
            lat: 46.2044,
            lon: 6.1432
          }, {
            name: 'Nikosia',
            lat: 35.1856,
            lon: 33.3823
          }, {
            name: 'Vaduz',
            lat: 47.1410,
            lon: 9.5209
          }]
        }],
        title: {
          text: null
        }
      });
    })();
  }, []);
  useEffect(() => {
    initMap();
  }, [initMap, map]);

  return (
    <div className="app">
      <div className="map" id="map_container" />
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
