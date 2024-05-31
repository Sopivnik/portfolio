// Валидация поля
const subscribe = document.querySelector('.contacts__form');
if (subscribe) { // Проверка на существование элемента
  const sendButton = subscribe.querySelector('.send'); // Предполагаем, что у вас есть класс .send для кнопки
  if (sendButton) {
    sendButton.addEventListener('click', () => {
      // отправка разрешена
      let send = true;
      // проверка имени
      if (subscribe.name.value === '') {
        subscribe.name.classList.add('invalid');
        send = false;
      } else {
        subscribe.name.classList.remove('invalid');
      }
      // проверка email
      if (!subscribe.email.value.includes('@')) {
        subscribe.email.classList.add('invalid');
        send = false;
      } else {
        subscribe.email.classList.remove('invalid');
      }
      if (send) {
        // отправка формы
        subscribe.submit();
      } else {
        // Добавляем обработчик событий только если форма не будет отправлена
        subscribe.addEventListener('submit', function (event) {
          // блокировка отправки
          event.preventDefault();
        });
      }
    });
  }
}

// Кнопка «наверх»
document.addEventListener("DOMContentLoaded", function () {
  const top = document.getElementById("top");
  if (top) { // Проверка на существование элемента
    // Показать/скрыть кнопку при прокрутке страницы
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        top.style.display = "block";
      } else {
        top.style.display = "none";
      }
    });
    // Плавная прокрутка при клике на кнопку
    top.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});




