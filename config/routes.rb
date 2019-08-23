Rails.application.routes.draw do

  root to: 'port#index'

  resources :port, only: [:index] do
    collection do
      get :works
      get :about 
    end
  end

end
