// Open-Close Job Vacancies Card
const listContent = document.querySelectorAll('.list');

// Gets all data in the listContent variable, and assigns it to a value variable for each data
listContent.forEach((value) => {
  // console.log(value);
  value.addEventListener('click', () => {
    value.classList.toggle('open'); // Toggles between .list.open ... in style
  });
});

// Get CV or Resume File Name
const getName = document.getElementById('getFileName')
const setName = document.getElementById('setFileName')

setName.addEventListener("input", function (event) {
  getName.textContent = event.target.value.replace(/^C:\\fakepath\\/, "")
})
