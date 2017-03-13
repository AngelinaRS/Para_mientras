var dashboard = angular.module('fenzy_web', ['ui.router','firebase']);
//,'ngMaterial', 'ngMessages', 'material.svgAssetsCache'
dashboard.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/LoginAndRegister");

  $stateProvider
    // Login And Register View
    .state('LoginAndRegister', {
      url: "/LoginAndRegister",
      views: {
        '': {
          templateUrl: "templates/LoginAndRegister/loginAndRegister.html",
          controller: "loginCtrl"
        }
      }
    })

    // // SideBar Menu View
    // .state('Menu', {
    //   url: "/Menu",
    //   templateUrl: "templates/SidebarMenu/sidebarMenu.html",
    //   controller: "MenuCtrl"
    // })
    //
    // // Edit Profile View
    // .state('EditProfile', {
    //   url: "/EditProfile",
    //   templateUrl: "templates/EditProfile/editProfile.html",
    //   controller: "editProfileCtrl"
    // })
    // // Edit Profile View
    // .state('EditProfile2', {
    //   url: "/EditProfile2",
    //   templateUrl: "templates/EditProfile/editProfile.html",
    //   controller: "editProfileCtrl2"
    // })
    //
    // // Notifications View
    // .state('Notifications', {
    //   url: "/notifications",
    //   parent: 'Menu',
    //   views: {
    //     'notifications': {
    //       templateUrl: 'templates/Notifications/notifications.html'
    //     }
    //   }
    // })
    //
    // // Publications View
    // .state('Publication', {
    //   url: "/Publication/:personId",
    //   parent: 'Menu',
    //   views: {
    //     'publications': {
    //       templateUrl: 'templates/Publications/publications.html',
    //       controller: 'publicationsCtrl'
    //     }
    //   }
    // })
    //
    // // Analitycs View
    // .state('Analitycs', {
    //   url: "/analitycs",
    //   parent: 'Menu',
    //   views: {
    //     'analitycs': {
    //       templateUrl: 'templates/AnalitycsView/analitycs.html',
    //       controller: 'AnalitycsViewCtrl'
    //     }
    //   }
    // })
    //
    // // Finance View
    // .state('Finance', {
    //   url: "/finance",
    //   parent: 'Menu',
    //   views: {
    //     'finance': {
    //       templateUrl: 'templates/FinanceView/finance.html'
    //     }
    //   }
    // })
    //
    // // New Promotion View
    // .state('newPromotion', {
    //   url: "/newPromotion",
    //   templateUrl: "templates/newPromotion/newPromotion.html",
    //   controller: "newPromotionCtrl"
    // })
    // // Edit Promotion View
    // .state('EditPromotion', {
    //   url: "/EditPromotion/:personId",
    //   templateUrl: "templates/EditPromotion/EditPromotion.html",
    //   controller: "EditPromotionCtrl"
    // })
    //
    // // New Coupon View
    // .state('newCoupon', {
    //   url: "/newCoupon",
    //   templateUrl: "templates/newCoupon/newCoupon.html",
    //   controller: "newCouponCtrl"
    // })
    // // Edit Coupon View
    // .state('EditCoupon', {
    //   url: "/EditCoupon/:CuponId",
    //   templateUrl: "templates/EditCoupon/EditCoupon.html",
    //   controller: "EditCouponCtrl"
    // })
    // // Loyalty Card View
    // .state('loyaltyCard', {
    //   url: "/loyaltyCard",
    //   templateUrl: "templates/loyaltyCard/loyaltyCard.html",
    //   controller: "loyaltyCardCtrl"
    // })
    //
    // // Edit EditInstantAward Card View
    // .state('EditInstantAward', {
    //   url: "/EditInstantAward/:CardId",
    //   templateUrl: "templates/EditInstantAward/EditInstantAward.html",
    //   controller: "EditInstantAwardCtrl"
    // })
    //
    // // Edit EditInstantAward Card View
    // .state('EditLoyaltyCard', {
    //   url: "/EditLoyaltyCard/:CardId",
    //   templateUrl: "templates/EditLoyaltyCard/EditLoyaltyCard.html",
    //   controller: "EditLoyaltyCardCtrl"
    // })
    //
    // // Instant Award View
    // .state('instantAward', {
    //   url: "/instantAward",
    //   templateUrl: "templates/instantAward/instantAward.html",
    //   controller: "instantAwardCtrl"
    // })
    //
    // // Technical Support View
    // .state('support', {
    //   url: "/support",
    //   templateUrl: "templates/support/support.html",
    //   controller: "supportCtrl"
    // })
    //
    // // Team View
    // .state('Team', {
    //   url: "/team",
    //   parent: 'Menu',
    //   views: {
    //     'team': {
    //       templateUrl: 'templates/TeamView/team.html',
    //       controller: "TeamCtrl"
    //     }
    //   }
    // })
    //
    // // Members View
    // .state('member', {
    //   url: "/member",
    //   templateUrl: "templates/user/user.html",
    //   controller: "addMemberCtrl"
    // })

    // Home View
    .state('Home', {
      url: "/Home",
      templateUrl: "templates/Home/Home.html",
      controller: "homeCtrl"
    })
});
