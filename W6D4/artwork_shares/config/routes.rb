Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :users
    get 'users', to: 'users#index', as: 'users'
    post 'users', to: 'users#create'
    get 'users/:id', to: 'users#show', as: 'user'
    delete 'users/:id', to: 'users#destroy'
    patch 'users/:id', to: 'users#update'
    # get 'users/new', to: 'users#new', as: 'new_user' 
    # get 'users/:id/edit', to: 'users#edit', as: 'edit_user'
    resources :artworks, except: [:new, :edit, :index]
    resources :artworkshares, only: [:create, :destroy]
    get 'users/:user_id/artworks', to: 'artworks#index'

    resources :comments, only: [:create, :destroy, :index]

    get 'users/:id/favorited', to: 'users#get_favorites'
    post 'users/:user_id/:artwork_id', to: 'users#create_favorite'
end