(function () {
  $(document).ready(function () {
    //最中間開始

    //取出menu位置
    let menuTop = $(".menu").offset().top;
    // console.log(menuTop);
    //複製menu
    let menuHtml = $(".menu").clone();
    //加到頁面上
    $("body").append(menuHtml);
    menuHtml.addClass("fixed");
    $(window).scroll(function () {
      // console.log('test');
      //找出滾動位置
      let scrollTop = $(window).scrollTop();
      //找出物件位置的值
      let listTop = $(".list").offset().top;
      //取出menu高度值
      let menuHeight = $(".menu").height();
      //console.log(menuHeight);

      console.log(scrollTop, listTop);
      //取出menu的高度

      //判斷條件(中間開始)
      if (scrollTop > menuTop) {
        $(menuHtml).addClass("showIn");
      } else {
        $(menuHtml).removeClass("showIn");
      }
    });

    //最上方開始
    // $(window).scroll(function () {
    //     // console.log('test');
    //     //找出滾動位置
    //     let scrollTop = $(window).scrollTop();
    //     //找出物件位置的值
    //     let listTop = $('.list').offset().top;
    //     //取出menu高度值
    //     let menuHeight = $('.menu').height();
    //     //console.log(menuHeight);

    //     console.log(scrollTop, listTop);
    //     //取出menu的高度

    //     //判斷條件(最上方開始)
    //      if (scrollTop > mainTop) {
    //          $('.menu').addClass('fixed');
    //          //補空間,消除跑版
    //          $('body').css('paddingTop', menuHeight);
    //      } else {
    //          $('.menu').removeClass('fixed');
    //          $('body').css('paddingTop', 0);
    //      }
    // });

    //點擊滑動
    $(function () {
      $(".classleader").on("click", function () {
        $("html,body").animate(
          { scrollTop: $("#classleader").offset().top },
          600
        );
        $(this).toggleClass("active");
        $(this).parent().siblings().find("a").removeClass("active");
      });
      $(".vice classleader").on("click", function () {
        $("html,body").animate({ scrollTop: $("#vice classleader").offset().top }, 600);
        $(this).toggleClass("active");
        $(this).parent().siblings().find("a").removeClass("active");
      });
      $(".react").on("click", function () {
        $("html,body").animate({ scrollTop: $("#react").offset().top }, 600);
        $(this).toggleClass("active");
        $(this).parent().siblings().find("a").removeClass("active");
      });
      $(".angular").on("click", function () {
        $("html,body").animate({ scrollTop: $("#angular").offset().top }, 600);
        $(this).toggleClass("active");
        $(this).parent().siblings().find("a").removeClass("active");
      });
      $(".vue").on("click", function () {
        $("html,body").animate({ scrollTop: $("#vue").offset().top }, 600);
        $(this).toggleClass("active");
        $(this).parent().siblings().find("a").removeClass("active");
      });
    });
  });

  //todo list
  //DOM
  let mission = document.querySelector(".mission");
  let send = document.querySelector(".send");
  let data = JSON.parse(localStorage.getItem("listData")) || [];

  function addData() {
    // console.log('test');
    let text = document.querySelector(".text").value;
    // console.log(text);
    if (text == "") {
      alert("You need to input data");
      return;
    }

    let todo = {
      item: text
    };
    // console.log(todo);
    data.push(todo);
    // console.log(data);
    localStorage.setItem("listData", JSON.stringify(data));
    updateList(data);
  }

  function updateList(items) {
    let len = data.length;
    // console.log(len);
    let str = "";
    for (let i = 0; i < len; i++) {
      str += `<li><a href="#" data-index="${i}"> X </a> ${items[i].item} </li>`;
    }
    mission.innerHTML = str;
    reset();
  }

  function deleteData(e) {
    e.preventDefault();
    let target = e.target.nodeName;
    // console.log(target);
    let index = e.target.dataset.index;
    // console.log(index);
    if (target !== "A") {
      return;
    }
    data.splice(index, 1);
    localStorage.setItem("listData", JSON.stringify(data));
    updateList(data);
  }

  function reset() {
    document.querySelector(".text").value = "";
  }
  send.addEventListener("click", addData, false);
  mission.addEventListener("click", deleteData, false);
  updateList(data);
})();
