;'use strict';

/* global chrome */

window.addEventListener('DOMContentLoaded', function () {

  const textareaHeightElement = document.getElementById('textarea-height');
  const textareaWidthElement = document.getElementById('textarea-width');

  chrome.storage.sync.get(null, function (storage) {
    const height = (storage.textarea && storage.textarea.height) || TEXTAREA.height;
    const width = (storage.textarea && storage.textarea.width) || TEXTAREA.width;
    textareaHeightElement.value = height;
    textareaWidthElement.value = width;
  });

  textareaHeightElement.addEventListener('input', function (e) {
    chrome.storage.sync.get('textarea', function (storage) {
      let data = {height: e.target.value};
      if (storage.textarea.width) {
        data.width = storage.textarea.width;
      }
      chrome.storage.sync.set({textarea: data});
    });
  });

  textareaWidthElement.addEventListener('input', function (e) {
    chrome.storage.sync.get('textarea', function (storage) {
      let data = {width: e.target.value};
      if (storage.textarea.height) {
        data.height = storage.textarea.height;
      }
      chrome.storage.sync.set({textarea: data});
    });
  });

});
