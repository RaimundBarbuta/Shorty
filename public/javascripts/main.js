$('#post').click(function(){
  var URL = $('input[name="url"]').val();
  $.ajax('http://46.101.9.7:3000/', {
    method: 'POST',
    crossDomain: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      url: URL
    },
    success: function(data){
        $('input[name="shortUrl"]').val(data);
    }
  });
});
