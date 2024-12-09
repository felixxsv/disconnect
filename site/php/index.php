<?php
    echo "hello world!";
    $dsn = "mysql:host=localhost;dbname=disconnect";
    $username = "root";
    $password = "";//パスワードはない
    try {
        // データベースに接続
        $pdo = new PDO($dsn, $username, $password);
        
        // 接続が成功した場合の処理
        $query = $pdo->query("SELECT * FROM user");
        // 結果セットの取得
        $resultSet = $query->fetchAll(PDO::FETCH_ASSOC);
        print_r($resultSet);

        echo "DB接続成功!";
    } catch (PDOException $e) {
        // 接続が失敗した場合のエラーメッセージを表示
        echo "DB接続失敗: " . $e->getMessage();
    }


?>