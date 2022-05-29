(function ($) {
  var d3 = require('d3');
  var topojson = require('topojson');
  var Datamap = require('datamaps');
  var app = {
    initMap: function () {
      app.map = new Datamap({
        element: $('.map')[0],
        responsive: true,
        geographyConfig: {
          popupOnHover: true,
          highlightOnHover: false
        },
        projection: 'equirectangular',
        fills: {
          authorHasTraveledTo: 'rgba(114, 159, 152, 1.0)',
          defaultFill: 'rgba(188, 213, 209, 1.0)'
        },
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
          MKD: { fillKey: 'authorHasTraveledTo' },
          NOR: { fillKey: 'authorHasTraveledTo' },
          SWE: { fillKey: 'authorHasTraveledTo' },
          TUN: { fillKey: 'authorHasTraveledTo' },
          TUR: { fillKey: 'authorHasTraveledTo' },
          USA: { fillKey: 'authorHasTraveledTo' }
        }
      });
    },
    initEvents: function () {
      window.addEventListener('resize', function(event) {
        app.map.resize();
      });
    },
    init: function () {
      app.initMap();
      app.initEvents();
    }
  };
  $(document).ready(function () {
    app.init();
  });
})(jQuery);