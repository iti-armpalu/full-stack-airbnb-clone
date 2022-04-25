Rails.application.routes.draw do
  root to: 'static_pages#home'

  get '/property/:id'               => 'static_pages#property'
  get '/login'                      => 'static_pages#login'
  get '/bookings'                   => 'static_pages#bookings'
  get '/listings'                   => 'static_pages#listings'
  get '/add-property'               => 'static_pages#add_property'
  get '/property/:id/edit-property' => 'static_pages#edit_property'
  get '/property/:id/reservations'  => 'static_pages#property_reservations'
  get '/reservations'                => 'static_pages#reservations'
  get '/booking/:id/success'        => 'static_pages#booking'

  namespace :api do
    # Add routes below this line
    # resources :users, only: [:create]
    # resources :sessions, only: [:create, :destroy]
    # resources :properties, only: [:index, :show]
    resources :bookings, only: [:create, :show]
    resources :charges, only: [:create]

    # USERS
    post '/users'                       => 'users#create'

    # PROPERTIES
    post '/properties'                  => 'properties#create'
    get '/properties/'                => 'properties#index'
    get '/properties/:id'             => 'properties#show'
    get '/users/:username/properties'   => 'properties#index_by_user'
    patch '/properties/:id'           => 'properties#update'
    delete '/properties/:id'           => 'properties#destroy'

    # SESSIONS
    post '/sessions'               => 'sessions#create'
    get  '/authenticated'          => 'sessions#authenticated'
    get  '/sessions/:id'          => 'sessions#show'
    delete '/sessions'             => 'sessions#destroy'

    # BOOKINGS
    get '/properties/:id/bookings'   => 'bookings#get_property_bookings'
    get '/users/:username/bookings'  => 'bookings#index_by_user'

    # stripe webhook
    post '/charges/mark_complete'   => 'charges#mark_complete'

  end

end