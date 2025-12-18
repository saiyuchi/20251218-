let snowflakes = []; // 儲存雪花的陣列

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('interactive-area'); // 將畫布附加到互動區域

  // 新增按鈕
  let startButton = createButton('Start');
  startButton.style('font-size', '20px');
  startButton.style('background-color', '#ffcccc');
  startButton.style('border', '2px solid #ff6666');
  startButton.style('border-radius', '12px');
  startButton.style('padding', '10px 20px');
  startButton.style('cursor', 'pointer');
  startButton.position(width / 2 - 50, height / 2 + 50);
  startButton.mousePressed(() => {
    window.location.href = 'next_page.html'; // 跳轉到下一頁
  });
}

function draw() {
  background(220);
}
