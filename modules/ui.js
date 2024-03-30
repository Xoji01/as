export function setupModal() {
  var modal = document.createElement('div');
  modal.id = 'myModal';
  modal.classList.add('modal', 'open');
  document.body.appendChild(modal);
  var modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  modal.appendChild(modalContent);

  var contentHTML = `
      <div class="im">
        <img class="ig" src="/public/img/valuet.png" alt="">
      </div>
      <div class="b">
        <div class="image-text">
          <img class="q" src="/public/img/Vector.png" alt="Изображение 1">
          <span class="text"> <a href="">Overview</a></span>
        </div>
        <div class="image-text">
          <img src="/public/img/Vector (1).png" alt="Изображение 2">
          <span class="text"><a href="/pages/signup/">Wallets</a></span>
        </div>
        <div class="image-text">
          <img src="/public/img/Group.png" alt="Изображение 3">
          <span class="text"><a href="">Transictions</a></span>
        </div>
        <div class="image-text">
          <img src="/public/img/Group 6.png" alt="Изображение 4">
          <span class="text"><a href="">Exchange</a></span>
        </div>
      </div>
      <div class="vniz">
        <div class="imagevniz">
          <img class="iw" src="/public/img/Line 3.png" alt="">
        </div>
        <div class="imagete">
          <img src="/public/img/Ellipse.png" alt="Изображение 4">
          <span id="es"class="text"></span>
        </div>
        <div class="imagete">
          <img src="/public/img/Vector (3).png" alt="Изображение 4">
          <span class="text"><a class="log" href="#">Log Out</a></span>
        </div>
      </div>
    `;
  modalContent.innerHTML = contentHTML;
}

export function addHeaderAndInputToContainer() {
  const siteContainer = document.querySelector('.container');

  if (siteContainer) {
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');

    const header = document.createElement('header');
    const input = document.createElement('input');
    const image = document.createElement('img');

    input.type = 'text';
    input.classList.add('search-input');
    input.placeholder = 'Поиск...';

    image.src = '/public/img/Line 4.1.png';
    header.appendChild(input);
    header.appendChild(image);

    headerContainer.appendChild(header);

    siteContainer.parentNode.insertBefore(headerContainer, siteContainer);
  } else {
    console.error('Не найден контейнер с классом "container" на странице!');
  }
}

export function toaster(text, type) {
  const custom_alert = document.createElement('div')
  const time_bar = document.createElement('div')

  custom_alert.classList.add('toaster', `toaster_${type}`)
  custom_alert.classList.add('toaster-anim')
  time_bar.classList.add('time_bar')
  custom_alert.innerHTML = text

  custom_alert.append(time_bar)

  document.body.append(custom_alert)

  setTimeout(() => {
    custom_alert.remove()
  }, 5000)
}