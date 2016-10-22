Rails.application.routes.draw do
  root 'users#new' # login/signup

  get  '/leaderboard', to: 'pages#leaderboard' # leaderboard (static)
  get  '/game', to: 'pages#game' # game page (static)

  post '/signup', to: 'users#create' # creates a user

  get    '/login',   to: 'sessions#new' # login page for a specific user
  post   '/login',   to: 'sessions#create' # create new session
  delete '/logout',  to: 'sessions#destroy' # destroy session

  resources :users
end
