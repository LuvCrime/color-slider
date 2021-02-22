$(document).ready(function () {
  
  let swapOnTextColor = false;

  $(".buttons-color").click(function (e) {
    let currentBtn = $(e.target).data("btn");
    if (currentBtn === "text") {
      swapOnTextColor = true;
    } else {
      swapOnTextColor = false;
    }
  });

  function getTheColor(colorVal) {
    var theColor = "";
    if (colorVal < 50) {
      myRed = 255;
      myGreen = parseInt((colorVal * 2 * 255) / 100);
    } else {
      myRed = parseInt(((100 - colorVal) * 2 * 255) / 100);
      myGreen = 255;
    }
    theColor = "rgb(" + myRed + "," + myGreen + ",0)";
    return theColor;
  }

  function refreshSwatch() {
    var coloredSlider = $("#slider").slider("value"),
      myColor = getTheColor(coloredSlider);

    $("#slider .ui-slider-range").css("background-color", myColor);

    $("#slider .ui-state-default, .ui-widget-content .ui-state-default").css(
      "background-color",
      myColor
    );
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
      value: 0,
      slide: refreshSwatch,
      change: refreshSwatch,
    });
  });
});
