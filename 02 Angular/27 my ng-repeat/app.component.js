class AppComponent {
    constructor($compile, $scope, $element) {
        $scope.nums = [1,2,3];

        $scope.change = function() {
            $scope.nums = ["x"];
        }
    }
}

appModule.component("myApp", {
    controller: AppComponent,
    templateUrl: "app.component.html",
});
