// applab-shim.js
// Recreates the handful of App Lab functions used in this course's demos,
// so App-Lab-style code can run inside a Web Lab (plain HTML/CSS/JS)
// project. This is NOT Code.org's real App Lab library — that isn't
// published anywhere loadable. It's a small stand-in covering only the
// functions actually used here.

function onEvent(id, eventType, callback) {
  var el = document.getElementById(id);
  if (!el) { console.error("onEvent: no element with id '" + id + "'"); return; }
  el.addEventListener(eventType, callback);
}

function setText(id, value) {
  var el = document.getElementById(id);
  if (!el) { console.error("setText: no element with id '" + id + "'"); return; }
  if ("value" in el) {
    el.value = value;
  } else {
    el.textContent = value;
  }
}

function getText(id) {
  var el = document.getElementById(id);
  if (!el) { console.error("getText: no element with id '" + id + "'"); return ""; }
  return ("value" in el) ? el.value : el.textContent;
}

function setProperty(id, property, value) {
  var el = document.getElementById(id);
  if (!el) { console.error("setProperty: no element with id '" + id + "'"); return; }
  if (property === "text") {
    setText(id, value);
  } else if (property === "visible") {
    el.style.display = value ? "" : "none";
  } else {
    // Handles hyphenated CSS property names directly, e.g. "background-color"
    el.style.setProperty(property, value);
  }
}

function getProperty(id, property) {
  var el = document.getElementById(id);
  if (!el) { console.error("getProperty: no element with id '" + id + "'"); return null; }
  if (property === "text") return getText(id);
  return getComputedStyle(el).getPropertyValue(property);
}

function hideElement(id) {
  var el = document.getElementById(id);
  if (!el) { console.error("hideElement: no element with id '" + id + "'"); return; }
  el.style.display = "none";
}

function showElement(id) {
  var el = document.getElementById(id);
  if (!el) { console.error("showElement: no element with id '" + id + "'"); return; }
  el.style.display = "";
}

// Inclusive on both ends, matching App Lab's randomNumber(min, max).
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
