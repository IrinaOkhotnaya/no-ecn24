
document.getElementById('feedback-form').addEventListener('submit', function(evt){
  var http = new XMLHttpRequest(), f = this;
  evt.preventDefault();
  http.open("POST", "contacts.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("nameFF=" + f.nameFF.value + "&contactFF=" + f.contactFF.value);
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      alert(http.responseText + ', Ваше сообщение получено.\nНаши специалисты ответят Вам в течении 2-х дней.\nСпасибо за Ваше сообщение!');    
      f.messageFF.removeAttribute('value'); // очистить поле сообщения (две строки)
      f.messageFF.value='';
    }
  }
  http.onerror = function() {
    alert('Извините, данные не были переданы');
  }
}, false);







document.getElementById('feedback-form2').addEventListener('submit', function(evt){
  var http = new XMLHttpRequest(), d = this;
  evt.preventDefault();
  http.open("POST", "contacts2.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("nameDD=" + d.nameDD.value + "&contactDD=" + d.contactDD.value);
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      alert(http.responseText + ', Ваше сообщение получено.\nНаши специалисты ответят Вам в течении 2-х дней.\nСпасибо за Ваше сообщение!');    
      d.messageDD.removeAttribute('value'); // очистить поле сообщения (две строки)
      d.messageDD.value='';
    }
  }
  http.onerror = function() {
    alert('Извините, данные не были переданы');
  }
}, false);
