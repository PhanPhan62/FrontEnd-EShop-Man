app.controller("HomeCtrl", function($scope, $http) {
    $scope.all;
    $scope.LoadSanPhamByID = function(id) {
        $http({
            method: 'post',
            url: 'https://localhost:44304/api/Client/SPByID/' + id,
        }).then(function(response) {
            console.log(response.data); //
            $scope.SPbyID = response.data;
        });
    };
    $scope.LoadAllSanPham = function() {
        $http({
            method: 'GET',
            url: 'https://localhost:44396/api/SanPhams/ALLSP',
        }).then(function(response) {
            console.log(response.data); //
            $scope.allSP = response.data;
        });
    };
    $scope.listSanPhamMoi;
    $scope.LoadSanPhamMoi = function() {
        $http({
            method: 'GET',
            url: current_url + '/api/Client/NewProduct',
        }).then(function(response) {
            console.log(response.data); //
            $scope.listSanPhamMoi = response.data;
        });
    };
    $scope.ListBestSeller;
    $scope.LoadBestSeller = function() {
        $http({
            method: 'GET',
            url: current_url + '/api/Client/BestSelling',
        }).then(function(response) {
            console.log(response.data); //
            $scope.ListBestSeller = response.data;
        });
    };
    $scope.ListHotSale;
    $scope.LoadHotSale = function() {
        $http({
            method: 'GET',
            url: current_url + '/api/Client/Sale',
        }).then(function(response) {
            console.log(response.data); //
            $scope.ListHotSale = response.data;
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
    $scope.LoadSanPhamMoi();
    $scope.LoadBestSeller();
    $scope.LoadHotSale();
    $scope.LoadAllSanPham();
    $scope.LoadSanPhamByID();
});