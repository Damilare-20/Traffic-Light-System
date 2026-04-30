 function checkLight() {
      let color = document.getElementById("colorInput").value;
      let light = document.getElementById("trafficLight");
      let result = "";


      if (color === "red" || color === "yellow" || color === "green") {
        light.classList.remove("hidden");
      }

      if (color === "red") {
        light.style.backgroundColor = "red";
        result = "Stop! Wait until the light changes.";
      }
      if (color === "yellow") {
        light.style.backgroundColor = "yellow";
        result = "Get ready to move.";
      }
      if (color === "green") {
        light.style.backgroundColor = "green";
        result = "Go! You can move now.";
      }
      if (color !== "red" && color !== "yellow" && color !== "green") {
        light.style.backgroundColor = "white";
        result = " Please enter red, yellow, or green.";
      }

      document.getElementById("result").innerText = result;
    }