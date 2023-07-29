// Account Form
let registerBtn = document.querySelector('.account-form .register-btn');
let loginBtn = document.querySelector('.account-form .login-btn');
let accountForm = document.querySelector('.account-form');
let nameRegister = document.getElementById('name-register');
let phoneRegister = document.getElementById('phone-register');
let emailRegister = document.getElementById('email-register');
let password = document.getElementById('pass-register');
let confirmPass = document.getElementById('confirm-pass');
let emailLogin = document.getElementById('email-login');
let passLogin = document.getElementById('pass-login');
let stageRegister = document.getElementById("stage-register");

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

// Register
let dataRegister = JSON.parse(localStorage.getItem('newPerson')) || [];

submit.onclick = function(){
    let newRegister = {
        emailRegister : emailRegister.value.trim(),
        password : password.value.trim(),
        confirmPass : confirmPass.value.trim(),
        nameRegister : nameRegister.value.trim(),
        phoneRegister : phoneRegister.value.trim(),
        stageRegister : stageRegister.value.trim(),
    };
    // Check for invalid input
    if (!newRegister.emailRegister || !newRegister.password || !newRegister.confirmPass || !newRegister.nameRegister || !newRegister.phoneRegister || !newRegister.stageRegister) {
      alert('الرجاء إدخال جميع الحقول.');
      return;
    }
    
    // Check for matching passwords
    if (newRegister.password !== newRegister.confirmPass) {
      alert('كلمة المرور غير متطابقة.');
      return;
    }
    
    // Add new user to dataRegister and save to localStorage
    dataRegister.push(newRegister);
    localStorage.setItem('newPerson', JSON.stringify(dataRegister));
    clearDataRegister();
};

// Login
let dataLogin = JSON.parse(localStorage.getItem('person')) || [];

login.onclick = function(){
    let loginData = {
        emailLogin : emailLogin.value.trim(),
        passLogin : passLogin.value.trim(),
    };
    // Check for invalid input
    if (!loginData.emailLogin || !loginData.passLogin) {
      alert('الرجاء إدخال البريد الإلكتروني وكلمة مرور صالحين.');
      return;
    }
    // Check for matching user
    let matchedUser = dataRegister.find(function(user) {
      return user.emailRegister === loginData.emailLogin && user.password === loginData.passLogin;
    });
    if (matchedUser) {
       window.location.href = 'stage.html';
    } 
    else {
      alert('خطأ في البريد الإلكتروني أو كلمة المرور.');
    }
    // Save login data to localStorage
    dataLogin.push(loginData);
    localStorage.setItem('person', JSON.stringify(dataLogin));
    clearDataLogin();

   
};

// Clear input fields
function clearDataRegister(){
    emailRegister.value = '';
    password.value = '';
    confirmPass.value = '';
    nameRegister.value = '';
    phoneRegister.value = '';
    stageRegister.value ='';
}

function clearDataLogin(){
    emailLogin.value = '';
    passLogin.value = '';
}

//  *****************

function ValidOrNotname(){
  
   var regename = /^[a-zA-Z\s\W]+$/
  if(regename.test(nameRegister.value)==true)
  {
    nameRegister.classList.add("is-valid")
    nameRegister.classList.remove("is-invalid")
      Divalert.classList.replace("d-block","d-none")
  }
  else
  {
    
    nameRegister.classList.add("is-invalid")
    nameRegister.classList.remove("is-valid")
    Divalert.classList.replace("d-none","d-block")
      
  }
}
nameRegister.addEventListener("blur",ValidOrNotname);

function ValidOrNotphone(){
    
  var regephone = /^(\+2)?(01[0-2]|015)[0-9]{8}$/
 if(regephone.test(phoneRegister.value)==true)
 {
  phoneRegister.classList.add("is-valid")
  phoneRegister.classList.remove("is-invalid")
     Divalert.classList.replace("d-block","d-none")
 }
 else
 {
  
  phoneRegister.classList.add("is-invalid")
  phoneRegister.classList.remove("is-valid")
     Divalert.classList.replace("d-none","d-block")
 }
}

phoneRegister.addEventListener("blur",ValidOrNotphone);

function ValidOrNotemail(){
    
  var regeemail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
 if(regeemail.test(emailRegister.value)==true)
 {
  emailRegister.classList.add("is-valid")
  emailRegister.classList.remove("is-invalid")
     Divalert.classList.replace("d-block","d-none")
 }
 else
 {
  
  emailRegister.classList.add("is-invalid")
  emailRegister.classList.remove("is-valid")
     Divalert.classList.replace("d-none","d-block")
 }
}

emailRegister.addEventListener("blur",ValidOrNotemail);

function ValidOrNotpass(){
    
  var regepass = /^(?![0-9]{8})[0-9a-zA-Z]{8}$/
 if(regepass.test(password.value)==true)
 {
  password.classList.add("is-valid")
  password.classList.remove("is-invalid")
     Divalert.classList.replace("d-block","d-none")
 }
 else
 {
  alert("يجب أن يتكون من 8 أرقام وحروف وأن يحتوي على حرف واحد على الأقل.")
  password.classList.add("is-invalid")
  password.classList.remove("is-valid")
  Divalert.classList.replace("d-none","d-block")
 }
}

password.addEventListener("blur",ValidOrNotpass);



function ValidOrNotstage(){
    
  var regestage = /^[ا-ي\s\W]+$/
 if(regestage.test(stageRegister.value)==true)
 {
  stageRegister.classList.add("is-valid")
  stageRegister.classList.remove("is-invalid")
     Divalert.classList.replace("d-block","d-none")
 }
 else
 {
  stageRegister.classList.add("is-invalid")
  stageRegister.classList.remove("is-valid")
  Divalert.classList.replace("d-none","d-block")
 }
}

stageRegister.addEventListener("blur",ValidOrNotstage);

// display student
// function Displaystudent(){
//   let tableBody = document.querySelector("#data tbody");
  
//   for(var i=0;i<dataRegister.length;i++)
//   {
//     let row =`<tr>
//       <td>${i}</td>
//       <td>${dataRegister[i].nameRegister}</td>
//       <td>${dataRegister[i].phoneRegister}</td>
//       <td>${dataRegister[i].emailRegister}</td>
//       <td>${dataRegister[i].password}</td>
//     <td>  <button class="btn btn-outline-warning" onclick="DeleteStudent(${i})" > حذف </button></td>
//       </tr>`;
//       tableBody.innerHTML += row;

//   }
// }

// // استدعاء دالة عرض البيانات عند تحميل صفحة الجدول
// if(window.location.href.indexOf("tableteacher.html") > -1){
//   Displaystudent();
// }



// delete student

function DeleteStudent(Index){
  dataRegister.splice(Index,1);
  Displaystudent();
  localStorage.setItem("Data",JSON.stringify (dataRegister));
}


