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

  textareaHeightElement.addEventListener('input', saveSizeOfTextarea.bind(null, 'height', 'width'));

  textareaWidthElement.addEventListener('input', saveSizeOfTextarea.bind(null, 'width', 'height'));

  function saveSizeOfTextarea(axis1, axis2, e) {
    chrome.storage.sync.get('textarea', function (storage) {
      let data = {};
      data[axis1] = e.target.value;
      data[axis2] = (storage.textarea && storage.textarea[axis2]) || TEXTAREA[axis2];
      chrome.storage.sync.set({textarea: data});
    });
  }

  document
    .getElementById('close-button')
    .addEventListener('click', function () {
      window.close();
    });

});
