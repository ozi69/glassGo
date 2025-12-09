document.addEventListener('DOMContentLoaded', function() {
  // Получаем все заголовки в футере
  const footerTitles = document.querySelectorAll('.footer-list__title');
  
  footerTitles.forEach(title => {
    title.addEventListener('click', function() {
      // Проверяем, находится ли мы на мобильном экране
      if (window.innerWidth <= 375) {
        // Находим связанный выпадающий список и стрелку
        const dropdown = this.nextElementSibling;
        const arrow = this.querySelector('.footer-arrow');
        
        // Проверяем, существует ли dropdown (это следующий элемент после заголовка)
        if (dropdown && dropdown.classList.contains('footer-list__dropdown')) {
          // Закрываем другие открытые dropdown
          footerTitles.forEach(otherTitle => {
            if (otherTitle !== this) {
              const otherDropdown = otherTitle.nextElementSibling;
              const otherArrow = otherTitle.querySelector('.footer-arrow');
              
              if (otherDropdown && otherDropdown.classList.contains('footer-list__dropdown')) {
                otherDropdown.classList.remove('active');
                if (otherArrow) otherArrow.classList.remove('active');
              }
            }
          });
          
          // Переключаем активное состояние текущего dropdown и стрелки
          dropdown.classList.toggle('active');
          if (arrow) arrow.classList.toggle('active');
        }
      }
    });
  });
  
  // Обработчик изменения размера окна
  window.addEventListener('resize', function() {
    // На больших экранах закрываем все dropdown
    if (window.innerWidth > 375) {
      const dropdowns = document.querySelectorAll('.footer-list__dropdown');
      const arrows = document.querySelectorAll('.footer-arrow');
      
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
      });
      
      arrows.forEach(arrow => {
        arrow.classList.remove('active');
      });
    }
  });
});