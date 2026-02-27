// ===== جلب العناصر =====
let tbody = document.getElementById("tablebody");
let tbody2 = document.getElementById("tablebody2");


// ===== بيانات ثابتة =====
let defaultTeachers = [
    { Name: "أ/ محمد أحمد", phone: "01000000001", email: "mohamed@gmail.com", material: "رياضيات", job: "مدرس", degree: "بكالوريوس" },
    { Name: "أ/ أحمد خالد", phone: "01000000002", email: "ahmed@gmail.com", material: "لغة عربية", job: "مدرس", degree: "بكالوريوس" }
];

let defaultStudents = [
    { Name: "علي", phone: "01100000001", email: "ali@gmail.com", stage: "الصف الأول الإعدادي" },
    { Name: "ساره", phone: "01100000002", email: "sara@gmail.com", stage: "الصف الثاني الإعدادي" }
];


// ===== تخزين أول مرة فقط =====
if (localStorage.getItem('TeacherReg')) {
    localStorage.setItem('TeacherReg', JSON.stringify(defaultTeachers));
}

if (localStorage.getItem('newPerson')) {
    localStorage.setItem('newPerson', JSON.stringify(defaultStudents));
}


// =============================
// عرض المعلمين
// =============================
function DisplayDatateacher() {

    if (!tbody) return; // ✅ لو الصفحة مش فيها الجدول يوقف

    let teachers = JSON.parse(localStorage.getItem('TeacherReg')) || [];

    tbody.innerHTML = "";

    teachers.forEach((teacher, index) => {
        tbody.innerHTML += `
        <tr>
            <td>${teacher.Name}</td>
            <td>${teacher.phone}</td>
            <td>${teacher.email}</td>
            <td>${teacher.material}</td>
            <td>${teacher.job}</td>
            <td>${teacher.degree}</td>
            <td>
              <button class="btn btn-danger"
              onclick="deleteTeacher(${index})">
              Delete
              </button>
            </td>
        </tr>`;
    });
}


// =============================
// حذف معلم
// =============================
function deleteTeacher(index) {

    let teachers = JSON.parse(localStorage.getItem('TeacherReg')) || [];

    teachers.splice(index, 1);

    localStorage.setItem('TeacherReg', JSON.stringify(teachers));

    DisplayDatateacher();
}


// =============================
// عرض الطلاب
// =============================
function DisplayDatastudent() {

    if (!tbody2) return; // ✅ أهم سطر

    let students = JSON.parse(localStorage.getItem('newPerson')) || [];

    tbody2.innerHTML = "";

    students.forEach((student, index) => {
        tbody2.innerHTML += `
        <tr>
            <td>${student.Name}</td>
            <td>${student.phone}</td>
            <td>${student.email}</td>
            <td>${student.stage}</td>
            <td>
              <button class="btn btn-danger"
              onclick="deleteStudent(${index})">
              Delete
              </button>
            </td>
        </tr>`;
    });
}


// =============================
// حذف طالب
// =============================
function deleteStudent(index) {

    let students = JSON.parse(localStorage.getItem('newPerson')) || [];

    students.splice(index, 1);

    localStorage.setItem('newPerson', JSON.stringify(students));

    DisplayDatastudent();
}


// ===== تشغيل المناسب فقط =====
DisplayDatateacher();
DisplayDatastudent();