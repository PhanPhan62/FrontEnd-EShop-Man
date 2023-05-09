app.controller("LoaiSPCtrl", function($scope, $http) {
    var baseurl = 'https://localhost:44396/api/'
    var url = 'https://localhost:44304/api/'

    $scope.submit = "Thêm mới";
    $scope.listLoaiSP = [];
    $scope.maLoai;
    $scope.tenLoai;
    $scope.trangThai;
    $scope.Reset = function() {
        $scope.submit = "Thêm mới";
    }

    // Load danh sách loại sản phẩm
    $scope.LoadLoaiSP = function() {
        $http({
            method: 'GET',
            url: baseurl + "LoaiSanPham/AllLoai"
        }).then(function(response) {
            $scope.listLoaiSP = response.data;
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
                url: baseurl + 'LoaiSanPham/CreateLoai',
            }).then(function(response) {
                $scope.LoadLoaiSP();
                alert('Thêm sản phẩm thành công!');
            });
        }
        // Thực hiện cập nhật
        else {
            $http({
                method: 'POST',
                data: obj,
                url: baseurl + 'LoaiSanPham/EditLoai',
            }).then(function(response) {
                $scope.LoadLoaiSP();
                alert('Cập nhật sản phẩm thành công!');
            });
        }
    };
    // Lấy thông tin loại sản phẩm để sửa
    $scope.Sua = function(id) {
        $scope.submit = "Lưu lại";
        $http({
            method: 'GET',
            url: baseurl + 'LoaiSanPham/SPByIDLoai/' + id,
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
                url: baseurl + 'LoaiSanPham/DeleteLoai/' + id,
            }).then(function(response) {
                $scope.LoadLoaiSP();
                alert('Xóa thành công!');
            });
        }
    }
    $scope.LoadLoaiSP();
});