Rails.application.routes.draw do
  root to: "tests#index"
  resources :tests, only: :index
end
