/*
// const text = document.querySelector("h1"); //using HTML tag
const varNameTitle = document.querySelector(".title"); //using class
const varNameButton = document.querySelector(".changeColor");


//i. example - calling in HTML
varNameTitle.style.color = "red";
varNameTitle.style.backgroundColor = "#333"; //background-color will not work; camelCase is accepted

//ii. example - adding and removing class style in specific variable
varNameTitle.classList.add("change"); //change is a class inside CSS
varNameTitle.classList.remove("change");


//iii. event listener
// in this example when you click the button the callback function will execute
varNameButton.addEventListener("click", function () {
  varNameTitle.classList.add("change");
});

// toggle - alternately change "add" / "remove"
varNameButton.addEventListener("click", function () {
  varNameTitle.classList.toggle("change");
});
*/

/*
const varNameUserList = document.querySelectorAll(".name-list li");
// console.log(varNameUserList);
for (user of varNameUserList) {
  user.addEventListener("click", function () {
    //console.log(this); //"this" is also the "user"

    this.style.color = "red";
  });
}
*/

//Adding new list
const userList = document.querySelector(".name-list");
const listInputTxtField = document.querySelector(".list-inputTextField"); // to get the value ; listInput.value
const addListBtn = document.querySelector(".addListBtn");

addListBtn.addEventListener("click", function () {
  //create a new li
  const newLi = document.createElement("li"); // to create new <li> tag
  const liContent = document.createTextNode(listInputTxtField.value); //to get the value of text field

  //add input value inside the new li
  newLi.appendChild(liContent); // <li> liContent </li>

  //attaching the li to the user list
  userList.appendChild(newLi); // <ul><li> liContent </li></ul>
});
