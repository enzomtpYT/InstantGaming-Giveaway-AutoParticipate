// ==UserScript==
// @name         Instant Gaming Auto Giveaway
// @description  A script that automatically click on participate buttons on Instant-Gaming.
// @version      1.0
// @author       enzomtp
// @namespace    https://google.com
// @match        https://www.instant-gaming.com/*/giveaway/*
// @run-at       document-idle
// @grant        none
// @license      MIT
// @downloadURL https://github.com
// @updateURL https://github.com
// ==/UserScript==

(function() {
  "use strict";
  // Get the participate button element.
  const participate = document.querySelector("button.button.validate");
  // Click on participate if it exists.
  if (participate !== null) {
    participate.click();
    location.reload();
  }
  // Get all the socials
  const socials = document.querySelectorAll("a.button.reward.alerts")
  // Click on each socials
  socials.forEach((e) => e.click())
})();
