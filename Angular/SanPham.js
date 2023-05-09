app.controller("SPCtrl", function($scope, $http) {
    var baseurl = 'https://localhost:44396/api/'
    var url = 'https://localhost:44304/api/'

    $scope.submit = "Thêm mới";
    $scope.listSP = [];
    $scope.maLoai,
        $scope.tenSanPham,
        $scope.moTaSanPham,
        $scope.anhDaiDien,
        $scope.giaBan,
        $scope.maNSX,
        $scope.maDonViTinh,
        $scope.maMau,
        $scope.maSize
    $scope.Reset = function() {
        $scope.submit = "Thêm mới";
    }

    // Load danh sách loại sản phẩm
    $scope.LoadSP = function() {
        $http({
            method: 'GET',
            url: baseurl + "SanPhams/ALLSP"
        }).then(function(response) {
            $scope.listSP = response.data;
        });
    }
    $scope.LoadSize = function() {
        $http({
            method: 'GET',
            url: baseurl + "Size/GetAllSize"
        }).then(function(response) {
            $scope.listSize = response.data;
        });
    }
    $scope.LoadMau = function() {
        $http({
            method: 'GET',
            url: baseurl + "Mau/AllMau"
        }).then(function(response) {
            $scope.listMau = response.data;
        });
    }
    $scope.LoadDonViTinh = function() {
        $http({
            method: 'GET',
            url: baseurl + "DonViTinh/GetAllDV"
        }).then(function(response) {
            $scope.listDonViTinh = response.data;
        });
    }
    $scope.LoadNSX = function() {
        $http({
            method: 'GET',
            url: baseurl + "NhaSanXuat/AllNSX"
        }).then(function(response) {
            $scope.listNSX = response.data;
        });
    }
    $scope.LoadLoai = function() {
        $http({
            method: 'GET',
            url: baseurl + "LoaiSanPham/AllLoai"
        }).then(function(response) {
            $scope.listLoai = response.data;
        });
    }

    // Thêm hoặc cập nhật loại sản phẩm
    $scope.CreateUpdate = function() {
        let obj = {}
        obj.maLoai = $scope.maLoai,
            obj.tenSanPham = $scope.tenSanPham,
            obj.moTaSanPham = $scope.moTaSanPham,
            obj.anhDaiDien = $scope.anhDaiDien,
            obj.giaBan = $scope.giaBan,
            obj.maNSX = $scope.maNSX,
            obj.maDonViTinh = $scope.maDonViTinh,
            obj.maMau = $scope.maMau,
            obj.maSize = $scope.maSize

        // Thực hiện thêm mới
        if ($scope.submit == "Thêm mới") {
            $http({
                method: 'POST',
                data: obj,
                url: baseurl + 'SanPhams/Create',
            }).then(function() {
                $scope.LoadSP();
                alert('Thêm sản phẩm thành công!');
            });
        }
        // Thực hiện cập nhật
        else {
            $http({
                method: 'POST',
                data: obj,
                url: baseurl + 'SanPhams/Edit',
            }).then(function() {
                $scope.LoadSP();
                alert('Cập nhật sản phẩm thành công!');
            });
        }
    };
    // Lấy thông tin loại sản phẩm để sửa
    $scope.Sua = function(id) {
        $scope.submit = "Lưu lại";
        $http({
            method: 'GET',
            url: url + 'Client/SPByID/' + id,
        }).then(function(response) {
            let sp = response.data;
            $scope.maSanPham = sp.maSanPham;
            $scope.maLoai = sp.maLoai,
                $scope.tenSanPham = sp.tenSanPham,
                $scope.moTaSanPham = sp.moTaSanPham,
                $scope.anhDaiDien = sp.anhDaiDien,
                $scope.giaBan = sp.giaBan,
                $scope.maNSX = sp.maNSX,
                $scope.maDonViTinh = sp.maDonViTinh,
                $scope.maMau = sp.maMau,
                $scope.maSize = sp.maSize
        });
    };

    // Xóa loại sản phẩm
    $scope.Xoa = function(id) {
        var result = confirm("Bạn có thực sự muốn xóa không?");
        if (result) {
            $http({
                method: 'POST',
                url: baseurl + 'SanPhams/Delete/' + id,
            }).then(function() {
                $scope.LoadSP();
                alert('Xóa thành công!');
            });
        }
    }
    $scope.LoadSP();
    $scope.LoadLoai();
    $scope.LoadNSX();
    $scope.LoadDonViTinh();
    $scope.LoadMau();
    $scope.LoadSize();
});