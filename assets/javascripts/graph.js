(function () {
  /* Interactive graph */
  var a = document.getElementById("a"),
    b = document.getElementById("b"),
    curve = document.getElementById("curve"),
    pt = document.getElementById("pt"),
    eq = document.getElementById("eq"),
    av = document.getElementById("av"),
    bv = document.getElementById("bv");
  var PX = 280 / (2 * Math.PI),
    PY = 50;
  function draw() {
    var A = +a.value,
      B = +b.value,
      d = "";
    for (var i = 0; i <= 300; i++) {
      var x = -2 * Math.PI + i * ((4 * Math.PI) / 300);
      d +=
        (i ? "L" : "M") +
        (300 + x * PX).toFixed(1) +
        " " +
        (180 - A * Math.sin(B * x) * PY).toFixed(1);
    }
    curve.setAttribute("d", d);
    var px = Math.PI / (2 * B);
    pt.setAttribute(
      "transform",
      "translate(" +
        (300 + px * PX).toFixed(1) +
        " " +
        (180 - A * PY).toFixed(1) +
        ")",
    );
    var as = A.toFixed(1),
      bs = B.toFixed(1);
    eq.textContent = "y = " + as + "·sin(" + bs + "x)";
    av.textContent = as;
    bv.textContent = bs;
  }
  a.addEventListener("input", draw);
  b.addEventListener("input", draw);
  draw();

  /* Worked example */
  var steps = [
    ["Subtract 6 from both sides", "2<i>x</i> = 8"],
    ["Divide both sides by 2", "<i>x</i> = 4"],
    ["Check: 2(4) + 6 = 14", "<b>x = 4 ✓</b>"],
  ];
  var box = document.getElementById("steps"),
    next = document.getElementById("next"),
    n = 0;
  var first = box.innerHTML;
  next.addEventListener("click", function () {
    if (n >= steps.length) return;
    var s = steps[n++],
      r = document.createElement("div");
    r.className = "row new";
    r.innerHTML = '<span class="why">' + s[0] + "</span>" + s[1];
    box.appendChild(r);
    if (n >= steps.length) next.disabled = true;
  });
  document.getElementById("reset").addEventListener("click", function () {
    box.innerHTML = first;
    n = 0;
    next.disabled = false;
  });
})();
