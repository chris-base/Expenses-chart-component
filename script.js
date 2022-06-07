fetch("data.json")
  .then((response) => response.json())
  .then((json) => {
    // console.log(json.length);

    for (let i = 0; i < json.length; i++) {
      // add hover opacity to bars in graph
      document.getElementById(`${json[i].day.toLowerCase()}GraphContainer`).addEventListener("mouseover", function () {
        document.getElementById(`${json[i].day.toLowerCase()}HoverContainer`).style.opacity = 1;
      });
      document.getElementById(`${json[i].day.toLowerCase()}GraphContainer`).addEventListener("mouseleave", function () {
        document.getElementById(`${json[i].day.toLowerCase()}HoverContainer`).style.opacity = 0;
      });
      document.getElementById(`${json[i].day.toLowerCase()}GraphContainer`).addEventListener("mouseover", function () {
        document.getElementById(`${json[i].day.toLowerCase()}GraphContainer`).style.opacity = 0.6;
      });
      document.getElementById(`${json[i].day.toLowerCase()}GraphContainer`).addEventListener("mouseleave", function () {
        document.getElementById(`${json[i].day.toLowerCase()}GraphContainer`).style.opacity = 1;
      });

      // add hover dollar values to divs
      document.getElementById(`${json[i].day.toLowerCase()}HoverText`).innerText = "$" + json[i].amount;
    }
  });
