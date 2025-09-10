document.getElementById("regForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const dob = document.getElementById("dob").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const errorMsg = document.getElementById("errorMsg");

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

  if (!fullname || !email || !password || !dob || !gender) {
    errorMsg.innerText = "⚠ All fields are required!";
    return;
  } else if (!emailPattern.test(email)) {
    errorMsg.innerText = "⚠ Enter a valid email address!";
    return;
  } else if (!passwordPattern.test(password)) {
    errorMsg.innerText = "⚠ Password must be at least 6 characters and include uppercase, lowercase, and a number!";
    return;
  } else {
    errorMsg.innerText = "";
    alert(`✅ Registration Successful!\n\nName: ${fullname}\nEmail: ${email}\nDOB: ${dob}\nGender: ${gender.value}`);

    document.getElementById("register").style.display = "none";
    document.getElementById("todo").style.display = "block";
  }
});

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `${taskText} <button class="deleteBtn">Delete</button>`;
  taskList.appendChild(li);
  taskInput.value = "";
  li.querySelector(".deleteBtn").addEventListener("click", function(e) {
    e.stopPropagation();
    li.remove();
  });
  li.addEventListener("click", function() {
    li.classList.toggle("completed");
  });
});
taskInput.addEventListener("keypress", function(e){
  if(e.key === "Enter") addTaskBtn.click();
});
