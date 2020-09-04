function myFunction(x) {
    x.classList.toggle("change");
    var title = document.getElementById('title');
      if (title.style.display != 'block') { // если блок скрыт
          title.style.display = 'block'; // открываем его
      } else { // если открыт
          title.style.display = 'none'; // скрываем
      }
  }

