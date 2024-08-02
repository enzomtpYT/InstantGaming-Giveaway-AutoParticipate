// ==UserScript==
// @name         Instant Gaming Auto Giveaway
// @description  A script that automatically click on participate buttons on Instant-Gaming.
// @version      1.4
// @author       enzomtp
// @namespace    https://github.com/enzomtpYT/InstantGamingGiveawayList
// @match        *://www.instant-gaming.com/*
// @match        *://github.com/enzomtpYT/*
// @run-at       document-idle
// @grant        GM_registerMenuCommand
// @license      MIT
// @downloadURL https://github.com/enzomtpYT/InstantGaming-Giveaway-AutoParticipate/raw/main/participate.user.js
// @updateURL https://github.com/enzomtpYT/InstantGaming-Giveaway-AutoParticipate/raw/main/participate.user.js
// ==/UserScript==

(function() {
  "use strict";

    if (!document.location.href.endsWith('?igr=enzomtp') && document.location.href.startsWith('https://www.instant-gaming.com/')) {
        document.location.href = document.location.href+'?igr=enzomtp'
    }

  function openInNewTab(url) {
       window.open(url, '_blank');
  }

  function participate(){
    // Get the participate button element.
    const participate = document.querySelector("button.button.validate");
    // Click on participate if it exists.
    if (participate !== null) {
      participate.click();
      location.reload();
    }
  }

  function socials(){
    // Get all the socials
    const socials = document.querySelectorAll("a.button.reward.alerts")
    // Click on each socials
    socials.forEach((e) => e.click())
  }

  function giveawayList(){
    // Get the giveaway list
    const giveawayList = document.querySelectorAll("a.giveaway")
    // Click on the giveaway list
    giveawayList.forEach((e) => e.click())
  }

  function openall(){
      document.querySelectorAll('#user-content-giveaways>a').forEach(a => {openInNewTab(a.href)})
  }

  // Register the menu command
  GM_registerMenuCommand("Participate", participate);
  GM_registerMenuCommand("Socials", socials);
  GM_registerMenuCommand("Giveaway List", giveawayList);
  GM_registerMenuCommand("Open ALL Links", openall);
  participate();
  socials();

})();
