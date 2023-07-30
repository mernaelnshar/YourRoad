      let body = document.getElementById("body");
      let detailesCurrent = document.querySelector(".detailesCurrent");
      let closeDetile = document.querySelector(".closeDetile");
      let nameH2 = document.querySelector(".nameH2");
      let desc = document.querySelector(".desc");
      let booknow=document.querySelector(".book-now");
      let allcards = document.querySelector("#allcards");

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
function DisplayData() {
  db.collection("TeacherReg").get().then((querySnapshot) => {
    allcards.innerHTML = "";
    querySnapshot.forEach((doc) => {
      let card =`<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div class="card">
        <img src="images/${doc.data().photo}.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title"> ${doc.data().Name} </h5>
          <p class="card-text">  ${doc.data().material}  </p>
          <p class="card-text">  ${doc.data().phone}  </p>
          <p class="card-text">  ${doc.data().email}  </p>
          <p class="card-text">  ${doc.data().job}  </p>
        </div>
      
        <div class="card-body">
           <button class="book-now">حجز الان</button>
          <button class="details">التفاصيل</button>
        </div>
      </div>
      </div>`
      allcards.innerHTML += card;
    });
  }).catch((error) => {
    console.error("Error reading products: ", error);
  });

}

window.onload = DisplayData();


{/* <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
<div class="card">
  <img src="/images/t5.jpg" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">وليد عمر عبدالحليم</h5>
    <p class="card-text">مدرس اول لغة عربية</p>
  </div>

  <div class="card-body">
     <button class="book-now">حجز الان</button>
    <button class="details">التفاصيل</button>
  </div>
</div>
</div> */}









//       booknow.addEventListener("click",()=>{
// alert("merna")
//       });
const popper = document.querySelector(".popper");
      body.addEventListener("click", (e) => 
      {
        if (e.target.classList == "details") 
        {
          document.images.src =
            e.target.parentElement.previousElementSibling.previousElementSibling.src;
          nameH2.innerHTML =
            e.target.parentElement.previousElementSibling.firstElementChild.innerHTML;
          desc.innerHTML =
            e.target.parentElement.previousElementSibling.lastElementChild.innerHTML+"<br>خصم 50% ، خبره 10 سنين تدريس"
            detailesCurrent.style.transform = "scale(1)";
            
        }

        if (e.target.classList == "book-now") {
          popper.style.transform="scale(1)"
        }

        if (e.target.classList == "btnclose") {
          popper.style.transform="scale(0)"
        }

      });
      closeDetile.addEventListener("click", () => {
        detailesCurrent.style.transform = "scale(0)";
      });



     

   