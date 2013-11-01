class ThirdPersonsController < ApplicationController
  def index
    require 'twitter'
    require 'rubygems'

    @stuffs = Twitter.search("to:justinbieber marry me", :count => 10, :result_type => "recent").results.map

    Twitter.search("to:justinbieber marry me", :count => 10, :result_type => "recent").results.map do |status|
          puts "#{status.inspect}"
          puts "#{status.id}"
          puts "#{status.user[:name]}"
    end

    respond_to do |format|
      format.html
      format.json { render :json => @stuff }
    end
  end



end
