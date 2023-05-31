const inputBox = document.querySelector("#input-box");
listContainer = document.querySelector("#list-container");
addButton = document.querySelector(".add-button");
modal = document.querySelector(".modal");
modalButton = document.querySelector(".modal-button");


// function showModal() {
//   modal.classList.add('modal-open');
// }

// function closeModal() {
//   modal.classList.remove('modal-open');
// }

// let showModalInterval = setInterval(showModal, 1000);

// clearInterval(showModalInterval)

// function setTimeOutFunc() {
//   clearInterval(showModalInterval)
// }
// setTimeout(setTimeOutFunc, 5000)


// let closeModalInterval = setInterval(closeModal, 2000)

// function setTimeOutclose() {
//   clearInterval(closeModalInterval);
// }
// setTimeout(setTimeOutclose, 2000);









addButton.addEventListener("click", (e) => {
  if (inputBox.value === "") {
    modal.classList.add("modal-open");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
});

modalButton.addEventListener("click", (e) => {
  modal.classList.remove("modal-open");
});

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});

// function Student(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sayInfo = function () {
//     console.log(`My name is ${this.name} and I am ${this.age} years old.`);
//   };
// }

// let student1 = new Student("Alex", 20);
// console.log(student1.sayInfo());

// let student2 = new Student("John", 34);
// console.log(student2.sayInfo());


netlify.com