;'use strict';

window.addEventListener('DOMContentLoaded', function () {

  var ext = {

    inputField: document.querySelector('textarea'),
    resetButton: document.querySelector('input[type=reset]'),
    outputLengthElement: document.querySelector('output'),
    noteLength: 0,
    storage: chrome.storage.sync,

    bootstrap: function () {
      this.storage.get(function (data) {
        if (data.note) {
          ext.inputField.value = data.note;
        }
        ext._setLength();
        ext._setBadgeText();
      });
      chrome.browserAction.setBadgeBackgroundColor({'color': '#f48282'});
    },

    updateNote: function () {
      ext.storage.set({'note': ext.inputField.value});
      ext._setLength();
      ext._setBadgeText();
    },

    _setLength: function () {
      ext.noteLength = ext.inputField.value.length;
      ext.outputLengthElement.textContent = ext.noteLength;
    },

    _setBadgeText: function () {
      chrome.browserAction.setBadgeText({
        'text': ext.noteLength ? String(ext.noteLength) : ''
      });
    }

  };

  ext.bootstrap();

  ext.inputField.addEventListener('input', function () {
    ext.updateNote();
  });

  ext.resetButton.addEventListener('click', function () {
    ext.inputField.value = '';
    ext.updateNote();
  });

});
