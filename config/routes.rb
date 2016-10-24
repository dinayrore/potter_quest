Rails.application.routes.draw do
  root 'users#new' # login/signup

  post '/signup', to: 'users#create' # creates a user

  get  '/leaderboard', to: 'pages#leaderboard' # leaderboard (static)

  get  '/game', to: 'games#new' # game page
  post '/game', to: 'games#create'

  # get '/document', to: redirect('/documents')
  get '/document', to: 'documents#new'
  get'/documents', to: 'documents#show'
  post '/document', to: 'documents#create'

  get    '/login',   to: 'sessions#new' # login page for a specific user
  post   '/login',   to: 'sessions#create' # create new session
  delete '/logout',  to: 'sessions#destroy' # destroy session

  resources :users
  resources :games
  resources :documents
end
