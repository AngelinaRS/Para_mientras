// ********* MODULE STARTER **********
dashboard.factory('Promotion', ['$firebaseArray', function($firebaseArray) {

	var ref = FrezyApp.database().ref('Promotion');
	return $firebaseArray(ref);

}]);
dashboard.factory('Coupon', ['$firebaseArray', function($firebaseArray) {

	var ref = FrezyApp.database().ref('Coupon');
	return $firebaseArray(ref);

}]);
dashboard.factory('Cross', ['$firebaseArray', function($firebaseArray) {

	var ref = FrezyApp.database().ref('CrossPromotion');
	return $firebaseArray(ref);

}]);
//customer
dashboard.factory('Customer', function($firebaseObject) {
	return {
	get:function (BusinessID) {
		var ref = Dashboardapp.database().ref('Customer/'+BusinessID);
	return $firebaseObject(ref);
	}
}
});

//push age
dashboard.filter('range', function() {
 return function(input, min, max) {
   min = parseInt(min);
   max = parseInt(max);
   for (var i=min; i<=max; i++)
     input.push(i);
   return input;
 };
});
//all user info
dashboard.factory('findUserByEmail', ['$firebaseObject', function($firebaseObject) {
	return {
		get:function (email) {
			var ref = Dashboardapp.database().ref('Users').orderByChild('Email').equalTo(email);
			return $firebaseObject(ref);
		}
	}
}]);

//Users Team
dashboard.factory('UserTeam', ['$firebaseArray', function($firebaseArray) {
	return {
		get:function () {
			var Users = [];
			var ref = Dashboardapp.database().ref('Users');
			var AllUsers = $firebaseArray(ref);
			AllUsers.$loaded()
		  .then(function(data) {
				angular.forEach(data, function(valueData, keyData) {
					angular.forEach(valueData.Business, function(valueBusiness, keyBusiness) {
						if (keyBusiness == IDCustomers) {
							Users.push(valueData)
						}
					})
				})

		  })
			return Users
		}
	}
}]);

//current user info
dashboard.factory('User', ['$firebaseObject', function($firebaseObject) {
	var user = firebase.auth().currentUser;
  var ref = Dashboardapp.database().ref('Users/'+ user.uid);
	return $firebaseObject(ref);
}]);

//Users Entity
dashboard.factory('Users', ['$firebaseObject', function($firebaseObject) {
  var ref = Dashboardapp.database().ref('Users');
	return $firebaseObject(ref);
}]);

 /* This function generate the codes that use like verification Codes */
dashboard.factory('QuantityCoupon', function($firebaseObject) {
	return {
		get:function (QuantityOfCoupon) {
		 var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		 var codeList = [];
			 for (var i = 0; codeList.length < QuantityOfCoupon; i++) {
				 var codeChar = ""
				 while(codeChar.length<12&&12>0){
					 var r = Math.random();
					 codeChar+= (r<0.1?Math.floor(r*100):String.fromCharCode(Math.floor(r*26) + (r>0.5?97:65)));
				 }

				 if (!(codeChar in codeList)) {
						 codeList.push(codeChar);
				 }
			 }
			// return codeList;
		//  };
		return codeList;
		}
	}
});

dashboard.filter('getDate', function() {
  return function(dateString) {
    var date = moment(dateString, 'DD/MM/YYYY');
    return date.format('DD/MM/YYYY');
  };
});

dashboard.filter('getDateCard', function() {
  return function(dateString) {
    var date =  moment(dateString).format('LL');
    return date
  };
});

dashboard.filter('getHourCard', function() {
  return function(dateString) {
    var date =  moment(dateString).format('LT');
    return date
  };
});

dashboard.filter('getTotalObjectLoyalty', function() {
  return function(object) {
    var totalCoupons = 0;
		angular.forEach(object, function(value, key) {
		  totalCoupons += value;
		});
    return totalCoupons
  };
});

dashboard.filter('getTotalInstantQuantity', function() {
  return function(object) {
    var totalAward = 0;
		angular.forEach(object, function(value, key) {
		  totalAward += value.Quantity;
		});
    return totalAward
  };
});

dashboard.filter('getTotalInstantRedeem', function() {
  return function(object) {
    var totalRedeem = 0;
		angular.forEach(object, function(value, key) {
		  totalRedeem += value.QuantityRedeem;
		});
    return totalRedeem
  };
});


dashboard.filter('TotalDate', function() {
  return function(object) {
		var f1 = "22/2/2017"
		var f2 = new Date();
		f2 = moment(f2).format('DD/MM/YYYY');
		console.log(f2);
		var aFecha1 = f1.split('/');
	  var aFecha2 = f2.split('/');
	  var fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]);
	  var fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]);
	  var dif = fFecha2 - fFecha1;
	  var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
		console.log(dias);
	  return parseInt(object/dias);
  };
});

dashboard.factory('CodesPackageDB', ['$firebaseArray', function($firebaseArray) {
	var ref = Dashboardapp.database().ref('CodesPackage');
	return $firebaseArray(ref);
}]);
