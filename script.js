//  Add Children start

const childrenRoleEl = document.getElementById("roles-children");
const inputAddChildren = document.getElementById("oneMoreChild");
const addChildButton = document.getElementById("addChildButton");

let numberOfChildren = childrenRoleEl.children.length;

inputAddChildren.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addChild();
  }
});

addChildButton.addEventListener("click", () => {
  addChild();
});
function addChild() {
  const oneMoreChildrenInputText = inputAddChildren.value.trim();

  if (oneMoreChildrenInputText !== "") {
    childrenRoleEl.innerHTML += `<li class="item">${oneMoreChildrenInputText} <button class="delete-button">Delete </button></li>`;

    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        numberOfChildren--;
        addChildButton.disabled = false;
      });
    });
  }

  inputAddChildren.value = "";
  numberOfChildren++;

  if (numberOfChildren === 5) {
    addChildButton.disabled = true;
  }
}
//  Add Children end

//  Add Link start
const host =
  "rus.delfi.lv/57862/v-mire/120134285/v-es-preduprezhdayut-ob-ugroze-so-storony-rf-i-kitaya-v-";
const query = "arktike";

const url = `https://${host}${query}`;

const linkTest = `<a href=${url}>News in this city</a>`;
const weatherLinkEl = document.getElementById("weather-link");
weatherLinkEl.innerHTML = linkTest;
//  Add Link end

// Question start

const answers = document.querySelectorAll(".answer");
const resultElement = document.querySelector(".result");
let selectedAnswer = null;

answers.forEach((answer) => {
  answer.addEventListener("click", () => {
    if (selectedAnswer) {
      selectedAnswer.style.backgroundColor = "#f0f0f0";
      selectedAnswer.style.color = "#000";
    }

    answer.style.backgroundColor = "#007bff";
    answer.style.color = "#fff";

    if (answer.textContent === `"12"`) {
      resultElement.innerText = "Правильно";
    } else {
      resultElement.innerText = "Неправильно";
    }

    selectedAnswer = answer;
  });
});
// Question end

// Calculator start

let firstNumber = "";
let secondNumber = "";
let waitingForSecondNumber = false;
let currentOperator = "";

const display = document.getElementById("display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalOperator = document.getElementById("equal");
const clearButton = document.querySelector(".clear");

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.innerText);
  });
});

function appendNumber(number) {
  if (waitingForSecondNumber) {
    display.value = number;
    secondNumber = number;
    console.log(number);

    waitingForSecondNumber = false;
  } else {
    display.value += number;
    secondNumber += number;
  }
}

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (firstNumber !== "" && secondNumber !== "") {
      calculate();
    }
    waitingForSecondNumber = true;
    setOperator(operator.innerText);
  });
});

function setOperator(operator) {
  if (firstNumber === "") {
    firstNumber = display.value;
  }
  currentOperator = operator;
}

equalOperator.addEventListener("click", () => {
  if (currentOperator && secondNumber) {
    calculate();
  }
});

function calculate() {
  let result;

  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(secondNumber);

  switch (currentOperator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "Ошибка: деление на ноль";
      }
      break;
  }

  display.value = result;

  firstNumber = result.toString();
  secondNumber = "";
  currentOperator = "";
}

clearButton.addEventListener("click", () => {
  clearDisplay();
});

function clearDisplay() {
  display.value = "";
  firstNumber = "";
  secondNumber = "";
  currentOperator = "";
  waitingForSecondNumber = false;
}
// Calculator end

// Render user start

const student = {
  name: "Alex",
  sureName: "Ivanov",
  course: 3,
  age: 21,
  isMarried: true,
  skills: ["HTML", "CSS", "JS"],
  address: {
    city: "Riga",
    street: "Roja",
    "building / letter": null,
  },
};
const studentInfoDiv = document.getElementById("student-info");
function renderStudentInfo() {
  studentInfoDiv.innerHTML = `
  <h2>${student.name} ${student.sureName}</h2>
  <p>Course: ${student.course}</p>
  <p>Married: ${student.isMarried ? "Yes" : "No"}</p>
  <p>Skills: ${student.skills.join(", ")}</p>
  <p>Phone: ${student.contacts?.phone || "Not specified"}</p>
  <p>Street: ${student.address.street}</p>`;
}

renderStudentInfo(student);

for (let key in student) {
  if (student[key]) {
    studentInfoDiv.innerText += `${key}: ${student[key]}\n`;
  }
}
// Render user end

// Вывод юзера start

const newspaper = {
  sports: 'Сколько "стоит" футболист?',
  sportsWriters: ["Евгений Лодыгин", "Михаил Старков", "Жанна Ларионова"],
  business: "Банкроство или кредитное рабство?",
  businessWriters: ["Роман Цветков", "Ибрагим Мамедов", "Владимир Левин"],
  health: "Жиросжигатель из сладкого?",
  healthWriters: ["Ирина Волан", "Екатерина Заостровцева", "Тимур Голаев"],
};

