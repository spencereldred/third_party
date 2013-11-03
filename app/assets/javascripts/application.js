// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

var tweet_template = _.template('<div><li><%= name %>: <%= text %></li></div>');

$(function(){
  $.get('/third_persons.json').done(function(data) {
    _.each(data, function(tweet) {
      $('#results').append(tweet_template(tweet));
        //console.log(tweet["name"]);
        //console.log(tweet["text"]);
    });
  });

  $('form').on('submit', function(event){
    event.preventDefault();
    var query = $('#search_term').val();

    var tweet_call = $.ajax({
      url: "../tweets",
      type: "get",
      data: {q: query}

    });

    $('#results').html("");

    tweet_call.done(function(data) {
    _.each(data, function(tweet) {
      $('#results').append(tweet_template(tweet));
        //console.log(tweet["name"]);
        //console.log(tweet["text"]);
    });
  });

    // tweet_call.done(function(data){
    //    for(var i=0; i < data.length; i++){
    //     console.log(data[i]["text"]);
    //     var item = "<li>" + data[i]["text"] + "</li>";
    //     $('#results').append(item);
    //    }
    // });

    $('#search_term').val("");

  });



});
