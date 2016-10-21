Rails.application.routes.draw do
  root 'users#new' # login/signup

  get  '/profile', to: 'pages#profile' # user profile (static)
  get  '/leaderboard', to: 'pages#leaderboard' # leaderboard (static)
  get  '/game', to: 'pages#game' # game page (static)

  post '/signup', to: 'users#create' # creates a user

  resources :users
end
