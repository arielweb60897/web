window.onload = function() {
    const masonry = document.getElementById('masonry');
    const items = masonry.getElementsByClassName('masonry-item');
    const columnWidth = 300; // 固定的卡片寬度
    const gutter = 15; // 間距
    let columnHeights = []; // 儲存每列的高度
    let columns = Math.floor(masonry.offsetWidth / (columnWidth + gutter)); // 計算列數
    
    // 初始化列高度為0
    for (let i = 0; i < columns; i++) {
      columnHeights[i] = 0;
    }
  
    // 將每個卡片放入最矮的列
    for (let i = 0; i < items.length; i++) {
      let minColumnHeight = Math.min(...columnHeights); // 找到最矮的一列
      let columnIndex = columnHeights.indexOf(minColumnHeight); // 最矮列的索引
  
      // 設置每個 item 的位置
      items[i].style.top = `${minColumnHeight}px`;
      items[i].style.left = `${columnIndex * (columnWidth + gutter)}px`;
  
      // 更新該列的高度
      columnHeights[columnIndex] += items[i].offsetHeight + gutter;
    }
  
    // 設置父容器的高度
    masonry.style.height = `${Math.max(...columnHeights)}px`;
    
    // 監聽視窗調整大小，重新計算排列
    window.addEventListener('resize', function() {
      columns = Math.floor(masonry.offsetWidth / (columnWidth + gutter));
      
      // 重置高度
      columnHeights = [];
      for (let i = 0; i < columns; i++) {
        columnHeights[i] = 0;
      }
  
      for (let i = 0; i < items.length; i++) {
        let minColumnHeight = Math.min(...columnHeights);
        let columnIndex = columnHeights.indexOf(minColumnHeight);
  
        items[i].style.top = `${minColumnHeight}px`;
        items[i].style.left = `${columnIndex * (columnWidth + gutter)}px`;
  
        columnHeights[columnIndex] += items[i].offsetHeight + gutter;
      }
  
      masonry.style.height = `${Math.max(...columnHeights)}px`;
    });
  };
  