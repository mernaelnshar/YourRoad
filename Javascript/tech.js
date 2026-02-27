document.addEventListener('DOMContentLoaded', () => {

  // العناصر
  const wrapper = document.querySelector(".wrapper");
  const wrapper2 = document.querySelector(".wrapper2");
  const btnteacher = document.querySelector(".btnteacher");
  const btnteacher2 = document.querySelector(".btnteacher2");
  const iconClose2 = document.querySelector(".icon-close2");
  const iconClose22 = document.querySelector(".icon-close22");

  // فتح وغلق البوباب
  btnteacher.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    wrapper2.classList.remove('active-popup2');
  });
  iconClose2.addEventListener('click', () => wrapper.classList.remove('active-popup'));

  btnteacher2.addEventListener('click', () => {
    wrapper2.classList.add('active-popup2');
    wrapper.classList.remove('active-popup');
  });
  iconClose22.addEventListener('click', () => wrapper2.classList.remove('active-popup2'));

  // تسجيل بسيط بدون LocalStorage
  const registerForm = document.getElementById("registerForm");
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("تم التسجيل بنجاح!");
    wrapper.classList.remove('active-popup');
    // تفريغ الحقول
    registerForm.reset();
  });

  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById("email-login").value.trim();
    const password = document.getElementById("pass-login").value.trim();

    // تحقق من الإيميل وكلمة السر
    if(email === "teacher@example.com" && password === "123456"){
      alert("تم تسجيل الدخول بنجاح!");
      wrapper2.classList.remove('active-popup2');
      // إعادة التوجيه للصفحة الجديدة
      window.location.href = "tableteacher.html";
    } else {
      alert("خطأ في البريد الإلكتروني أو كلمة المرور.");
    }

    loginForm.reset();
  });

});