function indexService(e){function r(r){Stamplay.User.login(r).then(function(r){return e.user=r,$("#login-dialog").modal("hide"),n(r)},function(e){console.log(e)})}function n(e){if(e){var r={usuario:e},n=new Stamplay.Codeblock("consultarreservas");return n.run(r).then(function(e){return e},function(e){return console.error(e),null})}$("#login-dialog").modal()}var i={buscarPorDia:n,login:r};return i}function indexCtrl(e,r,n){var i=this;$.material.init(),e.credenciales={},i.reservas=[],e.percentRes=65,e.percentDis=35,e.options={animate:{duration:1e3,enabled:!0},barColor:"RED",scaleColor:"#e8eff0",lineWidth:10,size:150,lineCap:"butt"},e.labels=["January","February","March","April","May","June","July"],e.series=["Series A"],e.data=[[65,59,80,81,56,55,40]],e.labelMensual=["1","2","3","4","5","6","7","8"],e.serieMensual=["Noviembre"],e.dataMensual=[[89,70,65,70,50,65,58,60]],e.onClick=function(e,r){console.log(e,r)},e.datasetOverride=[{yAxisID:"y-axis-1"}],e.optionsLine={responsive:!0,scales:{yAxes:[{id:"y-axis-1",type:"linear",display:!0,position:"left"}]}},n.currentUser().then(function(r){r||e.user?(e.user=r?r:e.user,Stamplay.Object("usuarios").get({owner:e.user._id}).then(function(r){e.user.perfil=r.data[0],i.buscarReservasDia()},function(e){console.log(e)})):(console.log("No hay usuario logueado"),$("#login-dialog").modal())}),i.login=function(){r.login(i.credenciales)},i.buscarReservasDia=function(){r.buscarPorDia(e.user).then(function(r){i.reservas=r,e.$digest(),console.log(r)})}}angular.module("MiParking",["ui.router","chart.js","easypiechart"]).factory("AccountService",["$q",function(e){return{currentUser:function(){var r=e.defer();return Stamplay.User.currentUser().then(function(e){void 0===e.user?r.resolve(!1):r.resolve(e.user)},function(e){r.reject()}),r.promise}}}]).config(["$stateProvider","$urlRouterProvider",function(e,r){r.otherwise("/"),e.state("home",{url:"/",sticky:!0,dsr:!0,views:{navView:{templateUrl:"templates/nav.html"},contentView:{templateUrl:"templates/index.html",controller:"indexCtrl as ctrl"}}})}]),angular.module("MiParking").factory("indexService",["$rootScope",indexService]),angular.module("MiParking").controller("indexCtrl",["$scope","indexService","AccountService",indexCtrl]);
//# sourceMappingURL=maps/app.js.map
