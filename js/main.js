// document.getElementById("new_login").onmouseover = function() {mouseOver()};
// document.getElementById("login").onmouseover = function() {mouseOver()};

// login overlay
let login = document.getElementById('login');
let newLogin = document.getElementById('new_login');
let choice = document.getElementById('choice');
let choice1 = document.getElementById('choice_1');


const newUserLogin = () => {
  choice.innerHTML = "EÐA";
  choice1.innerHTML = "Skráðu þig inn á eftir";
}

const Login = () => {
  newLogin.classList.remove("activee");
  choice.innerHTML = "Ekki með aðgang? ";
  choice1.innerHTML = "Skelltu þér þá yfir í nýskráningu!";
}

// $('#login').hover(
//    $('#new_login').toggleClass('activee')
// );
