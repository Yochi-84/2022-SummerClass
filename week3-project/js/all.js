// 漢堡選單
document.querySelector(".hamburger-menu-icon").addEventListener("click", () => {
  document.querySelector(".nav-list").classList.toggle("is-show");
});

// product.html - tabs 區塊切換
Array.from(document.querySelectorAll(".tabs-list li a")).forEach(item => item.addEventListener("click", function (e) {
  e.preventDefault();

  let link = this.parentNode.getAttribute("data-link");
  document.querySelector('.tabs-list li.is-active').classList.remove("is-active");
  switch (link) {
    case "optical":
      document.querySelector("[data-link='optical']").classList.add("is-active");
      hideAll();
      document.querySelector("[data-target='optical']").classList.remove("d-none");
      break;
    case "sunglasses":
      document.querySelector("[data-link='sunglasses']").classList.add("is-active");
      hideAll();
      document.querySelector("[data-target='sunglasses']").classList.remove("d-none");
      break;
    case "functional":
      document.querySelector("[data-link='functional']").classList.add("is-active");
      hideAll();
      document.querySelector("[data-target='functional']").classList.remove("d-none");
      break;
  }

  function hideAll() {
    Array.from(document.querySelectorAll("section")).forEach(sec => sec.classList.add("d-none"));
  }
})
);

// store.html & blog.html - list & detail 切換
const url = new URL(location.href);
if(url.searchParams.get("id")) {
  document.querySelector("[data-target='list']").classList.add("d-none");
  document.querySelector("[data-target='detail']").classList.remove("d-none");
}


// 動態新增內文後面的 more 連結(還是直接寫 html 比較快)
// let more_link = false;

// window.addEventListener("resize", () => {
//   if(url.pathname.endsWith("blog.html")){
//     if(window.innerWidth <= 992 && !more_link) {
//       Array.from(document.querySelectorAll(".news-content")).forEach(item => {
//         let link = document.createElement("a");
//         link.innerText = "more";
//         link.setAttribute("href", "blog.html?id=1")
//         link.classList.add("news-more","after-text");
//         item.appendChild(link);
//       });
//       more_link = true;
//     }
//   }
// })
