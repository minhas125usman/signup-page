// THEME TOGGLE
const themeBtn = document.getElementById("themeBtn");
themeBtn.onclick = ()=>{ document.body.classList.toggle("dark"); }

// SIGNUP FORM SUBMISSION
const signupForm = document.getElementById("signupForm");
signupForm.onsubmit = function(e){
  e.preventDefault();
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;

  if(!firstName || !lastName || !email || !password || !day || !month || !year || !gender){
    return alert("Please fill all fields!");
  }

  // Save user in localStorage
  let users = JSON.parse(localStorage.getItem("users")) || [];
  if(users.find(u=>u.email===email)) return alert("Email already exists!");
  users.push({firstName,lastName,email,password,dob:`${day}-${month}-${year}`,gender});
  localStorage.setItem("users",JSON.stringify(users));

  alert("Signup successful! Redirecting to login...");
  window.location.href="login.html";
}

