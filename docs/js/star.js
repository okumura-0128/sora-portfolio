// 星の要素を取得
const stars = document.querySelectorAll(".star");

// 星をクリックしたときのイベントリスナーを登録
stars.forEach((star) => {
  star.addEventListener("click", (e) => {
    // クリックした星の親要素の兄弟要素のテキストを取得
    const skill = e.target.parentElement.previousElementSibling.textContent;
    // クリックした星のインデックスを取得
    const index = Array.from(e.target.parentElement.children).indexOf(e.target);
    // クリックした星の数を計算
    const rating = index + 1;
    // localStorageにスキルと評価を保存
    localStorage.setItem(skill, rating);
  });
});

// ページが読み込まれたときのイベントリスナーを登録
window.addEventListener("load", () => {
  // localStorageに保存されたキーと値を取得
  const entries = Object.entries(localStorage);
  // 各キーと値に対して処理を行う
  entries.forEach(([skill, rating]) => {
    // スキルに対応する星の要素を取得
    const stars = document.querySelector(`.skill:contains("${skill}")`).nextElementSibling.children;
    // 評価に対応する星の数だけ背景色を変更
    for (let i = 0; i < rating; i++) {
      stars[i].style.backgroundColor = "gold";
    }
  });
});
