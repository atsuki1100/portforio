Rails.application.routes.draw do

  root to: 'port#index'

  resources :port, onry: [:index]

end
