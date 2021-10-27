function updateLentInput(val) {
  document.getElementById("lentInput").value = val;
}

function updateWidthInput(val) {
  document.getElementById("widthInput").value = val;
}

function updateInsideTemperatureInput(val) {
  document.getElementById("insidetemperatureInput").value = val;
}

function updateOutsideTemperatureInput(val) {
  document.getElementById("outsidetemperatureInput").value = val;
}

function updateAlfaOutsideInput(val) {
  document.getElementById("alfaoutsideInput").value = val;
}

function updateAlfaInsideInput(val) {
  document.getElementById("alfainsideInput").value = val;
}

function updateWallWidthInput1(val) {
  document.getElementById("wallwidthInput1").value = val;
}

function updateWallWidthInput2(val) {
  document.getElementById("wallwidthInput2").value = val;
}

function updateWallWidthInput3(val) {
  document.getElementById("wallwidthInput3").value = val;
}

function findTotal() {
  var lent = document.getElementById("lentInput");
  var width = document.getElementById("widthInput");
  var insideTemperature = document.getElementById("insidetemperatureInput");
  var outsidetemperatureInput = document.getElementById(
    "outsidetemperatureInput"
  );
  var wallwidth1 = document.getElementById("wallwidthInput1");
  var wallwidth2 = document.getElementById("wallwidthInput2");
  var wallwidth3 = document.getElementById("wallwidthInput3");
  var lamdawall1 = document.getElementById("lambda-wall-1");
  var lamdawall2 = document.getElementById("lambda-wall-2");
  var lamdawall3 = document.getElementById("lambda-wall-3");
  var alfaInside = document.getElementById("alfainsideInput");
  var alfaOutside = document.getElementById("alfaoutsideInput");
  var result = document.getElementById("result-value");

  var surface = lent.value * width.value;
  var deltaTemp = Math.abs(
    insideTemperature.value - outsidetemperatureInput.value
  );
  var deltaTempK = deltaTemp + 273.15;
  var rau = 1 / alfaInside.value;
  var ras = 1 / alfaOutside.value;
  var r1 = wallwidth1.value / lamdawall1.value;
  var r2 = wallwidth2.value / lamdawall2.value;
  var r3 = wallwidth3.value / lamdawall3.value;
  console.log(deltaTempK * surface);
  console.log(rau);
  console.log(ras);
  console.log(r1, r2, r3);

  var q = (surface * deltaTempK) / (rau + ras + r1 + r2 + r3) + " W";

  result.textContent = q;
}
