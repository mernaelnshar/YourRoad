// Get form data
var photo = document.getElementById("selectimg");
var stage = document.getElementById("selectstage");
var Name = document.getElementById("name-register");
var phone = document.getElementById("phone-register");
var email = document.getElementById("email-register");
var password = document.getElementById("pass-register");
var confirmpass = document.getElementById("confirm-pass");
var material = document.getElementById("material");
var job= document.getElementById("job");
var degree= document.getElementById("degree");
var btnsave= document.getElementById("btnsave");
var Email = document.getElementById("email-register2");
var Password = document.getElementById("pass-register2");
var btnsave2= document.getElementById("btnsave2");
var tbody   = document.getElementById("tablebody")



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


/*************************** */
// Register
let dataRegister = JSON.parse(localStorage.getItem('newPerson')) || [];

btnsave.onclick = function(){
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

btnsave2.onclick = function(){
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
      window.location.href = 'tableteacher.html';

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
e.preventDefault();
 
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
    db.collection("TeacherReg")
    .add({
      Name: Name.value,
      phone: phone.value,
      email: email.value,
      password: password.value,
      material:material.value,
      job:job.value,
      degree:degree.value,
      photo : photo.value

    })
    .then(() => {
      // تمت إضافة المنتج بنجاح

      Name.value=""
      phone.value=""
      email.value=""
      password.value=""
      material.value=""
      confirmpass.value=""
      job.value=""
      degree.value=""
      photo.value =""

    
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

      localStorage.setItem("email-register2", Email);
      localStorage.setItem("pass-register2", Password);
     
      // Redirect to new page
      // window.location.href = "tableteacher.html";
      // إضافة المنتج الجديد إلى Firestore
      db.collection("TeacherLogin")
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
  


