document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const body = document.body;

  // Функция открытия меню
  function openMobileMenu() {
    mobileMenu.classList.add('mobile-menu--open');
    hamburger.classList.add('hamburger--active');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.setAttribute('aria-hidden', 'false');
    body.style.overflow = 'hidden'; // Блокируем скролл страницы
  }

  // Функция закрытия меню
  function closeMobileMenu() {
    mobileMenu.classList.remove('mobile-menu--open');
    hamburger.classList.remove('hamburger--active');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    body.style.overflow = ''; // Возвращаем скролл
  }

  // Открытие/закрытие по клику на гамбургер
  hamburger.addEventListener('click', function() {
    if (mobileMenu.classList.contains('mobile-menu--open')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // Закрытие меню при клике на ссылку внутри
  mobileMenu.querySelectorAll('.mobile-menu__link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Закрытие меню при клике вне его области
  document.addEventListener('click', function(event) {
    if (!hamburger.contains(event.target) &&
        !mobileMenu.contains(event.target)) {
      closeMobileMenu();
    }
  });

  // Закрытие меню при изменении размера экрана (> 1023 px)
  window.addEventListener('resize', function() {
    if (window.innerWidth > 1023) {
      closeMobileMenu();
    }
  });

  // Закрытие меню по клавише Esc
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && mobileMenu.classList.contains('mobile-menu--open')) {
      closeMobileMenu();
    }
  });
});





// подписка
function showSuccessAlert(event) {
  console.log('Форма отправлена');
  event.preventDefault();
  alert('Подписаны!');
  const input = document.querySelector('.email-input');
  console.log('Найден input:', input);
  if (input) input.value = '';
}

