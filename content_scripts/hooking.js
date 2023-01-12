let block_flag = true;

//get cirrent window id
var port = browser.runtime.connect();
function handleResponse(message) {
  //console.log('Message from the background : ' + message.response);
  let allowd_windowId = localStorage.getItem("allowd_window");
  let current_windowId = message.response;

  if (allowd_windowId == current_windowId) {
    block_flag = false;
    console.log("matched ID");
  } else {
    block_flag = true;
    console.log("not matched ID");
  }

  if (block_flag) {
    let code = function () {
      document.body.style.border = "5px solid red";

      alert("Minu's extension is activated!!!");

      //console.log(VRDisplay.length); //orginal value of VRDisplay.length

      /*
    In general, you can't undo a defineProperty call, 
    since there's no undo stack or something. 
    The JS engine does not keep track of previous attribute descriptors.
    */

      Object.defineProperty(VRDisplay, "length", {
        value: "manipulated value",
        configurable: false, //
      });
      //console.log(VRDisplay.length);
    };

    var script = document.createElement("script");
    script.textContent = "(" + code + ")()";
    (document.head || document.documentElement).appendChild(script);
  }
}

function handleError(error) {
  console.log(`Error: ${error}`);
}

const sending = browser.runtime.sendMessage({
  get_id: 1,
});

sending.then(handleResponse, handleError);
