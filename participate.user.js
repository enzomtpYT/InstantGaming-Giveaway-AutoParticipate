// ==UserScript==
// @name         Instant Gaming Auto Giveaway
// @description  A script that automatically click on participate buttons on Instant-Gaming.
// @version      1.4.6
// @author       enzomtp
// @namespace    https://github.com/enzomtpYT/InstantGamingGiveawayList
// @match        *://www.instant-gaming.com/*
// @match        *://github.com/enzomtpYT/*
// @run-at       document-idle
// @grant        GM_registerMenuCommand
// @license      MIT
// @downloadURL https://raw.githubusercontent.com/enzomtpYT/InstantGaming-Giveaway-AutoParticipate/refs/heads/main/participate.user.js
// @updateURL https://raw.githubusercontent.com/enzomtpYT/InstantGaming-Giveaway-AutoParticipate/refs/heads/main/participate.user.js
// ==/UserScript==

(function() {
  "use strict";

    if (!document.location.href.includes('igr=jaha') && document.location.href.startsWith('https://www.instant-gaming.com/')) {
      const separator = document.location.href.includes('?') ? '&' : '?';
      document.location.href = document.location.href + separator + 'igr=jaha';
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
    }
    setTimeout(() => {
      socials();
    }, 1000);
  }

  function socials(){
    // Get all the socials
    const socials = document.querySelectorAll("a.button.reward.reward")
    // Click on each socials
    socials.forEach((e) => e.click())
  }

  function giveawayList(){
    // Open giveaway links from the new README layout, with fallback to legacy selectors.
    getGiveawayLinks().forEach((a) => a.click())
  }

  function openall(){
      getGiveawayLinks().forEach((a) => { openInNewTab(a.href); })
  }

  function getGiveawayLinks() {
    const activeSummary = Array.from(document.querySelectorAll("details > summary")).find((summary) =>
      summary.textContent.toLowerCase().includes("active giveaway links")
    );

    if (activeSummary) {
      return activeSummary.parentElement.querySelectorAll('a[href*="/giveaway/"]');
    }

    const activeSectionLinks = document.querySelectorAll('#user-content-active-giveaways ~ details a[href*="/giveaway/"]');
    if (activeSectionLinks.length > 0) {
      return activeSectionLinks;
    }

    return document.querySelectorAll('#user-content-giveaways ~ p a, #user-content-giveaways>a, a.giveaway');
  }

  // Register the menu command
  GM_registerMenuCommand("Participate", participate);
  GM_registerMenuCommand("Socials", socials);
  GM_registerMenuCommand("Giveaway List", giveawayList);
  GM_registerMenuCommand("Open ALL Links", openall);
  participate();
  socials();

})();
