ThirdPerson::Application.routes.draw do
  root :to => 'third_persons#index'
  resources :third_persons
  get '/tweets', to: 'third_persons#tweets'

end
