function indexService(e){function r(r){Stamplay.User.login(r).then(function(r){return e.user=r,$("#login-dialog").modal("hide"),n(r)},function(e){console.log(e)})}function n(e){if(e){var r={usuario:e},n=new Stamplay.Codeblock("consultarreservas");return n.run(r).then(function(e){return e},function(e){return console.error(e),null})}$("#login-dialog").modal()}var i={buscarPorDia:n,login:r};return i}function indexCtrl(e,r,n){var i=this;$.material.init(),e.credenciales={},i.reservas=[],e.percentRes=65,e.percentDis=35,e.options={animate:{duration:1e3,enabled:!0},barColor:"RED",scaleColor:"#e8eff0",lineWidth:10,size:150,lineCap:"butt"},e.labels=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],e.series=["Reservas"],e.data=[],e.onClick=function(e,r){console.log(e,r)},e.datasetOverride=[{yAxisID:"y-axis-1"}],e.optionsLine={responsive:!0,scales:{yAxes:[{id:"y-axis-1",type:"linear",display:!0,position:"left"}]}},n.currentUser().then(function(r){r||e.user?(e.user=r?r:e.user,Stamplay.Object("usuarios").get({owner:e.user._id}).then(function(r){e.user.perfil=r.data[0],i.buscarReservasDia(),i.estadisticasAnual()},function(e){console.log(e)})):(console.log("No hay usuario logueado"),$("#login-dialog").modal())}),i.login=function(){r.login(i.credenciales)},i.buscarReservasDia=function(){r.buscarPorDia(e.user).then(function(r){console.log(r),i.reservas=r,e.$digest()})},i.estadisticasAnual=function(){var r=new Stamplay.Codeblock("reservasanual");r.run({}).then(function(r){e.data=[r]},function(e){console.error(e)})},i.estadia=function(e){var r=new Date(e);return r.getDate()+"/"+r.getMonth()+"/"+r.getFullYear()+" - "+r.getHours()+":"+(0==r.getMinutes()?"00":"30")}}function navService(e){function r(e){var r=new Stamplay.Codeblock("consultadisponibilidadparqueo");return r.run(e).then(function(e){return e},function(e){return console.error(e),null})}var n={buscarDisponibilidad:r};return n}function navCtrl(e,r){var n=this;$.material.init(),n.filter={},n.resultBusq=[],n.showDisponibilidad=function(){$("#hD").bootstrapMaterialDatePicker({date:!0}),$("#hH").bootstrapMaterialDatePicker({date:!0}),$("#busqueda-dialog").modal()},n.buscarDisponibilidad=function(){r.buscarDisponibilidad(n.filter).then(function(r){console.log(r),n.resultBusq=r,$("#busqueda-dialog").modal("hide"),e.$digest()})}}angular.module("MiParking",["ui.router","chart.js","easypiechart"]).factory("AccountService",["$q",function(e){return{currentUser:function(){var r=e.defer();return Stamplay.User.currentUser().then(function(e){void 0===e.user?r.resolve(!1):r.resolve(e.user)},function(e){r.reject()}),r.promise}}}]).config(["$stateProvider","$urlRouterProvider",function(e,r){r.otherwise("/"),e.state("home",{url:"/",sticky:!0,dsr:!0,views:{navView:{templateUrl:"templates/nav.html",controller:"navCtrl as ctrl"},contentView:{templateUrl:"templates/index.html",controller:"indexCtrl as ctrl"}}})}]),angular.module("MiParking").factory("indexService",["$rootScope",indexService]),angular.module("MiParking").controller("indexCtrl",["$scope","indexService","AccountService",indexCtrl]),angular.module("MiParking").factory("navService",["$rootScope",navService]),angular.module("MiParking").controller("navCtrl",["$scope","navService",navCtrl]);
//# sourceMappingURL=maps/app.js.map
