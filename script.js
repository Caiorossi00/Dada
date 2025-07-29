import partners from "./partners.js";
import schedule from "./schedule.js";

const logosContainer = document.querySelector(".partners-logos");

partners.forEach(({ id, nome, logo }) => {
  const img = document.createElement("img");
  img.src = logo;
  img.alt = nome;
  img.loading = "lazy";
  logosContainer.appendChild(img);
});

const container = document.querySelector(".events");

schedule.forEach((dayObj, index) => {
  const dayTitle = document.createElement("div");
  dayTitle.classList.add("day");
  dayTitle.textContent = dayObj.day;

  const eventsList = document.createElement("div");
  eventsList.classList.add("events-list");

  dayObj.events.forEach((event) => {
    const eventDiv = document.createElement("div");
    eventDiv.classList.add("event");

    const title = document.createElement("span");
    title.textContent = event.title;

    const img = document.createElement("img");
    img.src = event.image;
    img.alt = event.title;

    eventDiv.appendChild(title);
    eventDiv.appendChild(img);

    eventsList.appendChild(eventDiv);
  });

  dayTitle.addEventListener("click", () => {
    eventsList.classList.toggle("active");
  });

  container.appendChild(dayTitle);
  container.appendChild(eventsList);
});
