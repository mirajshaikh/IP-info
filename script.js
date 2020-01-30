  //api key https://api.ipgeolocation.io/ipgeo?apiKey=9ca8963aff474f50aa21560017ea3a7e
     $(document).ready(function() {
        $.ajax({
    url: "https://api.ipgeolocation.io/ipgeo?apiKey=9ca8963aff474f50aa21560017ea3a7e",
    dataType: 'json',
    success: function(results){
        //console.log(results);
        $('#getInfo').click(function(){
        $('#ip').text("Your Ip Address Is : " + results.ip)
        $('#country').text('Your Country Is ' + results.country_name)
        $('#city').text('Your City Is ' + results.city)
        $('#countryImg').attr('src', results.country_flag)
        $('#currency').text('Your Currency Name Is ' + results.currency.name )
        $('#currencyCode').text('Your currency Code Is '+ results.currency.code)
        $('#currencySym').text('Your Currency Symbol is '+ results.currency.symbol)
});
    }
        });
      });