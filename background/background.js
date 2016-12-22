console.log('background.js');

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('onInstalled');
  console.log(details);

  if(details.reason == 'install') {
    console.log('This is a first install!');
    var newURL = chrome.extension.getURL('options_ui/options.html');
    chrome.tabs.create({ url: newURL });

  }else if(details.reason == 'update') {
    var thisVersion = chrome.runtime.getManifest().version;
    console.log('Updated from ' + details.previousVersion + ' to ' + thisVersion + '!');
  }
});
