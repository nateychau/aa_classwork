Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :destroy, :show]
    resource :session, only: [:create, :destroy]
    resources :benches, only: [:create, :index]
  end

  root to: "static_pages#root"
end
