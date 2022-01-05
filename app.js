const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

daily.addEventListener("click", function () {
  console.log("swith to daily");
  this.style.color = "white";
  weekly.style.color = "";
  monthly.style.color = "";
});
weekly.addEventListener("click", function () {
  console.log("swith to weekly");
  this.style.color = "white";
  daily.style.color = "";
  monthly.style.color = "";
});
monthly.addEventListener("click", function () {
  console.log("swith to monthly");
  this.style.color = "white";
  weekly.style.color = "";
  daily.style.color = "";
});
