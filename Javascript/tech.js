// Get form data
var Name = document.getElementById("name-register");
var phone = document.getElementById("phone-register");
var email = document.getElementById("email-register");
var password = document.getElementById("pass-register");
var confirmpass = document.getElementById("confirm-pass");
var material = document.getElementById("material");
var job= document.getElementById("job");
var degree= document.getElementById("degree");
var btnsave= document.getElementById("btnsave");
var email2 = document.getElementById("email-register2");
var password2 = document.getElementById("pass-register2");
var btnsave2= document.getElementById("btnsave2");



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
// teacher
const wrapper = document.querySelector(".wrapper")
const btnteacher = document.querySelector(".btnteacher");
const iconClose2 = document.querySelector(".icon-close2");
btnteacher.addEventListener('click',()=>{
wrapper.classList.add('active-popup');
wrapper2.classList.remove('active-popup2');
})
iconClose2.addEventListener('click',()=>{
wrapper.classList.remove('active-popup');
})
// teacher login
const wrapper2 = document.querySelector(".wrapper2")
const btnteacher2 = document.querySelector(".btnteacher2");
const iconClose22 = document.querySelector(".icon-close22");
btnteacher2.addEventListener('click',()=>{
wrapper2.classList.add('active-popup2');
wrapper.classList.remove('active-popup');
})
iconClose22.addEventListener('click',()=>{
wrapper2.classList.remove('active-popup2');
})



// Register
let dataRegister = JSON.parse(localStorage.getItem('newPerson')) || [];

submit.onclick = function(){
    let newRegister = { 
        nameRegister : Name.value.trim(),
        phoneRegister : phone.value.trim(),
        emailRegister : email.value.trim(),
        password : password.value.trim(),
        confirmPass : confirmpass.value.trim(),
        material: material.value.trim(),
        jop: jop.value.trim(),
        degree : degree.value.trim(),
        
    };
    // Check for invalid input
    if (!newRegister.emailRegister || !newRegister.password || !newRegister.confirmPass || !newRegister.nameRegister || !newRegister.phoneRegister || !newRegister.material || !newRegister.jop || !newRegister.degree ) {
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
        emailLogin : email2.value.trim(),
        passLogin : password2.value.trim(),
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
       window.location.href = 'tableteacher.html';
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
  email.value = '';
  password.value = '';
  confirmpass.value = '';
    Name.value = '';
    phone.value = '';
    material.value ='';
    jop.value ='';
    degree.value ='';
}

function clearDataLogin(){
  email2.value = '';
  password2.value = '';
}






// Add Data in Firestore
btnsave.addEventListener("click",(e)=>{
e.preventDefault()
    // Save data using local storage
    localStorage.setItem("name-register", Name);
    localStorage.setItem("phone-register", phone);
    localStorage.setItem("email-register", email);
    localStorage.setItem("pass-register", password);
    localStorage.setItem("material",material);
    localStorage.setItem("job",job);
    localStorage.setItem("degree",degree);

    // Redirect to new page
    // window.location.href = "tableteacher.html";
    // إضافة المنتج الجديد إلى Firestore
    db.collection("Student")
    .add({
      Name: Name.value,
      phone: phone.value,
      email: email.value,
      password: password.value,
      material:material.value,
      job:job.value,
      degree:degree.value
    })
    .then(() => {
      // تمت إضافة المنتج بنجاح
      // DisplayData()
      Name.value=""
      phone.value=""
      email.value=""
      password.value=""
      material.value=""
      confirmpass.value=""
      job.value=""
      degree.value=""

    
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

      localStorage.setItem("email-register2", email2);
      localStorage.setItem("pass-register2", password2);
     
      // Redirect to new page
      // window.location.href = "tableteacher.html";
      // إضافة المنتج الجديد إلى Firestore
      db.collection("Teacher")
      .add({
      
        email2: email2.value,
        password2: password2.value,
    
      })
      .then(() => {
        // تمت إضافة المنتج بنجاح
        // DisplayData()
       
        email2.value=""
        password2.value=""
       
      
        console.log("Data added successfully");
      })
      .catch((error) => {
        // حدث خطأ أثناء إضافة المنتج
        console.error("Error adding Data: ", error);
      });
  })
  


function ValidOrNotname(){
  
  var regename = /^[a-zA-Z\s\W]+$/
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
   
  var regepass = /[0-9a-zA-Z]$/
if(regepass.test(password.value)==true)
{
 password.classList.add("is-valid")
 password.classList.remove("is-invalid")
    Divalert.classList.replace("d-block","d-none")
}
else
{
//alert("يجب أن يتكون من 8 أرقام وحروف وأن يحتوي على حرف واحد على الأقل.")
 password.classList.add("is-invalid")
 password.classList.remove("is-valid")
 Divalert.classList.replace("d-none","d-block")
}
}

password.addEventListener("blur",ValidOrNotpass);



function ValidOrNotstage(){
   
 var regestage = /^[ا-ي\s\W]+$/
if(regestage.test(material.value)==true)
{
 material.classList.add("is-valid")
 material.classList.remove("is-invalid")
    Divalert.classList.replace("d-block","d-none")
}
else
{
 material.classList.add("is-invalid")
 material.classList.remove("is-valid")
 Divalert.classList.replace("d-none","d-block")
}
}

stageRegister.addEventListener("blur",ValidOrNotstage);