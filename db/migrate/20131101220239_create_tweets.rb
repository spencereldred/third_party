class CreateTweets < ActiveRecord::Migration
  def change
    create_table :tweets do |t|
      t.string :title
      t.string :body
      t.string :tweet_content

      t.timestamps
    end
  end
end