const transformedNewspaper = {};

Object.keys(newspaper).forEach((key) => {
  if (key.endsWith("Writers")) {
    const section = key.slice(0, -7);

    transformedNewspaper[section] = {
      title: newspaper[section],
      writers: newspaper[key],
    };
  }
});

console.log(transformedNewspaper);

Object.entries(transformedNewspaper).forEach(([section, info]) => {
  // Используем метод Object.entries() для перебора пар [ключ, значение] объекта transformedNewspaper и вывода информации о каждом разделе.
  console.log(`Раздел: ${section}`);
  console.log(`Заголовок: ${info.title}`);
  console.log(`Авторы: ${info.writers}`);
  console.log("---");
});

// Вывод юзера end

// LeaveComment start

const friends = [
  {
    name: "Сережа",
    comment: "Поболтаем?",
  },
];

const commentList = document.getElementById("list");
const nameInput = document.getElementById("name-input");
const commentInput = document.getElementById("comment-input");
const commentButton = document.getElementById("add-comment-button");

function renderFriends() {
  let friendHtml;

  friends.forEach((friend) => {
    friendHtml += `
	<li class="friend">
				<p>${friend.name}</p>
				<div class="comments">
					<p class="comment">${friend.comment}</p>
				</div>
			</li>`;
  });
  commentList.innerHTML = friendHtml;
}
renderFriends();

commentButton.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const comment = commentInput.value.trim();

  if (name && comment) {
    friends.push({
      name: name,
      comment: comment,
    });
    renderFriends();

    nameInput.value = "";
    commentInput.value = "";
  } else {
    alert("please enter the name and comment");
  }
});

// LeaveComment end

// Registration start
const registeredUsers = [
  { username: "user1", password: "Password1.", email: "email@kkk.com" },
  { username: "user2", password: "Password2." },
  { username: "user3", password: "Password3." },
];

const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
const successMessage = document.getElementById("success-message");
const confirmPasswordError = document.getElementById("confirm-password-error");
const emailError = document.getElementById("email-error");

function validateUsername(username) {
  const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
  return usernameRegex.test(username);
}

function validatePassword(password) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
  return passwordRegex.test(password);
}

function validateEmail(email) {
  const passwordRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return passwordRegex.test(email);
}

document.getElementById("register-button").addEventListener("click", () => {
  usernameError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
  emailError.textContent = "";

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  try {
    // Валидация логина
    if (!validateUsername(username)) {
      // Исправляем текст ошибки в соответствии с шаблоном регулярного выражения
      throw new Error("Логин должен содержать только буквы и цифры.");
    }

    // Валидация пароля
    if (!validatePassword(password)) {
      // Исправляем текст ошибки в соответствии с шаблоном регулярного выражения
      throw new Error(
        "Пароль должен содержать не менее 8 символов, включая буквы и цифры",
      );
    }

    // Валидация повторного пароля
    if (password !== confirmPassword) {
      // Исправляем текст ошибки в соответствии с шаблоном регулярного выражения
      throw new Error(
        "Пароли не совпадают, проверьте правильность повторного ввода пароля",
      );
    }

    // Валидация email
    if (email && !validateEmail(email)) {
      // Исправляем текст ошибки в соответствии с шаблоном регулярного выражения
      throw new Error("Введите корректный адрес электронной почты");
    }

    // Проверка на существующего пользователя

    let userExists = false; // Флаг по умолчанию, существует ли пользователь с таким логином в массиве registeredUsers.
    let emailExists = false; // Флаг по умолчанию, существует ли пользователь с таким email в массиве registeredUsers.

    for (let i = 0; i < registeredUsers.length; i++) {
      if (
        // Проверка существования пользователя с введенным логином
        registeredUsers[i].username === username
      ) {
        userExists = true;
      }
      if (
        // Проверка существования пользователя с email
        registeredUsers[i].email === email
      ) {
        emailExists = true;
      }
    }

    if (userExists) {
      throw new Error("Пользователь с таким именем уже существует.");
    }
    if (emailExists) {
      throw new Error("Пользователь с таким email уже существует.");
    }
    successMessage.style.display = "block";
  } catch (error) {
    // Обработка ошибок
    if (error.message.includes("Логин")) {
      usernameError.textContent = error.message;
    } else if (error.message.includes("Пароль")) {
      passwordError.textContent = error.message;
    } else if (error.message.includes("email")) {
      emailError.textContent = error.message;
    } else if (error.message.includes("совпадают")) {
      confirmPasswordError.textContent = error.message;
    } else if (error.message.includes("существует")) {
      usernameError.textContent = error.message;
    }
  }
});
// Registration end
// Timer start
// const daysElement = document.getElementById("days");
// const hoursElement = document.getElementById("hours");
// const minutesElement = document.getElementById("minutes");
// const secondsElement = document.getElementById("seconds");

