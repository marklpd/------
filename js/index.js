window.addEventListener("load", function () {
    // 下拉栏
    var navItem = document.querySelectorAll(".header-nav-item");
    var navList = document.querySelectorAll(".header-nav-list");
    for (var i = 0; i < navItem.length; i++) {
      navItem[i].setAttribute("index", i);
      navItem[i].addEventListener("mouseover", function () {
        var index = this.getAttribute("index");
        navList[index].className = "header-nav-list active";
      });
      navItem[i].addEventListener("mouseleave", function () {
        var index = this.getAttribute("index");
        navList[index].className = "header-nav-list";
      })
    }

  //侧边产品导航栏
  var navLi = document.querySelectorAll("#banner-nav-li");
  var sideList = document.querySelectorAll(".banner-nav-sidelist");
  for (var i = 0; i < navLi.length; i++) {
    navLi[i].setAttribute("index", i);
    navLi[i].addEventListener("mouseenter", function () {
      this.className = "ff6700";
      var index = this.getAttribute("index");
      sideList[index].style.display = "block";
    })
    navLi[i].addEventListener("mouseleave", function () {
      this.className = "";
      var index = this.getAttribute("index");
      sideList[index].style.display = "none";
    })
  }
  // 回到顶部
  var main = document.querySelector("main");
  var backTop = document.querySelector(".backtop"); //驼峰命名
  var mainTop = main.offsetTop;
  document.addEventListener("scroll", function () {
    if (window.pageYOffset > mainTop) {
      backTop.style.display = "block";
    } else {
      backTop.style.display = "none";
    }
  })
  //点击返回
  backTop.addEventListener("click", function () {
    window.scroll(0, 0);
  })
})