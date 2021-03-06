Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  devise_for :admins, controllers: {
    sessions: 'admins/sessions',
  }

  namespace :admins do
    get 'top' => 'customers#index'
    resources :customers, only: [:destroy]
  end

  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations',
  }

  scope module: :users do
    root 'homes#top'
    get 'homes/about' => 'homes#about', as: 'about'
    get 'users/:id/unsubscribe' => 'users#unsubscribe', as: 'confirm_unsubscribe'
    get 'users/search' => 'searchs#search', as: 'search'
    patch 'users/:id/withdraw' => 'users#withdraw', as: 'withdraw_user'
    get 'mypage' => 'users#mypage', as: 'mypage'
    get 'users/:id/posts' => 'users#posts', as: 'user_posts'
    resources :users, only: [:show, :create, :edit, :update, :destroy]
    resources :follow_relationships, only: [:create, :destroy]
    resources :posts, only: [:index, :create, :show, :edit, :update, :destroy] do
      resource :favorites, only: [:create, :destroy]
      resources :post_comments, only: [:create, :destroy, :show]
      member do
        get :following, :followers
      end
    end
    resources :tags do
      get 'posts', to: 'posts#search'
    end
  end
end