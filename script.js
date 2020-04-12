let phrases = [
    { text: 'скачать новую игру.', image: 'img/joystick.png' },
    { text: 'cделать много селфи, выбрать лучшие и обновить аватарки в мессенджерах и соцсетях', image: 'img/selfie.png' },
    { text: 'позаниматься спортом', image: 'img/trainer.png' },
    { text: 'расставить книги на полке по цвету', image: 'img/book.png' },
    { text: 'читать про зарплаты в Сан-Франциско', image: 'img/landmark.png' },
    { text: 'прочитать новости и ужаснуться в комментариях', image: 'img/chat-box.png' },
    { text: 'посмотреть трейлер сериала и заодно первый сезон', image: 'img/big-bang-theory.png' },
    { text: 'проверить непрочитанное в Telegram-каналах', image: 'img/telegram.png' },

    { text: 'oткрыть для себя новую музыку', image: 'img/headphones.png' },
    { text: 'вместе красить картину', image: 'img/art.png' },
    { text: 'принять ванну с пеной, добавив в неё пару капель любимого ароматического масла', image: 'img/wash.png' },
    { text: 'приготовить и неторопливо, смакуя каждый глоток, выпить какао или идеальный горячий шоколад', image: 'img/chocolate.png' },
    { text: 'включить лёгкий расслабляющий фильм — о чём-нибудь добром и без лишних вывертов', image: 'img/home-theater.png' },
    { text: 'pазбить мини-огород на подоконнике: через пару недель у вас будет собственная экологически чистая зелень', image: 'img/plant.png' },
    { text: 'приготовить обеды в офис заранее, разложить их по порциям и поместить в холодильник', image: 'img/lunch.png' },
    { text: 'вместе начать собирать огромный пазл из тысячи деталей', image: 'img/jigsaw.png' }
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  
  button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);
  
    if (randomElement.text.length > 40) {
      advice.style.fontSize = '33px';
    } else {
      advice.style.fontSize = '42px';
    }
  });
  // for (let i = 0; i <= 2; i = i + 1) {
  //   smoothly(phrase, 'textContent', phrases[i]);
  //   smoothly(image, 'src', phrases[i]);
  // }