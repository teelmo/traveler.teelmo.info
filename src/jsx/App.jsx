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
          description: ''
        },
        chart: {
          height: Math.max(window.innerHeight, 800),
          map: topology
        },
        credits: {
          enabled: false
        },
        legend: {
          enabled: true,
          verticalAlign: 'top'
        },
        mapNavigation: {
          enabled: true
        },
        mapView: {
          projection: {
            name: 'Orthographic',
            rotation: [30, -30, 0]
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
          color: '#2ab7ca',
          data: [{
            name: 'Austria'
          }, {
            name: 'Belgium'
          }, {
            name: 'Canada'
          }, {
            name: 'Switzerland'
          }, {
            name: 'Cyprus'
          }, {
            name: 'Germany'
          }, {
            name: 'Denmark'
          }, {
            name: 'Ecuador'
          }, {
            name: 'Spain'
          }, {
            name: 'Estonia'
          }, {
            name: 'Finland'
          }, {
            name: 'France'
          }, {
            name: 'Great Britain'
          }, {
            name: 'Hungary'
          }, {
            name: 'Italy'
          }, {
            name: 'Liechtenstein'
          }, {
            name: 'Latvia'
          }, {
            name: 'Mexico'
          }, {
            name: 'Macedonia'
          }, {
            name: 'Norway'
          }, {
            name: 'Sweden'
          }, {
            name: 'Tunisia'
          }, {
            name: 'Turkey'
          }, {
            name: 'United Kingdom'
          }, {
            name: 'United States of America',
            color: '#2ab7ca'
          }],
          joinBy: ['name', 'name'],
          name: 'Visited countries',
          nullColor: '#f4f4f8',
          showInLegend: true,
          tooltip: {
            headerFormat: '',
            pointFormat: '<b>{point.name}</b>'
          }
        }, {
          color: '#000',
          data: [{
            name: 'Austin',
            lat: 30.2672,
            lon: -97.7431
          }, {
            name: 'Miami',
            lat: 25.7617,
            lon: -80.1918
          }, {
            name: 'Orlando',
            lat: 28.5384,
            lon: -81.3789
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
            name: 'Olon',
            lat: -1.7966,
            lon: -80.7568
          }, {
            name: 'Banos',
            lat: -1.3928,
            lon: -78.4269
          }, {
            name: 'Cotopaxi',
            lat: -0.6838,
            lon: -78.4372
          }, {
            name: 'Quilotoa',
            lat: -0.8583,
            lon: -78.9034
          }, {
            name: 'Otavalo',
            lat: 0.2343,
            lon: -78.2611
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
            name: 'Annecy',
            lat: 45.8992,
            lon: 6.1294
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
            name: 'Bad Kissingen',
            lat: 50.1986,
            lon: 10.0756
          }, {
            name: 'Garmisch-Partenkirchen',
            lat: 47.4919,
            lon: 11.0948
          }, {
            name: 'Vienna',
            lat: 48.2082,
            lon: 16.3738
          }, {
            name: 'Vorderkrimml',
            lat: 47.2397,
            lon: 12.1962
          }, {
            name: 'Helsinki',
            lat: 60.1699,
            lon: 24.9384
          }, /* {
            name: 'Rovaniemi',
            lat: 66.5039,
            lon: 25.7294
          }, {
            name: 'Inari',
            lat: 68.9062,
            lon: 27.0278
          }, {
            name: 'Kittilä',
            lat: 67.6507,
            lon: 24.9158
          }, {
            name: 'Nakkila',
            lat: 61.3648,
            lon: 22.0054
          }, {
            name: 'Jyväskylä',
            lat: 62.2426,
            lon: 25.7473
          }, {
            name: 'Rauma',
            lat: 61.1309,
            lon: 21.5059
          }, {
            name: 'Ikaalinen',
            lat: 61.7682,
            lon: 23.0747
          }, {
            name: 'Harjavalta',
            lat: 61.3137,
            lon: 22.1413
          }, {
            name: 'Pori',
            lat: 61.4851,
            lon: 21.7974
          }, {
            name: 'Tampere',
            lat: 61.4978,
            lon: 23.7610
          }, {
            name: 'Kuopio',
            lat: 62.8980,
            lon: 27.6782
          }, {
            name: 'Kemijärvi',
            lat: 66.7136,
            lon: 27.4292
          }, {
            name: 'Tammisaari',
            lat: 59.9742,
            lon: 23.4376
          }, {
            name: 'Kuusamo',
            lat: 65.9646,
            lon: 29.1887
          }, */ {
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
            name: 'Taormina',
            lat: 37.8516,
            lon: 15.2853
          }, {
            name: 'Syracuse',
            lat: 37.0755,
            lon: 15.2866
          }, {
            name: 'Budapest',
            lat: 47.4979,
            lon: 19.0402
          }, {
            name: 'Stockholm',
            lat: 59.3293,
            lon: 18.0686
          }, {
            name: 'Gävle',
            lat: 60.6749,
            lon: 17.1413
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
          }, /* {
            name: 'Zürich',
            lat: 47.3769,
            lon: 8.5417
          } */ {
            name: 'Nikosia',
            lat: 35.1856,
            lon: 33.3823
          }, {
            name: 'Vaduz',
            lat: 47.1410,
            lon: 9.5209
          }],
          name: 'Visited cities',
          tooltip: {
            headerFormat: '',
            pointFormat: '<b>{point.name}</b>'
          },
          type: 'mappoint',
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
