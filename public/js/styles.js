const listContent = document.querySelectorAll('.list');

// Gets all data in the listContent variable, and assigns it to a value variable for each data
listContent.forEach((value) => {
  // console.log(value);
  value.addEventListener('click', () => {
    value.classList.toggle('open'); // Toggles between .list.open ... in style
  });
});