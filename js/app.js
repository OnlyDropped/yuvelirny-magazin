let typed = new Typed('#typed', { // Тут id того блока, в которм будет анимация
    stringsElement: '#typed-strings', // Тут id блока из которого берем строки для анимации
    typeSpeed: 150, // Скорость печати
    startDelay: 500, // Задержка перед стартом анимации
    backSpeed: 50, // Скорость удаления
    loop: true,// Указываем, повторять ли анимацию
    showCursor: true, 
});





function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Читать полностью";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Свернуть";
    moreText.style.display = "inline";
  }
}
