Rails.application.routes.draw do
  root 'users#new' # login/signup

  get  '/leaderboard', to: 'pages#leaderboard' # leaderboard (static)
  get  '/game', to: 'pages#game' # game page (static)
  get '/document', to: 'documents#new'

  post '/signup', to: 'users#create' # creates a user
  post '/game', to: 'games#create'
  post '/document', to: 'documents#create'

  get    '/login',   to: 'sessions#new' # login page for a specific user
  post   '/login',   to: 'sessions#create' # create new session
  delete '/logout',  to: 'sessions#destroy' # destroy session

  resources :users
  resources :games
  resources :documents
end
