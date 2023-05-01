Rails.application.routes.draw do
  root 'root#index'
  get 'greetings', to: 'greetings#index'
end
