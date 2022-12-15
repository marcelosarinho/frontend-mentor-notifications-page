const newNotifications = document.querySelectorAll(".new");
const markAsRead = document.querySelector(".mark-as-read");


function clearNotificationCount() {
  const count = document.querySelector(".count");
  const circles = document.querySelectorAll(".circle");
  count.textContent = 0;
  newNotifications.forEach(notification => notification.classList.remove("new"));
  circles.forEach(circle => circle.classList.remove("circle"));
}

function onClickNotification() {
  const count = document.querySelector(".count");
  const circle = this.querySelector(".circle");
  if(count.textContent > 0) {
    this.classList.remove("new");
    circle.classList.remove("circle");
    count.textContent--;
  }
}

markAsRead.addEventListener("click", clearNotificationCount)
newNotifications.forEach(notification => notification.addEventListener("click", onClickNotification))