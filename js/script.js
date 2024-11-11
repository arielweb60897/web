// --------------header 固定------------------

$(window).on("scroll", function () {
  const header = $("header");
  // cover 區域的整體高度
  // const coverHight = $(".cover").outerHeight();
  // console.log(coverHight);

  if ($(window).scrollTop() > 0) {
    header.css({
      position: "fixed",
      top: 0,
    });
  } else {
    header.css("position", "relative");
  }
});

// --------------slider------------------
$(function () {
  //  .cover 的寬度
  let divWidth = $(".cover").width();

  //  .img6 元素中的所有 img 標籤的数量
  let imgCount = $(".img6 img").length;

  // alert(divWidth);
  for (let i = 0; i < imgCount; i++) {
    $(`.dou`).append(`<li></li>`);
  }
  $(`.dou li:first`).addClass(`clicked`);

  $(`.img6 img`).width(divWidth);
  $(`.img6`).width(divWidth * imgCount);

  let index = 0;
  let timer = setInterval(moveToNext, 5000);

  $(`.dou li`).click(function () {
    clearInterval(timer); // 停掉計時器

    index = $(this).index();
    // alert(index);
    $(`.img6`).animate({
      left: divWidth * index * -1,
    });
    $(this).addClass("clicked");
    $(`.dou li`).not(this).removeClass("clicked");
    timer = setInterval(moveToNext, 5000); // 重置計時器
  });
  // 點擊下一頁按鈕
  $(".next").click(function () {
    clearInterval(timer); // 停掉計時器
    moveToNext();
    // $(`.img6`).animate({
    //   left: divWidth * index * -1,
    // });

    // if (index < imgCount - 1) {
    //   // 如果還有下一張圖片
    //   index++;
    // } else {
    //   index = 0; // 循環回第一張
    // }
    // updateWidths(); // 更新圖片位置
    // $(this).addClass("clicked");
    // $(`.dou li`).not(this).removeClass("clicked");
    timer = setInterval(moveToNext, 5000); // 重置計時器
  });

  // 點擊上一頁按鈕
  $(".pre").click(function () {
    clearInterval(timer); // 停掉計時器
    moveToPrev();
    // $(`.img6`).animate({
    //   left: divWidth * index * -1,
    // });
    // if (index > 0) {
    //   // 如果還有上一張圖片
    //   index--;
    // } else {
    //   index = imgCount - 1; // 循環回最後一張
    // }
    // updateWidths(); // 更新圖片位置
    // $(this).addClass("clicked");
    // $(`.dou li`).not(this).removeClass("clicked");
    timer = setInterval(moveToNext, 5000); // 重置計時器
  });
  function moveToNext() {
    // 控制 index 只能介於 0 ~ 6
    if (index < imgCount - 1) {
      index++;
    } else {
      //回到第一頁
      index = 0;
    }
    // console.log(imgCount);

    //?
    $(".img6").animate({
      left: divWidth * index * -1,
    });
    // 自己移動時，痘痘自己變色
    // $(`.name li:eq(0)`).append(` (First)`)
    $(`.dou li:eq(${index})`).addClass("clicked");
    $(`.dou li`).not(`:eq(${index})`).removeClass("clicked");
  }
  function moveToPrev() {
    // 控制 index 只能介於 0 ~ 6
    if (index > 0) {
      index--; // 向左移動
    } else {
      index = imgCount - 1; // 回到最後一頁
    }

    // const offset = divWidth * index * -1;
    // $('.img6').css('transform', 'translateX(' + offset + 'px)');

    $(".img6").animate({
      left: divWidth * index * -1,
    });

    // 自己移動時，痘痘自己變色
    // $(`.name li:eq(0)`).append(` (First)`)
    $(`.dou li:eq(${index})`).addClass("clicked");
    $(`.dou li`).not(`:eq(${index})`).removeClass("clicked");
  }
  $(window).resize(function () {
    divWidth = $(".cover").width(); // 更新 div 的寬度

    $(".img6 img").width(divWidth); // 更新 li 的寬度
    $(".img6").width(divWidth * imgCount); // 更新 ul 的總寬度

    // 調整圖片位置以符合新的寬度
    $(".img6 img").css({
      left: divWidth * index * -1,
    });
  });
});

// --------------toTop------------------
$(function () {
  $("#toTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800); // 800 表示動畫持續時間（毫秒）
  });
});
// -------------------hamburger----------------------
$(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $(".nav-menu-hamburger").toggleClass("active");
    // console.log("Hamburger clicked!");
  });
});
// ------------------下拉選單----------------------

$(function () {
  $(".product_itemall").click(function () {
    $(this).toggleClass("active");
    $(".product_item").toggleClass("active");
    // console.log("product_itemall clicked!");
  });
});
// ---------------------選單篩選 ----------------------
$(function () {
  $(".product_item").click(function () {
    //split(' ')：將 class 字串以空格 (' ') 分割，變成一個陣列
    //[1]：取陣列的第二個元素（索引為 1）
    const category = $(this).attr("class").split(" ")[1];
    // alert(category);

    $(".product_list").hide();
    $(`.product_list.${category}`).show();
  });
  $(".all").click(function () {
    $(".product_list").show();
  });
});

