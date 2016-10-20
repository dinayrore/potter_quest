Rails.application.routes.draw do
  root 'static_pages#login'
  get  '/profile', to: 'static_pages#profile'
  get  '/leaderboard', to: 'static_pages#leaderboard'
  get  '/game', to: 'static_pages#game'
end
