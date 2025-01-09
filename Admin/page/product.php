<?php
$products = ambil_data('produk');
?>

<section class="dashboard">
<div class="row">
        <div class="col-lg-3">
            <button type="button" class="btn btn-sm btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#basicModal">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAYVJREFUSEvNlT9IVXEUxz8ftMVBB6FAhxCEBkcHdWvIsUUQGgRBqkGFXMTRRhGXiISgEGoQWlzcFNzEHJqacjRIEJdAwcXju/GuXJ/vvnvj+cSz3sP5/L7nz/dKi8MW1+fuABERVTWnwGf1zW2ou1KQAaR1R9XtZiE3WhQRC8ASsKk+rwdIH6MWtrgeoBs4AtqAx+phLaQpQFIsIr4CE8Cymii6FrcBGAF2gROgVz2PiAvI3boLNVF8I3J7GBE/gQFgUv1SBhAR74FZ4J06l9AaAV4DH4F9dSj7tHotiogHwDHQBTxRfxUBOoA/QCcwqP5IITmAF5XC68B3dTjNbbhmGclr6lQBYAt4BrxSP5UF9AMHwDnwUP2bcxc9wG/gDHikJm7wLwoPJSJ2gKfAvLqSA3hb2e7FqsW8zOaUAYwD30paxoi697+AdiDZiL4CyIY6VptTqKDky3PTSgEi4gMwXRn0qjpTcxO530oNuepN6b+CWgfN2nw9d70fCpqZQykF9xpwCdSNphl/k3WbAAAAAElFTkSuQmCC"/>    
        </button>
        </div>
    </div>
    <div class="modal fade" id="basicModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Tambah Produk</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="core.php?aksi=<?=encryptData('tambahproduk','aksi')?>" method="POST" enctype="multipart/form-data">
                <div class="modal-body">
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-2 col-form-label">Judul</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" name="judul" id="inputText">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-2 col-form-label">Harga</label>
                  <div class="col-sm-10">
                    <input type="number" class="form-control" name="harga" id="inputText">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-2 col-form-label">Gambar</label>
                  <div class="col-sm-10">
                    <input type="file" class="form-control" name="image" id="inputText">
                  </div>
                </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
            </form>
            </div>
        </div>
    </div>
<div class="row">
    <?php
    foreach ($products as $product){
    ?>
    <div class="col-xxl-4 col-md-4">
              <div class="card info-card sales-card">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Product Settings</h6>
                    </li>

                    <li><a class="dropdown-item" href="core.php?aksi=<?=encryptData('hapusproduk','aksi')?>&token=<?=encryptData($product['id_produk'],'id_produk')?>">Hapus</a></li>
                    <li><a class="dropdown-item" href="#">-</a></li>
                    <li><a class="dropdown-item" href="#">-</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title"><?=$product['judul']?> <span>| Rp. <?=number_format($product['harga'])?></span></h5>

                  <div class="d-flex align-items-center">
                    <img width="100%" height="350px" src="../gambar-undangan/<?=$product['gambar']?>" alt="">
                  </div>
                </div>

              </div>
            </div>
    <?php } ?>
</div>
</section>