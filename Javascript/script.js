// يتم استدعاء هذا الملف في نهاية صفحات HTML
// الملف يحتوي على الكود الخاص بتخزين البيانات وعرضها في الجدول

// انشاء مصفوفة لتخزين البيانات
let data = [];

// استرجاع البيانات المحفوظة في local storage
if(localStorage.getItem("data")){
    data = JSON.parse(localStorage.getItem("data"));
    displayData();
}

// إضافة البيانات إلى المصفوفة
function addData(){
    let name = document.getElementById("name-register").value;
    let phone = document.getElementById("phone-register").value;
    let email = document.getElementById("email-register").value;
    let pass = document.getElementById("pass-register").value;
    let newData = {name: name, phone: phone, email:email , password: password};
    data.push(newData);
    localStorage.setItem("data", JSON.stringify(data));
}

// // عرض البيانات في الجدول
// function displayData(){
//     let tableBody = document.querySelector("#data tbody");
//     tableBody.innerHTML = "";
//     for(let i=0; i<data.length; i++){
//         let row = `
//             <tr>
//                 <td>${data[i].name}</td>
//                 <td>${data[i].phonr}</td>
//                 <td>${data[i].email}</td>
//                 <td>${data[i].password}</td>
//             </tr>
//         `;
//         tableBody.innerHTML += row;
//     }
// }

// // استدعاء دالة عرض البيانات عند تحميل صفحة الجدول
// if(window.location.href.indexOf("tableteacher.html") > -1){
//     displayData();
// }

function deleteData() {
    localStorage.removeItem("myData");
    alert("تم حذف البيانات بنجاح!");
  }