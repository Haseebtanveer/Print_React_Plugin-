/*global chrome*/
chrome.runtime.onInstalled.addListener(() => {
  console.log("I Just Installed My Chorome Extension");
});

chrome.bookmarks.onCreated.addListener(()=>{
   console.log("I Just bookmarked this Chorome Extension");
})
chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.create({'url':"chrome://newtab"})
})
// import chrome from "chrome-extension-async";

// const createWindow = async () => {
//   await chrome.windows.create({
//     url: "http://localhost:3001/",
//     type: "popup",
//     width: 500,
//     height: 600,
//   });
// };
// chrome.runtime.onInstalled.addListener((reason) => {
//   if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
//     chrome.tabs.create({
//       url: "onboarding.html",
//     });
//   }
// });
