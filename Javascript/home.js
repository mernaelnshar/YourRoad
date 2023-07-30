// Get form data
var Name = document.getElementById("name-register");
var phone = document.getElementById("phone-register");
var email = document.getElementById("email-register");
var password = document.getElementById("pass-register");
var confirmpass = document.getElementById("confirm-pass");
var stage=document.getElementById("stage-register");

var btnsave= document.getElementById("submit");
var Email = document.getElementById("email-login");
var Password = document.getElementById("pass-login");
var btnsave2= document.getElementById("login");

var registerBtn = document.querySelector('.account-form .register-btn');
var loginBtn = document.querySelector('.account-form .login-btn');
var accountForm = document.querySelector('.account-form');


const firebaseConfig = {
  apiKey: "AIzaSyDomgJiZFfNg9OZMVew-vHio1zNKBfzNmk",
  authDomain: "your-road-3e46a.firebaseapp.com",
  projectId: "your-road-3e46a",
  storageBucket: "your-road-3e46a.appspot.com",
  messagingSenderId: "342294798722",
  appId: "1:342294798722:web:614689edea5694a1eeaf9b",
  measurementId: "G-KXD0GMNMTJ"
};

firebase.initializeApp(firebaseConfig);

// Get a reference to tde Firestore service
const db = firebase.firestore();


// Switch between login and register forms
registerBtn.onclick = () =>{
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');
    document.querySelector('.account-form .login-form').classList.remove('active');
    document.querySelector('.account-form .register-form').classList.add('active');
};

loginBtn.onclick = () =>{
    registerBtn.classList.remove('active');
    loginBtn.classList.add('active');
    document.querySelector('.account-form .login-form').classList.add('active');
    document.querySelector('.account-form .register-form').classList.remove('active');
};

// Show account form
document.querySelectorAll('.btnLogin, .Joinn, .SignUp').forEach(btn => {
  btn.onclick = () => {
    accountForm.classList.add('active');
  };
});

// Hide account form
document.querySelector('#close-form').onclick = () =>{
    accountForm.classList.remove('active');
};

/*************************** */
// Register
let dataRegister = JSON.parse(localStorage.getItem('newPerson')) || [];

submit.onclick = function(){
    let newRegister = {
      email : email.value.trim(),
        password : password.value.trim(),
        confirmpass : confirmpass.value.trim(),
        Name : Name.value.trim(),
        phone : phone.value.trim(),
        stage : stage.value.trim()
    };
    // Check for invalid input
    if (!newRegister.email || !newRegister.password || !newRegister.confirmpass || !newRegister.Name || !newRegister.phone || !newRegister.stage) {
      alert('الرجاء إدخال جميع الحقول.');
      return;
    }
    
    // Check for matching passwords
    if (newRegister.password !== newRegister.confirmpass) {
      alert('كلمة المرور غير متطابقة.');
      return;
    }
    // Add new user to dataRegister and save to localStorage
    dataRegister.push(newRegister);
    localStorage.setItem('newPerson', JSON.stringify(dataRegister));
    
};

// Login
let dataLogin = JSON.parse(localStorage.getItem('person')) || [];

login.onclick = function(){
    let loginData = {
      Email : Email.value.trim(),
      Password : Password.value.trim(),
    };
    // Check for invalid input
    if (!loginData.Email || !loginData.Password) {
      alert('الرجاء إدخال بريد إلكتروني وكلمة مرور صالحين.');
      return;
    }
    // Check for matching user
    let matchedUser = dataRegister.find(function(user) {
      return user.email === loginData.Email && user.password === loginData.Password;
    });
    if (matchedUser) {
      window.location.href = 'stage.html';

    } else {
      alert('خطأ في بريد الدخول أو كلمة المرور.');
    }
    // Save login data to localStorage
    dataLogin.push(loginData);
    localStorage.setItem('person', JSON.stringify(dataLogin));
    clearDataLogin();
};




