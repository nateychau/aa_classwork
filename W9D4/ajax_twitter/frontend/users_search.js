const APIUtil = require("./api_util.js");
const FollowToggle = require("./follow_toggle.js");
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
