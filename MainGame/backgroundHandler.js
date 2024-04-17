function bgColor(r, g, b) {
            document.querySelector('.box1').style.backgroundColor = `rgb(${r},${g},${b})`;
        }
var InputR = document.getElementById("colorInput1");
var InputG = document.getElementById("colorInput2");
var InputB = document.getElementById("colorInput3");
function colorInputs(r, g, b) {
  var value = parseInt(r.value);
  if (value >= 0 && value <= 255) { r = value; } else {
    if (value < 0) { r.value = 0; } else if (value > 255) { r.value = 255; }
  }
  var value = parseInt(g.value);
  if (value >= 0 && value <= 255) { g = value; } else {
    if (value < 0) { g.value = 0; } else if (value > 255) { g.value = 255; }
    }
  var value = parseInt(b.value);
  if (value >= 0 && value <= 255) { b = value; } else {
    if (value < 0) { b.value = 0; } else if (value > 255) { b.value = 255; }
    }
  bgColor(r, g, b);
  }
InputR.addEventListener("input", function() { colorInputs(InputR, InputG, InputB) });
InputG.addEventListener("input", function() { colorInputs(InputR, InputG, InputB) });
InputB.addEventListener("input", function() { colorInputs(InputR, InputG, InputB) });
