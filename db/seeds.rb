Place.destroy_all 
p1 = Place.create title: 'Byron Bay', lat: -28.6474, lng: 153.6020
p2 = Place.create title: 'Sydney', lat: -33.8688, lng: 151.2093
p3 = Place.create title: 'Perth', lat: -31.9523, lng: 115.8613
puts "#{ Place.count } places"