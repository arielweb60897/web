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
  $(".naxt").click(function () {
    clearInterval(timer); // 停掉計時器
    $(`.img6`).animate({
      left: divWidth * index * -1,
    });

    if (index < imgCount - 1) {
      // 如果還有下一張圖片
      index++;
    } else {
      index = 0; // 循環回第一張
    }
    // updateWidths(); // 更新圖片位置
    // $(this).addClass("clicked");
    // $(`.dou li`).not(this).removeClass("clicked");
    timer = setInterval(moveToNext, 5000); // 重置計時器
  });

  // 點擊上一頁按鈕
  $(".pre").click(function () {
    clearInterval(timer); // 停掉計時器
    $(`.img6`).animate({
      left: divWidth * index * -1,
    });
    if (index > 0) {
      // 如果還有上一張圖片
      index--;
    } else {
      index = imgCount - 1; // 循環回最後一張
    }
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
    //?
    $(".img6").animate({
      left: divWidth * index * -1,
    });
    // 自己移動時，痘痘自己變色
    // $(`.name li:eq(0)`).append(` (First)`)
    $(`.dou li:eq(${index})`).addClass("clicked");
    $(`.dou li`).not(`:eq(${index})`).removeClass("clicked");
  }
});
