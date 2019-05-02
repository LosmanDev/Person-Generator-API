document.getElementById("bttn").addEventListener("click", getPerson);

let image = document.getElementById("img");
let gender = document.querySelector(".gender");

let title = document.querySelector(".title");
let firstName = document.querySelector(".firstName");
let lastName = document.querySelector(".lastName");
let age = document.querySelector(".age");
let loc = document.querySelector(".location");

function getPerson() {
  fetch("https://randomuser.me/api/")
    .then(res => {
      return res.json();
    })
    .then(data => {
      image.setAttribute("src", data.results[0].picture.large);
      title.textContent = data.results[0].name.title.toUpperCase();
      firstName.textContent = data.results[0].name.first.toUpperCase();
      lastName.textContent = data.results[0].name.last.toUpperCase();
      age.textContent = data.results[0].dob.age;
      loc.innerHTML = `City - ${data.results[0].location.state.toUpperCase()} <br/>
      State - ${data.results[0].location.city.toUpperCase()}`;

      if (data.results[0].gender === "female") {
        gender.innerHTML = "Female" + ' <i class="fas fa-female"></i>';
      } else {
        gender.innerHTML = "Male" + ' <i class="fas fa-male"></i>';
      }
    })

   .catch(err => console.log(err));
}
