
  let tbody   = document.getElementById("tablebody");
  let tbody2 = document.getElementById("tablebody2");
    
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

function DisplayDatateacher() {
  db.collection("TeacherReg").get().then((querySnapshot) => {
    tbody.innerHTML = "";
    querySnapshot.forEach((doc) => {
      let table =`<tr>
        <td>${doc.data().Name}</td>
        <td>${doc.data().phone}</td>
        <td>${doc.data().email}</td>
        <td>${doc.data().material}</td>
        <td>${doc.data().job}</td>
        <td>${doc.data().degree}</td>
        <td><button type="button" class="btn btn-danger">Delete</button></td>
    </tr>`;
      tbody.innerHTML += table;
    });
  }).catch((error) => {
    console.error("Error reading products: ", error);
  });
}
window.onload = DisplayDatateacher();

// Name: Name.value,
// phone: phone.value,
// email: email.value,
// password: password.value,
// stage:stage.value
function DisplayDatastudent() {
  db.collection("StudentReg").get().then((querySnapshot) => {
    tbody2.innerHTML = "";
    querySnapshot.forEach((doc) => {
      let table2 =`<tr>
        <td>${doc.data().Name}</td>
        <td>${doc.data().phone}</td>
        <td>${doc.data().email}</td>
        <td>${doc.data().stage}</td>
        <td><button type="button" class="btn btn-danger">Delete</button></td>
    </tr>`;
      tbody2.innerHTML += table2;
    });
  }).catch((error) => {
    console.error("Error reading products: ", error);
  });
}
window.onload = DisplayDatastudent();











// function DisplayData() {
//     db.collection("TeacherReg").get().then((querySnapshot) => {
//       tbody.innerHTML = "";
//       querySnapshot.forEach((doc) => {
//         let newProduct = `
//           <tr>
//             <td>${doc.data().Name}</td>
//             <td>${doc.data().phone}</td>
//             <td>${doc.data().email}</td>
//             <td>${doc.data().material}</td>
//             <td>${doc.data().job}</td>
//             <td>${doc.data().degree}</td>
//             <td><button type="button" class="btn btn-danger">Delete</button></td>
//           </tr>`;
//         tbody.innerHTML += newProduct;
//       });
//     }).catch((error) => {
//       console.error("Error reading products: ", error);
//     });
  
//   }

//   window.onload = DisplayData()
  // 
  // student  
// function DisplayData() {
//   db.collection("StudentReg").get().then((querySnapshot) => {
//     tbody.innerHTML = "";
//     querySnapshot.forEach((doc) => {
//       let newProduct = `
//         <tr>
//           <td>${doc.data().Name}</td>
//           <td>${doc.data().phone}</td>
//           <td>${doc.data().email}</td>
//           <td>${doc.data().password}</td>
//           <td>${doc.data().stage}</td>
//           <td><button type="button" class="btn btn-danger">Delete</button></td>
//         </tr>`;
//       tbody.innerHTML += newProduct;
//     });
//   }).catch((error) => {
//     console.error("Error reading products: ", error);
//   });

// }

// window.onload = DisplayData()
