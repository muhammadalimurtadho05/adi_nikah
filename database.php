<?php
// Nama file database SQLite
$databaseFile = __DIR__ . '/undangan.sqlite';


try {
    // Membuat koneksi ke database SQLite
    $pdo = new PDO('sqlite:' . $databaseFile);

    // Mengatur mode error
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // Eksekusi query
} catch (PDOException $e) {
    echo "Gagal membuat database: " . $e->getMessage();
}

function ambil_data_user(){
    global $pdo;
    $query = "SELECT * FROM users";
    $statement = $pdo->prepare($query);
    $statement->execute();

    // Mengambil hasil query sebagai array
    $users = $statement->fetchAll(PDO::FETCH_ASSOC);
    return $users;
}

    
function tambahusermodel($nama,$email,$password){
    global $pdo;
    $query = "INSERT INTO users (nama, email,password) VALUES (:name, :email, :password)";

    // Persiapan statement
    $statement = $pdo->prepare($query);

    // Bind parameter ke statement
    $statement->bindParam(':name', $nama);
    $statement->bindParam(':email', $email);
    $statement->bindParam(':password', $password);

    // Eksekusi statement
    if ($statement->execute()) {
        echo "Data berhasil ditambahkan!";
    } else {
        echo "Gagal menambahkan data.";
    }
} 

function hapususermodel($id_user) {
    global $pdo;
    $query = "DELETE FROM users WHERE id = :id";

    // Persiapan statement
    $statement = $pdo->prepare($query);

    // Bind parameter :id dengan nilai yang ingin dihapus
    $statement->bindParam(':id', $id_user, PDO::PARAM_INT);

    // Eksekusi statement
    if ($statement->execute()) {
        echo "Data dengan ID $id_user berhasil dihapus!";
    } else {
        echo "Gagal menghapus data.";
    }
    
}
?>
