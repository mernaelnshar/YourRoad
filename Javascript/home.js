// Get form data
var Name = document.getElementById("name-register");
var phone = document.getElementById("phone-register");
var email = document.getElementById("email-register");
var password = document.getElementById("pass-register");
var confirmpass = document.getElementById("confirm-pass");
var stage = document.getElementById("stage-register");

var btnsave = document.getElementById("submit");
var Email = document.getElementById("email-login");
var Password = document.getElementById("pass-login");
var btnsave2 = document.getElementById("login");

var registerBtn = document.querySelector('.account-form .register-btn');
var loginBtn = document.querySelector('.account-form .login-btn');
var accountForm = document.querySelector('.account-form');


// Switch between login and register forms
registerBtn.onclick = () => {
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');
    document.querySelector('.account-form .login-form').classList.remove('active');
    document.querySelector('.account-form .register-form').classList.add('active');
};

loginBtn.onclick = () => {
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
document.querySelector('#close-form').onclick = () => {
    accountForm.classList.remove('active');
};

/*************************** */

// ===== بيانات ثابتة =====
const FIXED_EMAIL = "student@gmail.com";
const FIXED_PASSWORD = "123456";

// Register
btnsave.onclick = function(e){
    e.preventDefault();

    if(
        !Name.value ||
        !phone.value ||
        !email.value ||
        !password.value ||
        !confirmpass.value ||
        !stage.value
    ){
        alert("الرجاء إدخال جميع البيانات");
        return;
    }

    if(password.value !== confirmpass.value){
        alert("كلمة المرور غير متطابقة");
        return;
    }

    alert("تم التسجيل بنجاح ✅");

    // تنظيف الحقول
    Name.value = "";
    phone.value = "";
    email.value = "";
    password.value = "";
    confirmpass.value = "";
    stage.value = "";
};

// Login

btnsave2.onclick = function(e){
    e.preventDefault();

    let userEmail = Email.value.trim();
    let userPassword = Password.value.trim();

    if(!userEmail || !userPassword){
        alert("ادخل الايميل والباسورد");
        return;
    }

    // ✅ مقارنة ببيانات ثابتة
    if(
        userEmail === FIXED_EMAIL &&
        userPassword === FIXED_PASSWORD
    ){
        alert("تم تسجيل الدخول بنجاح ✅");

        window.location.href = "stage.html";
    }
    else{
        alert("الإيميل أو الباسورد غير صحيح ❌");
    }

    Email.value = "";
    Password.value = "";
};

/*************************** */
// Validation functions
function ValidOrNotname(){
    var regename = /^[A-Z][a-z]{3,8}$/;
    if(regename.test(Name.value)){
        Name.classList.add("is-valid");
        Name.classList.remove("is-invalid");
        Divalert.classList.replace("d-block","d-none");
    } else {
        Name.classList.add("is-invalid");
        Name.classList.remove("is-valid");
        Divalert.classList.replace("d-none","d-block");
    }
}
Name.addEventListener("blur", ValidOrNotname);

function ValidOrNotstage(){
    var regestage = /^[ا-ي]+( [ا-ي]+)*$/;
    if(regestage.test(stage.value)){
        stage.classList.add("is-valid");
        stage.classList.remove("is-invalid");
        Divalert.classList.replace("d-block","d-none");
    } else {
        stage.classList.add("is-invalid");
        stage.classList.remove("is-valid");
        Divalert.classList.replace("d-none","d-block");
    }
}
stage.addEventListener("blur", ValidOrNotstage);

function ValidOrNotphone(){
    var regephone = /^(\+2)?(01[0-2]|015)[0-9]{8}$/;
    if(regephone.test(phone.value)){
        phone.classList.add("is-valid");
        phone.classList.remove("is-invalid");
        Divalert.classList.replace("d-block","d-none");
    } else {
        phone.classList.add("is-invalid");
        phone.classList.remove("is-valid");
        Divalert.classList.replace("d-none","d-block");
    }
}
phone.addEventListener("blur", ValidOrNotphone);

function ValidOrNotemail(){
    var regeemail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(regeemail.test(email.value)){
        email.classList.add("is-valid");
        email.classList.remove("is-invalid");
        Divalert.classList.replace("d-block","d-none");
    } else {
        email.classList.add("is-invalid");
        email.classList.remove("is-valid");
        Divalert.classList.replace("d-none","d-block");
    }
}
email.addEventListener("blur", ValidOrNotemail);

function ValidOrNotpass(){
    var regepass = /^[0-9]{1,14}$/;
    if(regepass.test(password.value)){
        password.classList.add("is-valid");
        password.classList.remove("is-invalid");
        Divalert.classList.replace("d-block","d-none");
    } else {
        password.classList.add("is-invalid");
        password.classList.remove("is-valid");
        Divalert.classList.replace("d-none","d-block");
    }
}
password.addEventListener("blur", ValidOrNotpass);