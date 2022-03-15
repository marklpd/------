window.addEventListener("load", function () {
  var arrowl = document.querySelector(".arrowl");
  var arrowr = document.querySelector(".arrowr");
  var focus = document.querySelector(".banner-focus");
  var focusWidth = focus.offsetWidth;
  // 动态生成小圆圈
  var ul = focus.querySelector("ul");
  var ulChildren = ul.children.length;
  var ulLi = focus.querySelectorAll("li");
  var ol = focus.querySelector(".circle");
  //左右按钮计数器
  var num = 1;
  //控制点击左右按钮时，小圆圈计数器
  var circle = 1;
  // flag 节流阀
  var flag = true;
  // 自动播放轮播图的定时器 
  let timer = setInterval(function () {
    // 手动调用点击事件
    arrowr.click();
  }, 3000);
  function animate(obj, target, callback) {
    for (var i = 0; i < obj.length; i++) {
      obj[i].className="";
    }
    obj[target].className="focus-active";
    // 配合节流阀
    setTimeout(() => {
      callback && callback();
    }, 1000);
  }
  function circleChange() {
    for (var j = 0; j < ol.children.length; j++) {
      ol.children[j].className = "";
    }
    ol.children[ol.children.length - circle].className = "circle-active";
  }
  /**
   * @name: arrListener
   * @msg: 生成arrow的监听器
   * @param {*} arrow
   * @return {() => {}} listener
   */
  const arrListener = (arrow) => {
    return () => {
      // 判断节流阀是否开启，开启才执行动画
      if (flag) {
        flag = false; // 关闭节流阀
        // 区分左右按钮
        arrow === "arrowr" ? num++ : num--;
        arrow === "arrowr" ? circle++ : circle--;
        if (num === 0) {
          num = ulChildren;
        } else if (num > ulChildren) {
          num = 1;
        }
        if (circle === 0) {
          circle = ulChildren;
        } else if (circle > ulChildren) {
          circle = 1;
        }
        // 动画完成后开启节流阀
        animate(ulLi, num - 1, () => {
          flag = true;
        });
        circleChange();
      }
    }
  }
  for (var i = 0; i < ulChildren; i++) {
    var li = document.createElement("li");
    //li添加了右浮动，序号相反
    li.setAttribute("index", ulChildren - i);
    ol.appendChild(li);
    li.addEventListener("click", function () {
      //li 索引号
      var index = this.getAttribute("index");
      num = index;
      circle = index;
      animate(ulLi, index - 1, () => flag = true);
      circleChange();
    });
  }
  //第一个圆圈默认样式
  ol.lastElementChild.className = "circle-active";
  // 右侧按钮
  arrowr.addEventListener("click", arrListener("arrowr"));
  // 左侧按钮
  arrowl.addEventListener("click", arrListener("arrowl"));
  // 鼠标在轮播图上时清除定时器
  focus.addEventListener('mouseover', () => {
    clearInterval(timer);
  })
  // 鼠标离开轮播图时添加定时器
  focus.addEventListener('mouseleave', () => {
    // 自动播放轮播图
    timer = setInterval(function () {
      // 手动调用点击事件
      arrowr.click();
    }, 3000);
  })

  // 鼠标经过显示二维码
  var wximg = document.querySelector("#wx-img");
  var wx = document.querySelector(".wx");
  wx.addEventListener("mouseenter", function () {
    wximg.style.display = "block";
  });
  wx.addEventListener("mouseleave", function () {
    wximg.style.display = "none";
  });
});