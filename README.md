# Firefox browser extension (Ad-ons)
### How to apply Firefox extension
1. Download `defense_extension` folder
2. Open the firefox browser and search `about:debugging` in the address bar
3. click the `This Firefox` option at the left side.
4. click the `Load Temporary Add-on` button, then select any file in your extension's directory (ex. manifest.json).
5. Done!

### Extension test
1. search `https://mozilla.org` (extension target website is written in the manifest.json file)
2. You can check the alert saying `Minu's extension is activated!!!`
3. In this extension, I hooked the access to `VRDisplay.length`
3. You can try calling `VRDisplay.length`. If you don't connect VR Device to the computer, return value should be `0`. But because of the hooking, the return value from `VRDisplay.length` would be `manipulated value`.
4. In the other tab or window (extension not enabled), the access to `VRDisplay.length` will function rightly.

### Defense Mechanism
The WebVR privacy attack method uses vulnerabilities in the Firefox browser. When the victim plays VR, the WebVR framework automatically saves the user's usage information, but the problem is that it responds even if an arbitrary attacker executes the WebVR API in another window.
Therefore, when this Firefox Add-ons is installed in the browser, it basically hooks the WebVR API and returns an arbitrary value when using the WebVR API. However, if the user sets a specific window as VRMode, API operation is allowed for that window so that it can be played normally.