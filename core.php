<?php
// $db = new SQLite3('toko.sqlite');

// // Membuat tabel
// $query = "CREATE TABLE IF NOT EXISTS users (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT NOT NULL,
//     email TEXT NOT NULL
// )";


// // $query = $db->prepare('INSERT INTO users(name,email) values(:nama,:email)');
// // $query->bindValue(':nama','Ali',SQLITE3_TEXT);
// // $query->bindValue(':email','muhammadalimurtadho',SQLITE3_TEXT);
// // $query->execute();

// echo "Tabel berhasil dibuat.";
?>
<?php
try {
    // Membuka koneksi ke database SQLite
    $db = new SQLite3('toko.db');  // Gantilah 'database_name.db' dengan nama database Anda

    // SQL untuk membuat tabel
    $sql = "CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE
            )";

    // Eksekusi query untuk membuat tabel
    $db->exec($sql);
    echo "Tabel 'users' berhasil dibuat!";
} catch (Exception $e) {
    echo "Terjadi kesalahan: " . $e->getMessage();
}
?>
