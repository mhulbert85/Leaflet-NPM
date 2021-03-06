// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"

Rails.start()

// Import images with webpack
// require.context('../images', true)

// Import custom javasrcipt with webpack
import "packs/leaflet";

// Import leaflet npm
import "jquery";
import 'leaflet';

// Import custom stylesheets with webpack
import "stylesheets/application"

