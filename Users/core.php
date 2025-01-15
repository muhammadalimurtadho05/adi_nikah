<?php
include '../database.php';
// Fungsi untuk enkripsi




function tambahuser() {
    $nama = $_POST['nama'];
    $email = $_POST['email'];
    $password = encryptData($_POST['password'],'passworduser');
    tambahusermodel($nama,$email,$password);    
}
function tambah_produk() {
    $judul = $_POST['judul'];
    $harga = $_POST['harga'];
    $gbr = $_FILES["image"]["name"];
    // Kelola Gambar
    $target_dir = "../gambar-undangan/";
    
    // File yang diunggah
    $target_file = $target_dir . basename($_FILES["image"]["name"]);
    
    // Ekstensi file
    $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
    
    // Validasi apakah file benar-benar gambar
    $check = getimagesize($_FILES["image"]["tmp_name"]);
    if ($check === false) {
        die("File yang diunggah bukan gambar.");
    }

    // Validasi ukuran file (contoh: maksimum 2MB)
    if ($_FILES["image"]["size"] > 2000000) {
        die("Ukuran file terlalu besar. Maksimum 2MB.");
    }

    // Validasi format file (hanya JPG, PNG, dan GIF)
    $allowed_types = ["jpg", "jpeg", "png", "gif"];
    if (!in_array($imageFileType, $allowed_types)) {
        die("Hanya format JPG, JPEG, PNG, dan GIF yang diizinkan.");
    }

    // Pindahkan file ke folder tujuan
    if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
        tambahprodukmodel($judul,$harga,$gbr);
    } else {
        echo "Terjadi kesalahan saat mengunggah file.";
    } 
}





if(isset($_GET['aksi']))
{
    $aksi = ($_GET['aksi']);
    
    if($aksi == 'tambahuser'){
        tambahuser();
        header('Location:index.php');
    }elseif($aksi == 'hapususer'){
        $id_user = ($_GET['token']);
        hapus_user($id_user);
        header('Location:index.php');
    }elseif($aksi == 'tambahproduk'){
        tambah_produk();
    }elseif($aksi == 'hapusproduk'){
        $id_produk = ($_GET['token']);
        hapus_produk($id_produk);
    }elseif($aksi == 'login'){
        $cek = cek_login();
    }

}