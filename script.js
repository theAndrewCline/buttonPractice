/**
 * HELPERS
 **/

/**
 * @param {string} clickColor
 */
const checkColor = (clickColor) =>
  rgbToHex(background.style.background).toLowerCase() ===
  clickColor.toLowerCase();

/**
 * @param {string} rgb
 */
function rgbToHex(rgb) {
  let sep = rgb.indexOf(",") > -1 ? "," : " ";
  // Turn "rgb(r, g, b)" into [r, g, b]
  rgb = rgb.substr(4).split(")")[0].split(sep);

  let r = (+rgb[0]).toString(16),
    g = (+rgb[1]).toString(16),
    b = (+rgb[2]).toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
}

/**
 * MAIN
 **/

const createButton = (colorName, hex) => {
  const btn = document.createElement("button");

  btn.id = colorName.toLowerCase();
  btn.innerText = colorName;
  btn.style.background = hex;
  btn.onclick = switchColor(hex);
  btn.classList = "btn";

  return btn;
};

const btnContainer = document.querySelector(".btn-cont");
const background = document.querySelector(".background");

const stuff = document.querySelector(".stuff");

const switchColor = (/** @type {string} */ hex) => () => {
  if (checkColor(hex)) {
    background.style.background = "#FFFFFF";
  } else {
    background.style.background = hex;
  }
};

const buttons = [
  createButton("Green", "#229954"),
  createButton("Blue", "#2980B9"),
  createButton("Yellow", "#F1C40F"),
  createButton("Red", "#C0392B"),
  createButton("Orange", "#ee9525"),
  createButton("Purple", "#a525ee"),
  createButton("Pink", "#ee25c4"),
];

buttons.forEach((btn) => {
  btnContainer.appendChild(btn);
});

stuff.onclick = function () {
  background.style.background = "#FFFFFF";
};

buttons.forEach((btn, i) => {
  setTimeout(() => {
    btn.classList.add("animated", "pulse");
  }, 250 * i);
});
