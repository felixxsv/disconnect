const textareas = document.getElementsByClassName('textareaComment');

textarea.addEventListener('input', function () {
    // 高さを自動調整する
    this.style.height = 'auto';  // 高さをリセット
    this.style.height = (this.scrollHeight) + 'px';  // 入力内容の高さに合わせて調整

    // 最大高さを超えた場合、スクロールを有効にする
    if (this.scrollHeight > 120) {
        this.style.height = '120px'; // 最大高さ（4行目）
    }
});
