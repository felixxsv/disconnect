<?php
    $dsn = "mysql:host=localhost;dbname=disconnect";
    $username = "root";
    $password = "";//パスワードはない
    try {
        // データベースに接続
        $pdo = new PDO($dsn, $username, $password);
        
        // 接続が成功した場合の処理
        $sql =("SELECT user.id AS user_id, user.nickname, user.email, role.title from user JOIN role ON user.r_id = role.id");
        // 結果セットの取得
        $stmt = $pdo->query($sql);

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            echo "ユーザーID: " . $row['user_id'] . "<br>";
            echo "ユーザー名: " . $row['nickname'] . "<br>";
            echo "メールアドレス: " . $row['email'] . "<br>";
            echo "ロール名: " . $row['title'] . "<br><br>";
        }
        echo "DB接続成功!";
    } catch (PDOException $e) {
        // 接続が失敗した場合のエラーメッセージを表示
        echo "DB接続失敗: " . $e->getMessage();
    }


?>