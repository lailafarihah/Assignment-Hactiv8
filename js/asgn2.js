var form = document.getElementById("asgn2")
var nama = document.getElementById("nama")
var role = document.getElementById("role")
var availability = document.getElementById("availability")
var usia = document.getElementById("usia")
var lokasi = document.getElementById("lokasi")
var pengalaman = document.getElementById("pengalaman")
var email = document.getElementById("email")


var labelNama = document.getElementById("labelNama")
var labelRole = document.getElementById("labelRole")
var labelAvaliability = document.getElementById("labelAvaliability")
var labelUsia = document.getElementById("labelUsia")
var labelLokasi = document.getElementById("labelLokasi")
var labelPengalaman = document.getElementById("labelPengalaman")
var labelEmail = document.getElementById("labelEmail")



form.addEventListener("submit",function(event){
    event.preventDefault() 
    
    labelNama.innerText = nama.value
    labelRole.innerText = role.value
    labelAvaliability.innerText = availability.value
    labelUsia.innerText = usia.value
    labelLokasi.innerText = lokasi.value
    labelPengalaman.innerText = pengalaman.value
    labelEmail.innerText = email.value

})

function Edit() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
}

var editButton = document.getElementById("editButton");

editButton.addEventListener("click", function (event) {
    event.preventDefault();
    form.scrollIntoView({ behavior: "smooth" });
  });



