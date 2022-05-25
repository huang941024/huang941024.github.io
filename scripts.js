(function () {
  $(document).ready(function () {
    let menuTop = $(".menu").offset().top;
    let menuHtml = $(".menu").clone();
    $("body").append(menuHtml);
    menuHtml.addClass("fixed");
    $(window).scroll(function () {
      let scrollTop = $(window).scrollTop();
      let listTop = $(".list").offset().top;
      let menuHeight = $(".menu").height();
      
      console.log(scrollTop, listTop);

      if (scrollTop > menuTop) {
        $(menuHtml).addClass("showIn");
      } else {
        $(menuHtml).removeClass("showIn");
      }
    });


    $(function () {
      $(".classleader").on("click", function () {
        $("html,body").animate(
          { scrollTop: $("#classleader").offset().top },
          600
        );
        $(this).toggleClass("active");
        $(this).parent().siblings().find("a").removeClass("active");
      });
      $(".vice").on("click", function () {
        $("html,body").animate({ scrollTop: $("#vice").offset().top }, 600);
        $(this).toggleClass("active");
        $(this).parent().siblings().find("a").removeClass("active");
      });
      $(".discipline").on("click", function () {
        $("html,body").animate({ scrollTop: $("#discipline").offset().top }, 600);
        $(this).toggleClass("active");
        $(this).parent().siblings().find("a").removeClass("active");
      });
      $(".sport").on("click", function () {
        $("html,body").animate({ scrollTop: $("#sport").offset().top }, 600);
        $(this).toggleClass("active");
        $(this).parent().siblings().find("a").removeClass("active");
      });
      $(".daily").on("click", function () {
        $("html,body").animate({ scrollTop: $("#daily").offset().top }, 600);
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