// -------------------慢慢浮現----------------------
$(function () {
  $(".area:nth-child(1)").addClass("visible");
  let throttleTimeout;
  let showHeight = 100;

  // $(window).scroll(function () {
  //   $(".area").each(function () {
  //     let setThis = $(this); // this 裡面的 this
  //     let areaTop = setThis.offset().top; // 物件和螢幕上面的距離
  //     // console.log(areaTop); //0 900 1800 2700 3600

  //     //
  //     if ($(window).scrollTop() >= areaTop + showHeight - $(window).height()) {
  //       //   setThis.animate({css}, 毫秒);
  //       // setThis.stop().animate({ opacity: 1 }, 400);
  //       setThis.addClass("visible");
  //     } else {
  //       // setThis.stop().animate({ opacity: 0 }, 1000);
  //       setThis.removeClass("visible");
  //     }
  //   });
  function handleScroll() {
    $(".area").each(function (index) {
      // console.log(index);

      const setThis = $(this);
      const areaTop = setThis.offset().top;
      // console.log(areaTop);
      // console.log(areaTop);

      // 計算滾動條位置是否已經達到顯示條件
      // console.log(
      //   `$(window).scrollTop():${$(window).scrollTop()}`,
      //   `window.innerHeight:${window.innerHeight}`,
      //   `areaTop:${areaTop}`,
      //   areaTop + showHeight - window.innerHeight,
      //   index,
      //   $(window).scrollTop() >= areaTop + showHeight - window.innerHeight
      // );

      if ($(window).scrollTop() >= areaTop + showHeight - window.innerHeight) {
        // 添加延遲顯示效果
        console.log("yes");

        setTimeout(() => {
          setThis.addClass("visible");
        }, index * 100); // 每張圖片延遲 200 毫秒
      } else {
        // 滾動條離開區域後移除 visible 類別
        setThis.removeClass("visible");
      }
    });
  }
  // 使用 throttle 限制滾動事件的觸發頻率
  $(window).scroll(function () {
    if (!throttleTimeout) {
      throttleTimeout = setTimeout(() => {
        handleScroll();
        throttleTimeout = null;
      }, 200); // 每隔 200 毫秒觸發一次
    }
  });

  // 初始化：頁面加載時直接觸發一次
  handleScroll();
});

// =============滑鼠滑入效果(可略)============
// $(document).ready(function () {
//   $(".main_menu").on("mouseenter", function () {
//     // 找到當前元素內的 .title，並設置 opacity 為 1
//     $(this).find(".title").css("opacity", "1");
//   });

//   $(".main_menu").on("mouseleave", function () {
//     // 找到當前元素內的 .title，並設置 opacity 為 0
//     $(this).find(".title").css("opacity", "0");
//   });
// });

// ===============news pre & next ==================
$(function () {
  let index = 0; // 當前顯示的索引
  const newsItems = $(".carousel").width(); // 所有的 newsItem
  const itemCount = $(".newsItem").length; // newsItem 的數量
  // alert(newsItems);
  // alert(itemCount);
  // 初始位置
  // carousel.css("transform", "translateX(0)");
  $(`.newsItem img`).width(newsItems);
  $(`.carousel`).width(newsItems * itemCount);

  $(".next").click(function () {
    $(`.newsItem`).animate({
      left: newsItems * index * -1,
    });
    if (index < itemCount - 1) {
      index++;
    } else {
      //回到第一頁
      index = 0;
    }
    // // 更新索引，循環到下一個 newsItem
    // index = (index + 1) % itemCount;

    // // 使用 css 推動 carousel
    // carousel.css("transform", `translateX(${-itemWidth * index}px)`);
  });

  $(".pre").click(function () {
    $(`.newsItem`).animate({
      left: newsItems * index * -1,
    });
    if (index > 0) {
      index--; // 向左移動
    } else {
      index = imgCount - 1; // 回到最後一頁
    }
    // // 更新索引，循環到上一個 newsItem
    // index = (index - 1 + itemCount) % itemCount;

    // // 使用 css 推動 carousel
    // carousel.css("transform", `translateX(${-itemWidth * index}px)`);
  });

  $(window).resize(function () {
    itemWidth = $(".news_item").width(); // 更新 div 的寬度

    $(`.newsItem img`).width(newsItems);
    $(`.carousel`).width(newsItems * itemCount);

    // 調整圖片位置以符合新的寬度
    $(".newsItem img").css({
      left: divWidth * index * -1,
    });
  });
});
// ===============跳轉 button ==================
$(function () {
  $("#coffee").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#menuCoffee").offset().top,
      },
      500
    );
  });
  $("#food").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#menuFood").offset().top,
      },
      500
    );
  });
  $("#cake").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#menuCake").offset().top,
      },
      500
    );
  });
});
$(function () {
  $("#storyAll").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".story_all").offset().top,
      },
      500
    );
  });
  $("#remind").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".remind").offset().top,
      },
      500
    );
  });
});

// =============== search ==================
// $(function () {
//   $(".search-input").on("input", function () {
//     searchProduct();
//   });
// });
// function searchProduct() {
//   let productName = $(function () {
//     let item = $(this).attr("productName").val();

//     $(".product_list .Product-title").each(function () {
//       let item = $(this).attr("data-item");
//       if (item.indexOf(productName) != 1) {
//         $(this).show();
//       } else {
//         $(this).hide();
//       }
//     });
//   });
// }

$(function () {
  // 在輸入時觸發搜尋
  $(".search-input").on("input", function () {
    searchProduct();
  });
});

function searchProduct() {
  // 獲取使用者輸入的搜尋文字
  //trim() 刪除了字串開頭和結尾的空白
  const searchText = $(".search-input").val().trim().toLowerCase();

  // 遍歷每個產品的標題
  $(".product_list").each(function () {
    const itemTitle = $(this).find(".Product-title").data("item").toLowerCase();
    // const itemTitle = $(this)
    //   .find(".Product-title")
    //   .attr("data-item")
    //   .toLowerCase();
    // console.log(itemTitle);

    // 如果標題包含搜尋文字，顯示該產品；否則隱藏
    if (itemTitle.includes(searchText)) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
}
