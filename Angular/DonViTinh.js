app.controller("NSXCtrl", function($scope, $http) {
    var baseurl = 'https://localhost:44396/api/'
    var url = 'https://localhost:44304/api/'

    // Load danh sách loại sản phẩm
    $scope.LoadLoaiSP = function() {
        $http({
            method: 'GET',
            url: baseurl + "LoaiSanPham/AllLoai"
        }).then(function(response) {
            $scope.listLoaiSP = response.data;
        });
    }

    $scope.submit = "Thêm mới";
    $scope.listSP = [];

    $scope.maSanPham,
        $scope.maLoai,
        $scope.tenSanPham,
        $scope.moTaSanPham,
        $scope.anhDaiDien,
        $scope.maNSX,
        $scope.maDonViTinh,
        $scope.maMau,
        $scope.maSize,
        $scope.ngayTao
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

    // Thêm hoặc cập nhật loại sản phẩm
    $scope.CreateUpdate = function() {
        let obj = {}
        obj.maLoai = $scope.maLoai,
            obj.tenLoai = $scope.tenLoai,
            /*obj.trangThai =$scope.trangThai*/
            obj.trangThai = ($scope.trangThai === "true") ? true : false;

        // Thực hiện thêm mới
        if ($scope.submit == "Thêm mới") {
            $http({
                method: 'POST',
                data: obj,
                url: baseurl + 'SanPhams/Create',
            }).then(function(response) {
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
            }).then(function(response) {
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
            let loaisp = response.data;
            $scope.maLoai = loaisp.maLoai;
            $scope.tenLoai = loaisp.tenLoai;
            $scope.trangThai = loaisp.trangThai;
        });
    };

    // Xóa loại sản phẩm
    $scope.Xoa = function(id) {
        var result = confirm("Bạn có thực sự muốn xóa không?");
        if (result) {
            $http({
                method: 'POST',
                url: baseurl + 'SanPhams/Delete/' + id,
            }).then(function(response) {
                $scope.LoadSP();
                alert('Xóa thành công!');
            });
        }
    }
    $scope.LoadSP();
    $scope.LoadLoaiSP();
});