  function formamsg1(){
			  var ime = document.getElementById("ime").value;
		
			  var email = document.getElementById("email").value;
			  var poruka = document.getElementById("poruka").value;
			  var dataString = "ime="+encodeURIComponent(ime)+"&email="+encodeURIComponent(email)+"&poruka="+encodeURIComponent(poruka);
			$.ajax({
				  type:"post",
				  url: "obavestenje.php",
				  cashe: false,
				  data: dataString,
				  success: function(data){
					  //window.alert(data);
					  document.getElementById("placefortable").innerHTML = data;
				  },
				  error: function (req, status, err) {
				console.log('Something went wrong', status, err);
				}
			  })
			  return false;
}

