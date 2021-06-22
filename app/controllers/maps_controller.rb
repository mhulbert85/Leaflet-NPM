class MapsController < ApplicationController
  def marker
  end

  def markers 
    @places = Place.all          # Get all places in table and render as json
    respond_to do |format|
      format.html 
      format.json { render json: @places }
    end
  end
end
