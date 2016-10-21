Rails.application.routes.draw do
  root 'users#new' # login/signup

  get  '/profile', to: 'pages#profile' # user profile (static)
  get  '/leaderboard', to: 'pages#leaderboard' # leaderboard (static)
  get  '/game', to: 'pages#game' # game page (static)

  post '/signup', to: 'users#create' # creates a user

  get    '/login',   to: 'sessions#new' # login page
  post   '/login',   to: 'sessions#create' # create new session
  delete '/logout',  to: 'sessions#destroy' # destroy session

  resources :users
end