// Add Data in Firestore
btnsave.addEventListener("click",(e)=>{
e.preventDefault()
    // Save data using local storage
    localStorage.setItem("name-register", Name);
    localStorage.setItem("phone-register", phone);
    localStorage.setItem("email-register", email);
    localStorage.setItem("pass-register", password);


    // Redirect to new page
    // window.location.href = "tableteacher.html";
    // إضافة المنتج الجديد إلى Firestore
    db.collection("StudentReg")
    .add({
      Name: Name.value,
      phone: phone.value,
      email: email.value,
      password: password.value,
      stage:stage.value
      
    })
    .then(() => {
      // تمت إضافة المنتج بنجاح
      // DisplayData()
      Name.value=""
      phone.value=""
      email.value=""
      password.value=""
      confirmpass.value=""
      stage.value=""
      console.log("Data added successfully");
    })
    .catch((error) => {
      // حدث خطأ أثناء إضافة المنتج
      console.error("Error adding Data: ", error);
    });
})



// login
// Add Data in Firestore
btnsave2.addEventListener("click",(e)=>{
  e.preventDefault()
      // Save data using local storage

      localStorage.setItem("email-login", Email);
      localStorage.setItem("pass-login", Password);
     
      // Redirect to new page
      // window.location.href = "tableteacher.html";
      // إضافة المنتج الجديد إلى Firestore
      db.collection("StudentLogin")
      .add({
      
        Email: Email.value,
        Password: Password.value,
    
      })
      .then(() => {
        // تمت إضافة المنتج بنجاح
        // DisplayData()
       
        Email.value=""
        Password.value=""
        console.log("Data added successfully");
      })
      .catch((error) => {
        // حدث خطأ أثناء إضافة المنتج
        console.error("Error adding Data: ", error);
      });
  })
   
  function ValidOrNotname(){
    // var regex = /^[A-Z][a-z]{3,8}$/
    var regename = /^[A-Z][a-z]+( [A-Z][a-z]+)*$/
    if(regename.test(Name.value)==true)
    {
        Name.classList.add("is-valid")
        Name.classList.remove("is-invalid")
        Divalert.classList.replace("d-block","d-none")
    }
    else
    {
        Name.classList.add("is-invalid")
        Name.classList.remove("is-valid")
        Divalert.classList.replace("d-none","d-block")
    }
}

Name.addEventListener("blur",ValidOrNotname);


function ValidOrNotstage(){
  // var regex = /^[A-Z][a-z]{3,8}$/
   var regestage = /^[ا-ي]+( [ا-ي]+)*$/
  if(regestage.test(stage.value)==true)
  {
    stage.classList.add("is-valid")
    stage.classList.remove("is-invalid")
      Divalert.classList.replace("d-block","d-none")
  }
  else
  {
    stage.classList.add("is-invalid")
    stage.classList.remove("is-valid")
      Divalert.classList.replace("d-none","d-block")
  }
}

stage.addEventListener("blur",ValidOrNotstage);



function ValidOrNotphone(){
   
 var regephone = /^(\+2)?(01[0-2]|015)[0-9]{8}$/
if(regephone.test(phone.value)==true)
{
 phone.classList.add("is-valid")
 phone.classList.remove("is-invalid")
    Divalert.classList.replace("d-block","d-none")
}
else
{
 
 phone.classList.add("is-invalid")
 phone.classList.remove("is-valid")
    Divalert.classList.replace("d-none","d-block")
}
}

phone.addEventListener("blur",ValidOrNotphone);

function ValidOrNotemail(){
   
 var regeemail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
if(regeemail.test(email.value)==true)
{
 email.classList.add("is-valid")
 email.classList.remove("is-invalid")
    Divalert.classList.replace("d-block","d-none")
}
else
{
 
 email.classList.add("is-invalid")
 email.classList.remove("is-valid")
    Divalert.classList.replace("d-none","d-block")
}
}

email.addEventListener("blur",ValidOrNotemail);

function ValidOrNotpass(){
   
 var regepass = /^[0-9]{1,14}$/
if(regepass.test(password.value)==true)
{
 password.classList.add("is-valid")
 password.classList.remove("is-invalid")
    Divalert.classList.replace("d-block","d-none")
}
else
{
 password.classList.add("is-invalid")
 password.classList.remove("is-valid")
 Divalert.classList.replace("d-none","d-block")
}
}
password.addEventListener("blur",ValidOrNotpass);



