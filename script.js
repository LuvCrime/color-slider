$(document).ready(function () {
  
  let swapOnTextColor = false;
    let bgValue = 0;
    let textValue = 0;

  $(".buttons-color").click(function (e) {

    let currentBtn = $(e.target).data("btn");

    if (currentBtn === "text") {
      swapOnTextColor = true;
    } else {
      swapOnTextColor = false;
    }
    refreshSwatch(true)
  });

  function onChange() {
    let val = $("#slider").slider("value");
    if (swapOnTextColor) {
      textValue = val;
    } else {
      bgValue = val;
    }
    refreshSwatch()
  }

  function getTheColor(colorVal) {
    if (colorVal < 50) {
      myRed = 255;
      myGreen = parseInt((colorVal * 2 * 255) / 100);
    } else {
      myRed = parseInt(((100 - colorVal) * 2 * 255) / 100);
      myGreen = 255;
    }
    return  "rgb(" + myRed + "," + myGreen + ",0)";
  }

  function refreshSwatch(force = false) {
    if (force) {
      $("#slider").slider("value", swapOnTextColor ? textValue : bgValue);
    }   
    let  myColor = getTheColor(swapOnTextColor ? textValue :  bgValue);

    $("#slider .ui-slider-range").css("background-color", myColor);

    $("#slider .ui-state-default, .ui-widget-content .ui-state-default").css(
      "background-color", myColor);

    if (swapOnTextColor) {
      $(".block-preview").css({ color: `${myColor}` });
    } else {
      $(".block-preview").css({ "background-color": `${myColor}` });
    }
  }

  $(function () {
    $("#slider").slider({
      orientation: "horizontal",
      range: "min",
      max: 100,
      value: 53,
      slide: onChange,
      change: onChange,
    });
  });
});
