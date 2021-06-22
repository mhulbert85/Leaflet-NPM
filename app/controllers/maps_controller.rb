class MapsController < ApplicationController
  def marker
  end

  def markers 
    @places = Place.all
  end
end
