// Pagination

document.addEventListener('DOMContentLoaded', function () {
    const content = document.querySelector('.card'); 
    const itemsPerPage = 4; 
    let currentPage = 0;
    const items = Array.from(content.getElementsByTagName('section')).slice(0); 
  
  function showPage(page) {
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    items.forEach((item, index) => {
      item.classList.toggle('hidden', index < startIndex || index >= endIndex);
    });
    updateActiveButtonStates();
  }
  
  function createPageButtons() {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const paginationContainer = document.createElement('div');
    const paginationDiv = document.body.appendChild(paginationContainer);
    paginationContainer.classList.add('pagination');
  
    for (let i = 0; i < totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.textContent = i + 1;
      pageButton.addEventListener('click', () => {
        currentPage = i;
        showPage(currentPage);
        updateActiveButtonStates();
      });
  
        content.appendChild(paginationContainer);
        paginationDiv.appendChild(pageButton);
      }
  }
  
  function updateActiveButtonStates() {
    const pageButtons = document.querySelectorAll('.pagination button');
    pageButtons.forEach((button, index) => {
      if (index === currentPage) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }
  
    createPageButtons();
    showPage(currentPage);
  });




  let menuBtn = document.querySelector('.header__menu-btn-burger');
  let menu = document.querySelector('.nav');
  let menuItem = document.querySelectorAll('.nav__link');
  
  menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  })
  
  
  menuItem.forEach (function(menuItem) {
    menuItem.addEventListener('click',function(){
            menuBtn.classList.toggle('active');
            menu.classList.toggle('active');
    })
  })