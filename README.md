# Firefox browser extension (Add-ons)
### How to apply Firefox extension
1. Download `defense_extension` folder
2. Open the firefox browser and search `about:debugging` in the address bar
3. click the `This Firefox` option at the left side.
4. click the `Load Temporary Add-on` button, then select any file in your extension's directory (ex. manifest.json).
5. Done!

### Extension test
1. search `https://mozilla.org` (extension target website is written in the manifest.json file)
2. You can see the alert saying `Minu's extension is activated!!!` and `red border`
3. In this extension, I hooked the access to `VRDisplay.length`
3. You can try calling `VRDisplay.length` in the console. If you don't connect VR Device to the computer, return value should be `0`. But because of the hooking, the return value from `VRDisplay.length` would be `manipulated value`.
4. In the other tab or window (extension not enabled), the access to `VRDisplay.length` will function rightly.


