class ThirdPersonsController < ApplicationController
  def index

    @twitter_data = Twitter.search("49ers", :count => 10, :result_type => "recent", :lang => "en")[:statuses]

    @mapped_data = @twitter_data.map do |tweet|
      { :name => tweet[:user][:screen_name],
        :text => tweet[:text]
      }
    end

    respond_to do |format|
      format.html
      format.json { render :json => @mapped_data }
    end
  end

  def tweets
    our_search = params[:q]
    @twitter_data = Twitter.search(our_search, :count => 3, :result_type => "recent", :lang => "en")[:statuses]

    @mapped_data = @twitter_data.map do |tweet|
      { :name => tweet[:user][:screen_name],
        :text => tweet[:text]
      }
    end
    render :json => @mapped_data
  end

end
