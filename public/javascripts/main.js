$('#post').click(function(){
  var URL = $('input[name="url"]').val();
  $.ajax('http://188.166.172.54:3000/urlapi', {
    method: 'POST',
    crossDomain: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      url: URL
    },
    success: function(data){
        console.log(data);
        console.log('post');
        $.ajax('http://188.166.172.54:3000/urlapi'), {
          method: 'GET',
          crossDomain: true,
          headers: {
            'Access-Control-Allow-Origin': '*'
          },
          success: function(data){
            console.log(data);
            var tag = $('<p>')
            tag.text(data.shortUrl)
            $('input[name="shortUrl"]').val(data.shortUrl);
          }
      }
    }
  });
});
