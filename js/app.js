const $ = (selector) => document.querySelector(selector);

const showElement = (selector) => $(selector).classList.remove("hidden")
const hideElement = (selector) => $(selector).classList.add("hidden")

const renderOperations = (operations) => {
    for (const { id, description, category, date } of operations) {
      $("#table").innerHTML += `
       <td>${description}</td>
       <td>${category}</td>
       <td>${date}</td>
       <td>${amount}</td>
       <td>
         <button class="rounded bg-emerald-800">Editar</button>
         <button class="rounded bg-rose-800">Eliminar</button>
       </td>
       `;
    }
  };
  //renderOperations()
  const initialize = () => {
    $("#new-operation-btn").addEventListener("click", () => {
      showElement(".form");
      hideElement("#operations-cont");
      hideElement("#balance-filters-cont");
      
    });
    $("#categories-link").addEventListener("click", () => {
      showElement("#category-div")
      hideElement("#balance-filters-cont")
      hideElement("#operations-cont")
      hideElement(".form")
      hideElement("#reports-div")
    });
    $("#reports-link").addEventListener("click", () => {
      showElement("#reports-div")
      hideElement("#balance-filters-cont")
      hideElement("#operations-cont")
      hideElement(".form")
      hideElement("#category-div")
    });
    $("#btn-nav").addEventListener("click", () => {
      $("#ul-nav").classList.toggle("hidden")
    })
  };
  
  window.addEventListener("load", initialize);