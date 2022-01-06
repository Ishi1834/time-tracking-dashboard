import * as data from "./data.json" assert { type: "json" };
let json = data.default;
const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
weekly.style.color = "white";

daily.addEventListener("click", function () {
  //console.log("swith to daily");
  this.style.color = "white";
  weekly.style.color = "";
  monthly.style.color = "";
  switchTime("daily");
});
weekly.addEventListener("click", function () {
  //console.log("swith to weekly");
  this.style.color = "white";
  daily.style.color = "";
  monthly.style.color = "";
  switchTime("weekly");
});
monthly.addEventListener("click", function () {
  //console.log("swith to monthly");
  this.style.color = "white";
  weekly.style.color = "";
  daily.style.color = "";
  switchTime("monthly");
});
function switchTime(value) {
  var x = document.getElementsByClassName("thisWeek");
  var y = document.getElementsByClassName("lastWeek");
  for (let i = 0; i < x.length; i++) {
    //console.log(x[i]);
    //console.log(json[i].timeframes[value]);
    var current = json[i].timeframes[value].current;
    var previous = json[i].timeframes[value].previous;
    x[i].innerHTML = current + "hrs";
    y[i].innerHTML = "Last Week - " + previous + "hrs";
  }
}
