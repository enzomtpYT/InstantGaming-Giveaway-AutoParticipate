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

(function () {
  "use strict";

  async function participate() {
    try {
      const participate = document.querySelector("button.button.validate");
      if (participate !== null) {
        console.log("Button 'Partecipate' was found. I'm clicking...");
        participate.click();
        await new Promise(resolve => setTimeout(resolve, 2000)); // Aspetta 2 secondi
        location.reload();
      } else {
        console.log("Button 'Partecipate' wasn't found.");
      }
    } catch (error) {
      console.error("Error when trying to participate:", error);
    }
  }

  async function socials() {
    try {
      const socials = document.querySelectorAll("a.button.reward.alerts");
      socials.forEach((e) => e.click());
    } catch (error) {
      console.error("Error when trying to subscribe to socials:", error);
    }
  }

  function openInNewTab(url) {
    window.open(url, '_blank');
  }

  async function openall() {
    try {
      document.querySelectorAll('#user-content-giveaways>a').forEach(a => {
        openInNewTab(a.href);
      });
    } catch (error) {
      console.error("Error when trying to execute openall:", error);
    }
  }

  // Partecipate and subscribe to sicla with 2 seconds of delay
  setTimeout(() => {
    participate();
    socials();
  }, 2000);
})();
