let person ={
  firstname: "ali",
  lastname: "valiev",
  age: "24",
  job: "doctor",
  tel: "+99890 000 00 00",
  favoriteColor: "black",
  isMarried: "false",
}
let title = document.querySelector("#title");
title.textContent = "nomi " + person.firstname;
title.textContent = "nasabi "+ person.lastname;
title.textContent = "yoshi "+ person.age;
title.textContent = "kasbi "+ person.job;
title.textContent = "tel raqami "+ person.tel;
title.textContent = "yoqtirgan rangi "+ person.favoriteColor;
title.textContent = "uylanganmi "+ person.isMarried;

console.log(person);