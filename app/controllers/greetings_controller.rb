class GreetingsController < ApplicationController
  def index
    response.headers['Access-Control-Allow-Origin'] = 'http://127.0.0.1:3000'
    @greetings = Greeting.all.sample
    render json: Greeting.all.sample
  end
end
