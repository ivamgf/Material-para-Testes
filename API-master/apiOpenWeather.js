window.onload = function(){
var btVer = document.getElementById("btVer");

btVer.onclick = VerPrevisao;

}

function VerPrevisao(){
     var inputCidade = document.getElementById("cidade");
     var cidade = inputCidade.value;
     localStorage.setItem("cidadeSalva", cidade);
     var api = "http://api.openweathermap.org/data/2.5/weather?q=";
     var apiKey = "&APPID=43341c9cfb6658c2976c3333031399bd";
     var url = api + inputCidade.value + apiKey;
     //var span = document.getElementById("mensagem");
     //span.innerHTML = "A url é: "+url;
     location.href=url;
}
