browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.get_id) {
    console.log("windowid request received from content-script");
    console.log(sender.tab.windowId);
    sendResponse({ response: sender.tab.windowId });
  }
});