// const monthNames = [
//   "январь",
//   "февраль",
//   "март",
//   "апрель",
//   "май",
//   "июнь",
//   "июль",
//   "август",
//   "сентябрь",
//   "октябрь",
//   "ноябрь",
//   "декабрь",
// ];
// const formatted = (number) => {
//   String(number).padStart(2, "0");
// };

// const timer = (year, month, day, hours, minutes) => {
//   const monthIndex = monthNames.indexOf(month);

//   const targetDate = new Date(year, monthIndex, day, hours, minutes);

//   const now = new Date();

//   let timeLeft = targetDate - now;

//   if (timeLeft <= 0) {
//     alert("Time is over");
//   }

//   const interval = setInterval(() => {
//     timeLeft -= 1000;

//     const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//     const hours = Math.floor(
//       (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
//     );
//     const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//     daysElement.textContent = formatted(days);
//     hoursElement.textContent = formatted(hours);
//     minutesElement.textContent = formatted(minutes);
//     secondsElement.textContent = formatted(seconds);

//     if (timeLeft <= 0) {
//       clearInterval(interval);
//       alert("Time is over");
//     }
//   }, 1000);
// };

// // const year = prompt("Введите год").trim();
// // const month = prompt('Введите месяц (например, "Январь", "Февраль" и т.д.')
// //   .toLowerCase()
// //   .trim();

// // const day = prompt("Введите число месяца").trim();
// // const time = prompt("Введите время в формате ЧЧ:ММ").trim();

// if (year && month && day && time) {
//   const timeParts = time.split(":");
//   const hours = timeParts[0];
//   const minutes = timeParts[1];
//   timer(year, month, day, hours, minutes);
// } else {
//   alert("Вы не ввели все необходимые данные");
// }

// Timer end
// Loader start

const progressInfo = document.getElementById("progressInfo");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const notifications = document.getElementById("notifications");
// console.log(progressInfo);

const uploadCompleted = () => {
  setTimeout(() => {
    addNotifications("Файл обрабатывается...");
    setTimeout(() => {
      addNotifications("Файл обработан");
      setTimeout(() => {
        addNotifications("Сохранение файла...");
        setTimeout(() => {
          addNotifications("Файл успешно сохранен и готов к использованию");
        }, 2000); // Имитация задержки сохранения файла
      }, 1000); // Задержка перед сохранением файла
    }, 1000); // Задержка перед обработкой файла
  }, 1000);
};
function startLoader(callback) {
  addNotifications("Файл загружается...");

  progressInfo.style.display = "block";

  let progress = 0;

  const intervalId = setInterval(() => {
    const increment = Math.floor(Math.random() * 6) + 15;
    progress += increment;

    if (progress >= 100) {
      progress = 100;
    }

    progressFill.style.width = `${progress}%`;
    progressText.textContent = `Прогресс: ${progress}%`;

    if (progress >= 100) {
      clearInterval(intervalId);
      addNotifications("Загрузка файла успешно завершена");

      if (callback) {
        callback();
      }
      progressInfo.style.display = "none";
    }
  }, 1000);
}

function addNotifications(message) {
  notifications.textContent = message;
}

startLoader(uploadCompleted);
// Loader end

// Toggle start

document.getElementById("toggle-button").addEventListener("click", toggleFn);

function toggleFn() {
  const toggleBtn = document.getElementById("toggle-btn");
  toggleBtn.toggleAttribute("disabled"); // только работает с disabled and checked
}

const toggleRadio = document.getElementById("toggle-radio");
const togglePress = document.getElementById("toggle-press");

togglePress.addEventListener("click", () => {
  toggleRadio.toggleAttribute("checked");
});

// Toggle end

// Todo start

const todoList = document.querySelector(".todo-list");

document.querySelector(".todo__add-btn").addEventListener("click", handleClick);

console.log(todoList.getBoundingClientRect());

function handleClick() {
  const newPurchase = this.previousElementSibling.value.trim();

  if (newPurchase) {
    this.previousElementSibling.value = "";
    createToBuy(newPurchase);
  } else {
    alert("Add purchase");
  }
}

function createToBuy(text) {
  const liEl = document.createElement("li");
  liEl.textContent = text;
  liEl.classList.add("todo-item");

  // or
  // todoList.prepend(liEl);
  // todoList.insertBefore(liEl, todoList.firstChild);
  todoList.insertBefore(liEl, null);
  // or end

  const liBtn = document.createElement("button");
  liBtn.textContent = "Delete";
  liEl.append(liBtn);

  addDeleteListener(liBtn, liEl);
}
// Todo end
function addDeleteListener(button, item) {
  button.addEventListener("click", () => {
    item.remove();
  });
}

// To top button start
const scrollToTopButton = document.getElementById("scrollToTopButton");
scrollToTopButton.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});
// To top button end
