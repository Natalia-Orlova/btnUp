
https://realfavicongenerator.net/ генератор, с помощью которого сделала иконки

Событие beforeinstallprompt поддерживается определенными браузерами, которые позволяют веб-сайтам предлагать пользователям установить Progressive Web Apps (PWA). Ниже приведен список браузеров, в которых поддерживается событие beforeinstallprompt:

Google Chrome
Microsoft Edge (версия 76 и выше)
Opera

- Браузер Safari не поддерживют событие beforeinstallprompt
- Firefox отказывается от поддержки прогрессивных веб-приложений
- Firefox и Safari поддерживают PWA только на Android и iOS, а не на настольных компьютерах.

Для Safari можно добавить инструкцию, как установить PWA на устройство iOS
<button id="install-btn" onclick="showInstructions()">Установить как приложение</button>

function showInstructions() {
    alert("Пожалуйста, следуйте этим шагам для установки приложения на вашем устройстве iOS через Safari:\n\n1. 
    Нажмите на кнопку «Поделиться» внизу экрана.\n2. 
    Выберите «Добавить на экран Домой» из списка опций.\n3. 
    Нажмите «Добавить» в правом верхнем углу.");
}
