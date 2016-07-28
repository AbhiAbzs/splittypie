import Ember from "ember";

const { Component } = Ember;

export default Component.extend({
    tagName: "button",
    classNames: ["btn", "btn-link"],

    click() {
        window.history.back();

        return false;
    },
});
