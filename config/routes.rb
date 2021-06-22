Rails.application.routes.draw do
  root to: "maps#marker"
  get 'markers', to: 'maps#markers', as: 'markers'
end
