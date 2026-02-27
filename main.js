let body = document.getElementById("body");
let detailesCurrent = document.querySelector(".detailesCurrent");
let closeDetile = document.querySelector(".closeDetile");
let nameH2 = document.querySelector(".nameH2");
let desc = document.querySelector(".desc");
let allcards = document.querySelector("#allcards");
const popper = document.querySelector(".popper");

function DisplayData() {
    let teachers = JSON.parse(localStorage.getItem('TeacherReg')) || [];
    allcards.innerHTML = "";

    teachers.forEach((teacher, index) => {
        let card = `<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div class="card">
                <img src="images/${teacher.photo}.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${teacher.Name}</h5>
                    <p class="card-text">${teacher.material || ''}</p>
                    <p class="card-text">${teacher.phone}</p>
                    <p class="card-text">${teacher.email}</p>
                    <p class="card-text">${teacher.job || ''}</p>
                </div>
                <div class="card-body">
                    <button class="book-now">حجز الان</button>
                    <button class="details">التفاصيل</button>
                </div>
            </div>
        </div>`;
        allcards.innerHTML += card;
    });
}

// فتح تفاصيل المعلم أو حجز
body.addEventListener("click", (e) => {

    if (e.target.classList.contains("details")) {

        let card = e.target.closest(".card");

        let img = card.querySelector("img").src;
        let name = card.querySelector(".card-title").innerHTML;
        let description = card.querySelector(".card-text").innerHTML;

        document.querySelector(".detailesCurrent img").src = img;

        nameH2.innerHTML = name;
        desc.innerHTML =
            description + "<br>خصم 50% ، خبره 10 سنين تدريس";

        // ✅ فتح التفاصيل
        detailesCurrent.classList.add("active");
    }


    if (e.target.classList.contains("book-now")) {
        // ✅ فتح بوب اب الحجز
        popper.classList.add("open");
    }


    if (e.target.classList.contains("btnclose")) {
        popper.classList.remove("open");
    }

});
closeDetile.addEventListener("click", () => {
    detailesCurrent.classList.remove("active");
});
// عند تحميل الصفحة
window.onload = DisplayData();