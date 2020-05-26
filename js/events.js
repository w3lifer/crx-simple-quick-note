;'use strict';

/* global chrome */

chrome.runtime.onStartup.addListener(function () {
  chrome.storage.sync.get('note', function (storage) {
    if (storage.note) {
      chrome.browserAction.setBadgeText({
        'text': storage.note.length ? String(storage.note.length) : ''
      });
    }
  });
});
