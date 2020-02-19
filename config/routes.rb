Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations',
  }
  devise_scope :user do
    get 'edit_profile', to: 'users/registrations#edit_profile', as: 'edit_profile'
    patch 'update_profile', to: 'users/registrations#update_profile', as: 'update_profile'
    get 'new_address', to: 'users/registrations#new_address', as: 'new_address'
    post 'create_address', to: 'users/registrations#create_address', as: 'create_address'
    get 'edit_address', to: 'users/registrations#edit_address', as: 'edit_address'
    patch 'update_profile', to: 'users/registration#update_address', as: 'update_address'
  end

  root to: "home#index"
end
