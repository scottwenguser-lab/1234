let score = 0;
let timeLeft = 10;
let timerId;

const target = document.getElementById('target');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const gameArea = document.getElementById('game-area');

// 1. 移動目標的函式
function moveTarget() {
    // 計算 game-area 的範圍，避免目標跑出去
    const maxX = gameArea.clientWidth - target.clientWidth;
    const maxY = gameArea.clientHeight - target.clientHeight;
    
    // 隨機產生位置
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    target.style.left = randomX + 'px';
    target.style.top = randomY + 'px';
}

// 2. 點擊目標的動作
target.addEventListener('click', function() {
    score++;
    scoreDisplay.innerHTML = score;
    moveTarget(); // 點到後立刻換位置
});

// 3. 開始遊戲
startBtn.addEventListener('click', function() {
    // 初始化
    score = 0;
    timeLeft = 10;
    scoreDisplay.innerHTML = score;
    timerDisplay.innerHTML = timeLeft;
    startBtn.disabled = true;
    target.style.display = 'block';
    
    moveTarget();
    
    // 倒數計時器
    timerId = setInterval(function() {
        timeLeft--;
        timerDisplay.innerHTML = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timerId);
            target.style.display = 'none';
            startBtn.disabled = false;
            alert("遊戲結束！你的分數是: " + score);
        }
    }, 1000);
});