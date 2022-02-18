window.addEventListener('load', function () {
// 下拉栏

  var active = document.querySelectorAll('.active');
  var list =document.querySelectorAll('.header-nav-list');
  for(var i =0;i<active.length ;i++) {
    active[i].setAttribute('index', i);
    active[i].addEventListener('mouseover',function() {
      var index = this.getAttribute('index');
      var j = Math.ceil((parseInt(index)+1)/2) -1;
      list[j].style.height ='229px';
    })
    active[i].addEventListener('mouseleave',function() {
      var index = this.getAttribute('index');
      var j = Math.ceil((parseInt(index)+1)/2) -1;
      list[j].style.height ='0';
    })
  }

  //侧边产品导航栏
  var navli = document.querySelectorAll('#banner-nav-li');
  var sidelist = document.querySelectorAll('.banner-nav-sidelist');
  for (var i = 0;i<navli.length;i++) {
    navli[i].setAttribute('index', i);
    navli[i].addEventListener('mouseenter' ,function() {
      for (var j = 0;j<navli.length;j++ ) {
        navli[j].className = '';
      }
      this.className = 'ff6700';
      var index = this.getAttribute('index');
      for (var j = 0;j<sidelist.length;j++ ) {
        sidelist[j].style.display = 'none';
      }
      sidelist[index].style.display = 'block';
    })
    navli[i].addEventListener('mouseleave' ,function() {
      this.className = '';
      var index = this.getAttribute('index');
      sidelist[index].style.display = 'none';
    })
  }
  // 回到顶部

  var main = document.querySelector('main');
  var backtop = document.querySelector('.backtop');
  var mainTop = main.offsetTop;
  // console.log(mainTop);
  document.addEventListener('scroll', function () {
    // console.log(window.pageYOffset);
    if (window.pageYOffset > mainTop) {
      backtop.style.display = 'block';
    } else {
      backtop.style.display = 'none';
    }
  })
  //点击返回
  backtop.addEventListener('click', function() {
    window.scroll(0,0);
  })

})