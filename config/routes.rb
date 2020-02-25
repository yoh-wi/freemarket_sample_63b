Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations',
  }
  namespace :users do
    resources :address, only: [:new, :create, :edit, :update]
  end
  devise_scope :user do
    get 'edit_profile', to: 'users/registrations#edit_profile', as: 'edit_profile'
    patch 'update_profile', to: 'users/registrations#update_profile', as: 'update_profile'
  end

  root to:"users#login"
  
end
