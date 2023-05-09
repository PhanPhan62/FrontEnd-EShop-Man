var app = angular.module('AppBanHang', []);
app.controller("ChitietCtrl", function($scope, $http) {
    $scope.sanpham;
    $scope.LoadSanPhambyID = function() {
        var key = 'id';
        var value = window.location.search.substring(window.location.search.indexOf(key) + key.length + 1);
        $http({
            method: 'GET',
            url: current_url + '/api/Client/SPByID/' + value,
        }).then(function(response) {
            $scope.sanpham = response.data;
        });
    };
    $scope.LoadDanhMuc = function() {
        $http({
            method: 'GET',
            url: current_url + '/api/LoaiSanPham/AllLoai',
        }).then(function(response) {
            $scope.listDanhMuc = response.data;
        });
    };
    $scope.LoadDanhMuc()
    $scope.LoadSanPhambyID()
});