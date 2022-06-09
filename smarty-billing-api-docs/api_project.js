define({
  "name": "Smarty Billing API",
  "version": "1.40.0",
  "description": "Интерфейс для Incoming-интеграции внешней биллинговой системы с Microimpuls Smarty по протоколу HTTP.",
  "title": "Smarty Billing API",
  "url": "http://smarty.example.com/billing/api",
  "header": {
    "content": "<h2>Терминология</h2>\n<dl>\n  <dt>Абонент (Customer)</dt>\n  <dd>Пользователь сервиса IPTV.</dd>\n  <dt>Customer ID</dt>\n  <dd>Идентификатор абонента в системе Smarty.</dd>\n  <dt>Аккаунт (Account)</dt>\n  <dd>\n    Аккаунт абонента для доступа к сервису IPTV.\n    В терминологии биллинговых систем наиболее близкое понятие \"Лицевой счет\".\n    Пользователь для взаимодействия с сервисом должен использовать аккаунт.\n    Каждый аккаунт должен быть привязан к абоненту.\n  </dd>\n  <dt>Account ID</dt>\n  <dd>Идентификатор аккаунта в системе Smarty.</dd>\n  <dt>Абонемент</dt>\n  <dd>Уникальный цифровой номер (логин) аккаунта сервиса IPTV.</dd>\n  <dt>Пароль</dt>\n  <dd>Секретный пароль аккаунта, используемый для авторизации в сервисе IPTV.</dd>\n  <dt>Client ID</dt>\n  <dd>Идентификатор оператора.</dd>\n  <dt>Подпись (Signature)</dt>\n  <dd>Хеш-строка, генерируемая из данных запроса и секретного ключа Billing API key, используемая для авторизации запросов к Billing API.</dd>\n  <dt>Billing API key</dt>\n  <dd>Специальный секретный ключ оператора, используемый для формирования подписи и авторизации запросов к Billing API. Не совпадает с API key, используемый в Smarty TV-Middleware API.</dd>\n</dl>\n<h2>Описание</h2>\n<p>Интерфейс <strong>Billing API</strong> используется для интеграции внешней биллинговой системы провайдера\nс системой Microimpuls Smarty.\nВызовы функций API выполняются через HTTP(s) POST-запросы, параметры передаются через POST-параметры.\nОтвет возвращается в формате JSON.</p>\n<p>В документе в качестве примера указан адрес сервера Smarty <code>http://smarty.example.com</code>, вместо него используйте адрес\nсвоего сервера.</p>\n<p>Ко всем запросам необходимо добавлять подпись, генерируемую на основе параметров запроса,\nсекретного ключа Billing API key и Client ID.</p>\n<h2>Алгоритм формирования подписи</h2>\n<ol>\n<li>Все параметры, передаваемые в POST, сортируются по имени в порядке возрастания,\nзатем из них составляется строка вида: <code>параметр1:значение_параметра1;параметр2:значение_параметра2;</code></li>\n<li>В конец строки добавляется ключ Billing API key</li>\n<li>Строка кодируется в base64, а затем хешируется с помощью md5</li>\n<li>Шестнадцетиричное представление (hexdigest) md5 от получившейся строки добавляется в POST как значение параметра signature</li>\n</ol>\n<p>Пример:</p>\n<pre><code>Billing API key: secretkey\nСтрока для создания Signature: amount:1;client_id:1;customer_id:1;id:45;secretkey\nПосле base64: YW1vdW50OjE7Y2xpZW50X2lkOjE7Y3VzdG9tZXJfaWQ6MTtpZDo0NTtzZWNyZXRrZXk=\nSignature: 5da94074db60083cc1393e3fd08b1735\n</code></pre>\n<h2>Общие коды ошибок</h2>\n<p>Коды ошибок (поле <code>error</code>) и их описания, возвращаемые каждым методом API, указаны в описании соответствующего метода.\nЕсть несколько общих кодов ошибок, которые может вернуть любой метод:</p>\n<table>\n<thead>\n<tr>\n<th>Код ошибки</th>\n<th>Описание</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>0</td>\n<td>Нет ошибки, операция произведена успешно.</td>\n</tr>\n<tr>\n<td>-1</td>\n<td>Неизвестная ошибка, подробную информацию можно найти в логах /var/log/microimpuls/smarty</td>\n</tr>\n<tr>\n<td>-2</td>\n<td>Неверная подпись.</td>\n</tr>\n<tr>\n<td>-3</td>\n<td>Client ID не найден.</td>\n</tr>\n</tbody>\n</table>\n"
  },
  "footer": {
    "content": "<p>© 2020 ООО «Майкроимпульс», <a href=\"http://www.microimpuls.com\">www.microimpuls.com</a></p>\n"
  },
  "sampleUrl": false,
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2022-06-09T21:11:18.308Z",
    "url": "http://apidocjs.com",
    "version": "0.17.7"
  }
});
