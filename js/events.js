;'use strict';

/* global chrome */

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.get('note', function (storage) {
    if (storage.note) {
      setBadge(storage.note);
    }
  });
});
