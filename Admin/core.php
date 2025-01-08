<?php
include '../database.php';
// Fungsi untuk enkripsi
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

if(isset($_GET['aksi']))
{
    $aksi = decryptData(urldecode($_GET['aksi']),'aksi');
    echo $aksi;
    if($aksi == 'tambahuser'){
        tambahuser();
        header('Location:index.php');
    }elseif($aksi == 'hapususer'){
        $id_user = decryptData(urldecode($_GET['token']),'id_user');
        hapus_user($id_user);
        header('Location:index.php');
    }
}

function tambahuser() {
    $nama = $_POST['nama'];
    $email = $_POST['email'];
    $password = encryptData($_POST['password'],'passworduser');
    tambahusermodel($nama,$email,$password);
    

    
}

function hapus_user($id_user){
    hapususermodel($id_user);
}
?>
