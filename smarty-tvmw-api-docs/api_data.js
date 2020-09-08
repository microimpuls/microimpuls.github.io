define({ "api": [
  {
    "type": "post",
    "url": "/account/parent_code/set/",
    "title": "AccountParentCodeSet: изменение ПИН-кода аккаунта",
    "name": "AccountParentCodeSet",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "..16",
            "optional": true,
            "field": "old_pin",
            "description": "<p>Старый (текущий) ПИН-код. Если ПИН-код у аккаунта не задан, то не передавать или оставить пустым.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..16",
            "optional": false,
            "field": "new_pin",
            "description": "<p>Новый ПИН-код.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object",
            "optional": false,
            "field": "error_messages",
            "description": "<p>Описания ошибок.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": true,
            "field": "error_message.old_pin",
            "description": "<p>Описания ошибок old_pin.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": true,
            "field": "error_message.new_pin",
            "description": "<p>Описания ошибок new_pin.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Переданные параметры некорректны. Подробности в error_messages.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "/account/password/change/",
    "title": "AccountPasswordChange: смена пароля",
    "name": "AccountPasswordChange",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "old_password",
            "description": "<p>Текущий пароль.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_password",
            "description": "<p>Новый пароль.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Ошибка в параметрах.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Ошибка смены пароля.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "/account/register/",
    "title": "AccountRegister: регистрация аккаунта",
    "name": "AccountRegister",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "send_sms",
            "defaultValue": "0",
            "description": "<p>Отправлять или нет СМС на мобильный телефон с данными созданного аккаунта.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "auto_activation_period",
            "description": "<p>Количество дней промо-периода.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Комментарий, будет сохранен в соответствующем поле созданного абонента.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "mobile_phone_number",
            "description": "<p>Номер мобильного телефона (с кодом страны или без).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "region_code",
            "description": "<p>Код региона. Не передается, если номер телефона с кодом страны.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>Код верификации (если до этого был получен код error 9).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device_uid",
            "description": "<p>Уникальный идентификатор устройства. Используется для авторегистрации устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>API key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "abonement",
            "description": "<p>Номер абонемента созданного аккаунта.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Пароль созданного аккаунта.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Произошла неизвестная ошибка, регистрация не удалась.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Для этого Client ID регистрация запрещена.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>Исчерпан лимит регистраций с одного IP адреса.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "4",
            "description": "<p>Некорректное значение auto_activation_period.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "5",
            "description": "<p>Некорректный номер телефона.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "6",
            "description": "<p>На этот номер телефона уже производилась регистрация ранее.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "7",
            "description": "<p>Для регистрации должен быть передан mobile_phone_number или device_uid.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "8",
            "description": "<p>Ошибка регистрации аккаунта во внешнем биллинге.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "9",
            "description": "<p>Было отправлено СМС с кодом верификации номера телефона.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "10",
            "description": "<p>Неверный код верификации.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "/account/status/",
    "title": "AccountStatus: проверка сессии аккаунта",
    "name": "AccountStatus",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device_model",
            "defaultValue": "пустой",
            "description": "<p>Модель устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device_uid",
            "defaultValue": "пустой",
            "description": "<p>Уникальный идентификатор устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>Состояние сессии, возможные значения: 0 - сессия найдена и активна; 1 - сессия не найдена, аккаунт не авторизован; 2 - аккаунт деактивирован.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "status_reason",
            "description": "<p>Описание статуса, системные значения: ACTIVE - активирован; DEBT - отключен из-за задолженности; BLOCK - заблокирован по заявке абонента; INACTIVE - деактивирован; WAIT - в ожидании активации в биллинговой системе.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "utc_time",
            "description": "<p>Текущее время в Unix Timestamp UTC+0.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "has_new_messages",
            "description": "<p>Флаг, означающий есть ли для аккаунта новые непрочитанные сообщения.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object",
            "optional": false,
            "field": "message",
            "description": "<p>Срочное непрочитанное входящее сообщение, объект пуст, если новых срочных сообщений нет.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "message.subject",
            "description": "<p>Тема сообщения.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "message.text",
            "description": "<p>Текст сообщения, может содержать HTML.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "message.no_confirmation",
            "description": "<p>Флаг, показывающий, что сообщение может быть автоматически скрыто через неселько секунд после отображения.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object",
            "optional": false,
            "field": "command",
            "description": "<p>Команда для приложения, объект пуст, если новых команд нет.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "command.type",
            "description": "<p>Тип команды, возможные значения: 0 - Не команда (команду необходимо игнорировать); 1 - Другая команда (зарезервировано, команду необходимо игнорировать); 2 - Перезапуск приложения; 3 - Перезагрузка устройства.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "channel_list_changed",
            "description": "<p>Флаг, означающий были ли изменения списка телеканалов для этого аккаунта. Необходимо использовать для обновления списка каналов только в том случае, если в нем были изменения.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Account"
  },
  {
    "type": "get",
    "url": "/actor/detail/",
    "title": "ActorDetail информация об актере",
    "name": "ActorDetail",
    "group": "Actor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть имя актера.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "aid",
            "description": "<p>Идентификатор актера.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Идентификатор актера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Имя актера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "name_orig",
            "description": "<p>Имя актера на оригинальном языке.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>URL-адрес на фотографию актера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "screenshot_b_big",
            "description": "<p>URL-адрес на размытый кадр с актером.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Страна рождения.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Пол.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "birthdate",
            "description": "<p>Дата рождения.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "profession",
            "description": "<p>Профессия.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "biography",
            "description": "<p>Биография.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "genres",
            "description": "<p>жанры фильмов, в которых снимался актер.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "genres.id",
            "description": "<p>Идентификатор жанра.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "genres.name",
            "description": "<p>Название жанра.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "genres.is_category",
            "description": "<p>Является ли жанр категорией.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, действие выполнено успешно.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Актер не найден.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Actor"
  },
  {
    "type": "get",
    "url": "/actor/list/",
    "title": "ActorList: список актеров",
    "name": "ActorList",
    "group": "Actor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-100",
            "optional": true,
            "field": "limit",
            "defaultValue": "20",
            "description": "<p>Ограничение на количество актеров на одну страницу выборки. Максимальное значение 100.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Номер страницы выборки.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "name",
              "birthdate"
            ],
            "optional": true,
            "field": "order",
            "defaultValue": "name",
            "description": "<p>Сортировка, birthdate - по дате рождения, сначала самые старые; -birthdate - по дате рождения, сначала самые новые; name - по имени, в алфавитном порядке; -name - по имени, в обратном алфавитном порядке;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть имена актеров. Должен совпадать со значением из параметра Smarty SMARTY_ADDITIONAL_LANGUAGES.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "vid",
            "defaultValue": "пустое",
            "description": "<p>Идентификатор фильма. Если параметр не передан, то будут отображены все актеры.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "actors",
            "description": "<p>Список актеров.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "actors.id",
            "description": "<p>Идентификатор актера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actors.name",
            "description": "<p>Имя актера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actors.photo",
            "description": "<p>URL-адрес на фотографию актера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actors.country",
            "description": "<p>Страна рождения.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actors.gender",
            "description": "<p>Пол.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actors.birthdate",
            "description": "<p>Дата рождения.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, действие выполнено успешно.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Actor"
  },
  {
    "type": "get",
    "url": "/noauth/actor/list/",
    "title": "NoAuthActorList список актеров (доступен без авторизации)",
    "name": "NoAuthActorList",
    "group": "Actor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>API key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-100",
            "optional": true,
            "field": "limit",
            "defaultValue": "20",
            "description": "<p>Ограничение на количество актеров на одну страницу выборки. Максимальное значение 100.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Номер страницы выборки.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "name",
              "birthdate"
            ],
            "optional": true,
            "field": "order",
            "defaultValue": "name",
            "description": "<p>Сортировка, birthdate - по дате рождения, сначала самые старые; -birthdate - по дате рождения, сначала самые новые; name - по имени, в алфавитном порядке; -name - по имени, в обратном алфавитном порядке;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть имена актеров. Должен совпадать со значением из параметра Smarty SMARTY_ADDITIONAL_LANGUAGES.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "vid",
            "defaultValue": "пустое",
            "description": "<p>Идентификатор фильма. Если параметр не передан, то будут отображены все актеры.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "actors",
            "description": "<p>Список актеров.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "actors.id",
            "description": "<p>Идентификатор актера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actors.name",
            "description": "<p>Имя актера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actors.photo",
            "description": "<p>URL-адрес на фотографию актера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actors.country",
            "description": "<p>Страна рождения.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actors.gender",
            "description": "<p>Пол.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actors.birthdate",
            "description": "<p>Дата рождения.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, действие выполнено успешно.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Actor"
  },
  {
    "type": "get",
    "url": "/ads/list/",
    "title": "AdsList: список рекламных блоков для канала",
    "name": "AdsList",
    "group": "Ads",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "channel_id",
            "description": "<p>ID канала, для которого запрашиваются рекламные блоки</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "mediahills_id",
            "defaultValue": "пустое",
            "description": "<p>MediaHills ID канала, для которого запрашиваются рекламные блоки</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "ad_context",
            "defaultValue": "пустое",
            "description": "<p>Дополнительные параметры для рекламного провайдера. Представляет из себя словарь формата {&quot;имя&quot;: &quot;значение&quot;}</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "ad_context.developer_mode",
            "defaultValue": "0",
            "description": "<p>Включает режим разработчика для провайдера DirectAd, при этом параметре сервер всегда будет отдавать тестовые данные</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device_uid",
            "description": "<p>Уникальный идентификатор (либо mac-адрес) устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "-11..11",
            "optional": true,
            "field": "timezone",
            "defaultValue": "пустое",
            "description": "<p>Часовой пояс. Если передан, то рекламные блоки будут фильтроваться по текущему времени.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "ads",
            "description": "<p>Список рекламных блоков. Требует включения параметра TVMIDDLEWARE_ADS_ENABLED в Smarty.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "ads.days",
            "description": "<p>Перечисление дней (через запятую), в которые необходимо воспроизводить данный рекламный блок. Будет передан, если не задан параметр timezone.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "ads.begin_time",
            "description": "<p>Время начала диапазона рекламного блока в формате ЧЧ:ММ:СС. Будет передан, если не задан параметр timezone.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "ads.end_time",
            "description": "<p>Время окончания диапазона рекламного блока в формате ЧЧ:ММ:СС. Будет передан, если не задан параметр timezone.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "ads.display_order",
            "description": "<p>Порядок показа роликов, 0 - по порядку, 1 - в случайно порядке.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "ads.provider",
            "description": "<p>Провайдер.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "ads.movies",
            "description": "<p>Список рекламных роликов в блоке.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "ads.movies.name",
            "description": "<p>Название ролика.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "ads.movies.url",
            "description": "<p>Адрес ролика для воспроизведения.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "ads.movies.duration",
            "description": "<p>Длительность ролика в секундах.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "ads.movies.provider_options",
            "description": "<p>Дополнительные опции от провайдера.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Не передан channel_id.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Модуль Ads не подключен.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>Ошибка провайдера.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "4",
            "description": "<p>Неправильный формат параметра ad_context.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "5",
            "description": "<p>Неправильный формат параметра timezone.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Ads"
  },
  {
    "type": "get",
    "url": "/application/detail/",
    "title": "ApplicationDetail: информация о приложении",
    "name": "ApplicationDetail",
    "group": "Application",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "appid",
            "description": "<p>Идентификатор приложения.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть название приложения.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Название приложения для абонента.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "system_name",
            "description": "<p>Системное название приложения или имя класса экрана.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7"
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Тип приложения. Возможные значения: 0 - Внешнее Web-приложение; 1 - Внутренний экран; 2 - Ссылка на раздел VOD; 3 - URL-адрес видеопотока; 4 - Экранный виджет; 5 - Настройки Android; 6 - Каталог приложений Android; 7 - Приложение для Android (Android appId).</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>URL-адрес приложения.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "show_in_main_menu",
            "description": "<p>Необходимо ли показывать приложение в главном экране интерфейса абонентского приложения.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "css_style",
            "description": "<p>Стиль CSS для кнопки приложения.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "attrs",
            "description": "<p>Дополнительные аттрибуты приложения списком в формате &quot;ключ&quot; - &quot;значение&quot;.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Приложение с указанным ID не найдено.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Application"
  },
  {
    "type": "get",
    "url": "/application/exchange_data/",
    "title": "ApplicationExchangeData: данные о курсах валют для виджета курсов валют",
    "name": "ApplicationExchangeData",
    "group": "Application",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "first_currency",
            "description": "<p>Название первой валюты.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "second_currency",
            "description": "<p>Название второй валюты.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "first_currency_value",
            "description": "<p>Курс первой валюты по отношению к основной.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "second_currency_value",
            "description": "<p>Курс второй валюты по отношению к основной</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Application"
  },
  {
    "type": "get",
    "url": "/application/list/",
    "title": "ApplicationList: список внешних приложений",
    "name": "ApplicationList",
    "group": "Application",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device_uid",
            "defaultValue": "пустой",
            "description": "<p>Уникальный идентификатор устройства, например, MAC-адрес.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "template",
            "defaultValue": "пустой",
            "description": "<p>Название шаблона UI, которое используется в данный момент на устройстве.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть названия приложений.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "applications",
            "description": "<p>Список внешних приложений</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "applications.id",
            "description": "<p>Идентификатор приложения.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "applications.name",
            "description": "<p>Название приложения для абонента.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "applications.system_name",
            "description": "<p>Системное название приложения или имя класса экрана.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7"
            ],
            "optional": false,
            "field": "applications.type",
            "description": "<p>Тип приложения. Возможные значения: 0 - Внешнее Web-приложение; 1 - Внутренний экран; 2 - Ссылка на раздел VOD; 3 - URL-адрес видеопотока; 4 - Экранный виджет; 5 - Настройки Android; 6 - Каталог приложений Android; 7 - Приложение для Android (Android appId).</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "applications.url",
            "description": "<p>URL-адрес приложения.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "applications.show_in_main_menu",
            "description": "<p>Необходимо ли показывать приложение в главном экране интерфейса абонентского приложения.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "applications.css_style",
            "description": "<p>Стиль CSS для кнопки приложения.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "applications.icon",
            "description": "<p>URL-адрес иконки приложения.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "applications.icon_focus",
            "description": "<p>URL-адрес иконки приложения в фокусе.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "applications.attrs",
            "description": "<p>Дополнительные аттрибуты приложения списком в формате &quot;ключ&quot; - &quot;значение&quot;.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Application"
  },
  {
    "type": "get",
    "url": "/application/rss_data/",
    "title": "ApplicationRSSData: данные из новостной ленты",
    "name": "ApplicationRSSData",
    "group": "Application",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rss",
            "description": "<p>RSS URL.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "entries",
            "description": "<p>Список новостей.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "entries.title",
            "description": "<p>Заголовок новости.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "entries.description",
            "description": "<p>Описание новости.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "entries.preview_url",
            "description": "<p>Картинка новости.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Application"
  },
  {
    "type": "get",
    "url": "/application/weather_data/",
    "title": "ApplicationWeatherData: данные о погоде для погодного виджета",
    "name": "ApplicationWeatherData",
    "group": "Application",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "city",
            "defaultValue": "пустое",
            "description": "<p>Идентификатор города, для которого нужно вернуть погоду.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "current",
            "description": "<p>Данные о текущей погоде</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "current.icon",
            "description": "<p>Название иконки, характеризующей текущую погоду.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "current.description",
            "description": "<p>Описание погоды.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "current.temperature",
            "description": "<p>Температура по цельсию.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "current.pressure",
            "description": "<p>Давление в мм. рт. ст.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "current.wind_speed",
            "description": "<p>Скорость ветра в м/с.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "current.wind_deg",
            "description": "<p>Направление ветра.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Ошибка связи с сервером данных о погоде.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Сервер уже выполняет запрос с погодой для данного города.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>Ошибка на стороне сервера.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Application"
  },
  {
    "type": "get",
    "url": "/login/",
    "title": "Login: создание сессии",
    "name": "Login",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "abonement",
            "defaultValue": "пустой",
            "description": "<p>Абонемент (логин) аккаунта. Если для аккаунта разрешена авторизация только по абонементу, то достаточно передать только это поле.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "defaultValue": "пустой",
            "description": "<p>Пароль аккаунта.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_uid",
            "defaultValue": "пустой",
            "description": "<p>Уникальный идентификатор устройства. Если для аккаунта разрешена авторизация только по Device UID, то достаточно передать только это поле.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device_serial",
            "defaultValue": "пустой",
            "description": "<p>Серийный номер устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device_model",
            "defaultValue": "пустой",
            "description": "<p>Модель устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "reset_block_status_reason",
            "defaultValue": "0",
            "description": "<p>Если передано значение 1, то дополнительный статус аккаунта будет переведен в состояние ACTIVE, если он был в состоянии BLOCK (заблокирован абонентом).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>API key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, который будет использован при формировании сообщений для абонента.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Авторизационный ключ сессии.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "utc_time",
            "description": "<p>Текущее время в Unix Timestamp UTC+0.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Имя абонента.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Фамилия абонента.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "abonement",
            "description": "<p>Номер абонемента.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "account_id",
            "description": "<p>Идентификатор аккаунта.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Идентификатор абонента.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "customer_ext_id",
            "description": "<p>Идентификатор абонента во внешней системе - Ext ID.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>Валюта абонента.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "ip_address",
            "description": "<p>IP-адрес абонента (с которого на сервер Smarty пришел запрос).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "activation_days_left",
            "description": "<p>Количество оставшихся дней подписки.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "parent_code",
            "description": "<p>Код родительского контроля.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "last_channel",
            "description": "<p>Идентификатор последнего просмотренного телеканала.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "device_uid",
            "description": "<p>Уникальный идентификатор устройства, также добавляется в Cookie (генерируется случайным образом, если устройство не передает своего идентификатора).</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "template",
            "description": "<p>Шаблон в настройках аккаунта.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "tariffs_list",
            "description": "<p>Список тарифных пакетов, подключенных у абонента и аккаунта (через запятую).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "use_timeshift",
            "description": "<p>Флаг, означающий включена ли в настройках аккаунта опция &quot;Просмотр LIVE со сдвигом&quot;.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contract_number",
            "description": "<p>Номер договора абонента.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "status_reason",
            "description": "<p>Описание статуса, системные значения: ACTIVE - активирован; DEBT - отключен из-за задолженности; BLOCK - заблокирован по заявке абонента; INACTIVE - деактивирован; WAIT - в ожидании активации в биллинговой системе.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "data_center_id",
            "description": "<p>Идентификатор используемого дата-центра.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "data_centers",
            "description": "<p>Список доступных дата-центров.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "data_centers.id",
            "description": "<p>Идентификатор.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "data_centers.name",
            "description": "<p>Название.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "data_centers.location",
            "description": "<p>Адрес.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, авторизация прошла успешно.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Аккаунт по указанным параметрам не найден.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Аккаунт неактивен.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>Ошибка создания авторизационного ключа сессии.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "4",
            "description": "<p>Неверный API key или client_id.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "5",
            "description": "<p>Превышено число сессий аккаунта на базовых устройствах.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "6",
            "description": "<p>Базовое устройство уже привязано к другому аккаунту.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "7",
            "description": "<p>Ошибка при запросе к внешнему api.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "8",
            "description": "<p>У абонента не подключен ни один тариф.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "9",
            "description": "<p>Абонент пытается авторизоваться из подсети, из которой ему авторизация запрещена.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "10",
            "description": "<p>Авторизация с базовых устройств запрещена в настройках тарифов.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "11",
            "description": "<p>Авторизация с дополнительных устройств запрещена в настройках тарифов.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "12",
            "description": "<p>Не удается точно определить аккаунт по IP-адресу, с которого осуществляется авторизация, т.к. существует несколько аккаунтов в включенной опцией &quot;Авторизация по IP&quot; и пересекающимися IP-подсетями.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "13",
            "description": "<p>Аккаунт по указанным параметрам не найден, но был отправлен запрос во внешний биллинг для создания аккаунта, поэтому он может быть уже создан при следующей попытке авторизации.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "15",
            "description": "<p>Логин для устройства с данной группой не разрешён для данного аккаунта.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Authorization"
  },
  {
    "type": "get",
    "url": "/logout/",
    "title": "Logout: завершение сессии",
    "name": "Logout",
    "group": "Authorization",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Authorization"
  },
  {
    "type": "get",
    "url": "/camera/city/list/",
    "title": "CameraCityList: список городов, в которых есть камеры",
    "name": "CameraCityList",
    "group": "Camera",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "cities",
            "description": "<p>Список городов.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.id",
            "description": "<p>Идентификатор города.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.name",
            "description": "<p>Название города.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, действие выполнено успешно.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Camera"
  },
  {
    "type": "get",
    "url": "/camera/detail",
    "title": "CameraDetail: подробная информация о камере",
    "name": "CameraDetail",
    "group": "Camera",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cid",
            "description": "<p>Идентификатор камеры.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>идентификатор камеры.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "actions",
            "description": "<p>Варианты просмотра или покупки доступа к камере. Формируется исходя из тарифных пакетов, доступных абоненту/аккаунту, и подключенных для данной камеры.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actions.action",
            "description": "<p>Имя действия, одно из зарезервированных значений: get_camera_url – получить адрес потока; subscribe – купить подписку на пакет.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "actions.tariff_id",
            "description": "<p>Идентификатор тарифного пакета.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actions.caption",
            "description": "<p>Название действия для отображения в интерфейсе.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "actions.price",
            "description": "<p>Стоимость покупки за полный период.</p>"
          },
          {
            "group": "Ответ",
            "type": "Boolean",
            "optional": false,
            "field": "actions.periodical",
            "description": "<p>Флаг того, что действие будет возобновляемым.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "actions.activation_price",
            "description": "<p>Стоимость покупки с учетом платежного периода аккаунта.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Название камеры.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Метод не совместим со старым биллингом.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Camera"
  },
  {
    "type": "get",
    "url": "/camera/list/",
    "title": "CameraList: список камер",
    "name": "CameraList",
    "group": "Camera",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>Поисковый запрос, если задан, то в списке камер будут возвращены только те камеры, имена которых соответствует поисковой строке.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "city_id",
            "description": "<p>ID города.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "category_id",
            "description": "<p>ID категории.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "reject_multicast",
            "defaultValue": "0",
            "description": "<p>Флаг, если передано значение 1, то ссылки на мультикаст не будут возвращены.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть EPG. Должен совпадать со значением из параметра Smarty SMARTY_ADDITIONAL_LANGUAGES.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "cameras",
            "description": "<p>Список камер.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "cameras.id",
            "description": "<p>Идентификатор камеры.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "cameras.name",
            "description": "<p>Имя камеры.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "cameras.icon",
            "description": "<p>URL-адрес иконки камеры.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "cameras.category_id",
            "description": "<p>Идентификатор категории.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "cameras.city_id",
            "description": "<p>Идентификатор категории.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "cameras.url",
            "description": "<p>URL-адрес Live-потока камерв.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "cameras.has_record",
            "description": "<p>На камере включена запись передач.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "cameras.has_subscription",
            "description": "<p>На камеру оформлена подписка.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "cameras.max_archive_duration",
            "description": "<p>Максимально доступная глубина записи (в днях).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "cameras.camera_sort",
            "description": "<p>Номер камеры в списке.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "cameras.option1",
            "description": "<p>Значение параметра канала Option 1.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "cameras.option2",
            "description": "<p>Значение параметра канала Option 2.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "cameras.option3",
            "description": "<p>Значение параметра канала Option 3.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "cameras.additional_categories",
            "description": "<p>Список доп. категорий камеры.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "cameras.additional_categories.id",
            "description": "<p>Идентификатор доп. категории.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "cameras.additional_categories.name",
            "description": "<p>Название доп. категории.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "cameras.program_id",
            "description": "<p>Идентификатор текущей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "cameras.program_name",
            "description": "<p>Название текущей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "cameras.program_begin_time",
            "description": "<p>Начало текущей передачи EPG в формате Unix Timestamp UTC+0.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "cameras.program_end_time",
            "description": "<p>Конец текущей передачи EPG в формате Unix Timestamp UTC+0.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "cameras.program_category_id",
            "description": "<p>Идентификатор категории EPG текущей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "cameras.program_category",
            "description": "<p>Название категории EPG текущей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "cameras.program_description",
            "description": "<p>Описание текущей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "cameras.program_meta",
            "description": "<p>Дополнительные расширенные данные о передаче EPG (в формате JSON).</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "cameras.program_meta.extra_name",
            "description": "<p>Подзаголовок.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "cameras.program_meta.extra_description",
            "description": "<p>Дополнительное описание.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "cameras.program_meta.genres",
            "description": "<p>Список жанров как они представлены в источнике EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "cameras.program_meta.participants",
            "description": "<p>Список участников, принимавших участие в производстве.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "cameras.program_meta.participants.actor",
            "description": "<p>Список актеров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "cameras.program_meta.participants.composer",
            "description": "<p>Список композиторов.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "cameras.program_meta.participants.director",
            "description": "<p>Список режиссёров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "cameras.program_meta.participants.producer",
            "description": "<p>Список продюсеров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "cameras.program_meta.countries",
            "description": "<p>Список стран, участвовавших в производстве.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "cameras.program_meta.productions",
            "description": "<p>Список студий занятых производством.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "cameras.program_meta.year",
            "description": "<p>Год выпуска. Для сериалов указывается два года в формате YYYY-YYYY.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "cameras.program_meta.previews",
            "description": "<p>Список ссылок на изображения превью.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "cameras.program_meta.tags",
            "description": "<p>Список тегов как они представлены в источнике EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Boolean",
            "optional": false,
            "field": "cameras.program_meta.live",
            "description": "<p>Прямой эфир.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "cameras.program_meta.sport_type",
            "description": "<p>Для спортивных передач: название спорта.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "cameras.program_meta.championship",
            "description": "<p>Для спортивных передач: название чемпионата.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "cameras.program_meta.sport_rival1",
            "description": "<p>Для спортивных передач: первая команда в чемпионате.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "cameras.program_meta.sport_rival2",
            "description": "<p>Для спортивных передач: вторая команда в чемпионате.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "cameras.program_meta.kinopoisk",
            "description": "<p>Рейтинг кинопоиска.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "cameras.program_meta.imdb",
            "description": "<p>Рейтинг IMDB.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, действие выполнено успешно.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Camera"
  },
  {
    "type": "get",
    "url": "/camera/url/",
    "title": "CameraUrl: получение адреса потока камеры",
    "name": "CameraUrl",
    "group": "Camera",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cid",
            "description": "<p>Идентификатор камеры, для которой нужно получить адрес потока.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "redirect",
            "defaultValue": "1",
            "description": "<p>Флаг, если значение 1, то вместо ответа сервер вернет HTTP Redirect.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "exclude_service_id",
            "description": "<p>Идентификатор стриминг-сервиса, который будет исключен из маршрутизации. Используется для реализации отказоустойчивости на уровне приложения для перебора видео-серверов. Можно передать несколько параметров exclude_service_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Адрес потока.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "stream_service_id",
            "description": "<p>Идентификатор выбранного стриминг-сервиса.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, действие выполнено успешно.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Camera"
  },
  {
    "type": "get",
    "url": "/camera/category/list/",
    "title": "CameraCategoryList: список категорий камер",
    "name": "CameraCategoryList",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "city",
            "defaultValue": "пустое",
            "description": "<p>ID города.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть названия категорий. Должен совпадать со значением из параметра Smarty SMARTY_ADDITIONAL_LANGUAGES.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "categories",
            "description": "<p>Список категорий.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "categories.id",
            "description": "<p>Идентификатор категории.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "categories.name",
            "description": "<p>Название категории.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "categories.city_name",
            "description": "<p>Имя города.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "categories.cameras_count",
            "description": "<p>Количество камер в категории.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, действие выполнено успешно.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/category/list/",
    "title": "CategoryList: список категорий",
    "name": "CategoryList",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть названия категорий. Должен совпадать со значением из параметра Smarty SMARTY_ADDITIONAL_LANGUAGES.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "categories",
            "description": "<p>Список категорий.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "categories.id",
            "description": "<p>Идентификатор категории.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "categories.name",
            "description": "<p>Название категории.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "categories.color",
            "description": "<p>Цвет категории (в формате hex).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "categories.channels_count",
            "description": "<p>Количество каналов в категории.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, действие выполнено успешно.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/channel/action/",
    "title": "ChannelAction: подписка на канал или получение ссылки на него",
    "name": "ChannelAction",
    "group": "Channel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cid",
            "description": "<p>Идентификатор канала.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "action",
            "description": "<p>Действие. Должно быть значением из списка actions из ChannelDetail.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tariff_id",
            "description": "<p>Тариф, по которому производится по.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Результат выполнения действия.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, действие выполнено успешно.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Ошибка при выполнении действия.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Недостаточно средств для совершения покупки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>Покупка уже была совершена ранее или в покупке нет необходимости.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "4",
            "description": "<p>Канал недоступен пользователю.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "5",
            "description": "<p>Требуется подписка.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Channel"
  },
  {
    "type": "get",
    "url": "/channel/detail/",
    "title": "ChannelDetail: подробная информация о канале",
    "name": "ChannelDetail",
    "group": "Channel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cid",
            "description": "<p>Идентификатор телеканала.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>идентификатор канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "actions",
            "description": "<p>Варианты просмотра или покупки канала. Формируется исходя из тарифных пакетов, доступных абоненту/аккаунту, и подключенных для данного канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actions.action",
            "description": "<p>Имя действия, одно из зарезервированных значений: get_channel_url – получить адрес потока; subscribe – купить подписку на пакет.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "actions.tariff_id",
            "description": "<p>Идентификатор тарифного пакета.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actions.caption",
            "description": "<p>Название действия для отображения в интерфейсе.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "actions.price",
            "description": "<p>Стоимость покупки за полный период.</p>"
          },
          {
            "group": "Ответ",
            "type": "Boolean",
            "optional": false,
            "field": "actions.periodical",
            "description": "<p>Флаг того, что действие будет возобновляемым.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "actions.activation_price",
            "description": "<p>Стоимость покупки с учетом платежного периода аккаунта.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Название канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Метод не совместим со старым биллингом.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Channel"
  },
  {
    "type": "get",
    "url": "/channel/icon/list/",
    "title": "ChannelIconList: список URL-адресов иконок всех телеканалов",
    "name": "ChannelIconList",
    "group": "Channel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "icons",
            "description": "<p>Список всех каналов.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "icons.id",
            "description": "<p>Идентификатор канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "icons.icon",
            "description": "<p>URL-адрес иконки.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, действие выполнено успешно.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Channel"
  },
  {
    "type": "get",
    "url": "/channel/list/",
    "title": "ChannelList: список телеканалов",
    "name": "ChannelList",
    "group": "Channel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "icon_width",
            "description": "<p>Предпочитаемая ширина иконок телеканалов. Имя файла иконки будет: &lt;имя файла&gt;&lt;ширина&gt;_&lt;высота&gt;.&lt;расширение&gt;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "icon_height",
            "description": "<p>Предпочитаемая высота иконок телеканалов. Имя файла иконки будет: &lt;имя файла&gt;&lt;ширина&gt;_&lt;высота&gt;.&lt;расширение&gt;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>Поисковый запрос, если задан, то в списке телеканалов будут возвращены только те каналы, название которых соответствует поисковой строке.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "compact",
            "defaultValue": "0",
            "description": "<p>Флаг, если задан, некоторые поля ответа будут пропущены (используется для оптимизации чтения ответа в приложении).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "account_sort",
            "defaultValue": "1",
            "description": "<p>Флаг, если передано значение 0, то сортировка аккаунта будет сброшена.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "reject_multicast",
            "defaultValue": "0",
            "description": "<p>Флаг, если передано значение 1, то ссылки на мультикаст не будут возвращены.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть названия каналов и EPG. Должен совпадать со значением из параметра Smarty SMARTY_ADDITIONAL_LANGUAGES.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "channels",
            "description": "<p>Список телеканалов.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.id",
            "description": "<p>Идентификатор канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.name",
            "description": "<p>Название канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.icon",
            "description": "<p>URL-адрес иконки канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.category_id",
            "description": "<p>Идентификатор категории.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.url",
            "description": "<p>URL-адрес Live-потока телеканала.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "channels.has_record",
            "description": "<p>На канале включена запись передач.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.max_archive_duration",
            "description": "<p>Максимально доступная глубина записи (в днях).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "channels.is_hidden",
            "description": "<p>Канал скрыт из списка аккаунта.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "channels.is_favorited",
            "description": "<p>Канал добавлен в избранное аккаунта.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "channels.has_subscription",
            "description": "<p>На канал имеется подписка.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "channels.is_parent_control",
            "description": "<p>На канале включен родительский контроль.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.timeshift_offset",
            "description": "<p>Канал вещается с часовым сдвигом, указанном в этом поле.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.channel_sort",
            "description": "<p>Номер канала в списке каналов (для сортировки).</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.option1",
            "description": "<p>Значение параметра канала Option 1.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.option2",
            "description": "<p>Значение параметра канала Option 2.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.option3",
            "description": "<p>Значение параметра канала Option 3.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.telemeter",
            "description": "<p>Телеизмеритель. Если указано, а также указаны параметры измерителя в PortalSettingsList, то приложению необходимо отправлять данные статистики просмотра канала на сервер измерителя.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.telemeter_account_name",
            "description": "<p>AccountName на сервере измерителя.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.telemeter_tmsec_name",
            "description": "<p>TmsecName на сервере измерителя.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.telemeter_cat_id",
            "description": "<p>Категория контента на сервере измерителя.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.telemeter_vc_id",
            "description": "<p>Идентификатор контента на сервере измерителя.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.telemeter_vc_version",
            "description": "<p>Версия контента на сервере измерителя.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2",
              "3"
            ],
            "optional": false,
            "field": "channels.aspect_ratio",
            "description": "<p>Соотношение сторон данного канала. 0 - Авто. 1 - 16:9. 2 - 4:3. 3 - На весь экран.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.lcn_number",
            "description": "<p>Логический номер канала (LCN).</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "channels.hbb",
            "description": "<p>Список доступных HbbTV-провайдеров.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.hbb.type",
            "description": "<p>Тип провайдера.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.hbb.id",
            "description": "<p>ID провайдера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.hbb.api_key",
            "description": "<p>Ключ API.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.hbb.channel_id",
            "description": "<p>ID канала у провайдера.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "channels.additional_categories",
            "description": "<p>Список доп. категорий канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.additional_categories.id",
            "description": "<p>Идентификатор доп. категории.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.additional_categories.name",
            "description": "<p>Название доп. категории.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.program_id",
            "description": "<p>Идентификатор текущей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.program_name",
            "description": "<p>Название текущей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.program_begin_time",
            "description": "<p>Начало текущей передачи EPG в формате Unix Timestamp UTC+0.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.program_end_time",
            "description": "<p>Конец текущей передачи EPG в формате Unix Timestamp UTC+0.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.program_category_id",
            "description": "<p>Идентификатор категории EPG текущей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.program_category",
            "description": "<p>Название категории EPG текущей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.program_description",
            "description": "<p>Описание текущей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.program_preview_url",
            "description": "<p>URL-адрес обложки текущей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.program_rating",
            "description": "<p>Возрастной рейтинг текущей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.program_meta",
            "description": "<p>Дополнительные расширенные данные о передаче EPG (в формате JSON).</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.program_meta.extra_name",
            "description": "<p>Подзаголовок.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.program_meta.extra_description",
            "description": "<p>Дополнительное описание.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.program_meta.genres",
            "description": "<p>Список жанров как они представлены в источнике EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "channels.program_meta.participants",
            "description": "<p>Список участников, принимавших участие в производстве.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.program_meta.participants.actor",
            "description": "<p>Список актеров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.program_meta.participants.composer",
            "description": "<p>Список композиторов.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.program_meta.participants.director",
            "description": "<p>Список режиссёров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.program_meta.participants.producer",
            "description": "<p>Список продюсеров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.program_meta.countries",
            "description": "<p>Список стран, участвовавших в производстве.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.program_meta.productions",
            "description": "<p>Список студий занятых производством.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.program_meta.year",
            "description": "<p>Год выпуска. Для сериалов указывается два года в формате YYYY-YYYY.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.program_meta.previews",
            "description": "<p>Список ссылок на изображения превью.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.program_meta.tags",
            "description": "<p>Список тегов как они представлены в источнике EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Boolean",
            "optional": false,
            "field": "channels.program_meta.live",
            "description": "<p>Прямой эфир.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.program_meta.sport_type",
            "description": "<p>Для спортивных передач: название спорта.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.program_meta.championship",
            "description": "<p>Для спортивных передач: название чемпионата.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.program_meta.sport_rival1",
            "description": "<p>Для спортивных передач: первая команда в чемпионате.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.program_meta.sport_rival2",
            "description": "<p>Для спортивных передач: вторая команда в чемпионате.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.program_meta.kinopoisk",
            "description": "<p>Рейтинг кинопоиска.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.program_meta.imdb",
            "description": "<p>Рейтинг IMDB.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "channels.program_genres",
            "description": "<p>Список жанров текущей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.program_genres.genre_id",
            "description": "<p>Идентификатор жанра EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.program_genres.genre_name",
            "description": "<p>Название жанра EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.next_program_id",
            "description": "<p>Идентификатор следующей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.next_program_name",
            "description": "<p>Название следующей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.next_program_begin_time",
            "description": "<p>Начало следующей передачи EPG в формате Unix Timestamp UTC+0.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.next_program_end_time",
            "description": "<p>Конец следующей передачи EPG в формате Unix Timestamp UTC+0.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.next_program_category_id",
            "description": "<p>Идентификатор категории EPG следующей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.next_program_category",
            "description": "<p>Название категории EPG следующей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.next_program_description",
            "description": "<p>Описание следующей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.next_program_preview_url",
            "description": "<p>URL-адрес обложки следующей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.next_program_rating",
            "description": "<p>Возрастной рейтинг следующей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.next_program_meta",
            "description": "<p>Дополнительные расширенные данные о следующей передаче EPG (в формате JSON).</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.next_program_meta.extra_name",
            "description": "<p>Подзаголовок.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.next_program_meta.extra_description",
            "description": "<p>Дополнительное описание.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.next_program_meta.genres",
            "description": "<p>Список жанров как они представлены в источнике EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "channels.next_program_meta.participants",
            "description": "<p>Список участников, принимавших участие в производстве.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.next_program_meta.participants.actor",
            "description": "<p>Список актеров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.next_program_meta.participants.composer",
            "description": "<p>Список композиторов.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.next_program_meta.participants.director",
            "description": "<p>Список режиссёров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.next_program_meta.participants.producer",
            "description": "<p>Список продюсеров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.next_program_meta.countries",
            "description": "<p>Список стран, участвовавших в производстве.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.next_program_meta.productions",
            "description": "<p>Список студий занятых производством.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.next_program_meta.year",
            "description": "<p>Год выпуска. Для сериалов указывается два года в формате YYYY-YYYY.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.next_program_meta.previews",
            "description": "<p>Список ссылок на изображения превью.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.next_program_meta.tags",
            "description": "<p>Список тегов как они представлены в источнике EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Boolean",
            "optional": false,
            "field": "channels.next_program_meta.live",
            "description": "<p>Прямой эфир.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.next_program_meta.sport_type",
            "description": "<p>Для спортивных передач: название спорта.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.next_program_meta.championship",
            "description": "<p>Для спортивных передач: название чемпионата.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.next_program_meta.sport_rival1",
            "description": "<p>Для спортивных передач: первая команда в чемпионате.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.next_program_meta.sport_rival2",
            "description": "<p>Для спортивных передач: вторая команда в чемпионате.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.next_program_meta.kinopoisk",
            "description": "<p>Рейтинг кинопоиска.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.next_program_meta.imdb",
            "description": "<p>Рейтинг IMDB.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "channels.next_program_genres",
            "description": "<p>Список жанров следующей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.next_program_genres.genre_id",
            "description": "<p>Идентификатор жанра EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.next_program_genres.genre_name",
            "description": "<p>Название жанра EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "channels.show_in_all",
            "description": "<p>Отображать канал в категории Все.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.pause_live_tv_shift",
            "description": "<p>Временной сдвиг для функции Pause Live TV.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, действие выполнено успешно.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Channel"
  },
  {
    "type": "get",
    "url": "/channel/list/search/",
    "title": "ChannelListSearch: поиск телепередач",
    "name": "ChannelListSearch",
    "group": "Channel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "5..",
            "optional": false,
            "field": "search",
            "description": "<p>Строка поиска. Поиск осуществляется по названию канала.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "icon_width",
            "description": "<p>Предпочитаемая ширина иконок телеканалов. Имя файла иконки будет: &lt;имя файла&gt;&lt;ширина&gt;_&lt;высота&gt;.&lt;расширение&gt;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "icon_height",
            "description": "<p>Предпочитаемая высота иконок телеканалов. Имя файла иконки будет: &lt;имя файла&gt;&lt;ширина&gt;_&lt;высота&gt;.&lt;расширение&gt;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "compact",
            "defaultValue": "0",
            "description": "<p>Флаг, если задан, некоторые поля ответа будут пропущены (используется для оптимизации чтения ответа в приложении).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "account_sort",
            "defaultValue": "1",
            "description": "<p>Флаг, если передано значение 0, то сортировка аккаунта будет сброшена.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть названия каналов и EPG. Должен совпадать со значением из параметра Smarty SMARTY_ADDITIONAL_LANGUAGES.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "channels",
            "description": "<p>Список телеканалов.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.id",
            "description": "<p>Идентификатор канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.name",
            "description": "<p>Название канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.icon",
            "description": "<p>URL-адрес иконки канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.category_id",
            "description": "<p>Идентификатор категории.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.url",
            "description": "<p>URL-адрес Live-потока телеканала.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "channels.has_record",
            "description": "<p>На канале включена запись передач.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.max_archive_duration",
            "description": "<p>Максимально доступная глубина записи (в днях).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "channels.is_hidden",
            "description": "<p>Канал скрыт из списка аккаунта.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "channels.is_favorited",
            "description": "<p>Канал добавлен в избранное аккаунта.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "channels.has_subscription",
            "description": "<p>На канал имеется подписка.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "channels.is_parent_control",
            "description": "<p>На канале включен родительский контроль.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.timeshift_offset",
            "description": "<p>Канал вещается с часовым сдвигом, указанном в этом поле.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.channel_sort",
            "description": "<p>Номер канала в списке каналов (для сортировки).</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.option1",
            "description": "<p>Значение параметра канала Option 1.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.option2",
            "description": "<p>Значение параметра канала Option 2.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.option3",
            "description": "<p>Значение параметра канала Option 3.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.telemeter",
            "description": "<p>Телеизмеритель. Если указано, а также указаны параметры измерителя в PortalSettingsList, то приложению необходимо отправлять данные статистики просмотра канала на сервер измерителя.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.telemeter_account_name",
            "description": "<p>AccountName на сервере измерителя.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.telemeter_tmsec_name",
            "description": "<p>TmsecName на сервере измерителя.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.telemeter_cat_id",
            "description": "<p>Категория контента на сервере измерителя.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.telemeter_vc_id",
            "description": "<p>Идентификатор контента на сервере измерителя.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.telemeter_vc_version",
            "description": "<p>Версия контента на сервере измерителя.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2",
              "3"
            ],
            "optional": false,
            "field": "channels.aspect_ratio",
            "description": "<p>Соотношение сторон данного канала. 0 - Авто. 1 - 16:9. 2 - 4:3. 3 - На весь экран.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.lcn_number",
            "description": "<p>Логический номер канала (LCN).</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "channels.hbb",
            "description": "<p>Список доступных HbbTV-провайдеров.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.hbb.type",
            "description": "<p>Тип провайдера.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.hbb.id",
            "description": "<p>ID провайдера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.hbb.api_key",
            "description": "<p>Ключ API.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.hbb.channel_id",
            "description": "<p>ID канала у провайдера.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "channels.additional_categories",
            "description": "<p>Список доп. категорий канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.additional_categories.id",
            "description": "<p>Идентификатор доп. категории.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.additional_categories.name",
            "description": "<p>Название доп. категории.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.program_id",
            "description": "<p>Идентификатор текущей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.program_name",
            "description": "<p>Название текущей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.program_begin_time",
            "description": "<p>Начало текущей передачи EPG в формате Unix Timestamp UTC+0.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.program_end_time",
            "description": "<p>Конец текущей передачи EPG в формате Unix Timestamp UTC+0.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.program_category_id",
            "description": "<p>Идентификатор категории EPG текущей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.program_category",
            "description": "<p>Название категории EPG текущей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.program_description",
            "description": "<p>Описание текущей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.program_preview_url",
            "description": "<p>URL-адрес обложки текущей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.program_rating",
            "description": "<p>Возрастной рейтинг текущей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.program_meta",
            "description": "<p>Дополнительные расширенные данные о передаче EPG (в формате JSON).</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.program_meta.extra_name",
            "description": "<p>Подзаголовок.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.program_meta.extra_description",
            "description": "<p>Дополнительное описание.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.program_meta.genres",
            "description": "<p>Список жанров как они представлены в источнике EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "channels.program_meta.participants",
            "description": "<p>Список участников, принимавших участие в производстве.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.program_meta.participants.actor",
            "description": "<p>Список актеров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.program_meta.participants.composer",
            "description": "<p>Список композиторов.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.program_meta.participants.director",
            "description": "<p>Список режиссёров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.program_meta.participants.producer",
            "description": "<p>Список продюсеров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.program_meta.countries",
            "description": "<p>Список стран, участвовавших в производстве.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.program_meta.productions",
            "description": "<p>Список студий занятых производством.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.program_meta.year",
            "description": "<p>Год выпуска. Для сериалов указывается два года в формате YYYY-YYYY.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.program_meta.previews",
            "description": "<p>Список ссылок на изображения превью.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.program_meta.tags",
            "description": "<p>Список тегов как они представлены в источнике EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Boolean",
            "optional": false,
            "field": "channels.program_meta.live",
            "description": "<p>Прямой эфир.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.program_meta.sport_type",
            "description": "<p>Для спортивных передач: название спорта.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.program_meta.championship",
            "description": "<p>Для спортивных передач: название чемпионата.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.program_meta.sport_rival1",
            "description": "<p>Для спортивных передач: первая команда в чемпионате.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.program_meta.sport_rival2",
            "description": "<p>Для спортивных передач: вторая команда в чемпионате.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.program_meta.kinopoisk",
            "description": "<p>Рейтинг кинопоиска.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.program_meta.imdb",
            "description": "<p>Рейтинг IMDB.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "channels.program_genres",
            "description": "<p>Список жанров текущей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.program_genres.genre_id",
            "description": "<p>Идентификатор жанра EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.program_genres.genre_name",
            "description": "<p>Название жанра EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.next_program_id",
            "description": "<p>Идентификатор следующей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.next_program_name",
            "description": "<p>Название следующей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.next_program_begin_time",
            "description": "<p>Начало следующей передачи EPG в формате Unix Timestamp UTC+0.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.next_program_end_time",
            "description": "<p>Конец следующей передачи EPG в формате Unix Timestamp UTC+0.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.next_program_category_id",
            "description": "<p>Идентификатор категории EPG следующей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.next_program_category",
            "description": "<p>Название категории EPG следующей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.next_program_description",
            "description": "<p>Описание следующей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.next_program_preview_url",
            "description": "<p>URL-адрес обложки следующей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.next_program_rating",
            "description": "<p>Возрастной рейтинг следующей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.next_program_meta",
            "description": "<p>Дополнительные расширенные данные о следующей передаче EPG (в формате JSON).</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.next_program_meta.extra_name",
            "description": "<p>Подзаголовок.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.next_program_meta.extra_description",
            "description": "<p>Дополнительное описание.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.next_program_meta.genres",
            "description": "<p>Список жанров как они представлены в источнике EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "channels.next_program_meta.participants",
            "description": "<p>Список участников, принимавших участие в производстве.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.next_program_meta.participants.actor",
            "description": "<p>Список актеров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.next_program_meta.participants.composer",
            "description": "<p>Список композиторов.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.next_program_meta.participants.director",
            "description": "<p>Список режиссёров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.next_program_meta.participants.producer",
            "description": "<p>Список продюсеров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.next_program_meta.countries",
            "description": "<p>Список стран, участвовавших в производстве.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.next_program_meta.productions",
            "description": "<p>Список студий занятых производством.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.next_program_meta.year",
            "description": "<p>Год выпуска. Для сериалов указывается два года в формате YYYY-YYYY.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.next_program_meta.previews",
            "description": "<p>Список ссылок на изображения превью.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "channels.next_program_meta.tags",
            "description": "<p>Список тегов как они представлены в источнике EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Boolean",
            "optional": false,
            "field": "channels.next_program_meta.live",
            "description": "<p>Прямой эфир.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.next_program_meta.sport_type",
            "description": "<p>Для спортивных передач: название спорта.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.next_program_meta.championship",
            "description": "<p>Для спортивных передач: название чемпионата.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.next_program_meta.sport_rival1",
            "description": "<p>Для спортивных передач: первая команда в чемпионате.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.next_program_meta.sport_rival2",
            "description": "<p>Для спортивных передач: вторая команда в чемпионате.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.next_program_meta.kinopoisk",
            "description": "<p>Рейтинг кинопоиска.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.next_program_meta.imdb",
            "description": "<p>Рейтинг IMDB.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "channels.next_program_genres",
            "description": "<p>Список жанров следующей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.next_program_genres.genre_id",
            "description": "<p>Идентификатор жанра EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.next_program_genres.genre_name",
            "description": "<p>Название жанра EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "channels.show_in_all",
            "description": "<p>Отображать канал в категории Все.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.pause_live_tv_shift",
            "description": "<p>Временной сдвиг для функции Pause Live TV.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, действие выполнено успешно.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Channel"
  },
  {
    "type": "get",
    "url": "/premiere/list/",
    "title": "ChannelPremieres: список нескольких ближайших премьер на канале",
    "name": "ChannelPremieres",
    "group": "Channel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "cid",
            "defaultValue": "пустое",
            "description": "<p>Идентификатор телеканала, для которого необходим список следующих телепередач.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "пустое",
            "description": "<p>Количество премьер для одного кала, которые нужно вернуть, если 0, то без ограничений.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "timeshift_offset",
            "defaultValue": "0",
            "description": "<p>Часовой сдвиг телеканала (если используется).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "compact",
            "defaultValue": "0",
            "description": "<p>При значении 1 из ответа сервера будут исключены дополнительные поля, например, информация об описании передачи.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть названия и описания передач. Должен совпадать со значением из параметра Smarty SMARTY_ADDITIONAL_LANGUAGES.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "premieres",
            "description": "<p>Список премьер.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "premieres.icon",
            "description": "<p>URL иконки канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "premieres.id",
            "description": "<p>Идентификатор канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "premieres.name",
            "description": "<p>Название канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "premieres.program_id",
            "description": "<p>Идентификатор передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "premieres.program_name",
            "description": "<p>Название премьеры.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "premieres.program_short_name",
            "description": "<p>Краткое название премьеры без типа.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "premieres.program_begin_time",
            "description": "<p>Начало передачи EPG в формате Unix Timestamp UTC+0.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "premieres.program_description",
            "description": "<p>Описание премьеры.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "premieres.program_preview_url",
            "description": "<p>URL-адрес обложки премьеры.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "premieres.program_rating",
            "description": "<p>Возрастной рейтинг премьеры.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "premieres.program_meta",
            "description": "<p>Дополнительная информация о премьере в формате JSON.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "premieres.program_meta.extra_name",
            "description": "<p>Подзаголовок.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "premieres.program_meta.extra_description",
            "description": "<p>Дополнительное описание.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "premieres.program_meta.genres",
            "description": "<p>Список жанров как они представлены в источнике EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "premieres.program_meta.participants",
            "description": "<p>Список участников, принимавших участие в производстве.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "premieres.program_meta.participants.actor",
            "description": "<p>Список актеров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "premieres.program_meta.participants.composer",
            "description": "<p>Список композиторов.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "premieres.program_meta.participants.director",
            "description": "<p>Список режиссёров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "premieres.program_meta.participants.producer",
            "description": "<p>Список продюсеров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "premieres.program_meta.countries",
            "description": "<p>Список стран, участвовавших в производстве.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "premieres.program_meta.productions",
            "description": "<p>Список студий занятых производством.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "premieres.program_meta.year",
            "description": "<p>Год выпуска. Для сериалов указывается два года в формате YYYY-YYYY.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "premieres.program_meta.previews",
            "description": "<p>Список ссылок на изображения превью.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "premieres.program_meta.tags",
            "description": "<p>Список тегов как они представлены в источнике EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Boolean",
            "optional": false,
            "field": "premieres.program_meta.live",
            "description": "<p>Прямой эфир.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "premieres.program_meta.sport_type",
            "description": "<p>Для спортивных передач: название спорта.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "premieres.program_meta.championship",
            "description": "<p>Для спортивных передач: название чемпионата.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "premieres.program_meta.sport_rival1",
            "description": "<p>Для спортивных передач: первая команда в чемпионате.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "premieres.program_meta.sport_rival2",
            "description": "<p>Для спортивных передач: вторая команда в чемпионате.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "premieres.program_meta.kinopoisk",
            "description": "<p>Рейтинг кинопоиска.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "premieres.program_meta.imdb",
            "description": "<p>Рейтинг IMDB.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, действие выполнено успешно.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Channel"
  },
  {
    "type": "get",
    "url": "/channel/programs/",
    "title": "ChannelPrograms: список текущей и нескольких ближайших следующих телепередач EPG на канале",
    "name": "ChannelPrograms",
    "group": "Channel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cid",
            "description": "<p>Идентификатор телеканала, для которого необходим список следующих телепередач.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "defaultValue": "6",
            "description": "<p>Количество передач, которые нужно вернуть (включая текущую).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "timeshift_offset",
            "defaultValue": "0",
            "description": "<p>Часовой сдвиг телеканала (если используется).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "compact",
            "defaultValue": "0",
            "description": "<p>При значении 1 из ответа сервера будут исключены дополнительные поля, например, информация об описании передачи.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть названия и описания передач. Должен совпадать со значением из параметра Smarty SMARTY_ADDITIONAL_LANGUAGES.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "programs",
            "description": "<p>Список текущей и ближайших следующих передач EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.id",
            "description": "<p>Идентификатор передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.program_name",
            "description": "<p>Название передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.program_begin_time",
            "description": "<p>Начало передачи EPG в формате Unix Timestamp UTC+0.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.program_end_time",
            "description": "<p>Конец передачи EPG в формате Unix Timestamp UTC+0.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.program_category",
            "description": "<p>Название категории EPG передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.program_description",
            "description": "<p>Описание передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.program_preview_url",
            "description": "<p>URL-адрес обложки передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.program_rating",
            "description": "<p>Возрастной рейтинг передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.datetime_begin",
            "description": "<p>Начало передачи EPG в формате Unix Timestamp UTC+0 (без учета часового сдвига).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.datetime_end",
            "description": "<p>Конец передачи EPG в формате Unix Timestamp UTC+0 (без учета часового сдвига).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, действие выполнено успешно.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Channel"
  },
  {
    "type": "get",
    "url": "/channel/url/",
    "title": "ChannelUrl: получение адреса потока телеканала",
    "name": "ChannelUrl",
    "group": "Channel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cid",
            "description": "<p>Идентификатор телеканала, для которого нужно получить адрес потока.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "redirect",
            "defaultValue": "1",
            "description": "<p>Флаг, если значение 1, то вместо ответа сервер вернет HTTP Redirect.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "exclude_service_id",
            "description": "<p>Идентификатор стриминг-сервиса, который будет исключен из маршрутизации. Используется для реализации отказоустойчивости на уровне приложения для перебора видео-серверов. Можно передать несколько параметров exclude_service_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Адрес потока.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "stream_service_id",
            "description": "<p>Идентификатор выбранного стриминг-сервиса.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, действие выполнено успешно.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Channel"
  },
  {
    "type": "get",
    "url": "/content/position/set/",
    "title": "ContentPositionSet: сохранение позиции просмотра контента (передачи или фильма)",
    "name": "ContentPositionSet",
    "group": "ContentPosition",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "program",
              "video"
            ],
            "optional": false,
            "field": "content_type",
            "description": "<p>Тип контента.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "content_id",
            "description": "<p>Идентификатор контента.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "asset_id",
            "defaultValue": "пустой",
            "description": "<p>Идентификатор ассета/серии. Обязательно передавать это поле для сохранения меток просмотра для content_type=video.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "position",
            "description": "<p>Позиция просмотра, в секундах от начала воспроизведения.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, напоминание сохранено успешно.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Передан неверный content_type.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "ContentPosition"
  },
  {
    "type": "get",
    "url": "/customer/info/",
    "title": "CustomerInfo: получение информации об абоненте",
    "name": "CustomerInfo",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "dd.mm.YYYY"
            ],
            "optional": true,
            "field": "date_from",
            "description": "<p>Дата начала периода, за которую запросить баланс и список транзакций. Используется, если настроен внешний биллинг.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "dd.mm.YYYY"
            ],
            "optional": true,
            "field": "date_to",
            "description": "<p>Дата конца периода, за которую запросить баланс и список транзакций. Используется, если настроен внешний биллинг.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "authkey",
            "description": "<p>Ключ сессии. Необязателен, если ключ присутствует в Cookies.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "balance",
            "description": "<p>Остаток денежных средств на счете пользователя.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Адрес email пользователя.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "mobile_phone_number",
            "description": "<p>Номер мобильного телефона пользователя.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object",
            "optional": false,
            "field": "payments",
            "description": "<p>Объект платежей по видам.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "payments.btv",
            "description": "<p>Список платежей за услугу TV.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "payments.btv.comment",
            "description": "<p>Комментарий к транзакции.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "payments.btv.datetime",
            "description": "<p>Дата совершения.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "payments.btv.amount",
            "description": "<p>Сумма транзакции.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "payments.vod",
            "description": "<p>Список платежей за услугу VOD.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "payments.vod.comment",
            "description": "<p>Комментарий к транзакции.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "payments.vod.datetime",
            "description": "<p>Дата совершения.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "payments.vod.amount",
            "description": "<p>Сумма транзакции.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "payments.other",
            "description": "<p>Список платежей за другие услуги.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "payments.other.comment",
            "description": "<p>Комментарий к транзакции.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "payments.other.datetime",
            "description": "<p>Дата совершения.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "payments.other.amount",
            "description": "<p>Сумма транзакции.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "tariffs",
            "description": "<p>Список тарифных пакетов (подключенных и доступных для подключения).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs.id",
            "description": "<p>Идентификатор тарифа.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "tariffs.name",
            "description": "<p>Название.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "tariffs.description",
            "description": "<p>Описание.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "tariffs.price",
            "description": "<p>Стоимость подписки.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs.period",
            "description": "<p>Период подписки.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "tariffs.is_assigned",
            "description": "<p>Флаг, показывающий подписан ли абонент на данный тариф.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs.channels_count",
            "description": "<p>Количество каналов в пакете, -1 если каналов нет.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs.basic_tariff_priority",
            "description": "<p>Приоритет базового пакета.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "subscriptions",
            "description": "<p>Список подписок.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "subscriptions.tariff_id",
            "description": "<p>ID тарифа.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "subscriptions.start_date",
            "description": "<p>Начало действия.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "subscriptions.end_date",
            "description": "<p>Окончание действия.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "subscriptions.is_periodical",
            "description": "<p>Является ли периодической.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "subscriptions.price",
            "description": "<p>Стоимость (за срок, указанный в настройках тарифа).</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "payment_sum",
            "description": "<p>Сумма платежа за установленный период.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "payment_period",
            "description": "<p>Платёжный период.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "current_debt_amount",
            "description": "<p>Текущая сумма задолженности.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Возникла ошибка получения данных из внешнего биллинга.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/customer/info/set/",
    "title": "CustomerInfoSet: изменение данных абонента",
    "name": "CustomerInfoSet",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "..256",
            "optional": true,
            "field": "firstname",
            "defaultValue": "пустое",
            "description": "<p>Имя абонента.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..256",
            "optional": true,
            "field": "lastname",
            "defaultValue": "пустое",
            "description": "<p>Фамилия абонента.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..24",
            "optional": true,
            "field": "mobile_phone_number",
            "defaultValue": "пустое",
            "description": "<p>Номер мобильного телефона абонента.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..254",
            "optional": true,
            "field": "email",
            "defaultValue": "пустое",
            "description": "<p>Адрес email абонента.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object",
            "optional": false,
            "field": "error_messages",
            "description": "<p>Описания ошибок.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": true,
            "field": "error_message.firstname",
            "description": "<p>Описания ошибок firstname.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": true,
            "field": "error_message.lastname",
            "description": "<p>Описания ошибок lastname.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": true,
            "field": "error_message.mobile_phone_number",
            "description": "<p>Описания ошибок mobile_phone_number.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": true,
            "field": "error_message.email",
            "description": "<p>Описания ошибок email.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Переданные параметры абонента некорректны. Подробности в error_messages.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/customer/tariff/list",
    "title": "CustomerTariffList: получение списка доступных тарифных пакетов",
    "name": "CustomerTariffList",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "tariffs",
            "description": "<p>Список тарифных пакетов (подключенных и доступных для подключения).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs.id",
            "description": "<p>Идентификатор тарифа.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "tariffs.name",
            "description": "<p>Название.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "tariffs.description",
            "description": "<p>Описание.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs.period",
            "description": "<p>Период подписки.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs.price",
            "description": "<p>Стоимость подписки.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "tariffs.currency",
            "description": "<p>Валюта подписки.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs.basic_tariff_priority",
            "description": "<p>Приоритет базового пакета.</p>"
          },
          {
            "group": "Ответ",
            "type": "Boolean",
            "optional": false,
            "field": "tariffs.is_assigned",
            "description": "<p>Подключен.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Возникла ошибка получения данных из внешнего биллинга.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/customer/tariff/subscribe/",
    "title": "CustomerTariffSubscribe: оформление подписки на тарифный пакет",
    "name": "CustomerTariffSubscribe",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tariff_id",
            "description": "<p>Идентификатор тарифа.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Данный тариф не доступен или не существует, либо уже подключен.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Недостаточно средств.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>Тариф уже подключен.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "4",
            "description": "<p>Неправильно настроен внутренний api.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/customer/tariff/subscription/cost/",
    "title": "CustomerTariffSubscriptionCost: получение стоимости подписки на тарифный пакет",
    "name": "CustomerTariffSubscriptionCost",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tariff_id",
            "description": "<p>Идентификатор тарифа.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Стоимость подписки.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "balance",
            "description": "<p>Баланс после подключения.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Данный тариф не доступен или не существует.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "4",
            "description": "<p>Неправильно настроен внутренний api.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/customer/tariff/subscription/list",
    "title": "CustomerTariffSubscriptionList: получение списка действующих подписок",
    "name": "CustomerTariffSubscriptionList",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "subscriptions",
            "description": "<p>Список тарифных пакетов (подключенных и доступных для подключения).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "subscriptions.id",
            "description": "<p>Идентификатор подписки.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "subscriptions.tariff_id",
            "description": "<p>Идентификатор тарифа.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "subscriptions.tariff_name",
            "description": "<p>Название тарифа.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "subscriptions.start_date",
            "description": "<p>Дата начала периода действия.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "subscriptions.end_date",
            "description": "<p>Дата окончания периода действия.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "subscriptions.price",
            "description": "<p>Стоимость.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "subscriptions.currency",
            "description": "<p>Валюта.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "subscriptions.is_preiodical",
            "description": "<p>Является периодической.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "subscriptions.api_name",
            "description": "<p>Источник подписки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Данный тариф не доступен или не существует.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/customer/tariff/unsubscribe/",
    "title": "CustomerTariffUnsubscribe: отключение подписки на тарифный пакет",
    "name": "CustomerTariffUnsubscribe",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tariff_id",
            "description": "<p>Идентификатор тарифа.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Данный тариф не подключен.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Тариф является базовым, его отключение недоступно.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "4",
            "description": "<p>Неправильно настроен внутренний api.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/game/list",
    "title": "GameList: список игр",
    "name": "GameList",
    "group": "Game",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "games",
            "description": "<p>Список игр, доступных для данного устройства.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "games.name",
            "description": "<p>Название игры.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "games.system_name",
            "description": "<p>Системное название модуля/экрана с игрой.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "games.last_record_date",
            "description": "<p>Дата последней игры.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "games.last_record_score",
            "description": "<p>Очки за последнюю игру.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "games.account",
            "description": "<p>Номер абонемента аккаунта, кому принадлежит рекорд.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Game"
  },
  {
    "type": "get",
    "url": "/game/score/list/",
    "title": "GameScoreList: список заработанных очков в игре",
    "name": "GameScoreList",
    "group": "Game",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "score",
            "description": "<p>Список результатов.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "score.score",
            "description": "<p>Количество очков.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Не найдены результаты игр.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Game"
  },
  {
    "type": "get",
    "url": "/game/score/save/",
    "title": "GameScoreSave: сохранить очередной результат игры",
    "name": "GameScoreSave",
    "group": "Game",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "game",
            "description": "<p>Системное название игры, для которой сохраняются результаты.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>Количество заработанных очков.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "score",
            "description": "<p>Список результатов.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "score.score",
            "description": "<p>Количество очков.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Название игры не задано.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Количество очков не задано.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>Игра не найдена.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "4",
            "description": "<p>Неизвестная ошибка.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Game"
  },
  {
    "type": "get",
    "url": "/game/scoreboard/list/",
    "title": "GameScoreboardList: таблица рекордов игры",
    "name": "GameScoreboardList",
    "group": "Game",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "game",
            "description": "<p>Системное название игры, для которой сохраняются результаты.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>Количество заработанных очков.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "score",
            "description": "<p>Таблица рекордов.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "score.account",
            "description": "<p>Номер абонемента аккаунта, кому принадлежит рекорд.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "score.date",
            "description": "<p>Дата игры.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "score.score",
            "description": "<p>Количество очков.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "self-score",
            "description": "<p>Личный рекорд аккаунта (максимальное количество очков в игре).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "rank",
            "description": "<p>Место в таблице рекордов.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Название игры не задано.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Игра не найдена.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Game"
  },
  {
    "type": "get",
    "url": "/genre/list/",
    "title": "GenreList: список жанров VOD",
    "name": "GenreList",
    "group": "Genre",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "categories",
            "defaultValue": "0",
            "description": "<p>При значении 0 - возвращает обычные жанры, 1 - жанры-категории</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть названия жанров. Должен совпадать со значением из параметра Smarty SMARTY_ADDITIONAL_LANGUAGES.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "genres",
            "description": "<p>Список жанров.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "genres.id",
            "description": "<p>Идентификатор жанра.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "genres.name",
            "description": "<p>Название жанра.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "genres.is_category",
            "description": "<p>Является ли жанр категорией.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "genres.count",
            "description": "<p>Количество фильмов в жанре</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "genres.subgenres_count",
            "description": "<p>Количество различных других жанров у фильмов с данным жанром/категорией</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, действие выполнено успешно.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Genre"
  },
  {
    "type": "get",
    "url": "/noauth/genre/list/",
    "title": "NoAuthGenreList: список жанров (доступен без авторизации)",
    "name": "NoAuthGenreList",
    "group": "Genre",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>API key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "categories",
            "defaultValue": "0",
            "description": "<p>При значении 0 - возвращает обычные жанры, 1 - жанры-категории</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть названия жанров. Должен совпадать со значением из параметра Smarty SMARTY_ADDITIONAL_LANGUAGES.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "genres",
            "description": "<p>Список жанров.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "genres.id",
            "description": "<p>Идентификатор жанра.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "genres.name",
            "description": "<p>Название жанра.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "genres.is_category",
            "description": "<p>Является ли жанр категорией.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "genres.count",
            "description": "<p>Количество фильмов в жанре</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, действие выполнено успешно.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Genre"
  },
  {
    "type": "post",
    "url": "/hbb/activity/",
    "title": "HbbActivity: Запись информации о действиях пользователя, параметры должны отдаваться в body одним списком объектов в JSON.",
    "name": "HbbActivity",
    "group": "Hbb",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>Тип провайдера (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hbb_id",
            "description": "<p>ID провайдера (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "device_uid",
            "description": "<p>UID устройства (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "event_id",
            "description": "<p>ID события (body).</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "log_events",
            "description": "<p>Список событий (body).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Пропущен обязательный параметр.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Пустой или некорректный список событий.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>Данного провайдера не существует.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "4",
            "description": "<p>Провайдер не поддерживает запись лога.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "5",
            "description": "<p>Ошибка передачи событий провайдеру.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Hbb"
  },
  {
    "type": "get",
    "url": "/hbb/channel/event/",
    "title": "HbbChannelEvent: Информация о HBB-событии.",
    "name": "HbbChannelEvent",
    "group": "Hbb",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>Тип провайдера.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event_type",
            "description": "<p>Тип события (зависит от провайдера).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "cid",
            "description": "<p>ID канала в Smarty.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "hbb_id",
            "description": "<p>ID провайдера.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>ID события.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "display_height",
            "description": "<p>Высота экрана.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "display_width",
            "description": "<p>Ширина экрана.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "aspect",
            "defaultValue": "16:9",
            "description": "<p>Соотношение сторон экрана.</p>"
          }
        ],
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "time",
            "description": "<p>Время события (UNIX timestamp, UTC+0).</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Тип события.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Данные события.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Пропущен обязательный параметр.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Не существует канала с таким ID.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>У канала не включен данный провайдер, либо данного провайдера не существует.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "4",
            "description": "<p>Ошибка получения события.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Hbb"
  },
  {
    "type": "get",
    "url": "/hbb/channel/info/",
    "title": "HbbChannelInfo: Информация о HBB-провайдере на канале.",
    "name": "HbbChannelInfo",
    "group": "Hbb",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>Тип провайдера.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "hbb_id",
            "description": "<p>ID провайдера.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "cid",
            "description": "<p>ID канала в Smarty.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "current_channel_time",
            "description": "<p>Время, в течении которого проигрывается данный канал.</p>"
          }
        ],
        "Ответ": [
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>URL IFrame.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>Ключ API.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "events",
            "description": "<p>Список событий.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "events.time",
            "description": "<p>Время события (UNIX timestamp, UTC+0).</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "events.id",
            "description": "<p>ID события.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "events.type",
            "description": "<p>Тип события.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object",
            "optional": false,
            "field": "events.data",
            "description": "<p>Данные события.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Пропущен обязательный параметр.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Не существует канала с таким ID.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>У канала не включен данный провайдер, либо данного провайдера не существует.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "4",
            "description": "<p>Ошибка получения событий.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Hbb"
  },
  {
    "type": "post",
    "url": "/hbb/event/error/",
    "title": "HbbEventError: Запись информации об ошибке.",
    "name": "HbbEventError",
    "group": "Hbb",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>Тип провайдера.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "hbb_id",
            "description": "<p>ID провайдера.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event_id",
            "description": "<p>Идентификатор события.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error_info",
            "description": "<p>Информация об ошибке в формате JSON.</p>"
          }
        ],
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Пропущен обязательный параметр.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Пустой или некорректный список событий.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>Данного провайдера не существует.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "4",
            "description": "<p>Провайдер не поддерживает информации об ошибке.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "5",
            "description": "<p>Ошибка передачи событий провайдеру.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Hbb"
  },
  {
    "type": "get",
    "url": "/health/check/",
    "title": "HealthCheck: информация о текущей нагрузке",
    "name": "HealthCheck",
    "group": "Health",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "check_db_conn",
            "defaultValue": "0",
            "description": "<p>Флаг осуществления проверки соединения в базами данных</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "usage",
            "description": "<p>Значение нагрузки на сервер. Определяется как минимальное из отношений средней загрузки к максимальной средней загрузке и использованной памяти к максимальной использованой памяти. Максимальная средняя загрузка и максимальная использованная память задаются в конфигурационном файле.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "alive",
            "description": "<p>Не превышают ли показатели нагрузки заданные максимальные значения. Если передан check_db_conn=1 учитывается также наличие подключения к базам данных.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "connection_errors",
            "description": "<p>Описание ошибок подключения к базам данных. Будет передан если check_db_conn=1</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "reserved_server_addresses",
            "description": "<p>Список резервных адресов Smarty</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Параметры MAX_LA и MAX_USED_MEM в настройках Smarty не заданны или заданы некорректно.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Health"
  },
  {
    "type": "get",
    "url": "/legal/document/accept/",
    "title": "LegalDocumentAccept: акцепт правового документа",
    "name": "LegalDocumentAccept",
    "group": "LegalDocument",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Идентификатор документа.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>API key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device_uid",
            "defaultValue": "пустое",
            "description": "<p>Уникальный идентификатор устройства. Должен быть передан либо device_uid, либо authkey.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "authkey",
            "defaultValue": "пустое",
            "description": "<p>Авторизационный ключ сессии. Должен быть передан либо device_uid, либо authkey.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, акцепт принят.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Документ не найден.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Акцепт уже был принят ранее.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>Должен быть задан либо device_uid либо действительный authkey.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "LegalDocument"
  },
  {
    "type": "get",
    "url": "/legal/document/detail/",
    "title": "LegalDocumentDetail: просмотр правового документа",
    "name": "LegalDocumentDetail",
    "group": "LegalDocument",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Идентификатор документа.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>API key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device_uid",
            "defaultValue": "пустое",
            "description": "<p>Уникальный идентификатор устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "authkey",
            "defaultValue": "пустое",
            "description": "<p>Авторизационный ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть имя и текст правового документа. Должен совпадать со значением из параметра Smarty SMARTY_ADDITIONAL_LANGUAGES.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Идентификатор документа.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Название документа.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>Версия документа.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "need_acceptance",
            "description": "<p>Флаг, означающий необходимость акцепта документа.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "html_content",
            "description": "<p>Содержимое документа, может содержать HTML.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_accepted",
            "description": "<p>Флаг, означающий наличие акцепта для текущей версии документа для переданного device_uid или аккаунта (вычисляется из authkey).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Документ не найден.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "LegalDocument"
  },
  {
    "type": "get",
    "url": "/legal/document/list/",
    "title": "LegalDocumentList: список правовых документов",
    "name": "LegalDocumentList",
    "group": "LegalDocument",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>API key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device_uid",
            "defaultValue": "пустое",
            "description": "<p>Уникальный идентификатор устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "authkey",
            "defaultValue": "пустое",
            "description": "<p>Авторизационный ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть имена правовых документов. Должен совпадать со значением из параметра Smarty SMARTY_ADDITIONAL_LANGUAGES.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "documents",
            "description": "<p>Список документов.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "documents.id",
            "description": "<p>Идентификатор документа.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "documents.name",
            "description": "<p>Название документа.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "documents.version",
            "description": "<p>Версия документа.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "documents.need_acceptance",
            "description": "<p>Флаг, означающий необходимость акцепта документа.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "documents.is_accepted",
            "description": "<p>Флаг, означающий наличие акцепта для текущей версии документа для переданного device_uid или аккаунта (вычисляется из authkey).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, действие выполнено успешно.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "LegalDocument"
  },
  {
    "type": "get",
    "url": "/noauth/legal/document/detail/",
    "title": "NoAuthLegalDocumentDetail: просмотр правового документа без авторизации",
    "name": "NoAuthLegalDocumentDetail",
    "group": "LegalDocument",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Идентификатор документа.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>API key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device_uid",
            "defaultValue": "пустое",
            "description": "<p>Уникальный идентификатор устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть имя и текст правового документа. Должен совпадать со значением из параметра Smarty SMARTY_ADDITIONAL_LANGUAGES.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Идентификатор документа.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Название документа.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>Версия документа.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "need_acceptance",
            "description": "<p>Флаг, означающий необходимость акцепта документа.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "html_content",
            "description": "<p>Содержимое документа, может содержать HTML.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Документ не найден.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "LegalDocument"
  },
  {
    "type": "get",
    "url": "/noauth/legal/document/list/",
    "title": "NoAuthLegalDocumentList: список правовых документов без авторизации",
    "name": "NoAuthLegalDocumentList",
    "group": "LegalDocument",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>API key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device_uid",
            "defaultValue": "пустое",
            "description": "<p>Уникальный идентификатор устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть имя и текст правового документа. Должен совпадать со значением из параметра Smarty SMARTY_ADDITIONAL_LANGUAGES.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "documents",
            "description": "<p>Список документов.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "documents.id",
            "description": "<p>Идентификатор документа.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "documents.name",
            "description": "<p>Название документа.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "documents.version",
            "description": "<p>Версия документа.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "documents.need_acceptance",
            "description": "<p>Флаг, означающий необходимость акцепта документа.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, действие выполнено успешно.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "LegalDocument"
  },
  {
    "type": "get",
    "url": "/message/delete/",
    "title": "MessageDelete: удаление сообщения",
    "name": "MessageDelete",
    "group": "Message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>Строковый идентификатор сообщения, которое нужно удалить. Можно использовать специальное значение &quot;all&quot; для удаления всех сообщений аккаунта.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Message"
  },
  {
    "type": "get",
    "url": "/message/detail/",
    "title": "MessageDetail: просмотр сообщения",
    "name": "MessageDetail",
    "group": "Message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>Строковый идентификатор сообщения, которое нужно открыть для прочтения.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>Строковый идентификатор сообщения.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>Тема сообщения.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Текст сообщения. Может содержать HTML.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "no_confirmation",
            "description": "<p>Флаг, показывающий, что сообщение может быть автоматически скрыто через неселько секунд после отображения.</p>"
          },
          {
            "group": "Ответ",
            "type": "Date",
            "allowedValues": [
              "\"yyyy-mm-dd hh:mm\""
            ],
            "optional": false,
            "field": "created_at",
            "description": "<p>Дата создания.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "urgent",
            "description": "<p>Флаг, означающий, что сообщение срочное и его необходимо показать сразу.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "was_read",
            "description": "<p>Флаг, означающий, что сообщение уже было прочитано.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Message"
  },
  {
    "type": "get",
    "url": "/message/list/",
    "title": "MessageList: список сообщений",
    "name": "MessageList",
    "group": "Message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "messages",
            "description": "<p>Список сообщений.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "messages.uuid",
            "description": "<p>Строковый идентификатор сообщения.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "messages.subject",
            "description": "<p>Тема сообщения.</p>"
          },
          {
            "group": "Ответ",
            "type": "Date",
            "allowedValues": [
              "\"yyyy-mm-dd hh:mm\""
            ],
            "optional": false,
            "field": "messages.created_at",
            "description": "<p>Дата создания.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "messages.urgent",
            "description": "<p>Флаг, означающий, что сообщение срочное и его необходимо показать сразу.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "messages.was_read",
            "description": "<p>Флаг, означающий, что сообщение уже было прочитано.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Message"
  },
  {
    "type": "get",
    "url": "/notification/create/",
    "title": "NotificationCreate: создание напоминания",
    "name": "NotificationCreate",
    "group": "Notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cid",
            "description": "<p>Идентификатор канала.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pid",
            "description": "<p>Идентификатор передачи, для которой устанавливается напоминание.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "timeshift_offset",
            "defaultValue": "0",
            "description": "<p>Сдвиг времени для напоминания (данный сдвиг будет возвращен для напоминания в методе NotificationList в случае, если для напоминания не будет найден иной, установленный стриминг-сервисом, временной сдвиг)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, напоминание сохранено успешно.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Notification"
  },
  {
    "type": "get",
    "url": "/notification/delete/",
    "title": "NotificationDelete: удаление напоминания",
    "name": "NotificationDelete",
    "group": "Notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pid",
            "description": "<p>Идентификатор передачи, для которой удаляется напоминание. При значении 'all' удаляет все напоминания для аккаунта</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, напоминание сохранено успешно.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Notification"
  },
  {
    "type": "get",
    "url": "/notification/list/",
    "title": "NotificationList: список установленных напоминаний",
    "name": "NotificationList",
    "group": "Notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "icon_width",
            "description": "<p>Предпочитаемая ширина иконки канала.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "icon_height",
            "description": "<p>Предпочитаемая высота иконки канала.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть названия каналов и EPG. Должен совпадать со значением из параметра Smarty SMARTY_ADDITIONAL_LANGUAGES.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "notifications",
            "description": "<p>Список напоминаний.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "notifications.id",
            "description": "<p>Идентификатор канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "notifications.name",
            "description": "<p>Название канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "notifications.url",
            "description": "<p>URL потока канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "notifications.icon",
            "description": "<p>URL иконки канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "notifications.category_id",
            "description": "<p>Идентификатор категории канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "notifications.timeshift_offset",
            "description": "<p>Сдвиг вещания.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "notifications.has_record",
            "description": "<p>Включена ли запись на канале.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "notifications.max_archive_duration",
            "description": "<p>Глубина записи в днях.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "notifications.program_begin_time",
            "description": "<p>Время начала передачи в Unix Timestamp (UTC+0).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "notifications.program_end_time",
            "description": "<p>Время окончания передачи в Unix Timestamp (UTC+0).</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "notifications.program_name",
            "description": "<p>Название передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "notifications.program_description",
            "description": "<p>Описание передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "notifications.program_category",
            "description": "<p>Название категории передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "notifications.program_preview_url",
            "description": "<p>URL картинки передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "notifications.program_id",
            "description": "<p>Идентификатор передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "notifications.program_rating",
            "description": "<p>Возрастной рейтинг.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "notifications.program_meta",
            "description": "<p>Дополнительная информация о передаче в формате JSON.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "notifications.program_meta.extra_name",
            "description": "<p>Подзаголовок.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "notifications.program_meta.extra_description",
            "description": "<p>Дополнительное описание.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "notifications.program_meta.genres",
            "description": "<p>Список жанров как они представлены в источнике EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "notifications.program_meta.participants",
            "description": "<p>Список участников, принимавших участие в производстве.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "notifications.program_meta.participants.actor",
            "description": "<p>Список актеров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "notifications.program_meta.participants.composer",
            "description": "<p>Список композиторов.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "notifications.program_meta.participants.director",
            "description": "<p>Список режиссёров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "notifications.program_meta.participants.producer",
            "description": "<p>Список продюсеров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "notifications.program_meta.countries",
            "description": "<p>Список стран, участвовавших в производстве.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "notifications.program_meta.productions",
            "description": "<p>Список студий занятых производством.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "notifications.program_meta.year",
            "description": "<p>Год выпуска. Для сериалов указывается два года в формате YYYY-YYYY.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "notifications.program_meta.previews",
            "description": "<p>Список ссылок на изображения превью.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "notifications.program_meta.tags",
            "description": "<p>Список тегов как они представлены в источнике EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Boolean",
            "optional": false,
            "field": "notifications.program_meta.live",
            "description": "<p>Прямой эфир.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "notifications.program_meta.sport_type",
            "description": "<p>Для спортивных передач: название спорта.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "notifications.program_meta.championship",
            "description": "<p>Для спортивных передач: название чемпионата.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "notifications.program_meta.sport_rival1",
            "description": "<p>Для спортивных передач: первая команда в чемпионате.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "notifications.program_meta.sport_rival2",
            "description": "<p>Для спортивных передач: вторая команда в чемпионате.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "notifications.program_meta.kinopoisk",
            "description": "<p>Рейтинг кинопоиска.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "notifications.program_meta.imdb",
            "description": "<p>Рейтинг IMDB.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Notification"
  },
  {
    "type": "post",
    "url": "/payment/saved_card/pay/",
    "title": "PaymentSavedCardPay: оплата сохранённой карты",
    "name": "PayBySavedCard",
    "group": "Payment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "authkey",
            "description": "<p>Ключ сессии. Необязателен, если ключ присутствует в Cookies.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "merchant_type",
            "defaultValue": "пустое",
            "description": "<p>Тип мерчанта.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "card_id",
            "description": "<p>Идентификатор карты.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "amount",
            "description": "<p>Сумма платежа.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "error_message",
            "description": "<p>Текст ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Неизвестная ошибка.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Внутренняя ошибка платежного шлюза.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>Внешнаяя ошибка платежного шлюза (Пример - сетевая ошибка).</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "4",
            "description": "<p>Неверные параметры запроса.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "5",
            "description": "<p>Ошибка платежного инструмента.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "6",
            "description": "<p>Подозрение на мошеничество.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "7",
            "description": "<p>Недостаточно средств.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "8",
            "description": "<p>Лимит операции.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "9",
            "description": "<p>Ошибка авторизации.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Payment"
  },
  {
    "type": "post",
    "url": "/payment/create/",
    "title": "PaymentCreate: создание платежа для абонента",
    "name": "PaymentCreate",
    "group": "Payment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "authkey",
            "description": "<p>Ключ сессии. Необязателен, если ключ присутствует в Cookies.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "template",
            "defaultValue": "пустое",
            "description": "<p>Имя шаблона (если есть поддержка шлюзом).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "merchant_type",
            "defaultValue": "пустое",
            "description": "<p>Тип мерчанта.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>Cумма платежа. Передается через POST</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "payments.payment_id",
            "description": "<p>Внешний ID платежа (ID, используемый в шлюзе).</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "payments.transaction_id",
            "description": "<p>Внутренний ID платежа (ID, используемый в Smarty).</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "payments.session_id",
            "description": "<p>ID платёжной сессии.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "error_message",
            "description": "<p>Текст ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Неизвестная ошибка.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Внутренняя ошибка платежного шлюза.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>Внешнаяя ошибка платежного шлюза (Пример - сетевая ошибка).</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "4",
            "description": "<p>Неверные параметры запроса.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "5",
            "description": "<p>Ошибка платежного инструмента.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "6",
            "description": "<p>Подозрение на мошеничество.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "7",
            "description": "<p>Недостаточно средств.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "8",
            "description": "<p>Лимит операции.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "9",
            "description": "<p>Ошибка авторизации.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Payment"
  },
  {
    "type": "get",
    "url": "/payment/list/",
    "title": "PaymentList: список финансовых операций абонента",
    "name": "PaymentList",
    "group": "Payment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-100",
            "optional": true,
            "field": "limit",
            "defaultValue": "100",
            "description": "<p>Ограничение на количество операций на одну страницу выборки. Максимальное значение 100.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Номер страницы выборки.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "payments",
            "description": "<p>Список платежей и списаний.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "payments.comment",
            "description": "<p>Комментарий к транзакции.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "payments.datetime",
            "description": "<p>Дата совершения.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "payments.amount",
            "description": "<p>Сумма транзакции.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Payment"
  },
  {
    "type": "post",
    "url": "/payment/merchant_url/",
    "title": "PaymentMerchantUrl: запрос URL страницы платежа мерчанта",
    "name": "PaymentMerchantUrl",
    "group": "Payment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "authkey",
            "description": "<p>Ключ сессии. Необязателен, если ключ присутствует в Cookies.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "merchant_type",
            "defaultValue": "пустое",
            "description": "<p>Тип мерчанта.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>Сумма платежа.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>URL мерчанта, пустой, если перенаправление не требуется и нужно использовать внутреннюю форму приложения. Доступные параметры: %transaction_id%,%success_url%,%fail_url%.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "merchant_name",
            "description": "<p>имя мерчтанта.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "error_message",
            "description": "<p>Текст ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Неизвестная ошибка.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Ошибка мерчанта.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Payment"
  },
  {
    "type": "post",
    "url": "/payment/process/",
    "title": "PaymentProcess: передача платежных данных шлюзу",
    "name": "PaymentProcess",
    "group": "Payment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "authkey",
            "description": "<p>Ключ сессии. Необязателен, если ключ присутствует в Cookies.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "payment_id",
            "description": "<p>Внешний ID платежа (ID, используемый в шлюзе).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "transaction_id",
            "description": "<p>Внутренний ID платежа (ID, используемый в Smarty).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "merchant_type",
            "defaultValue": "пустое",
            "description": "<p>Тип мерчанта.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "card_number",
            "description": "<p>номер карты. Передается через POST.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "card_holder",
            "description": "<p>имя владельца карты. Передается через POST.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "card_expire",
            "description": "<p>Срок действия карты. Передается через POST.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "card_cvv",
            "description": "<p>cvv карты. Передается через POST.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "payments.payment_id",
            "description": "<p>Ext id транзакции.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object",
            "optional": false,
            "field": "form_data",
            "description": "<p>Форма платёжного шлюза, пустой объект, если не используется.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "error_message",
            "description": "<p>Текст ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Неизвестная ошибка.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Внутренняя ошибка платежного шлюза.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>Внешнаяя ошибка платежного шлюза (Пример - сетевая ошибка).</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "4",
            "description": "<p>Неверные параметры запроса.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "5",
            "description": "<p>Ошибка платежного инструмента.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "6",
            "description": "<p>Подозрение на мошеничество.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "7",
            "description": "<p>Недостаточно средств.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "8",
            "description": "<p>Лимит операции.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "9",
            "description": "<p>Ошибка авторизации.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Payment"
  },
  {
    "type": "post",
    "url": "/payment/saved_card/delete/",
    "title": "PaymentSavedCardDelete: удаление сохраненной карты",
    "name": "PaymentSavedCardDelete",
    "group": "Payment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "card_id",
            "description": "<p>Идентификатор карты.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "authkey",
            "description": "<p>Ключ сессии. Необязателен, если ключ присутствует в Cookies.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "merchant_type",
            "defaultValue": "пустое",
            "description": "<p>Тип мерчанта.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Ошибка в параметрах.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Ошибка мерчанта.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>Мерчант не поддерживает данный функционал.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "4",
            "description": "<p>Карта не найдена.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Payment"
  },
  {
    "type": "post",
    "url": "/payment/saved_card/list/",
    "title": "PaymentSavedCardList: запрос списка сохранённых пользователем карт",
    "name": "PaymentSavedCardList",
    "group": "Payment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "authkey",
            "description": "<p>Ключ сессии. Необязателен, если ключ присутствует в Cookies.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "merchant_type",
            "defaultValue": "пустое",
            "description": "<p>Тип мерчанта.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "cards",
            "description": "<p>Список карт.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "cards.id",
            "description": "<p>Идентификатор карты.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "cards.number",
            "description": "<p>Номер карты.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "cards.expired",
            "description": "<p>Флаг, установленный если карта уже истекла.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Неизвестная ошибка.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Ошибка мерчанта.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>Мерчант не поддерживает данный функционал.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Payment"
  },
  {
    "type": "get",
    "url": "/noauth/portal/client/channel/list/",
    "title": "NoAuthPortalClientChannelList: список телеканалов (доступен без авторизации)",
    "name": "NoAuthPortalClientChannelList",
    "group": "Portal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>API key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tariff_id",
            "description": "<p>Идентификатор тарифа.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "channels",
            "description": "<p>Список каналов.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.name",
            "description": "<p>Название канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.icon",
            "description": "<p>URL-адрес иконки канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "channels.category",
            "description": "<p>Идентификатор категории канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Параметр tariff_id не передан или задан некорректно.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Portal"
  },
  {
    "type": "get",
    "url": "/noauth/portal/client/tariff/list/",
    "title": "NoAuthPortalClientTariffList: список тарифных пакетов (доступен без авторизации)",
    "name": "NoAuthPortalClientTariffList",
    "group": "Portal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>API key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "tariffs",
            "description": "<p>Список тарифных пакетов.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs.id",
            "description": "<p>Идентификатор тарифа.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "tariffs.name",
            "description": "<p>Название тарифа.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "tariffs.description",
            "description": "<p>Описание тарифа.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs.period",
            "description": "<p>Период тарифа.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs.channels_count",
            "description": "<p>Количество каналов, доступных по тарифу.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs.price",
            "description": "<p>Стоимость тарифа.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs.basic_tariff_priority",
            "description": "<p>Приоритет базового пакета.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Portal"
  },
  {
    "type": "get",
    "url": "/portal/client/detail/",
    "title": "PortalClientDetail: информация от дочернем Client ID",
    "name": "PortalClientDetail",
    "group": "Portal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>ID дочернего клиента. Должен быть передан или id или uid.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "uid",
            "description": "<p>UID дочернего клиента. Должен быть передан или id или uid.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>API key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустой",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Название оператора.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "logo_url",
            "description": "<p>URL логотипа оператора.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>Ключ API оператора.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "api_url",
            "description": "<p>URL API для оператора, если поле пустое -- необходимо использовать этот же URL.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "external_client_id",
            "description": "<p>Внешний client ID оператора.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "redirect_to_portal_url",
            "description": "<p>Адрес портала, на который необходимо сделать редирект приложения в случае, если поле заполнено.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>Кодовый номер для быстрого поиска оператора в режиме мета-виджета.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Client ID не найден или не верный api_key.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Не передан параметр id или uid.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>Дочерний Client ID не найден.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Portal"
  },
  {
    "type": "get",
    "url": "/portal/client/list/",
    "title": "PortalClientList: список дочерних Client ID",
    "name": "PortalClientList",
    "group": "Portal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>API key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустой",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "clients",
            "description": "<p>Список дочерних Client ID.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "clients.id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "clients.name",
            "description": "<p>Название оператора.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "clients.logo_url",
            "description": "<p>URL логотипа оператора.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "clients.api_key",
            "description": "<p>Ключ API оператора.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "clients.api_url",
            "description": "<p>URL API для оператора, если поле пустое -- необходимо использовать этот же URL.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "clients.external_client_id",
            "description": "<p>Внешний client ID оператора.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "clients.redirect_to_portal_url",
            "description": "<p>Адрес портала, на который необходимо сделать редирект приложения в случае, если поле заполнено.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "clients.uid",
            "description": "<p>Кодовый номер для быстрого поиска оператора в режиме мета-виджета.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Client ID не найден или не верный api_key.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Portal"
  },
  {
    "type": "get",
    "url": "/portal/client/search/",
    "title": "PortalClientSearch: поиск дочерних Client ID",
    "name": "PortalClientSearch",
    "group": "Portal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>Строка, по которой необходимо искать дочерние Client ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>API key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "clients",
            "description": "<p>Список дочерних Client ID.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "clients.id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "clients.name",
            "description": "<p>Название оператора.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "clients.logo_url",
            "description": "<p>URL логотипа оператора.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "clients.api_key",
            "description": "<p>Ключ API оператора.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "clients.api_url",
            "description": "<p>URL API для оператора, если поле пустое -- необходимо использовать этот же URL.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "clients.external_client_id",
            "description": "<p>Внешний client ID оператора.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "clients.redirect_to_portal_url",
            "description": "<p>Адрес портала, на который необходимо сделать редирект приложения в случае, если поле заполнено.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "clients.uid",
            "description": "<p>Кодовый номер для быстрого поиска оператора в режиме мета-виджета.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Client ID не найден или не верный api_key.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Не передан параметр search.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Portal"
  },
  {
    "type": "get",
    "url": "/portal/settings/list/",
    "title": "PortalSettingsList: получение настроек портала",
    "name": "PortalSettingsList",
    "group": "Portal",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>API key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device_uid",
            "defaultValue": "пустой",
            "description": "<p>Уникальный идентификатор устройства, например, MAC-адрес.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "show_tvchannels",
            "description": "<p>Показывать ли раздел &quot;Телеканалы&quot;.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "show_categorizedtv",
            "description": "<p>Показывать ли раздел &quot;ТВ по интересам&quot;.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "show_archive",
            "description": "<p>Показывать ли раздел &quot;Архив&quot;.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "show_videocatalog",
            "description": "<p>Показывать ли раздел &quot;Видеотека&quot;.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "show_cctv",
            "description": "<p>Показывать ли раздел &quot;Камеры&quot;.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "show_radio",
            "description": "<p>Показывать ли раздел &quot;Радио&quot;.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "show_games",
            "description": "<p>Показывать ли раздел &quot;Игры&quot;.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "show_balance",
            "description": "<p>Показывать ли раздел &quot;Баланс&quot;.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "show_payment",
            "description": "<p>Показывать ли раздел &quot;Оплата&quot;.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "show_info",
            "description": "<p>Показывать ли раздел &quot;Информация&quot;.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "show_settings",
            "description": "<p>Показывать ли раздел &quot;Настройки&quot;.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "show_exit",
            "description": "<p>Показывать ли раздел &quot;Выход&quot;.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "template",
            "description": "<p>Название шаблона интерфейса из настроек устройства.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "custom_api_url",
            "description": "<p>Переопределение адреса API.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "custom_css_url",
            "description": "<p>URL на внешний CSS-файл для возможности переопределения стиля интерфейса, либо пустая строка.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "client_logo_url",
            "description": "<p>URL на логотип оператора для использования в главном меню, либо пустая строка.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "client_logo_login_url",
            "description": "<p>URL на логотип оператора для использования на экране авторизации, либо пустая строка.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "client_logo_loading_url",
            "description": "<p>URL на логотип оператора для использования на экране загрузки портала, либо пустая строка.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "login_text",
            "description": "<p>Текст приветствия, отображаемый на экране авторизации.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "reports_enabled",
            "description": "<p>Необходимо ли отправлять данные телесмотрения в модуль viewstats в Smarty.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "data_autorefresh_enabled",
            "description": "<p>Необходимо ли автоматически обновлять данные (например, список телеканалов) без перезагрузки устройства.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "standby_timer",
            "description": "<p>Количество минут для Stand-By таймера. При неактивности в течение данного времени требуется перевести устройство в режим ожидания и отключить от видеотрансляций.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "pvr_standby_timer",
            "description": "<p>Количество минут для таймера непрерывного просмотра PVR. При неактивности в течение данного времени во время просмотра PVR требуется перевести устройство в режим просмотра Live TV соответствующего телеканала.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "has_child_clients",
            "description": "<p>Данный Client ID имеет дочерние Client ID (режим мета-виджета с выбором провайдера).</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "redirect_to_portal_url",
            "description": "<p>Адрес портала, на который необходимо сделать редирект приложения в случае, если поле заполнено.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "backend_version",
            "description": "<p>Номер версии сервера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "allowedValues": [
              "password",
              "abonement",
              "device_uid",
              "device_uid_wo_fallback"
            ],
            "optional": false,
            "field": "auth_mode",
            "description": "<p>Предпочитаемый способ авторизации приложения, по умолчанию использовать значение портала (пустая строка).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "mediascope_enabled",
            "description": "<p>Необходимо ли отправлять данные телесмотрения на сервер Mediascope (если включено также в настройках конкретного телеканала).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "tvzavr_stat_enabled",
            "description": "<p>Необходимо ли отправлять данные просмотров на сервер TVZavr для контента TVZavr (если настроена соответствующая интеграция).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "mvision_stat_enabled",
            "description": "<p>Необходимо ли отправлять данные телеметрии на сервер Smarty MVision.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "mvision_server_url",
            "description": "<p>URL внешнего сервера MVision.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "client_uid",
            "description": "<p>UID Клиента. Используется для идентификации оператора во внешних сервисах при настройке соответствующих интеграций, например, для интеграции с Teletarget.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "use_new_billing_logic",
            "description": "<p>Флаг, устанавливающий, что у оператора используется новая логика биллига (на подписках).</p>"
          },
          {
            "group": "Ответ",
            "type": "Object",
            "optional": false,
            "field": "portal_config",
            "description": "<p>Конфигурация портала.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "available_country_phone_codes",
            "description": "<p>Список стран из которых доступна регистрация по телефону.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "available_country_phone_codes.country_name",
            "description": "<p>Название страны.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "available_country_phone_codes.region_code",
            "description": "<p>Код региона.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "available_country_phone_codes.country_code",
            "description": "<p>Телефонный код страны.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Client ID не найден.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Данный тип устройства для данного Client ID не добавлен.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Portal"
  },
  {
    "type": "get",
    "url": "/program/category/channel/list/",
    "title": "ProgramCategoryChannelList: список телеканалов с передачами в заданной категории \"ТВ по интересам\"",
    "name": "ProgramCategoryChannelList",
    "group": "ProgramCategory",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "category_id",
            "description": "<p>Идентификатор категории передач, если не передан - возвращаются все каналы.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "next",
            "defaultValue": "0",
            "description": "<p>При значении 1 будут возвращены каналы с распределением по категориям по следующим передачам, а не по текущим.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "icon_width",
            "description": "<p>Предпочитаемая ширина иконки канала.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "icon_height",
            "description": "<p>Предпочитаемая высота иконки канала.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "compact",
            "defaultValue": "0",
            "description": "<p>При значении 1 из ответа сервера будут исключены дополнительные поля, например, информация о следующей передаче.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "reject_multicast",
            "defaultValue": "0",
            "description": "<p>Флаг, если передано значение 1, то ссылки на мультикаст не будут возвращены.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "consider_program_category",
            "defaultValue": "1",
            "description": "<p>Флаг, если передано значение 0, то категория текущей (следующей) передачи не учитывается при формировании списка каналов. Доступно только если параметр конфигурации TVMW_CONSIDER_PROGRAM_CATEGORY имеет значение True.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "consider_epg_channel_category",
            "defaultValue": "1",
            "description": "<p>Флаг, если передано значение 0, то при формировании списка каналов учитывается только категория текущей (следующей) передачи. Доступно только если параметр конфигурации TVMW_CONSIDER_PROGRAM_CATEGORY имеет значение True.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть названия каналов и EPG. Должен совпадать со значением из параметра Smarty SMARTY_ADDITIONAL_LANGUAGES.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "programs",
            "description": "<p>Список каналов/передач.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.id",
            "description": "<p>Идентификатор канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.name",
            "description": "<p>Название канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.url",
            "description": "<p>URL потока канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.icon",
            "description": "<p>URL иконки канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.category_id",
            "description": "<p>Идентификатор категории канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.timeshift_offset",
            "description": "<p>Сдвиг вещания.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.channel_sort",
            "description": "<p>Номер канала в списке каналов (для сортировки).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "programs.has_record",
            "description": "<p>Включена ли запись на канале.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.max_archive_duration",
            "description": "<p>Глубина записи в днях.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "programs.is_hidden",
            "description": "<p>Канал скрыт через настройки абонента.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "programs.is_favorited",
            "description": "<p>Канал находится в избранном списке абонента.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "programs.is_parent_control",
            "description": "<p>На канале установлен родительский контроль.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "programs.has_subscription",
            "description": "<p>На канал имеется подписка.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "programs.show_in_all",
            "description": "<p>Отображать канал в категории Все.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.option1",
            "description": "<p>Значение параметра канала Option 1.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.option2",
            "description": "<p>Значение параметра канала Option 2.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.option3",
            "description": "<p>Значение параметра канала Option 3.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "programs.hbb",
            "description": "<p>Список доступных HbbTV-провайдеров.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.hbb.type",
            "description": "<p>Тип провайдера.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.hbb.id",
            "description": "<p>ID провайдера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.hbb.api_key",
            "description": "<p>Ключ API.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.hbb.channel_id",
            "description": "<p>ID канала у провайдера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.telemeter",
            "description": "<p>Телеизмеритель. Если указано, а также указаны параметры измерителя в PortalSettingsList, то приложению необходимо отправлять данные статистики просмотра канала на сервер измерителя.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.telemeter_account_name",
            "description": "<p>AccountName на сервере измерителя.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.telemeter_tmsec_name",
            "description": "<p>TmsecName на сервере измерителя.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.telemeter_cat_id",
            "description": "<p>Категория контента на сервере измерителя.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.telemeter_vc_id",
            "description": "<p>Идентификатор контента на сервере измерителя.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.telemeter_vc_version",
            "description": "<p>Версия контента на сервере измерителя.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2",
              "3"
            ],
            "optional": false,
            "field": "programs.aspect_ratio",
            "description": "<p>Соотношение сторон данной передачи. 0 - Авто. 1 - 16:9. 2 - 4:3. 3 - На весь экран.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "channels.lcn_number",
            "description": "<p>Логический номер канала (LCN).</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "programs.additional_categories",
            "description": "<p>Список доп. категорий канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.additional_categories.id",
            "description": "<p>Идентификатор доп. категории.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.additional_categories.name",
            "description": "<p>Название доп. категории.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.program_category_id",
            "description": "<p>Идентификатор категории передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.program_begin_time",
            "description": "<p>Время начала передачи в Unix Timestamp (UTC+0).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.program_end_time",
            "description": "<p>Время окончания передачи в Unix Timestamp (UTC+0).</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.program_name",
            "description": "<p>Название передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.program_description",
            "description": "<p>Описание передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.program_category",
            "description": "<p>Название категории передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.program_preview_url",
            "description": "<p>URL картинки передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.program_id",
            "description": "<p>Идентификатор передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.program_rating",
            "description": "<p>Возрастной рейтинг.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.program_meta",
            "description": "<p>Дополнительная информация о передаче в формате JSON.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.program_meta.extra_name",
            "description": "<p>Подзаголовок.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.program_meta.extra_description",
            "description": "<p>Дополнительное описание.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "programs.program_meta.genres",
            "description": "<p>Список жанров как они представлены в источнике EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "programs.program_meta.participants",
            "description": "<p>Список участников, принимавших участие в производстве.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "programs.program_meta.participants.actor",
            "description": "<p>Список актеров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "programs.program_meta.participants.composer",
            "description": "<p>Список композиторов.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "programs.program_meta.participants.director",
            "description": "<p>Список режиссёров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "programs.program_meta.participants.producer",
            "description": "<p>Список продюсеров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "programs.program_meta.countries",
            "description": "<p>Список стран, участвовавших в производстве.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "programs.program_meta.productions",
            "description": "<p>Список студий занятых производством.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.program_meta.year",
            "description": "<p>Год выпуска. Для сериалов указывается два года в формате YYYY-YYYY.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "programs.program_meta.previews",
            "description": "<p>Список ссылок на изображения превью.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "programs.program_meta.tags",
            "description": "<p>Список тегов как они представлены в источнике EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Boolean",
            "optional": false,
            "field": "programs.program_meta.live",
            "description": "<p>Прямой эфир.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.program_meta.sport_type",
            "description": "<p>Для спортивных передач: название спорта.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.program_meta.championship",
            "description": "<p>Для спортивных передач: название чемпионата.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.program_meta.sport_rival1",
            "description": "<p>Для спортивных передач: первая команда в чемпионате.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.program_meta.sport_rival2",
            "description": "<p>Для спортивных передач: вторая команда в чемпионате.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.program_meta.kinopoisk",
            "description": "<p>Рейтинг кинопоиска.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.program_meta.imdb",
            "description": "<p>Рейтинг IMDB.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "programs.program_genres",
            "description": "<p>Список жанров передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.program_genres.genre_id",
            "description": "<p>Идентификатор жанра.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.program_genres.genre_name",
            "description": "<p>Название жанра.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.next_program_category_id",
            "description": "<p>Идентификатор категории следующей передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.next_program_begin_time",
            "description": "<p>Время начала следующей передачи в Unix Timestamp (UTC+0).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.next_program_end_time",
            "description": "<p>Время окончания следующей передачи в Unix Timestamp (UTC+0).</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.next_program_name",
            "description": "<p>Название следующей передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.next_program_description",
            "description": "<p>Описание следующей передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.next_program_category",
            "description": "<p>Название категории следующей передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.next_program_preview_url",
            "description": "<p>URL картинки следующей передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.next_program_id",
            "description": "<p>Идентификатор следующей передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.next_program_rating",
            "description": "<p>Возрастной рейтинг следующей передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.next_program_meta",
            "description": "<p>Дополнительная информация о следующей передаче в формате JSON.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.next_program_meta.extra_name",
            "description": "<p>Подзаголовок.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.next_program_meta.extra_description",
            "description": "<p>Дополнительное описание.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "programs.next_program_meta.genres",
            "description": "<p>Список жанров как они представлены в источнике EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "programs.next_program_meta.participants",
            "description": "<p>Список участников, принимавших участие в производстве.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "programs.next_program_meta.participants.actor",
            "description": "<p>Список актеров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "programs.next_program_meta.participants.composer",
            "description": "<p>Список композиторов.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "programs.next_program_meta.participants.director",
            "description": "<p>Список режиссёров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "programs.next_program_meta.participants.producer",
            "description": "<p>Список продюсеров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "programs.next_program_meta.countries",
            "description": "<p>Список стран, участвовавших в производстве.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "programs.next_program_meta.productions",
            "description": "<p>Список студий занятых производством.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.next_program_meta.year",
            "description": "<p>Год выпуска. Для сериалов указывается два года в формате YYYY-YYYY.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "programs.next_program_meta.previews",
            "description": "<p>Список ссылок на изображения превью.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "programs.next_program_meta.tags",
            "description": "<p>Список тегов как они представлены в источнике EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Boolean",
            "optional": false,
            "field": "programs.next_program_meta.live",
            "description": "<p>Прямой эфир.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.next_program_meta.sport_type",
            "description": "<p>Для спортивных передач: название спорта.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.next_program_meta.championship",
            "description": "<p>Для спортивных передач: название чемпионата.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.next_program_meta.sport_rival1",
            "description": "<p>Для спортивных передач: первая команда в чемпионате.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.next_program_meta.sport_rival2",
            "description": "<p>Для спортивных передач: вторая команда в чемпионате.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.next_program_meta.kinopoisk",
            "description": "<p>Рейтинг кинопоиска.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.next_program_meta.imdb",
            "description": "<p>Рейтинг IMDB.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "programs.next_program_genres",
            "description": "<p>Список жанров следующей передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.next_program_genres.genre_id",
            "description": "<p>Идентификатор жанра.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.next_program_genres.genre_name",
            "description": "<p>Название жанра.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.pause_live_tv_shift",
            "description": "<p>Временной сдвиг для функции Pause Live TV.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "ProgramCategory"
  },
  {
    "type": "get",
    "url": "/program/category/list/",
    "title": "ProgramCategoryList: список категорий передач \"ТВ по интересам\"",
    "name": "ProgramCategoryList",
    "group": "ProgramCategory",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть названия категорий. Должен совпадать со значением из параметра Smarty SMARTY_ADDITIONAL_LANGUAGES.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "only_records_categories",
            "defaultValue": "0",
            "description": "<p>Вернуть только категории с с архивными записями.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "categories",
            "description": "<p>Список категорий.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "categories.id",
            "description": "<p>Идентификатор категории.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "categories.name",
            "description": "<p>Название категории.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "categories.icon_type",
            "description": "<p>Название типа иконки для категории.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "ProgramCategory"
  },
  {
    "type": "get",
    "url": "/program/category/record/list/",
    "title": "ProgramCategoryRecordList: список подборок в заданной категории \"ТВ по интересам\"",
    "name": "ProgramCategoryRecordList",
    "group": "ProgramCategory",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "category_id",
            "description": "<p>Идентификатор категории передач, если не передан - возвращаются все подборки.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "icon_width",
            "description": "<p>Предпочитаемая ширина иконки канала.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "icon_height",
            "description": "<p>Предпочитаемая высота иконки канала.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть названия каналов и EPG. Должен совпадать со значением из параметра Smarty SMARTY_ADDITIONAL_LANGUAGES.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "selections",
            "description": "<p>Список подборок.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "selections.selection_id",
            "description": "<p>ID подборки.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "selections.short_name",
            "description": "<p>Краткое название передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "selections.category",
            "description": "<p>Название категории EPG текущей передачи EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "selections.preview",
            "description": "<p>URL картинки передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "selections.rating",
            "description": "<p>Возрастной рейтинг.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object",
            "optional": false,
            "field": "selections.channel",
            "description": "<p>Информация о канале.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "selections.channel.id",
            "description": "<p>ID канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "selections.channel.name",
            "description": "<p>Название канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "selections.channel.icon",
            "description": "<p>URL иконки канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object",
            "optional": true,
            "field": "selections.record",
            "description": "<p>Информация о записи, если она единственная в подборке.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "selections.record.program_id",
            "description": "<p>Идентификатор передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "selections.record.begin_time",
            "description": "<p>Время начала передачи в Unix Timestamp (UTC+0).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "selections.record.end_time",
            "description": "<p>Время окончания передачи в Unix Timestamp (UTC+0).</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "selections.record.name",
            "description": "<p>Название передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "selections.record.description",
            "description": "<p>Описание передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "selections.record.meta",
            "description": "<p>Дополнительная информация о передаче в формате JSON.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "selections.record.url",
            "description": "<p>URL потока архивной записи передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "selections.record.position",
            "description": "<p>Последняя сохраненная позиция просмотра в секундах от начала передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "ProgramCategory"
  },
  {
    "type": "get",
    "url": "/program/genre/list/",
    "title": "ProgramGenreList: список жанров телепрограмм",
    "name": "ProgramGenreList",
    "group": "ProgramGenre",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть названия жанров. Должен совпадать со значением из параметра Smarty SMARTY_ADDITIONAL_LANGUAGES.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "genres",
            "description": "<p>Список жанров EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "genres.id",
            "description": "<p>Идентификатор жанра EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "genres.name",
            "description": "<p>Название жанра EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "ProgramGenre"
  },
  {
    "type": "get",
    "url": "/program/detail/",
    "title": "ProgramDetail: подробная информация о передаче",
    "name": "ProgramDetail",
    "group": "Program",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pid",
            "description": "<p>Идентификатор передачи.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cid",
            "defaultValue": "0",
            "description": "<p>Идентификатор канала (необходим для получения корректного значения поля has_record).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть название и описание фильмов. Должен совпадать со значением из параметра Smarty SMARTY_ADDITIONAL_LANGUAGES.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Идентификатор передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "begin_time",
            "description": "<p>Время начала передачи в Unix Timestamp (UTC+0).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "end_time",
            "description": "<p>Время окончания передачи в Unix Timestamp (UTC+0).</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Название передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Описание передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "short_name",
            "description": "<p>Краткое название передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Название категории передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "preview",
            "description": "<p>URL картинки передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>Возрастной рейтинг.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "meta",
            "description": "<p>Дополнительная информация о передаче в формате JSON.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>URL потока архивной записи передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "has_record",
            "description": "<p>Существует ли запись передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "position",
            "description": "<p>Последняя сохраненная позиция просмотра в секундах от начала передачи.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Program"
  },
  {
    "type": "get",
    "url": "/program/list/",
    "title": "ProgramList: список телепередач в заданный промежуток времени",
    "name": "ProgramList",
    "group": "Program",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cid",
            "description": "<p>Идентификатор канала.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "is_camera",
            "defaultValue": "0",
            "description": "<p>Является ли запрашиваемый объект камерой.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "time_from",
            "description": "<p>Дата начала диапазона выборки в формате Unix Timestamp UTC+0.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "time_to",
            "description": "<p>Дата конца диапазона выборки в формате Unix Timestamp UTC+0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "dd.mm.YYYY"
            ],
            "optional": true,
            "field": "date",
            "description": "<p>День, за который запрашивается телепрограмма. Необходимо использовать либо поле date, либо поля time_from и time_to.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть названия и описания передач. Должен совпадать со значением из параметра Smarty SMARTY_ADDITIONAL_LANGUAGES.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "programs",
            "description": "<p>Список передач.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.id",
            "description": "<p>Идентификатор передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.begin_time",
            "description": "<p>Время начала передачи в Unix Timestamp (UTC+0).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.end_time",
            "description": "<p>Время окончания передачи в Unix Timestamp (UTC+0).</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.name",
            "description": "<p>Название передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.short_name",
            "description": "<p>Краткое название передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.description",
            "description": "<p>Описание передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.category",
            "description": "<p>Название категории передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.preview",
            "description": "<p>URL картинки передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.rating",
            "description": "<p>Возрастной рейтинг.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.meta",
            "description": "<p>Дополнительная информация о передаче в формате JSON.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "programs.url",
            "description": "<p>URL потока архивной записи передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "programs.has_record",
            "description": "<p>Существует ли запись передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "programs.position",
            "description": "<p>Последняя сохраненная позиция просмотра в секундах от начала передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Program"
  },
  {
    "type": "get",
    "url": "/program/list/search/",
    "title": "ProgramListSearch: поиск телепередач",
    "name": "ProgramListSearch",
    "group": "Program",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "5..",
            "optional": false,
            "field": "search",
            "description": "<p>Строка поиска. Поиск осуществляется по названию передачи в пределах количества дней, заданного константой TVMIDDLEWARE_PROGRAM_LIST_SEARCH_DAYS в настройках Smarty.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "icon_width",
            "description": "<p>Предпочитаемая ширина иконки канала.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "icon_height",
            "description": "<p>Предпочитаемая высота иконки канала.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "skip_unavailable",
            "defaultValue": "0",
            "description": "<p>Флаг, если значение 1, то в выборке будут пропущены уже прошедшие передачи, для которых нет архивной записи.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть названия и описания передач. Должен совпадать со значением из параметра Smarty SMARTY_ADDITIONAL_LANGUAGES.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "results",
            "description": "<p>Список найденных передач.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "results.id",
            "description": "<p>Идентификатор канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "results.name",
            "description": "<p>Название канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "results.icon",
            "description": "<p>URL иконки канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "results.category_id",
            "description": "<p>Идентификатор категории канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "results.has_record",
            "description": "<p>Существует ли запись для передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "results.url",
            "description": "<p>URL потока канала или передачи в записи в зависимости от флага has_record.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "results.program_id",
            "description": "<p>Идентификатор передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "results.program_begin_time",
            "description": "<p>Время начала передачи в Unix Timestamp UTC+0.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "results.program_end_time",
            "description": "<p>Время окончания передачи в Unix Timestamp UTC+0.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "results.program_name",
            "description": "<p>Название передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "results.program_short_name",
            "description": "<p>Краткое название передачи без типа.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "results.program_description",
            "description": "<p>Описание передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "results.program_category",
            "description": "<p>Категория передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "results.program_rating",
            "description": "<p>Возрастной рейтинг.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "results.program_preview_url",
            "description": "<p>URL картинки передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "results.program_meta",
            "description": "<p>Дополнительная информация о передаче в формате JSON.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "results.program_meta.extra_name",
            "description": "<p>Подзаголовок.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "results.program_meta.extra_description",
            "description": "<p>Дополнительное описание.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "results.program_meta.genres",
            "description": "<p>Список жанров как они представлены в источнике EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "results.program_meta.participants",
            "description": "<p>Список участников, принимавших участие в производстве.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "results.program_meta.participants.actor",
            "description": "<p>Список актеров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "results.program_meta.participants.composer",
            "description": "<p>Список композиторов.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "results.program_meta.participants.director",
            "description": "<p>Список режиссёров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "results.program_meta.participants.producer",
            "description": "<p>Список продюсеров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "results.program_meta.countries",
            "description": "<p>Список стран, участвовавших в производстве.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "results.program_meta.productions",
            "description": "<p>Список студий занятых производством.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "results.program_meta.year",
            "description": "<p>Год выпуска. Для сериалов указывается два года в формате YYYY-YYYY.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "results.program_meta.previews",
            "description": "<p>Список ссылок на изображения превью.</p>"
          },
          {
            "group": "Ответ",
            "type": "String[]",
            "optional": false,
            "field": "results.program_meta.tags",
            "description": "<p>Список тегов как они представлены в источнике EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Boolean",
            "optional": false,
            "field": "results.program_meta.live",
            "description": "<p>Прямой эфир.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "results.program_meta.sport_type",
            "description": "<p>Для спортивных передач: название спорта.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "results.program_meta.championship",
            "description": "<p>Для спортивных передач: название чемпионата.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "results.program_meta.sport_rival1",
            "description": "<p>Для спортивных передач: первая команда в чемпионате.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "results.program_meta.sport_rival2",
            "description": "<p>Для спортивных передач: вторая команда в чемпионате.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "results.program_meta.kinopoisk",
            "description": "<p>Рейтинг кинопоиска.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "results.program_meta.imdb",
            "description": "<p>Рейтинг IMDB.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Строка поиска менее 3 символов.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Program"
  },
  {
    "type": "get",
    "url": "/program/url/",
    "title": "ProgramUrl: получение адреса потока архивной записи",
    "name": "ProgramUrl",
    "group": "Program",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cid",
            "description": "<p>Идентификатор канала, для программы на котором нужно получить адрес потока в записи.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pid",
            "description": "<p>Идентификатор программы, для которой нужно получить адрес потока. Должен быть передан либо pid, либо time. Для быстродействия рекомендуется передавать оба значения.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "time",
            "description": "<p>Временная метка в формате Unix Timestamp UTC+0. Будет возвращен адрес потока записанной передачи для данного момента времени. Должен быть передан либо pid, либо time. Для быстродействия рекомендуется передавать оба значения.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "is_camera",
            "defaultValue": "0",
            "description": "<p>Требуется ли получить запись для камеры, а не для телеканала.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "redirect",
            "defaultValue": "1",
            "description": "<p>Флаг, если значение 1, то вместо ответа сервер вернет HTTP Redirect.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "exclude_service_id",
            "description": "<p>Идентификатор стриминг-сервиса, который будет исключен из маршрутизации. Используется для реализации отказоустойчивости на уровне приложения для перебора видео-серверов. Чтобы передать несколько параметров exclude_service_id, нужно записать их через запятую.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "tv_pause",
            "defaultValue": "0",
            "description": "<p>Флаг, если значение 1, то запрашивается ссылка для режима Pause Live TV. Значение $flpdur в URL стриминг-сервиса будет заменено на now (используется для flussonic).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Адрес потока.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "stream_service_id",
            "description": "<p>Идентификатор выбранного стриминг-сервиса.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, действие выполнено успешно.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Program"
  },
  {
    "type": "get",
    "url": "/provider/list/",
    "title": "ProviderList: список провайдеров",
    "name": "ProviderList",
    "group": "Provider",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "providers",
            "description": "<p>Список провайдеров.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "providers.id",
            "description": "<p>Идентификатор провайдера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "providers.name",
            "description": "<p>Название провайдера.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2"
            ],
            "optional": false,
            "field": "providers.type",
            "description": "<p>Тип провайдера: 0 - интеграция с биллингом 1 - Megogo 2 - Tvzavr</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, действие выполнено успешно.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Provider"
  },
  {
    "type": "get",
    "url": "/radio/list/",
    "title": "RadioList: список радиостанций",
    "name": "RadioList",
    "group": "Radio",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "icon_width",
            "description": "<p>Предпочитаемая ширина иконки. Имя файла иконки будет: &lt;имя файла&gt;&lt;ширина&gt;_&lt;высота&gt;.&lt;расширение&gt;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "icon_height",
            "description": "<p>Предпочитаемая высота иконки. Имя файла иконки будет: &lt;имя файла&gt;&lt;ширина&gt;_&lt;высота&gt;.&lt;расширение&gt;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>Поисковый запрос. Поиск осуществляется по названию радиостанции.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть названия радиостанций. Должен совпадать со значением из параметра Smarty SMARTY_ADDITIONAL_LANGUAGES.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "radio",
            "description": "<p>Список радиостанций.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "radio.id",
            "description": "<p>Идентификатор радиостанции.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "radio.name",
            "description": "<p>Название радиостанции.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "radio.url",
            "description": "<p>Адрес потока.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "radio.logo_url",
            "description": "<p>URL-адрес логотипа радиостанции.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "radio.channel_name",
            "description": "<p>Название радиостанции из справочника.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "radio.description",
            "description": "<p>Описание.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Radio"
  },
  {
    "type": "get",
    "url": "/selection/detail/",
    "title": "SelectionDetail: список подборок",
    "name": "SelectionDetail",
    "group": "Selection",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "selection_id",
            "description": "<p>ID подборки</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "contents",
            "description": "<p>Список элементов подборки.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object",
            "optional": true,
            "field": "contents.channel",
            "description": "<p>Канал.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "contents.channel.id",
            "description": "<p>Идентификатор канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "contents.channel.actions",
            "description": "<p>Варианты просмотра или покупки канала. Формируется исходя из тарифных пакетов, доступных абоненту/аккаунту, и подключенных для данного канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.channel.actions.action",
            "description": "<p>Имя действия, одно из зарезервированных значений: get_channel_url – получить адрес потока; subscribe – купить подписку на пакет.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "contents.channel.actions.tariff_id",
            "description": "<p>Идентификатор тарифного пакета.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.channel.actions.caption",
            "description": "<p>Название действия для отображения в интерфейсе.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "contents.channel.actions.price",
            "description": "<p>Стоимость покупки за полный период.</p>"
          },
          {
            "group": "Ответ",
            "type": "Boolean",
            "optional": false,
            "field": "contents.channel.actions.periodical",
            "description": "<p>Флаг того, что действие будет возобновляемым.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "contents.channel.actions.activation_price",
            "description": "<p>Стоимость покупки с учетом платежного периода аккаунта.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.channel.name",
            "description": "<p>Название канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object",
            "optional": true,
            "field": "contents.program",
            "description": "<p>Передача.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "contents.program.id",
            "description": "<p>Идентификатор передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.program.name",
            "description": "<p>Название передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.program.description",
            "description": "<p>Описание передачи.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "contents.program.begin_time",
            "description": "<p>Время начала передачи в Unix Timestamp (UTC+0).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "contents.program.end_time",
            "description": "<p>Время окончания передачи в Unix Timestamp (UTC+0).</p>"
          },
          {
            "group": "Ответ",
            "type": "Object",
            "optional": true,
            "field": "contents.video",
            "description": "<p>Фильм.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "contents.video.id",
            "description": "<p>Идентификатор фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.video.name",
            "description": "<p>Название фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.video.name_orig",
            "description": "<p>Оригинальное название фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.video.thumbnail_small",
            "description": "<p>URL на обложку фильма уменьшенного размера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.video.thumbnail_big",
            "description": "<p>URL на обложку фильма большого размера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.video.screenshot_b_big",
            "description": "<p>URL на размытый кадр из фильма большого размера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.video.description",
            "description": "<p>Описание фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "contents.video.year",
            "description": "<p>Год выпуска.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.video.actors",
            "description": "<p>Актёры фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.video.director",
            "description": "<p>Режиссёры фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.video.genres",
            "description": "<p>Жанры фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.video.countries",
            "description": "<p>Страны производства.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.video.genres_kinopoisk",
            "description": "<p>Жанры фильма с сервиса Кинопоиск.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "contents.video.is_parent_control",
            "description": "<p>Для фильма включен родительский контроль.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "contents.video.is_package",
            "description": "<p>Является пакетом фильмов.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "contents.video.is_season",
            "description": "<p>Является сериалом.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "contents.video.is_announcement",
            "description": "<p>Является анонсом.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "contents.video.rating",
            "description": "<p>Возрастной рейтинг фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "Double",
            "optional": false,
            "field": "contents.video.kinopoisk_rating",
            "description": "<p>Рейтинг фильма на Кинопоиске.</p>"
          },
          {
            "group": "Ответ",
            "type": "Double",
            "optional": false,
            "field": "contents.video.imdb_rating",
            "description": "<p>Рейтинг фильма на IMDB.</p>"
          },
          {
            "group": "Ответ",
            "type": "Double",
            "optional": false,
            "field": "contents.video.average_customers_rating",
            "description": "<p>Средний рейтинг пользоватетелей.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "contents.video.duration",
            "description": "<p>Длительность фильма в минутах (для отображения).</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.video.provider",
            "description": "<p>Поставщик фильма (например, название онлайн-кинотеатра).</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.video.language",
            "description": "<p>Язык фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "1",
              "2",
              "3"
            ],
            "optional": false,
            "field": "contents.video.video_source",
            "description": "<p>Источник видео. 1 - Внутренний источник. 2 - Внешний провайдер фильмов. 3 - архивное EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object",
            "optional": true,
            "field": "contents.camera",
            "description": "<p>Камера.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "contents.camera.id",
            "description": "<p>Идентификатор камеры.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.camera.name",
            "description": "<p>Имя камеры.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.camera.icon",
            "description": "<p>URL-адрес иконки камеры.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "contents.camera.category_id",
            "description": "<p>Идентификатор категории.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "contents.camera.city_name",
            "description": "<p>Название города.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "contents.camera.channel_sort",
            "description": "<p>Номер камеры в списке.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.camera.option1",
            "description": "<p>Значение параметра канала Option 1.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.camera.option2",
            "description": "<p>Значение параметра канала Option 2.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.camera.option3",
            "description": "<p>Значение параметра канала Option 3.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "contents.camera.has_subscription",
            "description": "<p>На камеру оформлена подписка.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object",
            "optional": true,
            "field": "contents.radio",
            "description": "<p>Радиостанция.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "contents.radio.id",
            "description": "<p>Идентификатор радиостанции.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.radio.name",
            "description": "<p>Название радиостанции.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.radio.url",
            "description": "<p>Адрес потока.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.radio.logo_url",
            "description": "<p>URL-адрес логотипа радиостанции.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.radio.channel_name",
            "description": "<p>Название радиостанции из справочника.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.radio.description",
            "description": "<p>Описание.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object",
            "optional": true,
            "field": "contents.ad",
            "description": "<p>Рекламный ролик.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.ad.name",
            "description": "<p>Название ролика.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.ad.url",
            "description": "<p>URL-адрес ролика.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object",
            "optional": true,
            "field": "contents.application",
            "description": "<p>Приложение.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.application.id",
            "description": "<p>Идентификатор приложения.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.application.name",
            "description": "<p>Название приложения для абонента.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.application.system_name",
            "description": "<p>Системное название приложения или имя класса экрана.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7"
            ],
            "optional": false,
            "field": "contents.application.type",
            "description": "<p>Тип приложения. Возможные значения: 0 - Внешнее Web-приложение; 1 - Внутренний экран; 2 - Ссылка на раздел VOD; 3 - URL-адрес видеопотока; 4 - Экранный виджет; 5 - Настройки Android; 6 - Каталог приложений Android; 7 - Приложение для Android (Android appId).</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.application.url",
            "description": "<p>URL-адрес приложения.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "contents.application.show_in_main_menu",
            "description": "<p>Необходимо ли показывать приложение в главном экране интерфейса абонентского приложения.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.application.css_style",
            "description": "<p>Стиль CSS для кнопки приложения.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.application.icon",
            "description": "<p>URL-адрес иконки приложения.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "contents.application.icon_focus",
            "description": "<p>URL-адрес иконки приложения в фокусе.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "contents.application.attrs",
            "description": "<p>Дополнительные аттрибуты приложения списком в формате &quot;ключ&quot; - &quot;значение&quot;.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, действие выполнено успешно.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Подборки с таким id не существует.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Selection"
  },
  {
    "type": "get",
    "url": "/selection/list/",
    "title": "SelectionList: список подборок",
    "name": "SelectionList",
    "group": "Selection",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "selections",
            "description": "<p>Список подборок.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "providers.id",
            "description": "<p>Идентификатор подборки.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "providers.name",
            "description": "<p>Название подборки.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "providers.count",
            "description": "<p>Количество контента в подборке.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0"
            ],
            "optional": false,
            "field": "providers.type",
            "description": "<p>Тип подборки. 0 - Ручная.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, действие выполнено успешно.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Selection"
  },
  {
    "type": "get",
    "url": "/settings/save/",
    "title": "SettingsSave: сохранение настроек аккаунта",
    "name": "SettingsSave",
    "group": "Settings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parent_code",
            "description": "<p>ПИН-код. Если передан, то код родительского контроля аккаунта будет изменен.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "favorite_channel",
            "description": "<p>Идентификатор канала, который нужно добавить в избранное.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "unfavorite_channel",
            "description": "<p>Идентификатор канала, который нужно удалить из избранного.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "use_timeshift",
            "description": "<p>Флаг, включить или нет опцию просмотра LIVE TV с учетом часового сдвига аккаунта.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "preferred_timeshift_offset",
            "description": "<p>Предпочитаемый часовой сдвиг аккаунта для просмотра LIVE TV.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "data_center_id",
            "description": "<p>Идентификатор дата-центра, в котором должен обслуживаеться аккаунт.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Возникла ошибка, настройки не сохранены.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Settings"
  },
  {
    "type": "get",
    "url": "/streamservice/token/check/",
    "title": "StreamServiceTokenCheck: проверка валидности токена стриминг-сервиса",
    "name": "StreamServiceTokenCheck",
    "group": "StreamService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Токен который необходимо проверить.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Идентификатор контента на видео-сервере. Если передан, то проверяется соответствие этого ID с ID контента, для которого был сгенерирован токен.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ip",
            "description": "<p>IP-адрес пользователя. Если передан и для стриминг-сервиса включена опция проверки IP-адреса при авторизации, то будет проведена проверка соответствия.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, токен валидный.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Токен просрочен.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Токен предназначен для другого контента.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>Токен предназначен для другого IP.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "StreamService"
  },
  {
    "type": "get",
    "url": "/noauth/video/detail/",
    "title": "NoAuthVideoDetail: подробная информация о фильме (доступно без авторизации)",
    "name": "NoAuthVideoDetail",
    "group": "Video",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vid",
            "description": "<p>Идентификатор фильма, пакета фильмов, сериала.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>API key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть название и описание фильмов. Должен совпадать со значением из параметра Smarty SMARTY_ADDITIONAL_LANGUAGES.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Идентификатор фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "actions",
            "description": "<p>Варианты просмотра, аренды, покупки фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actions.action",
            "description": "<p>Имя действия. Задается через ценовую категорию и используется обработчиком API поставщика. Зарезервированные возможные виды действий: get_video_url - просмотр ассета фильма; get_trailer_url - просмотр трейлера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actions.caption",
            "description": "<p>Название действия, либо ассета.</p>"
          },
          {
            "group": "Ответ",
            "type": "Decimal",
            "optional": false,
            "field": "actions.price",
            "description": "<p>Стоимость покупки.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actions.url",
            "description": "<p>URL видеопотока.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actions.video_id",
            "description": "<p>Идентификатор фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actions.file_id",
            "description": "<p>Идентификатор ассета.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actions.duration",
            "description": "<p>Длительность ассета в секундах.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Название фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "name_orig",
            "description": "<p>Оригинальное название фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "thumbnail_small",
            "description": "<p>URL на обложку фильма уменьшенного размера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "thumbnail_big",
            "description": "<p>URL на обложку фильма большого размера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Описание фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "year",
            "description": "<p>Год выпуска.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actors",
            "description": "<p>Актёры фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "director",
            "description": "<p>Режиссёры фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "genres",
            "description": "<p>Жанры фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "countries",
            "description": "<p>Страны производства.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "genres_kinopoisk",
            "description": "<p>Жанры фильма с сервиса Кинопоиск.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_parent_control",
            "description": "<p>Для фильма включен родительский контроль.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_package",
            "description": "<p>Является пакетом фильмов.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_season",
            "description": "<p>Является сериалом.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "package_videos",
            "description": "<p>Список фильмов, состоящих в данном пакете.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "package_videos.id",
            "description": "<p>Идентификатор фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>Возрастной рейтинг фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "Double",
            "optional": false,
            "field": "kinopoisk_rating",
            "description": "<p>Рейтинг фильма на Кинопоиске.</p>"
          },
          {
            "group": "Ответ",
            "type": "Double",
            "optional": false,
            "field": "imdb_rating",
            "description": "<p>Рейтинг фильма на IMDB.</p>"
          },
          {
            "group": "Ответ",
            "type": "Double",
            "optional": false,
            "field": "average_customers_rating",
            "description": "<p>Средний рейтинг пользоватетелей.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "customer_rating",
            "description": "<p>Оценка выставленная пользователем.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>Длительность фильма в минутах (для отображения).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "position",
            "description": "<p>Сохраненная позиция просмотра с прошлой сессии, в секундах.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "position_asset_id",
            "description": "<p>Идентификатор ассета/серии, для которого сохранена позиция.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "1",
              "2",
              "3"
            ],
            "optional": false,
            "field": "video_source",
            "description": "<p>Источник видео. 1 - Внутренний источник. 2 - Внешний провайдер фильмов. 3 - архивное EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "actors_info",
            "description": "<p>Список актеров, снявшихся в фильме.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "actors_info.id",
            "description": "<p>Идентификатор актера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actors_info.name",
            "description": "<p>Имя актера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actors_info.photo",
            "description": "<p>URL на фотографию актера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actors_info.country",
            "description": "<p>Страна рождения.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actors_info.gender",
            "description": "<p>Пол.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actors_info.birthdate",
            "description": "<p>Дата рождения.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Video"
  },
  {
    "type": "get",
    "url": "/noauth/video/list/",
    "title": "NoAuthVideoList: список фильмов (доступен без авторизации)",
    "name": "NoAuthVideoList",
    "group": "Video",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>API key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-100",
            "optional": true,
            "field": "limit",
            "defaultValue": "100",
            "description": "<p>Ограничение на количество фильмов на одну страницу выборки. Максимальное значение 100.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Номер страницы выборки.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "aid",
            "defaultValue": "пустое",
            "description": "<p>Фильтр по Актеру, в это поле передается идентификатор актера.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "gid",
            "defaultValue": "пустое",
            "description": "<p>Фильтр по жанру VOD, в это поле передается идентификатор жанра.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "cgid",
            "defaultValue": "пустое",
            "description": "<p>Фильтр по жанру-категории VOD, в это поле передается идентификатор жанра-категории.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "new",
            "defaultValue": "0",
            "description": "<p>Фильтр по новинкам. При значении 1 в выборку попадут только те фильмы, дата добавления в каталог которых не ранее количества дней, заданного константой TVMIDDLEWARE_VIDEO_NEW_DAYS в настройках Smarty.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "premiere",
            "defaultValue": "0",
            "description": "<p>Фильтр по премьерам. При значении 1 в выборку попадут только те фильмы, дата премьеры которых не ранее количества дней, заданного константой TVMIDDLEWARE_VIDEO_PREMIERE_DAYS в настройках Smarty.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "source_internal",
            "defaultValue": "1",
            "description": "<p>Фильтр по источнику фильмов. При значении 1 в выборку попадут обьекты у которых не указан внешний источник. При значении 0 из выборки будут исключены объекты у которых не указан внешний источник.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "source_external",
            "defaultValue": "1",
            "description": "<p>Фильтр по источнику фильмов. При значении 1 в выборку попадут обьекты у которых внешним источником является провайдер фильмов. При значении 0 из выборки будут исключены объекты у которых внешним источником является провайдер фильмов.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "source_epg",
            "defaultValue": "0",
            "description": "<p>Фильтр по источнику фильмов. При значении 1 в выборку попадут обьекты из архивов EPG. При значении 0 из выборки будут исключены объекты  из архивов EPG.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "package",
            "defaultValue": "пустое",
            "description": "<p>Фильтр по пакетам. При значении 1 в выборку попадут только обьекты, являющиеся пакетами фильмов. При значении 0 из выборки будут исключены объекты, являющиеся пакетами фильмов.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "season",
            "defaultValue": "пустое",
            "description": "<p>Фильтр по сериалам. При значении 1 в выборку попадут только обьекты, являющиеся сезонами сериалов. При значении 0 из выборки будут исключены объекты, являющиеся сезонами сериалов.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "announcement",
            "defaultValue": "0",
            "description": "<p>Фильтр по анонсам. При значении 1 в выборку попадут только обьекты, являющиеся анонсами. При значении 0 из выборки будут исключены объекты, являющиеся анонсами.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "get_purchased",
            "defaultValue": "0",
            "description": "<p>Фильтр по факту купленности. При значении 1 в выборку попадут только обьекты, которые куплены абонентом. При значении 0 факт купленности не будет проверяться.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "viewed_only",
            "defaultValue": "0",
            "description": "<p>Фильтр по факту просмотренности. При значении 1 в выборку попадут только обьекты, которые были просмотрены абонентом (либо начат просмотр). При значении 0 факт просмотренности не будет проверяться.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "favorited_only",
            "defaultValue": "0",
            "description": "<p>Фильтр по факту добавления в избранное. При значении 1 в выборку попадут только обьекты, которые были добавлены в избранное. При значении 0 факт добавления в избранное не будет проверяться.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "created_at",
              "premiere_date",
              "year",
              "name",
              "average_customers_rating",
              "kinopoisk_rating",
              "imdb_rating"
            ],
            "optional": true,
            "field": "order",
            "defaultValue": "пустой",
            "description": "<p>Сортировка, -created_at - по дате добавления в каталог, сначала самые новые; created_at - по дате добавления в каталог, сначала самые старые; -premiere_date - по дате премьеры, сначала самые новые; premiere_date - по дате премьеры, сначала самые старые; -year - по дате выхода фильма, сначала самые новые; year - по дате выхода фильма, сначала самые старые; -name - по названию, в обратном алфавитном порядке; name - по названию, в алфавитном порядке; -average_customers_rating - по рейтингу абонентов, сначала самые популярные. average_customers_rating - по рейтингу абонентов, сначала самые непопулярные; -kinopoisk_rating - по рейтингу Кинопоиска, сначала самые популярные. kinopoisk_rating - по рейтингу Кинопоиска, сначала самые непопулярные; -imdb_rating - по рейтингу IMDB, сначала самые популярные. imdb_rating - по рейтингу IMDB, сначала самые непопулярные;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "defaultValue": "пустое",
            "description": "<p>Строка поиска. Поиск осуществляется по названию фильма по вхождению подстроки.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть названия и описания фильмов. Должен совпадать со значением из параметра Smarty SMARTY_ADDITIONAL_LANGUAGES.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Список фильмов.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "videos.id",
            "description": "<p>Идентификатор фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "videos.name",
            "description": "<p>Название фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "videos.name_orig",
            "description": "<p>Оригинальное название фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail_small",
            "description": "<p>URL на обложку фильма уменьшенного размера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail_big",
            "description": "<p>URL на обложку фильма большого размера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "videos.description",
            "description": "<p>Описание фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "videos.year",
            "description": "<p>Год выпуска.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "videos.actors",
            "description": "<p>Актёры фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "videos.director",
            "description": "<p>Режиссёры фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "videos.genres",
            "description": "<p>Жанры фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "videos.countries",
            "description": "<p>Страны производства.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "videos.genres_kinopoisk",
            "description": "<p>Жанры фильма с сервиса Кинопоиск.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "videos.is_parent_control",
            "description": "<p>Для фильма включен родительский контроль.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "videos.is_package",
            "description": "<p>Является пакетом фильмов.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "videos.is_season",
            "description": "<p>Является сериалом.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "videos.is_announcement",
            "description": "<p>Является анонсом.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "videos.rating",
            "description": "<p>Возрастной рейтинг фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "Double",
            "optional": false,
            "field": "videos.kinopoisk_rating",
            "description": "<p>Рейтинг фильма на Кинопоиске.</p>"
          },
          {
            "group": "Ответ",
            "type": "Double",
            "optional": false,
            "field": "videos.imdb_rating",
            "description": "<p>Рейтинг фильма на IMDB.</p>"
          },
          {
            "group": "Ответ",
            "type": "Double",
            "optional": false,
            "field": "videos.average_customers_rating",
            "description": "<p>Средний рейтинг пользоватетелей.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "videos.duration",
            "description": "<p>Длительность фильма в минутах (для отображения).</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "videos.files",
            "description": "<p>Список ассетов.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "videos.files.id",
            "description": "<p>Идентификатор ассета.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "videos.files.promo_image",
            "description": "<p>URL-адрес промо-изображения.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "videos.provider",
            "description": "<p>Поставщик фильма (например, название онлайн-кинотеатра).</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "videos.language",
            "description": "<p>Язык фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "videos.is_purchased",
            "description": "<p>Куплен ли фильм абонентом.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "1",
              "2",
              "3"
            ],
            "optional": false,
            "field": "videos.video_source",
            "description": "<p>Источник видео. 1 - Внутренний источник. 2 - Внешний провайдер фильмов. 3 - архивное EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Общее количество фильмов.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Video"
  },
  {
    "type": "get",
    "url": "/noauth/video/url/",
    "title": "NoAuthVideoUrl: получение адреса потока фильма (доступно без авторизации, только для трейлеров)",
    "name": "NoAuthVideoUrl",
    "group": "Video",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vid",
            "description": "<p>Идентификатор фильма, для которого нужно получить адрес потока.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vfid",
            "description": "<p>Идентификатор ассета.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "redirect",
            "defaultValue": "1",
            "description": "<p>Флаг, если значение 1, то вместо ответа сервер вернет HTTP Redirect.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "exclude_service_id",
            "description": "<p>Идентификатор стриминг-сервиса, который будет исключен из маршрутизации. Используется для реализации отказоустойчивости на уровне приложения для перебора видео-серверов. Можно передать несколько параметров exclude_service_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>API key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Адрес потока.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "stream_service_id",
            "description": "<p>Идентификатор выбранного стриминг-сервиса.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "ext_id",
            "description": "<p>Идентификатор фильма во внешней системе / онлайн-кинотеатре. Может использоваться для отправки статистики с клиентского приложения.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "ext_partner_id",
            "description": "<p>Идентификатор партнера во внешней системе / онлайн-кинотеатре. Может использоваться для отправки статистики с клиентского приложения.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, действие выполнено успешно.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Фильм или ассет не найден.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Ошибка получения адреса потока от провайдера (онлайн-кинотеатра).</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Video"
  },
  {
    "type": "get",
    "url": "/video/action/",
    "title": "VideoAction: покупка или аренда фильма",
    "name": "VideoAction",
    "group": "Video",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vid",
            "description": "<p>Идентификатор фильма.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "action",
            "description": "<p>Действие. Должно быть значением из списка actions из VideoDetail.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "external_api_goods_id",
            "defaultValue": "пустое",
            "description": "<p>ID товара во внешней биллинговой системе. По умолчанию используется ext_id фильма.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Результат выполнения действия, сообщение из внешней биллинговой системы.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, действие выполнено успешно.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Ошибка при выполнении действия, покупка не совершена.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Недостаточно средств для совершения покупки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>Покупка уже была совершена ранее.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Video"
  },
  {
    "type": "get",
    "url": "/video/detail/",
    "title": "VideoDetail: подробная информация о фильме",
    "name": "VideoDetail",
    "group": "Video",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vid",
            "description": "<p>Идентификатор фильма, пакета фильмов, сериала.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "external_api_request",
            "defaultValue": "1",
            "description": "<p>Флаг, если значение 1, то делается запрос к внешней системе и возвращаются actions, иначе - нет.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "external_api_goods_id",
            "defaultValue": "пустое",
            "description": "<p>ID товара во внешней биллинговой системе. По умолчанию используется ext_id фильма.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть название и описание фильмов. Должен совпадать со значением из параметра Smarty SMARTY_ADDITIONAL_LANGUAGES.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Идентификатор фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "actions",
            "description": "<p>Варианты просмотра, аренды, покупки фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actions.action",
            "description": "<p>Имя действия. Задается через ценовую категорию и используется обработчиком API поставщика. Зарезервированные возможные виды действий: get_video_url - просмотр ассета фильма; get_trailer_url - просмотр трейлера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actions.caption",
            "description": "<p>Название действия, либо ассета.</p>"
          },
          {
            "group": "Ответ",
            "type": "Decimal",
            "optional": false,
            "field": "actions.price",
            "description": "<p>Стоимость покупки (единоразово или на 1 период).</p>"
          },
          {
            "group": "Ответ",
            "type": "Decimal",
            "optional": false,
            "field": "actions.cost",
            "description": "<p>Сумма списания с баланса при активации.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actions.url",
            "description": "<p>URL видеопотока.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actions.video_id",
            "description": "<p>Идентификатор фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actions.file_id",
            "description": "<p>Идентификатор ассета.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actions.duration",
            "description": "<p>Длительность ассета в минутах.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "actions.periodical",
            "description": "<p>Флаг, значение 1 означает, что действие будет возобновляемым (например, ежемесячная подписка).</p>"
          },
          {
            "group": "Ответ",
            "type": "Decimal",
            "optional": false,
            "field": "actions.activation_price",
            "description": "<p>Стоимость активации подписки с учетом периода активации пользователя.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actions.promo_image_url",
            "description": "<p>URL промо изображения ассета.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Название фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "name_orig",
            "description": "<p>Оригинальное название фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "thumbnail_small",
            "description": "<p>URL на обложку фильма уменьшенного размера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "thumbnail_big",
            "description": "<p>URL на обложку фильма большого размера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "screenshot_b_big",
            "description": "<p>URL на размытый кадр из фильма большого размера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Описание фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "year",
            "description": "<p>Год выпуска.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actors",
            "description": "<p>Актёры фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "director",
            "description": "<p>Режиссёры фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "genres",
            "description": "<p>Жанры фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "countries",
            "description": "<p>Страны производства.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "genres_kinopoisk",
            "description": "<p>Жанры фильма с сервиса Кинопоиск.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_favorited",
            "description": "<p>Пользователь добавил фильм в избранное.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_parent_control",
            "description": "<p>Для фильма включен родительский контроль.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_package",
            "description": "<p>Является пакетом фильмов.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_season",
            "description": "<p>Является сериалом.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_announcement",
            "description": "<p>Является анонсом.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "provider",
            "description": "<p>Поставщик фильма (например, название онлайн-кинотеатра).</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>Язык фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "package_videos",
            "description": "<p>Список фильмов, состоящих в данном пакете.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "package_videos.id",
            "description": "<p>Идентификатор фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>Возрастной рейтинг фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "Double",
            "optional": false,
            "field": "kinopoisk_rating",
            "description": "<p>Рейтинг фильма на Кинопоиске.</p>"
          },
          {
            "group": "Ответ",
            "type": "Double",
            "optional": false,
            "field": "imdb_rating",
            "description": "<p>Рейтинг фильма на IMDB.</p>"
          },
          {
            "group": "Ответ",
            "type": "Double",
            "optional": false,
            "field": "average_customers_rating",
            "description": "<p>Средний рейтинг пользоватетелей.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "customer_rating",
            "description": "<p>Оценка выставленная пользователем.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>Длительность фильма в минутах (для отображения).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "position",
            "description": "<p>Сохраненная позиция просмотра с прошлой сессии, в секундах.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "position_asset_id",
            "description": "<p>Идентификатор ассета/серии, для которого сохранена позиция.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "1",
              "2",
              "3"
            ],
            "optional": false,
            "field": "video_source",
            "description": "<p>Источник видео. 1 - Внутренний источник. 2 - Внешний провайдер фильмов. 3 - архивное EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "actors_info",
            "description": "<p>Список актеров, снявшихся в фильме.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "actors_info.id",
            "description": "<p>Идентификатор актера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actors_info.name",
            "description": "<p>Имя актера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actors_info.photo",
            "description": "<p>URL на фотографию актера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actors_info.country",
            "description": "<p>Страна рождения.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actors_info.gender",
            "description": "<p>Пол.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "actors_info.birthdate",
            "description": "<p>Дата рождения.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Video"
  },
  {
    "type": "get",
    "url": "/video/list/",
    "title": "VideoList: список фильмов",
    "name": "VideoList",
    "group": "Video",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "size": "0-100",
            "optional": true,
            "field": "limit",
            "defaultValue": "100",
            "description": "<p>Ограничение на количество фильмов на одну страницу выборки. Максимальное значение 100.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "1..",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Номер страницы выборки.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "gid",
            "defaultValue": "пустое",
            "description": "<p>Фильтр по жанру VOD, в это поле передается идентификатор жанра.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "cgid",
            "defaultValue": "пустое",
            "description": "<p>Фильтр по жанру-категории VOD, в это поле передается идентификатор жанра-категории.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "aid",
            "defaultValue": "пустое",
            "description": "<p>Фильтр по Актеру, в это поле передается идентификатор актера.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "new",
            "defaultValue": "0",
            "description": "<p>Фильтр по новинкам. При значении 1 в выборку попадут только те фильмы, дата добавления в каталог которых не ранее количества дней, заданного константой TVMIDDLEWARE_VIDEO_NEW_DAYS в настройках Smarty.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "premiere",
            "defaultValue": "0",
            "description": "<p>Фильтр по премьерам. При значении 1 в выборку попадут только те фильмы, дата премьеры которых не ранее количества дней, заданного константой TVMIDDLEWARE_VIDEO_PREMIERE_DAYS в настройках Smarty.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "source_internal",
            "defaultValue": "1",
            "description": "<p>Фильтр по источнику фильмов. При значении 1 в выборку попадут обьекты у которых не указан внешний источник. При значении 0 из выборки будут исключены объекты у которых не указан внешний источник.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "source_external",
            "defaultValue": "1",
            "description": "<p>Фильтр по источнику фильмов. При значении 1 в выборку попадут обьекты у которых внешним источником является провайдер фильмов. При значении 0 из выборки будут исключены объекты у которых внешним источником является провайдер фильмов.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "source_epg",
            "defaultValue": "0",
            "description": "<p>Фильтр по источнику фильмов. При значении 1 в выборку попадут обьекты из архивов EPG. При значении 0 из выборки будут исключены объекты  из архивов EPG.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "package",
            "defaultValue": "пустое",
            "description": "<p>Фильтр по пакетам. При значении 1 в выборку попадут только обьекты, являющиеся пакетами фильмов. При значении 0 из выборки будут исключены объекты, являющиеся пакетами фильмов.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "season",
            "defaultValue": "пустое",
            "description": "<p>Фильтр по сериалам. При значении 1 в выборку попадут только обьекты, являющиеся сезонами сериалов. При значении 0 из выборки будут исключены объекты, являющиеся сезонами сериалов.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "announcement",
            "defaultValue": "0",
            "description": "<p>Фильтр по анонсам. При значении 1 в выборку попадут только обьекты, являющиеся анонсами. При значении 0 из выборки будут исключены объекты, являющиеся анонсами.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "get_purchased",
            "defaultValue": "0",
            "description": "<p>Фильтр по факту купленности. При значении 1 в выборку попадут только обьекты, которые куплены абонентом. При значении 0 факт купленности не будет проверяться.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "viewed_only",
            "defaultValue": "0",
            "description": "<p>Фильтр по факту просмотренности. При значении 1 в выборку попадут только обьекты, которые были просмотрены абонентом (либо начат просмотр). При значении 0 факт просмотренности не будет проверяться.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "favorited_only",
            "defaultValue": "0",
            "description": "<p>Фильтр по факту добавления в избранное. При значении 1 в выборку попадут только обьекты, которые были добавлены в избранное. При значении 0 факт добавления в избранное не будет проверяться.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "tariff",
            "defaultValue": "0",
            "description": "<p>Возвращает фильмы, входящие в определённый тариф.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "provider",
            "defaultValue": "пустой",
            "description": "<p>Название провайдера.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "provider_id",
            "description": "<p>ID провайдера. Приоритетнее, чем название, если указано оба.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "created_at",
              "premiere_date",
              "year",
              "name",
              "average_customers_rating",
              "kinopoisk_rating",
              "imdb_rating",
              "view_date"
            ],
            "optional": true,
            "field": "order",
            "defaultValue": "пустой",
            "description": "<p>Сортировка, возможные параметры:<br/> <code>-created_at</code> - по дате добавления в каталог, сначала самые новые;<br/> <code>created_at</code> - по дате добавления в каталог, сначала самые старые;<br/> <code>-premiere_date</code> - по дате премьеры, сначала самые новые;<br/> <code>premiere_date</code> - по дате премьеры, сначала самые старые;<br/> <code>-year</code> - по дате выхода фильма, сначала самые новые;<br/> <code>year</code> - по дате выхода фильма, сначала самые старые;<br/> <code>-name</code> - по названию, в обратном алфавитном порядке;<br/> <code>name</code> - по названию, в алфавитном порядке;<br/> <code>-average_customers_rating</code> - по рейтингу абонентов, сначала самые популярные;<br/> <code>average_customers_rating</code> - по рейтингу абонентов, сначала самые непопулярные;<br/> <code>-kinopoisk_rating</code> - по рейтингу Кинопоиска, сначала самые популярные;<br/> <code>kinopoisk_rating</code> - по рейтингу Кинопоиска, сначала самые непопулярные;<br/> <code>-imdb_rating</code> - по рейтингу IMDB, сначала самые популярные;<br/> <code>imdb_rating</code> - по рейтингу IMDB, сначала самые непопулярные;<br/> <code>-view_datetime</code> - по дате проcмотра, сначала самые ранние (только при запросе с флагом <code>viewed_only=1</code>);<br/> <code>view_datetime</code> - по дате проcмотра, сначала самые поздние (только при запросе с флагом <code>viewed_only=1</code>).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "defaultValue": "пустое",
            "description": "<p>Строка поиска. Поиск осуществляется по названию фильма по вхождению подстроки.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lang",
            "defaultValue": "пустое",
            "description": "<p>Язык, на котором необходимо вернуть названия и описания фильмов. Должен совпадать со значением из параметра Smarty SMARTY_ADDITIONAL_LANGUAGES.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Список фильмов.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "videos.id",
            "description": "<p>Идентификатор фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "videos.name",
            "description": "<p>Название фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "videos.name_orig",
            "description": "<p>Оригинальное название фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail_small",
            "description": "<p>URL на обложку фильма уменьшенного размера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail_big",
            "description": "<p>URL на обложку фильма большого размера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "videos.screenshot_b_big",
            "description": "<p>URL на размытый кадр из фильма большого размера.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "videos.description",
            "description": "<p>Описание фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "videos.year",
            "description": "<p>Год выпуска.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "videos.actors",
            "description": "<p>Актёры фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "videos.director",
            "description": "<p>Режиссёры фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "videos.genres",
            "description": "<p>Жанры фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "videos.countries",
            "description": "<p>Страны производства.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "videos.genres_kinopoisk",
            "description": "<p>Жанры фильма с сервиса Кинопоиск.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "videos.is_favorited",
            "description": "<p>Фильм добавлен пользователем в избранное.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "videos.is_viewed",
            "description": "<p>Фильм просмотрен пользователем.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "videos.is_parent_control",
            "description": "<p>Для фильма включен родительский контроль.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "videos.is_package",
            "description": "<p>Является пакетом фильмов.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "videos.is_season",
            "description": "<p>Является сериалом.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "videos.is_announcement",
            "description": "<p>Является анонсом.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "videos.has_subscription",
            "description": "<p>Если ли подписка (через тарифы, не прямая покупка).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "videos.rating",
            "description": "<p>Возрастной рейтинг фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "Double",
            "optional": false,
            "field": "videos.kinopoisk_rating",
            "description": "<p>Рейтинг фильма на Кинопоиске.</p>"
          },
          {
            "group": "Ответ",
            "type": "Double",
            "optional": false,
            "field": "videos.imdb_rating",
            "description": "<p>Рейтинг фильма на IMDB.</p>"
          },
          {
            "group": "Ответ",
            "type": "Double",
            "optional": false,
            "field": "videos.average_customers_rating",
            "description": "<p>Средний рейтинг пользоватетелей.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "videos.duration",
            "description": "<p>Длительность фильма в минутах (для отображения).</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "videos.files",
            "description": "<p>Список ассетов.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "videos.files.id",
            "description": "<p>Идентификатор ассета.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "videos.files.promo_image",
            "description": "<p>URL-адрес промо-изображения.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "videos.files.name",
            "description": "<p>Название ассета.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "videos.files.duration",
            "description": "<p>Длительность в секундах.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "videos.provider",
            "description": "<p>Поставщик фильма (например, название онлайн-кинотеатра).</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "videos.language",
            "description": "<p>Язык фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "videos.is_purchased",
            "description": "<p>Куплен ли фильм абонентом.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "1",
              "2",
              "3"
            ],
            "optional": false,
            "field": "videos.video_source",
            "description": "<p>Источник видео. 1 - Внутренний источник. 2 - Внешний провайдер фильмов. 3 - архивное EPG.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Общее количество фильмов.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Провайдер не найден (если установлен параметр).</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Video"
  },
  {
    "type": "get",
    "url": "/video/rating/set/",
    "title": "VideoRatingSet: выставление оценки фильма",
    "name": "VideoRatingSet",
    "group": "Video",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vid",
            "description": "<p>Идентификатор фильма.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "2",
              "3",
              "4",
              "5"
            ],
            "optional": false,
            "field": "rating",
            "description": "<p>Выставляемая оценка.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "average_rating",
            "description": "<p>Новый средний рейтинг фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, действие выполнено успешно.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Не переданы или переданы некорректные vid или rating.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Оценка этому фильму уже была поставлена ранее.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Video"
  },
  {
    "type": "get",
    "url": "/video/settings/set/",
    "title": "VideoSettingsSet: изменение настроек видео для аккаунта",
    "name": "VideoSettingsSet",
    "group": "Video",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vid",
            "description": "<p>Идентификатор фильма.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "is_favorited",
            "description": "<p>Флаг, устанавливающий, добавил ли пользователь видео в избранное.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, действие выполнено успешно.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Video"
  },
  {
    "type": "get",
    "url": "/video/subscription/cancel/",
    "title": "VideoSubscriptionCancel: отмена подписки",
    "name": "VideoSubscriptionCancel",
    "group": "Video",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "subscription",
            "description": "<p>Идентификатор подписки.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Тариф не найден.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Video"
  },
  {
    "type": "get",
    "url": "/video/subscription/list/",
    "title": "VideoSubscriptionList: список доступных подписок",
    "name": "VideoSubscriptionList",
    "group": "Video",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "is_purchased",
            "description": "<p>Если указано, то возвращаются только купленнные, либо только некупленные подписки для данного аккаунта.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "subscriptions",
            "description": "<p>Список подписок.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "subscriptions.id",
            "description": "<p>Идентификатор.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "subscriptions.ext_id",
            "description": "<p>Tariff ext_id.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "subscriptions.name",
            "description": "<p>Имя.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "subscriptions.description",
            "description": "<p>Описание.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "subscriptions.price",
            "description": "<p>Стоимость.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "subscriptions.sort",
            "description": "<p>Порядок сортировки.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "subscriptions.is_purchased",
            "description": "<p>Куплена ли подписка абонентом.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Video"
  },
  {
    "type": "get",
    "url": "/video/url/",
    "title": "VideoUrl: получение адреса потока фильма",
    "name": "VideoUrl",
    "group": "Video",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vid",
            "description": "<p>Идентификатор фильма, для которого нужно получить адрес потока.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vfid",
            "description": "<p>Идентификатор ассета.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "redirect",
            "defaultValue": "1",
            "description": "<p>Флаг, если значение 1, то вместо ответа сервер вернет HTTP Redirect.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "exclude_service_id",
            "description": "<p>Идентификатор стриминг-сервиса, который будет исключен из маршрутизации. Используется для реализации отказоустойчивости на уровне приложения для перебора видео-серверов. Чтобы передать несколько параметров exclude_service_id, нужно записать их через запятую.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authkey",
            "description": "<p>Ключ сессии.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "defaultValue": "пустое",
            "description": "<p>Системное название типа устройства.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Ответ": [
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "uri",
            "description": "<p>Адрес потока.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "stream_service_id",
            "description": "<p>Идентификатор выбранного стриминг-сервиса.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "ext_id",
            "description": "<p>Идентификатор фильма во внешней системе / онлайн-кинотеатре. Может использоваться для отправки статистики с клиентского приложения.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "ext_partner_id",
            "description": "<p>Идентификатор партнера во внешней системе / онлайн-кинотеатре. Может использоваться для отправки статистики с клиентского приложения.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": true,
            "field": "audio_tracks",
            "description": "<p>Список доступных звуковых дорожек у фильма.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": true,
            "field": "audio_tracks.index",
            "description": "<p>Идентификатор аудиотрека. Используется для выбора звуковой дорожки и передается параметром в URL на стрим.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "audio_tracks.is_active",
            "description": "<p>При значении 1 эта аудиодорожка активна.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": true,
            "field": "audio_tracks.lang",
            "description": "<p>Язык звуковой дорожки.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": true,
            "field": "audio_tracks.display_name",
            "description": "<p>Отображаемое название языка звуковой дорожки.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": true,
            "field": "subtitles",
            "description": "<p>Список доступных субтитров у фильм.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": true,
            "field": "subtitles.index",
            "description": "<p>Идентификатор субтитров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "allowedValues": [
              "srt",
              "smi"
            ],
            "optional": true,
            "field": "subtitles.type",
            "description": "<p>Тип субтитров. srt – текстовый формат субтитров программы SubRip (Используется на Web) smi – текстовый формат субтитров, основанный на SGML. (поддерживается в Smart TV)</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": true,
            "field": "subtitles.lang",
            "description": "<p>Язык субтитров.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": true,
            "field": "subtitles.url",
            "description": "<p>Ссылка на файл субтитров.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "error",
            "description": "<p>Код ошибки.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Коды ошибок error": [
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки, действие выполнено успешно.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Фильм или ассет не найден.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Ошибка получения адреса потока от провайдера (онлайн-кинотеатра).</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../tvmiddleware/api.py",
    "groupTitle": "Video"
  }
] });
