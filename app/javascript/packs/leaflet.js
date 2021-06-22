$(function () {

  /*** Leaflet NPM ***/

  // Hard code map center coordinates
  const lat = -28.6474
  const lng = 153.6020

  // Create a new map object
  // See https://leafletjs.com/reference-1.7.1.html#map-factory
  let map = new L.Map("map", {
    center: [lat, lng],
    zoom: 5,
    layers: new L.TileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png")
  });

  // Create a custom icon & set required options
  // See https://leafletjs.com/reference-1.7.1.html#icon
  const icon = L.icon({
    iconSize: [30, 50],
    iconAnchor: [15, 50],
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    shadowSize: [50, 50],
    shadowAnchor: [15, 50],
    tooltipAnchor: [0, -50]
  });

  const addMarkerToMap = function (title, lat, lng) {
    // Create a custom marker, add custom icon & set required options
    // See https://leafletjs.com/reference-1.7.1.html#marker

    const marker = L.marker([lat, lng], {
      icon: icon
    });

    // Create a tooltip & set required options
    // See https://leafletjs.com/reference-1.7.1.html#tooltip
    const toolTip = L.tooltip({
      direction: 'top',
    });

    // Bind custom tooltip & tooltip title to marker
    // See https://leafletjs.com/reference-1.7.1.html#tooltip
    marker.bindTooltip(toolTip).bindTooltip(title);

    // Add marker to the map
    // See https://leafletjs.com/reference-1.7.1.html#map-addlayer
    map.addLayer(marker);
  }

  // If map contains class 'multiple' loop through all places and append makers to map
  // else show one hardcoded map marker
  if ($('#map').hasClass('multiple')) {
    $.ajax({
      url: "/markers/",
      dataType: "json",
      success: function (data) {
        for (let i = 0; i < data.length; i++) {
          const place = data[i];
          addMarkerToMap(place["title"], place["lat"], place["lng"]);
        }
      }
    });
  } else {
    addMarkerToMap("Byron Bay", lat, lng)
  }

});