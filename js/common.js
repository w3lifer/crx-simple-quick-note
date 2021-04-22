;'use strict';

/* global chrome */

const TEXTAREA =  {
  height: 350,
  width: 350,
};

function setBadge(note) {
  chrome.browserAction.setBadgeText({
    'text': note.length ? String(note.length) : ''
  });
  chrome.browserAction.setBadgeBackgroundColor({'color': '#fc2323'});
}
