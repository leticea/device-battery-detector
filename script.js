initBattery();

function initBattery() {
  const batteryLiquid = document.querySelector(".Bliquid");
  const batteryStatus = document.querySelector(".Bstatus");
  const batteryPercentage = document.querySelector(".Bpercentage");
  navigator.getBattery().then((batt) => {
    updateBattery = () => {
      let level = Math.floor(batt.level * 100);
      batteryPercentage.innerHTML= level + "%";
      batteryLiquid.style.height = `${parseInt(batt.level * 100)}%`;
      if (level == 100) {
        batteryStatus.innerHTML = `Battery Full <i class="ri-battery-2-fill green-color"></i>`;
        
      }
    }
  })
}