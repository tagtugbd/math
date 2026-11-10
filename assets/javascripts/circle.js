(function () {
  var svg = document.getElementById("unitCircleSvg");
  var pointP = document.getElementById("pointP");
  var pointLabel = document.getElementById("pointLabel");
  var cosLine = document.getElementById("cosLine");
  var sinLine = document.getElementById("sinLine");
  var hypLine = document.getElementById("hypLine");
  var tanLine = document.getElementById("tanLine");
  var secLine = document.getElementById("secLine");
  var angleArc = document.getElementById("angleArc");
  var arcText = document.getElementById("angleArcText");
  var slider = document.getElementById("angleSlider");
  var display = document.getElementById("angleDisplay");
  var eq = document.getElementById("eq");
  var badge = document.getElementById("quadrantBadge");
  var unitSel = document.getElementById("unitToggle");

  var currentAngle = 45;
  var unitMode = "deg";
  var isDragging = false;

  var quadrantLabels = {
    1: "Quadrant I • All ratios positive",
    2: "Quadrant II • Sine positive",
    3: "Quadrant III • Tangent positive",
    4: "Quadrant IV • Cosine positive",
    axis: "Axis angle",
  };

  function quadrantOf(deg) {
    if (deg % 90 === 0) return "axis";
    if (deg < 90) return 1;
    if (deg < 180) return 2;
    if (deg < 270) return 3;
    return 4;
  }

  function formatAngle(deg) {
    if (unitMode === "deg") return Math.round(deg) + "°";
    return ((deg * Math.PI) / 180).toFixed(2) + " rad";
  }

  function update(deg) {
    currentAngle = ((deg % 360) + 360) % 360;
    slider.value = currentAngle;
    display.textContent = formatAngle(currentAngle);
    eq.textContent = "θ = " + formatAngle(currentAngle);

    var rad = (currentAngle * Math.PI) / 180;
    var cosVal = Math.cos(rad);
    var sinVal = Math.sin(rad);
    var tanVal = Math.tan(rad);

    var x = cosVal;
    var y = -sinVal;

    pointP.setAttribute("cx", x);
    pointP.setAttribute("cy", y);
    pointLabel.setAttribute("x", x + (x >= 0 ? 0.08 : -0.7));
    pointLabel.setAttribute("y", y + (y >= 0 ? 0.12 : -0.08));
    pointLabel.textContent =
      "P(" + cosVal.toFixed(2) + ", " + sinVal.toFixed(2) + ")";

    cosLine.setAttribute("x2", x);
    sinLine.setAttribute("x1", x);
    sinLine.setAttribute("x2", x);
    sinLine.setAttribute("y2", y);
    hypLine.setAttribute("x2", x);
    hypLine.setAttribute("y2", y);

    if (Math.abs(cosVal) > 0.001 && Math.abs(tanVal) < 5) {
      tanLine.style.display = "block";
      secLine.style.display = "block";
      var tipY = y - tanVal * Math.sign(cosVal);
      tanLine.setAttribute("x1", x);
      tanLine.setAttribute("x2", x);
      tanLine.setAttribute("y1", 0);
      tanLine.setAttribute("y2", tipY);
      secLine.setAttribute("x2", x);
      secLine.setAttribute("y2", tipY);
    } else {
      tanLine.style.display = "none";
      secLine.style.display = "none";
    }

    var r = 0.25;
    var largeArc = currentAngle > 180 ? 1 : 0;
    angleArc.setAttribute(
      "d",
      "M 0 0 L " +
        r +
        " 0 A " +
        r +
        " " +
        r +
        " 0 " +
        largeArc +
        " 0 " +
        r * cosVal +
        " " +
        -r * sinVal +
        " Z",
    );

    var mid = rad / 2;
    arcText.setAttribute("x", 0.35 * Math.cos(mid));
    arcText.setAttribute("y", -0.35 * Math.sin(mid));
    arcText.textContent =
      unitMode === "deg"
        ? Math.round(currentAngle) + "°"
        : (rad / Math.PI).toFixed(2) + "π";

    var q = quadrantOf(currentAngle);
    badge.textContent = quadrantLabels[q] || quadrantLabels.axis;
  }

  function handlePointer(e) {
    if (!isDragging) return;
    var rect = svg.getBoundingClientRect();
    var cx = rect.left + rect.width / 2;
    var cy = rect.top + rect.height / 2;
    var mx = e.clientX - cx;
    var my = e.clientY - cy;
    var rad = Math.atan2(-my, mx);
    var deg = (rad * 180) / Math.PI;
    if (deg < 0) deg += 360;
    update(deg);
  }

  svg.addEventListener("pointerdown", function (e) {
    isDragging = true;
    svg.setPointerCapture && svg.setPointerCapture(e.pointerId);
    handlePointer(e);
  });
  window.addEventListener("pointermove", handlePointer);
  window.addEventListener("pointerup", function () {
    isDragging = false;
  });

  slider.addEventListener("input", function (e) {
    update(parseFloat(e.target.value));
  });

  unitSel.addEventListener("change", function (e) {
    unitMode = e.target.value;
    update(currentAngle);
  });

  update(45);
})();
