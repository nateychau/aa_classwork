/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/twitter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

const APIUtil = {
  followUser: (id) => {
    return $.ajax({
      method: "POST",
      url: `/users/${id}/follow`,
      dataType: "JSON",
    });
  },

  unfollowUser: (id) => {
    return $.ajax({
      method: "DELETE",
      url: `/users/${id}/follow`,
      dataType: "JSON",
    });
  },

  searchUsers: (queryVal) => {
    return $.ajax({
      method: "GET",
      url: "/users/search",
      data: {
        query: queryVal,
      },
      dataType: "JSON",
    });
  },
};

module.exports = APIUtil;


/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(/*! ./api_util.js */ "./frontend/api_util.js");
class FollowToggle {
  constructor($el, options) {
    this.$followButton = $el;
    this.userId = this.$followButton.attr("user-id") || options.userId;
    this.followState =
      this.$followButton.attr("initial-follow-state") || options.followState;
    this.render();
    this.handleClick();
  }

  render() {
    if (
      this.followState === "following" ||
      this.followState === "unfollowing"
    ) {
      this.$followButton.prop("disabled", true);
    }
    if (this.followState === "unfollowed") {
      this.$followButton.text("Follow!");
      this.$followButton.prop("disabled", false);
    } else {
      this.$followButton.text("Unfollow!");
      this.$followButton.prop("disabled", false);
    }
  }

  handleClick() {
    let that = this;
    this.$followButton.on("click", function (event) {
      event.preventDefault();
      if (that.followState === "unfollowed") {
        that.followState = "following";
        that.render();
        APIUtil.followUser(that.userId).then((result) => {
          that.followState = "followed";
          that.render();
        });
      } else {
        that.followState = "unfollowing";
        that.render();
        APIUtil.unfollowUser(that.userId).then((result) => {
          that.followState = "unfollowed";
          that.render();
        });
      }
      //that.render();
    });
  }
}

module.exports = FollowToggle;


/***/ }),

/***/ "./frontend/tweet_compose.js":
/*!***********************************!*\
  !*** ./frontend/tweet_compose.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

class TweetCompose {
  constructor($el) {
    this.$content = $el.find("textarea");
    debugger;
    // this.$value =
  }

  handleSubmit() {
    let that = this;
  }
}

module.exports = TweetCompose;


/***/ }),

/***/ "./frontend/twitter.js":
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js");
const UsersSearch = __webpack_require__(/*! ./users_search.js */ "./frontend/users_search.js");
const TweetCompose = __webpack_require__(/*! ./tweet_compose.js */ "./frontend/tweet_compose.js");

$(() => {
  $("button.follow-toggle").each((idx, el) => {
    new FollowToggle($(el));
  });
  $("nav.users-search").each((idx, el) => {
    new UsersSearch($(el));
  });
  $("form.tweet-compose").each((idx, el) => {
    new TweetCompose($(el));
  });
});


/***/ }),

/***/ "./frontend/users_search.js":
/*!**********************************!*\
  !*** ./frontend/users_search.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(/*! ./api_util.js */ "./frontend/api_util.js");
const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js");
class UsersSearch {
  constructor($el) {
    this.$el = $el;
    this.$input = $("#search-user");
    this.$userlist = $(".users");
    this.handleInput();
  }

  handleInput() {
    let that = this;
    this.$input.on("input", (event) => {
      event.preventDefault();
      console.log(that.$input.val());
      APIUtil.searchUsers(that.$input.val()).then((res) => {
        this.renderResults(res);
      });
    });
  }

  renderResults(res) {
    this.$userlist.empty();
    for (let i = 0; i < res.length; i++) {
      let $li = $("<li></li>");
      let $a = $(`<a href="/users/${res[i].id}">${res[i].username}</a>`);
      $li.append($a);
      let $button = $("<button class='follow-toggle'></button>");
      var followed;
      if (res[i].followed) {
        followed = "followed";
      } else {
        followed = "unfollowed";
      }
      new FollowToggle($button, {
        userId: res[i].id,
        followState: followed,
      });
      $li.append($button);
      this.$userlist.append($li);
    }
  }
}

module.exports = UsersSearch;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map