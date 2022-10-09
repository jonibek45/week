const clear = document.querySelector(".clear");
const elDate = document.querySelector("#date");
const elList = document.querySelector("#list");
const elInput = document.querySelector("#input");

const check = "fa-regular fa-circle-plus";
const uncheck = "fa-regular fa-circle";
const lineThrough = "lineThrough";

const options = {weekday: "long", month:"short", day:"numeric"}
const today = new Date();

elDate.innerHTML = today.toLocaleDateString("en-US0")
