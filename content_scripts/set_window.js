(function () {
  /**
   * Check and set a global guard variable.
   * If this content script is injected into the same page again,
   * it will do nothing next time.
   */
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  /**
   * Listen for messages from the background script.
   * Call "beastify()" or "reset()".
   */
  browser.runtime.onMessage.addListener((message) => {
    if (message.command === "setWindow") {
      //command가 beastify인 경우
      //insertBeast(message.beastURL); //insertBeast 수행
      //console.log("windowId : " , message.windowID);
      localStorage.setItem("allowd_window", message.windowID);
      alert("Current window is setted to VR enabled window!");
      Location.reload();
    } else if (message.command === "reset") {
      localStorage.setItem("allowd_window", "");
      alert("Window setting has beend reseted!");
      Location.reload(true);
    }
  });
})();
