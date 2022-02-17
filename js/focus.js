window.addEventListener('load', function () {
  function animate(obj, target, callback) {
    obj.style.left = target + 'px';
    callback && callback();
  }
  var arrowl = document.querySelector('.arrowl');
  var arrowr = document.querySelector('.arrowr');
  var focus = document.querySelector('.banner-focus');
  var focusWhidth = focus.offsetWidth;
  // 动态生成小圆圈
  var ul = focus.querySelector('ul');
  var ol = focus.querySelector('.circle');
  // console.log(ul.children.length);
  for (var i = 0; i < ul.children.length; i++) {
    var li = document.createElement('li');
    //li添加了右浮动，序号相反
    li.setAttribute('index', ul.children.length - i);
    ol.appendChild(li);
    li.addEventListener('click', function () {
      for (var j = 0; j < ol.children.length; j++) {
        ol.children[j].className = '';
      }
      this.className = 'circle-active';
      //li 索引号
      var index = this.getAttribute('index');
      num = index;
      circle = index;
      // console.log(circle);
      animate(ul, -(index - 1) * focusWhidth);

    })
  }
  //第一个圆圈默认样式
  ol.lastElementChild.className = 'circle-active';
  //左右按钮计数器
  var num = 1;
  //控制点击左右按钮时，小圆圈的
  var circle = 1;
  // flag 节流阀
  var flag = true;
  //右侧按钮
  // console.log(ul.children.length);
  arrowr.addEventListener('click', function () {
    num++;
    if (num > ul.children.length) {
      num = 1;
    }
    // console.log(num);
    animate(ul, -(num - 1) * focusWhidth);

    circle++;
    if (circle > ol.children.length) {
      circle = 1;
    }
    circleChange();
  })
  //左侧按钮
  arrowl.addEventListener('click', function () {
    num--;
    if (num == 0) {
      num = ul.children.length;
    }
    // console.log(num);
    animate(ul, -(num - 1) * focusWhidth);

    circle--;
    if (circle == 0) {
      circle = ul.children.length;
    }
    circleChange();
  })

  function circleChange() {
    for (var j = 0; j < ol.children.length; j++) {
      ol.children[j].className = '';
    }
    ol.children[ol.children.length - circle].className = 'circle-active';
  }
  // 自动播放轮播图
  var timer = setInterval(function () {
    //手动调用点击事件
    arrowr.click();
  }, 5000);

  //鼠标经过显示二维码
  var wximg = document.querySelector('#wx-img');
  var wx = document.querySelector('.wx');
  wx.addEventListener('mouseenter', function() {
    wximg.style.display = 'block';
  })
  wx.addEventListener('mouseleave', function() {
    wximg.style.display = 'none';
  })
})