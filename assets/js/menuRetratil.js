function toggleMenu() {
    let menuBtn = document.getElementById('menuBtn');
    let submenuBtn1 = document.getElementById('submenuBtn1');
    let submenuBtn2 = document.getElementById('submenuBtn2');
  
    const menuContainer = document.querySelector('.menu-container');
  
    if (menuContainer.classList.contains('menu-open')) {
      menuContainer.classList.remove('menu-open');
      menuBtn.innerHTML = 'Menu';
    } else {
      menuContainer.classList.add('menu-open');
      menuBtn.innerHTML = 'Fechar';
  
      
    }
  }