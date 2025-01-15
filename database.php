<?php


function encryptData($data, $encryptionKey) {
    $cipher = "AES-128-CTR";
    $ivLength = openssl_cipher_iv_length($cipher);
    $iv = random_bytes($ivLength);
    $encryptedText = openssl_encrypt($data, $cipher, $encryptionKey, 0, $iv);
    $encryptedPayload = base64_encode($iv . $encryptedText);
    return $encryptedPayload;
}

// Fungsi untuk dekripsi
function decryptData($encryptedPayload, $encryptionKey) {
    $cipher = "AES-128-CTR";
    $ivLength = openssl_cipher_iv_length($cipher);
    $decodedPayload = base64_decode($encryptedPayload);
    $iv = substr($decodedPayload, 0, $ivLength);
    $encryptedText = substr($decodedPayload, $ivLength);
    $decryptedText = openssl_decrypt($encryptedText, $cipher, $encryptionKey, 0, $iv);
    return $decryptedText;
}

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

function ambil_data($table){
    global $pdo;
    $query = "SELECT * FROM $table";
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
function tambahprodukmodel($judul,$harga,$gbr) {
    global $pdo;
    $query = "INSERT INTO produk (judul, harga,gambar) VALUES (:judul, :harga, :gambar)";

    // Persiapan statement
    $statement = $pdo->prepare($query);

    // Bind parameter ke statement
    $statement->bindParam(':judul', $judul);
    $statement->bindParam(':harga', $harga);
    $statement->bindParam(':gambar', $gbr);

    // Eksekusi statement
    if ($statement->execute()) {
        // echo "Data berhasil ditambahkan!";
        $page = ('product');
        echo "<script>document.location='index.php?page=$page'</script>";
    } else {
        echo "Gagal menambahkan data.";
    }
}

// User Login
function cek_login() {
    global $pdo;
    $email = trim($_POST['email']);
    $password = $_POST['password'];

    // echo "Email dari input: " . htmlspecialchars($email) . "<br>";

    // Gunakan parameter binding untuk query yang aman
    $query = $pdo->prepare("SELECT * FROM users WHERE LOWER(email) = LOWER(:email)");
    $query->bindParam(':email', $email, PDO::PARAM_STR);
    $query->execute();

    // Ambil jumlah baris
    // Debug hasil query
    if ($query) {
        $result = $query->fetchAll(PDO::FETCH_ASSOC);
        if (count($result) !=0 ){
            $pass_user = decryptData($result[0]['password'],'passworduser'); 
            if($password == $pass_user){
                session_start();
                $_SESSION['user_login'] = $result[0]['id'];
                $_SESSION['nama'] = $result[0]['nama'];
                echo "<script>document.location='index.php?page=dashboard';
                alert('login berhasil');
                </script>";
            }else{
                echo "<script>document.location='login.php';
                alert('Password Salah!');
                </script>";
            }
        }else{
            echo "<script>document.location='login.php';
            alert('Username tidak ditemukan');
            </script>";
        }
    } 
}

function hapus_produk_model($id_produk) {
    global $pdo;
    $query = "DELETE FROM produk WHERE id_produk = :id_produk";

    // Persiapan statement
    $statement = $pdo->prepare($query);

    // Bind parameter :id dengan nilai yang ingin dihapus
    $statement->bindParam(':id_produk', $id_produk, PDO::PARAM_INT);

    // Eksekusi statement
    if ($statement->execute()) {
        // echo "Data dengan ID $id_produk berhasil dihapus!";
        $page = encryptData('product','page');
        // echo $page;die;
        echo "<script>
        alert('Data Berhasil Dihapus');</script>";
        header("Location:index.php?page=$page");

    } else {
        echo "Gagal menghapus data.";
    } 
}
