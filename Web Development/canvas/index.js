var elem = document.getElementById("myCanvas"),
  elemLeft = elem.offsetLeft,
  elemTop = elem.offsetTop,
  context = elem.getContext("2d"),
  elements = [];

// Add event listener for `click` events.
elem.addEventListener(
  "click",
  function (event) {
    var x = event.pageX - elemLeft,
      y = event.pageY - elemTop;
    console.log(x, y);
    elements.forEach(function (element) {
      if (
        y > element.top &&
        y < element.top + element.height &&
        x > element.left &&
        x < element.left + element.width
      ) {
        alert("clicked an element");
      }
    });
  },
  false
);

// Add element.
elements.push({
  colour: "#05EFFF",
  width: 50,
  height: 50,
  top: 20,
  left: 15,
});
elements.push({
  colour: "#05EFFF",
  width: 50,
  height: 50,
  top: 20,
  left: 70,
});
elements.push({
  colour: "#05EFFF",
  width: 50,
  height: 50,
  top: 20,
  left: 125,
});

// Render elements.
elements.forEach(function (element) {
  context.fillStyle = element.colour;
  context.fillRect(element.left, element.top, element.width, element.height);
});
