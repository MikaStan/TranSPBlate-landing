// Скрипт для показа/скрытия кнопки "Вверх" и ее плавной прокрутки

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTop = document.querySelector(".scroll-to-top");
  
    // Показать/скрыть кнопку при прокрутке страницы
    window.addEventListener("scroll", function () {
      if (window.scrollY || window.pageYOffset > 300) {
        scrollToTop.style.display = "block";
      } else {
        scrollToTop.style.display = "none";
      }
    });
  
    // Плавная прокрутка при клике на кнопку
    scrollToTop.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
