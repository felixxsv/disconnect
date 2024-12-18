
$(".textareaComment").on("input", function() {
    var textarea = $(this);
    
    // 高さを自動調整
    textarea.css("height", "auto");  // 一度高さをautoに戻してから再計算

    // コンテンツの高さを基に高さを設定
    var newHeight = textarea[0].scrollHeight;

    // 最大高さを設定
    var maxHeight = 200; // 最大高さ（例: 200px）

    // 最大高さを超える場合、overflow-yをautoにしてスクロールバーを表示
    if (newHeight > maxHeight) {
        textarea.height(maxHeight); // 最大高さに設定
        textarea.css("overflow-y", "auto"); // スクロールバーを表示
    } else {
        textarea.height(newHeight); // コンテンツの高さに合わせて調整
        textarea.css("overflow-y", "hidden"); // スクロールバーを隠す
    }
}); 