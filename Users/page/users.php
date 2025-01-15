<?php


// include 'core.php';
$users = ambil_data('users');

// var_dump($users);
?>
<div class="card p-4">
    <!-- Tambah -->
    <div class="row">
        <div class="col-lg-3">
            <button type="button" class="btn btn-sm btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#basicModal">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWJJREFUSEvtlEsrRWEUhp83Y5ciuU74AzIzF6UMkYmSgT8gZi4zlF9AmbqMRWRmrPwAmehElBTjl0/fFvs45+y9dSbyTfYerL2ebz1rrS3qfFTn/PxRgO0eYAcYigovgHlJt3mVlimy3QVcAW2pZA/AgKRSHshPgANgIlawAjQA4TkHHEqa/C3gCWgBehMltvuAa+BeUsdvAfdAO9An6SYkqwWw7RAnqcxINUXb7x+tRkVrwCywJ2k6XUFeQCdwCaRVhOYOSgoVfju5AFFJE7AIzMRMu8CmpNckc5K0Uj8SXYU3uTDA9nh03w80xxs+xylalnRUWJHtJWC9xhguSNr6GpOpB7ZHgRPgDgigU0nhPYxpaPgIsBGbPyzpPN2PqmNq+wwYBqYkhW0uO7bDFu8Dx5LGsizcZ5NtJwvWKOmlAqAVeARKkrrzAipuY1bfPwELj2mW23/8PrIGFo37B9Q09wahz44Zok46AwAAAABJRU5ErkJggg=="/>
        </button>
        </div>
    </div>
    <div class="modal fade" id="basicModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Tambah User</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="core.php?aksi=tambahuser" method="POST">
                <div class="modal-body">
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-2 col-form-label">Nama</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" name="nama" id="inputText">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" name="email" id="inputText">
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-2 col-form-label">Password</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" name="password" id="inputText">
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
    <!--  -->
    <table class="table datatable">
        <thead>
            <tr>
            <th scope="col">No</th>
            <th scope="col">Nama</th>
            <th scope="col">Email</th>
            <th scope="col">Aksi</th>
            </tr>
        </thead>
        <tbody>
            <?php $no = 1; foreach($users as $user){?>
            <tr>
            <th scope="row"><?=$no++?></th>
            <td><?=$user['nama']?></td>
            <td><?=$user['email']?></td>
            <td><a class="btn btn-danger btn-sm" href="core.php?aksi=hapususer&token=<?=($user['id'])?>"><span class="bi bi-trash"></span></a></td>
            </tr>
            <?php }?>
        </tbody>
    </table>
</div>