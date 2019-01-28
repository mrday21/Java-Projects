Rails.application.routes.draw do
  root to: 'pages#home'
  get 'photos', to: 'pages#photos'
end