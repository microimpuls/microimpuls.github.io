define({
  "name": "Smarty ViewStats API",
  "version": "1.40.0",
  "description": "Интерфейс отправки данных телесмотрения в IPTV/OTT Middleware Smarty по протоколу HTTP.",
  "title": "Smarty ViewStats API",
  "url": "http://smarty.example.com/viewstats/api",
  "header": {
    "content": "<h2>Терминология</h2>\n<dl>\n  <dt>Абонент (Customer)</dt>\n  <dd>Пользователь сервиса IPTV.</dd>\n  <dt>Аккаунт (Account)</dt>\n  <dd>Аккаунт абонента для доступа к сервису IPTV. Используется для авторизации. К аккаунту привязывается сессия.</dd>\n  <dt>Авторизационный ключ сессии (authkey)</dt>\n  <dd>Ключ сессии, создаваемый после успешной авторизации аккаунта в системе.</dd>\n  <dt>Client ID</dt>\n  <dd>Идентификатор оператора.</dd>\n  <dt>API key</dt>\n  <dd>Секретный ключ оператора, используемый для аутентификации запросов к API.</dd>\n</dl>\n<h2>Описание</h2>\n<p>Интерфейс <strong>ViewStats API</strong> используется для отправки данных телесмотрения с абонентских устройств (STB, Smart TV, Mobile и др.)\nна сервер Microimpuls Middleware Smarty.\nВызовы функций API выполняются через HTTP GET-запросы, параметры передаются через GET-параметры.</p>\n<p>Поддерживаются форматы ответа JSON и XML, причем соответствующий формат выбирается исходя из типа вызывающего\nзапрос устройства.</p>\n<p>Тип устройства определяется исходя из параметра <code>device</code>, который можно передать с любым запросом.\nВ этом параметре необходимо указать системное название устройства,\nподробнее: <a href=\"http://mi-smarty-docs.readthedocs.io/ru/latest/service_configuration.html#playdevice-creation\">поддерживаемые устройства</a>.</p>\n<p>В документе в качестве примера указан адрес сервера Smarty <code>http://smarty.example.com</code>, вместо него используйте адрес\nсвоего сервера. Если интеграция проводится с облачным сервером Microimpuls, то используйте адрес:\n<code>https://smarty.microimpuls.com</code>.</p>\n<p>Перед выполнением методов ViewStats API необходимо провести авторизацию аккаунта через метод Login\n<a href=\"https://microimpuls.github.io/smarty-tvmw-api-docs/#api-Authorization-Login\">TV-MW API</a>,\nпередав номер абонемента и пароль, а полученный в качестве ответа авторизационный ключ сессии необходимо\nиспользовать с каждым последующим запросом в ViewStats API.</p>\n<p>Подробную информацию о Smarty можно узнать в <a href=\"http://mi-smarty-docs.readthedocs.io\">документации</a>.</p>\n"
  },
  "footer": {
    "content": "<p>© 2019 ООО «Майкроимпульс», <a href=\"http://www.microimpuls.com\">www.microimpuls.com</a></p>\n"
  },
  "sampleUrl": false,
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2020-05-26T12:26:59.418Z",
    "url": "http://apidocjs.com",
    "version": "0.17.7"
  }
});
