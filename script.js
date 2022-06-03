let dayStrings = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (let i = 0; i < dayStrings.length; i++) {
  document.getElementById(`${dayStrings[i]}GraphContainer`).addEventListener("mouseover", function () {
    document.getElementById(`${dayStrings[i]}HoverContainer`).style.opacity = 1;
  });

  document.getElementById(`${dayStrings[i]}GraphContainer`).addEventListener("mouseleave", function () {
    document.getElementById(`${dayStrings[i]}HoverContainer`).style.opacity = 0;
  });
}
