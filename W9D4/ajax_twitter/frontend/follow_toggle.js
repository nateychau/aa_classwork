const APIUtil = require("./api_util.js");
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
