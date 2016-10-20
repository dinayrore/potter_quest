Rails.application.routes.draw do
  root 'pages#login'
  get  '/profile', to: 'pages#profile'
  get  '/leaderboard', to: 'pages#leaderboard'
  get  '/game', to: 'pages#game'
  get  '/signup', to: 'users#new'

  resources :users
end
