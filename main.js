let body = document.getElementById("body");
      let detailesCurrent = document.querySelector(".detailesCurrent");
      let closeDetile = document.querySelector(".closeDetile");
      let nameH2 = document.querySelector(".nameH2");
      let desc = document.querySelector(".desc");
      let booknow=document.querySelector(".book-now")
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

     

      // const close = document.querySelector(".btnclose");
      // close.addEventListener('click', ()=>{
      //   popper.style.transform="scale(0)"
      // })
      
      
    // function show_pop()
    // {
    //   document.getElementById("pop").classList.add("open");
    // }
    // function hide_pop()
    // {
    //   document.getElementById("pop").classList.remove("open");
    // }