define({ "api": [
  {
    "type": "post",
    "url": "/account/activate/",
    "title": "AccountActivate: активация аккаунта",
    "name": "AccountActivate",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "account_id",
            "description": "<p>Account ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "abonement",
            "description": "<p>Номер абонемента аккаунта. Должен быть передан либо abonement, либо account_id.</p>"
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
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
            "description": "<p>Аккаунт не найден.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/account/create/",
    "title": "AccountCreate: создание аккаунта",
    "name": "AccountCreate",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Customer ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..64",
            "optional": false,
            "field": "ext_id",
            "description": "<p>Уникальный идентификатор абонента в биллинговой системе провайдера. Должен быть передан либо ext_id, либо customer_id для поиска абонента, для которого создается аккаунт.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "abonement",
            "description": "<p>Номер абонемента аккаунта. Создается автоматически, если не указан.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "999999"
            ],
            "optional": true,
            "field": "password",
            "defaultValue": "случайный",
            "description": "<p>Пароль аккаунта. Создается автоматически, если не указан.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "active",
            "defaultValue": "1",
            "description": "<p>Флаг активности аккаунта.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..20",
            "optional": true,
            "field": "status_reason",
            "defaultValue": "пустое",
            "description": "<p>Описание статуса аккаунта. Любая строка, предустановленные статусы: ACTIVE, DEBT, BLOCK, INACTIVE, WAIT</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "auto_activation_period",
            "defaultValue": "0",
            "description": "<p>Количество дней, на которое будет автоматически активирован аккаунт после первой авторизации.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "allowedValues": [
              "yyyy-mm-dd"
            ],
            "optional": true,
            "field": "extension_date",
            "defaultValue": "пустое",
            "description": "<p>Дата следующего списания средств.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "allowedValues": [
              "yyyy-mm-dd"
            ],
            "optional": true,
            "field": "activation_date",
            "defaultValue": "пустое",
            "description": "<p>Дата активации аккаунта.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "allowedValues": [
              "yyyy-mm-dd"
            ],
            "optional": true,
            "field": "deactivation_date",
            "defaultValue": "пустое",
            "description": "<p>Дата деактивации аккаунта.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "allow_multiple_login",
            "defaultValue": "0",
            "description": "<p>Разрешить неограниченное количество одновременных подлючений для этого аккаунта с любых IP-адресов.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "allow_login_by_abonement",
            "defaultValue": "0",
            "description": "<p>Разрешить авторизацию только по логину (без пароля).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "allow_login_by_device_uid",
            "defaultValue": "1",
            "description": "<p>Разрешить авторизацию по UID устройства (без логина и пароля).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "allow_login_by_ip",
            "defaultValue": "0",
            "description": "<p>Разрешить авторизацию по IP-адресу (без логина и пароля).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "parent_code",
            "defaultValue": "пустое",
            "description": "<p>Код родительского контроля (ПИН-код).</p>"
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
            "defaultValue": "0",
            "description": "<p>Использовать ли режим просмотра по местному времени (timeshift).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "preferred_timeshift_offset",
            "defaultValue": "0",
            "description": "<p>Предпочитаемый сдвиг по времени.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "data_center",
            "defaultValue": "None",
            "description": "<p>id датацентра аккунта</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "allowed_device_groups",
            "defaultValue": "пустое",
            "description": "<p>Список групп устройств. Возможные ID групп устройств: 0 - STB 1 - Smart TV 2 - Mobile 3 - Other</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "subnets",
            "defaultValue": "пустое",
            "description": "<p>Список IP-подсетей, с которых разрешено авторизоваться аккаунту. Пустое значение означает 0.0.0.0/0.</p>"
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Абонемент созданного аккаунта.</p>"
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
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "error_message",
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object",
            "optional": false,
            "field": "error_fields",
            "description": "<p>Словарь сообщений об ошибках.</p>"
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
            "description": "<p>Абонент не найден.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Переданные параметры не прошли валидацию. Детали в error_message.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>Не удалось создать аккаунт. Детали в error_message.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/account/deactivate/",
    "title": "AccountDeactivate: деактивация аккаунта",
    "name": "AccountDeactivate",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "account_id",
            "description": "<p>Account ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "abonement",
            "description": "<p>Номер абонемента аккаунта. Должен быть передан либо abonement, либо account_id.</p>"
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
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
            "description": "<p>Аккаунт не найден.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/account/delete/",
    "title": "AccountDelete: удаление аккаунта",
    "name": "AccountDelete",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "account_id",
            "description": "<p>Account ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "abonement",
            "description": "<p>Номер абонемента аккаунта. Должен быть передан либо abonement, либо account_id.</p>"
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
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
            "description": "<p>Аккаунт не найден.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/account/device/create/",
    "title": "AccountDeviceCreate: привязка устройства к аккаунту",
    "name": "AccountDeviceCreate",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "account_id",
            "description": "<p>Account ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "abonement",
            "description": "<p>Номер абонемента аккаунта. Должен быть передан либо abonement, либо account_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "system_name",
            "description": "<p>Системное имя устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_uid",
            "description": "<p>UID устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "serial_number",
            "defaultValue": "пустое",
            "description": "<p>Серийный номер устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "brand_name",
            "description": "<p>Бренд устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "diagonal",
            "defaultValue": "пустое",
            "description": "<p>Диагональ устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "reset_settings",
            "defaultValue": "0",
            "description": "<p>Сбросить пользовательские данные.</p>"
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object",
            "optional": false,
            "field": "error_fields",
            "description": "<p>Словарь сообщений об ошибках.</p>"
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
            "description": "<p>Аккаунт не найден.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Устойство по системному имени не найдено.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>Данные не прошли валидацию. Детали в error_message.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "4",
            "description": "<p>Устройство с данным uid уже существует.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/account/device/delete/",
    "title": "AccountDeviceDelete: удаление привязанного устройства",
    "name": "AccountDeviceDelete",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "device_id",
            "description": "<p>Идентификатор устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_uid",
            "description": "<p>UID устройства. Должен быть передан либо device_uid, либо device_id.</p>"
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
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
            "description": "<p>Устойство не найдено.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/account/device/modify/",
    "title": "AccountDeviceModify: изменение параметров привязанного устройства",
    "name": "AccountDeviceModify",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "device_id",
            "description": "<p>Идентификатор устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_uid",
            "description": "<p>UID устройства. Должен быть передан либо device_uid, либо device_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "serial_number",
            "defaultValue": "пустое",
            "description": "<p>Серийный номер устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "brand_name",
            "description": "<p>Бренд устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "diagonal",
            "defaultValue": "пустое",
            "description": "<p>Диагональ устройства.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "reset_settings",
            "defaultValue": "0",
            "description": "<p>Сбросить пользовательские данные.</p>"
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object",
            "optional": false,
            "field": "error_fields",
            "description": "<p>Словарь сообщений об ошибках.</p>"
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
            "description": "<p>Привязанное устройство не найдено.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Переданные параметры не прошли валидацию. Детали в error_message.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/account/info/",
    "title": "AccountInfo: получение информации об аккаунте",
    "name": "AccountInfo",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "account_id",
            "description": "<p>Account ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "abonement",
            "description": "<p>Номер абонемента аккаунта. Должен быть передан либо abonement, либо account_id.</p>"
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "field": "active",
            "description": "<p>Флаг активности аккаунта.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "status_reason",
            "description": "<p>Описание статуса аккаунта.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "auto_activation_period",
            "description": "<p>Количество дней, на которое будет автоматически активирован аккаунт после первой авторизации.</p>"
          },
          {
            "group": "Ответ",
            "type": "Date",
            "allowedValues": [
              "yyyy-mm-dd"
            ],
            "optional": false,
            "field": "extension_date",
            "description": "<p>Дата следующего списания средств.</p>"
          },
          {
            "group": "Ответ",
            "type": "Date",
            "allowedValues": [
              "yyyy-mm-dd"
            ],
            "optional": false,
            "field": "activation_date",
            "description": "<p>Дата активации аккаунта.</p>"
          },
          {
            "group": "Ответ",
            "type": "Date",
            "allowedValues": [
              "yyyy-mm-dd"
            ],
            "optional": false,
            "field": "deactivation_date",
            "description": "<p>Дата деактивации аккаунта.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "allow_multiple_login",
            "description": "<p>Разрешить неограниченное количество одновременных подлючений для этого аккаунта с любых IP-адресов.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "allow_login_by_abonement",
            "description": "<p>Разрешить авторизацию только по логину (без пароля).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "allow_login_by_device_uid",
            "description": "<p>Разрешить авторизацию по UID устройства (без логина и пароля).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "allow_login_by_ip",
            "description": "<p>Разрешить авторизацию по IP-адресу (без логина и пароля).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "parent_code",
            "description": "<p>Код родительского контроля (ПИН-код).</p>"
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
            "description": "<p>Использовать ли режим просмотра по местному времени (timeshift).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "preferred_timeshift_offset",
            "description": "<p>Предпочитаемый сдвиг по времени.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "devices",
            "description": "<p>Список привязанных устройств.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "devices.id",
            "description": "<p>Идентификатор устройства.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "devices.system_name",
            "description": "<p>Системное название типа устройства.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "devices.device_uid",
            "description": "<p>UID / MAC-адрес.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "devices.serial_number",
            "description": "<p>Серийный номер.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "devices.created_at",
            "description": "<p>Дата регистрации.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "devices.is_basic",
            "description": "<p>Является базовым.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number[]",
            "optional": false,
            "field": "tariffs",
            "description": "<p>Список идентификаторов тарифных пакетов, подключенных у аккаунта.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Customer ID.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "subnets",
            "description": "<p>Список IP-подсетей, с которых разрешено авторизоваться аккаунту. Возвращается в виде последовательности масок, разделенной ';'</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "subscriptions",
            "description": "<p>Список активных подписок.</p>"
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
            "type": "Number",
            "optional": false,
            "field": "subscriptions.api_config_id",
            "description": "<p>ID внешнего API (null, если не задано).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "subscriptions.price",
            "description": "<p>Стоимость подписки.</p>"
          },
          {
            "group": "Ответ",
            "type": "Date",
            "allowedValues": [
              "yyyy-mm-dd"
            ],
            "optional": false,
            "field": "subscriptions.start_date",
            "description": "<p>Начало действия.</p>"
          },
          {
            "group": "Ответ",
            "type": "Date",
            "allowedValues": [
              "yyyy-mm-dd"
            ],
            "optional": false,
            "field": "subscriptions.end_date",
            "description": "<p>Окончание действия подписки (null, если подписка бесконечная).</p>"
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
            "description": "<p>Является ли подписка периодической.</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
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
            "description": "<p>Аккаунт не найден.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/account/message/create/",
    "title": "AccountMessageCreate: Создание сообщения для аккаунта",
    "name": "AccountMessageCreate",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "account_id",
            "description": "<p>Account ID. Должен быть передан либо abonement, либо account_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "abonement",
            "description": "<p>Номер абонемента аккаунта. Должен быть передан либо abonement, либо account_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..2000",
            "optional": true,
            "field": "text",
            "description": "<p>Текст сообщения.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": true,
            "field": "subject",
            "description": "<p>Тема сообщения.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "urgent",
            "defaultValue": "1",
            "description": "<p>Срочное.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "delete_after_reading",
            "defaultValue": "1",
            "description": "<p>Удалить сообщение после прочтения.</p>"
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object",
            "optional": false,
            "field": "error_fields",
            "description": "<p>Словарь сообщений об ошибках.</p>"
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
            "description": "<p>Аккаунт не найден.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Переданные параметры не прошли валидацию. Детали в error_message.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/account/modify/",
    "title": "AccountModify: изменение аккаунта",
    "name": "AccountModify",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "account_id",
            "description": "<p>Account ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "abonement",
            "description": "<p>Номер абонемента аккаунта. Должен быть передан либо abonement, либо account_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "defaultValue": "пустое",
            "description": "<p>Пароль аккаунта. Будет изменен, если передано непустое значение.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "active",
            "defaultValue": "1",
            "description": "<p>Флаг активности аккаунта.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..20",
            "optional": true,
            "field": "status_reason",
            "defaultValue": "пустое",
            "description": "<p>Описание статуса аккаунта. Любая строка, предустановленные статусы: ACTIVE, DEBT, BLOCK, INACTIVE, WAIT</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "auto_activation_period",
            "defaultValue": "0",
            "description": "<p>Количество дней, на которое будет автоматически активирован аккаунт после первой авторизации.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "allowedValues": [
              "yyyy-mm-dd"
            ],
            "optional": true,
            "field": "extension_date",
            "defaultValue": "пустое",
            "description": "<p>Дата следующего списания средств.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "allowedValues": [
              "yyyy-mm-dd"
            ],
            "optional": true,
            "field": "activation_date",
            "defaultValue": "пустое",
            "description": "<p>Дата активации аккаунта.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "allowedValues": [
              "yyyy-mm-dd"
            ],
            "optional": true,
            "field": "deactivation_date",
            "defaultValue": "пустое",
            "description": "<p>Дата деактивации аккаунта.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "allow_multiple_login",
            "defaultValue": "0",
            "description": "<p>Разрешить неограниченное количество одновременных подлючений для этого аккаунта с любых IP-адресов.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "allow_login_by_abonement",
            "defaultValue": "0",
            "description": "<p>Разрешить авторизацию только по логину (без пароля).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "allow_login_by_device_uid",
            "defaultValue": "0",
            "description": "<p>Разрешить авторизацию по UID устройства (без логина и пароля).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "allow_login_by_ip",
            "defaultValue": "0",
            "description": "<p>Разрешить авторизацию по IP-адресу (без логина и пароля).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "parent_code",
            "defaultValue": "пустое",
            "description": "<p>Код родительского контроля (ПИН-код).</p>"
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
            "defaultValue": "0",
            "description": "<p>Использовать ли режим просмотра по местному времени (timeshift).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "preferred_timeshift_offset",
            "defaultValue": "0",
            "description": "<p>Предпочитаемый сдвиг по времени.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "data_center",
            "defaultValue": "None",
            "description": "<p>id датацентра аккунта</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "subnets",
            "defaultValue": "пустое",
            "description": "<p>Список IP-подсетей, с которых разрешено авторизоваться аккаунту. Пустое значение означает 0.0.0.0/0.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "reset_device_settings",
            "defaultValue": "0",
            "description": "<p>Сообщает всем устройствам аккаунта о сбросе пользовательских данных.</p>"
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object",
            "optional": false,
            "field": "error_fields",
            "description": "<p>Словарь сообщений об ошибках.</p>"
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
            "description": "<p>Аккаунт не найден.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Переданные параметры не прошли валидацию. Детали в error_message.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/account/tariff/assign/",
    "title": "AccountTariffAssign: подключение тарифного пакета аккаунта",
    "name": "AccountTariffAssign",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "account_id",
            "description": "<p>Account ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "abonement",
            "description": "<p>Номер абонемента аккаунта. Должен быть передан либо abonement, либо account_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tariff_id",
            "description": "<p>Идентификатор тарифного пакета в Smarty.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vtariff_id",
            "description": "<p>Идентификатор виртуального тарифного пакета в Smarty.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tariff_ext_id",
            "description": "<p>Идентификатор виртуального или обычного тарифного пакета в Smarty.</p>"
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
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
            "description": "<p>Аккаунт не найден.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Тарифный пакет не найден.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/account/tariff/remove/",
    "title": "AccountTariffRemove: отключение тарифного пакета у аккаунта",
    "name": "AccountTariffRemove",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "account_id",
            "description": "<p>Account ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "abonement",
            "description": "<p>Номер абонемента аккаунта. Должен быть передан либо abonement, либо account_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tariff_id",
            "description": "<p>Идентификатор тарифного пакета в Smarty.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vtariff_id",
            "description": "<p>Идентификатор виртуального тарифного пакета в Smarty.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tariff_ext_id",
            "description": "<p>Идентификатор виртуального или обычного тарифного пакета в Smarty.</p>"
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
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
            "description": "<p>Аккаунт не найден.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Тарифный пакет не найден.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Account"
  },
  {
    "type": "post",
    "url": "/customer/create/",
    "title": "CustomerCreate: создание абонента",
    "name": "CustomerCreate",
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
            "description": "<p>Имя. Хотя бы одно из полей ФИО или примечание должно быть указано.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..256",
            "optional": true,
            "field": "middlename",
            "defaultValue": "пустое",
            "description": "<p>Отчество. Хотя бы одно из полей ФИО или примечание должно быть указано.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..256",
            "optional": true,
            "field": "lastname",
            "defaultValue": "пустое",
            "description": "<p>Фамилия. Хотя бы одно из полей ФИО или примечание должно быть указано.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "allowedValues": [
              "yyyy-mm-dd"
            ],
            "optional": true,
            "field": "birthdate",
            "defaultValue": "пустое",
            "description": "<p>Дата рождения.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..6",
            "optional": true,
            "field": "passport_number",
            "defaultValue": "пустое",
            "description": "<p>Номер паспорта.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..4",
            "optional": true,
            "field": "passport_series",
            "defaultValue": "пустое",
            "description": "<p>Серия паспорта.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "allowedValues": [
              "yyyy-mm-dd"
            ],
            "optional": true,
            "field": "passport_issue_date",
            "defaultValue": "пустое",
            "description": "<p>Дата выдачи паспорта.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "passport_issued_by",
            "defaultValue": "пустое",
            "description": "<p>Паспортные данные: кем выдан.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "postal_address_street",
            "defaultValue": "пустое",
            "description": "<p>Почтовый адрес: название улицы.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..32",
            "optional": true,
            "field": "postal_address_bld",
            "defaultValue": "пустое",
            "description": "<p>Почтовый адрес: номер дома.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..32",
            "optional": true,
            "field": "postal_address_apt",
            "defaultValue": "пустое",
            "description": "<p>Почтовый адрес: номер квартиры.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..32",
            "optional": true,
            "field": "postal_address_zip",
            "defaultValue": "пустое",
            "description": "<p>Почтовый адрес: индекс.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "billing_address_street",
            "defaultValue": "пустое",
            "description": "<p>Юридический адрес: название улицы.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..32",
            "optional": true,
            "field": "billing_address_bld",
            "defaultValue": "пустое",
            "description": "<p>Юридический адрес: номер дома, строение.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..32",
            "optional": true,
            "field": "billing_address_apt",
            "defaultValue": "пустое",
            "description": "<p>Юридический адрес: номер помещения.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..32",
            "optional": true,
            "field": "billing_address_zip",
            "defaultValue": "пустое",
            "description": "<p>Юридический адрес: индекс.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..24",
            "optional": true,
            "field": "mobile_phone_number",
            "defaultValue": "пустое",
            "description": "<p>Номер мобильного телефона.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..24",
            "optional": true,
            "field": "phone_number_1",
            "defaultValue": "пустое",
            "description": "<p>Номер телефона.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..24",
            "optional": true,
            "field": "phone_number_2",
            "defaultValue": "пустое",
            "description": "<p>Номер телефона.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..24",
            "optional": true,
            "field": "fax_phone_number",
            "defaultValue": "пустое",
            "description": "<p>Номер факса.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..254",
            "optional": true,
            "field": "email",
            "defaultValue": "пустое",
            "description": "<p>Адрес email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "company_name",
            "defaultValue": "пустое",
            "description": "<p>Название компании.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..512",
            "optional": true,
            "field": "comment",
            "defaultValue": "пустое",
            "description": "<p>Примечание. Хотя бы одно из полей ФИО или примечание должно быть указано.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..64",
            "optional": true,
            "field": "ext_id",
            "defaultValue": "пустое",
            "description": "<p>Уникальный идентификатор абонента в биллинговой системе провайдера.</p>"
          },
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
            "description": "<p>Включает отправку SMS клиенту.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..9",
            "optional": true,
            "field": "bank_account_blz",
            "defaultValue": "пустое",
            "description": "<p>BLZ банковского аккаунта абонента.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..11",
            "optional": true,
            "field": "bank_account_bic",
            "defaultValue": "пустое",
            "description": "<p>BIC банковского аккаунта абонента.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..40",
            "optional": true,
            "field": "bank_account_number",
            "defaultValue": "пустое",
            "description": "<p>Номер банковского аккаунта абонента.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..34",
            "optional": true,
            "field": "bank_account_iban",
            "defaultValue": "пустое",
            "description": "<p>IBAN банковского аккаунта абонента.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "bank_account_bank_name",
            "defaultValue": "пустое",
            "description": "<p>Название банка для банковского аккаунта абонента.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "bank_account_owner_name",
            "defaultValue": "пустое",
            "description": "<p>Имя владельца банковского аккаунта абонента.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "contract_number",
            "defaultValue": "пустое",
            "description": "<p>Номер основного договора абонента.</p>"
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Идентификатор созданного абонента.</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object",
            "optional": false,
            "field": "error_fields",
            "description": "<p>Словарь сообщений об ошибках.</p>"
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
            "description": "<p>Абонент c данным ext_id уже существует.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Превышен лимит регистраций с данного IP адреса.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>Переданные параметры абонента не прошли валидацию. Детали в error_message.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/customer/delete/",
    "title": "CustomerDelete: удаление абонента",
    "name": "CustomerDelete",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Customer ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..64",
            "optional": false,
            "field": "ext_id",
            "description": "<p>Уникальный идентификатор абонента в биллинговой системе провайдера. Должен быть передан либо ext_id, либо customer_id.</p>"
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
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
            "description": "<p>Абонент не найден.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/customer/info/",
    "title": "CustomerInfo: информация об абоненте",
    "name": "CustomerInfo",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Customer ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..64",
            "optional": false,
            "field": "ext_id",
            "description": "<p>Уникальный идентификатор абонента в биллинговой системе провайдера. Должен быть передан либо ext_id, либо customer_id.</p>"
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "field": "accounts",
            "description": "<p>Список аккаунтов абонента.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "accounts.id",
            "description": "<p>Идентификатор аккаунта.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "accounts.abonement",
            "description": "<p>Абонемент.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "accounts.activation_days_left",
            "description": "<p>Количество оставшихся дней активации. Рассчитывается как разница между датой деактивации и датой активации. При использовании внешнего биллинга это значение можно игнорировать.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "accounts.on_trial_period",
            "description": "<p>(1-Аккаунт находится в пробном периоде, 0-нет)</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "subscriptions",
            "description": "<p>Список активных подписок.</p>"
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
            "type": "Number",
            "optional": false,
            "field": "subscriptions.api_config_id",
            "description": "<p>ID внешнего API (null, если не задано).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "subscriptions.price",
            "description": "<p>Стоимость подписки.</p>"
          },
          {
            "group": "Ответ",
            "type": "Date",
            "allowedValues": [
              "yyyy-mm-dd"
            ],
            "optional": false,
            "field": "subscriptions.start_date",
            "description": "<p>Начало действия.</p>"
          },
          {
            "group": "Ответ",
            "type": "Date",
            "allowedValues": [
              "yyyy-mm-dd"
            ],
            "optional": false,
            "field": "subscriptions.end_date",
            "description": "<p>Окончание действия подписки (null, если подписка бесконечная).</p>"
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
            "description": "<p>Является ли подписка периодической.</p>"
          },
          {
            "group": "Ответ",
            "type": "Date",
            "allowedValues": [
              "yyyy-mm-dd"
            ],
            "optional": false,
            "field": "subscriptions.price_expiration",
            "description": "<p>Окончание действия цены (null, если отсутствует).</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "subscriptions.is_price_overridden",
            "description": "<p>Используется ли переопределение цены.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "subscriptions.is_closed",
            "description": "<p>Является ли подписка закрытой.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "balance",
            "description": "<p>Баланс абонента.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "payments_count",
            "description": "<p>Количество всех подтвержденных транзакций.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "tariffs_info",
            "description": "<p>Список тарифных пакетов, подключенных у абонента.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs_info.id",
            "description": "<p>Идентификатор тарифа.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs_info.ext_id",
            "description": "<p>Идентификатор тарифа в биллинговой системе провайдера.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "vtariffs_info",
            "description": "<p>Список виртуальных тарифных пакетов, подключенных у абонента.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "vtariffs_info.id",
            "description": "<p>Идентификатор тарифа.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "vtariffs_info.ext_id",
            "description": "<p>Идентификатор тарифа в биллинговой системе провайдера.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number[]",
            "optional": false,
            "field": "tariffs",
            "description": "<p>Deprecated. Список идентификаторов тарифных пакетов, подключенных у абонента.</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
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
            "description": "<p>Абонент не найден.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/customer/merchant_url/",
    "title": "CustomerMerchantUrl: запрос URL страницы платежа мерчанта",
    "name": "CustomerMerchantUrl",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Customer ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..64",
            "optional": false,
            "field": "ext_id",
            "description": "<p>Уникальный идентификатор абонента в биллинговой системе провайдера. Должен быть передан либо ext_id, либо customer_id.</p>"
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Абонент не найден.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Некорректная сумма платежа.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>Мерчант не найден.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "4",
            "description": "<p>Ошибка создания ссылки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "723",
            "description": "<p>Некорректная конфигурация платёжного шлюза.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/customer/modify/",
    "title": "CustomerModify: изменение абонента",
    "name": "CustomerModify",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Customer ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..64",
            "optional": false,
            "field": "ext_id",
            "description": "<p>Уникальный идентификатор абонента в биллинговой системе провайдера. Должен быть передан либо ext_id, либо customer_id. В случае, если передан и ext_id, и customer_id, то ext_id будет перезаписан.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..256",
            "optional": true,
            "field": "firstname",
            "defaultValue": "пустое",
            "description": "<p>Имя. Хотя бы одно из полей ФИО или примечание должно быть указано.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..256",
            "optional": true,
            "field": "middlename",
            "defaultValue": "пустое",
            "description": "<p>Отчество. Хотя бы одно из полей ФИО или примечание должно быть указано.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..256",
            "optional": true,
            "field": "lastname",
            "defaultValue": "пустое",
            "description": "<p>Фамилия. Хотя бы одно из полей ФИО или примечание должно быть указано.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "allowedValues": [
              "yyyy-mm-dd"
            ],
            "optional": true,
            "field": "birthdate",
            "defaultValue": "пустое",
            "description": "<p>Дата рождения.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..6",
            "optional": true,
            "field": "passport_number",
            "defaultValue": "пустое",
            "description": "<p>Номер паспорта.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..4",
            "optional": true,
            "field": "passport_series",
            "defaultValue": "пустое",
            "description": "<p>Серия паспорта.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "allowedValues": [
              "yyyy-mm-dd"
            ],
            "optional": true,
            "field": "passport_issue_date",
            "defaultValue": "пустое",
            "description": "<p>Дата выдачи паспорта.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "passport_issued_by",
            "defaultValue": "пустое",
            "description": "<p>Паспортные данные: кем выдан.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "postal_address_street",
            "defaultValue": "пустое",
            "description": "<p>Почтовый адрес: название улицы.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..32",
            "optional": true,
            "field": "postal_address_bld",
            "defaultValue": "пустое",
            "description": "<p>Почтовый адрес: номер дома.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..32",
            "optional": true,
            "field": "postal_address_apt",
            "defaultValue": "пустое",
            "description": "<p>Почтовый адрес: номер квартиры.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..32",
            "optional": true,
            "field": "postal_address_zip",
            "defaultValue": "пустое",
            "description": "<p>Почтовый адрес: индекс.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "billing_address_street",
            "defaultValue": "пустое",
            "description": "<p>Юридический адрес: название улицы.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..32",
            "optional": true,
            "field": "billing_address_bld",
            "defaultValue": "пустое",
            "description": "<p>Юридический адрес: номер дома, строение.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..32",
            "optional": true,
            "field": "billing_address_apt",
            "defaultValue": "пустое",
            "description": "<p>Юридический адрес: номер помещения.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..32",
            "optional": true,
            "field": "billing_address_zip",
            "defaultValue": "пустое",
            "description": "<p>Юридический адрес: индекс.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..24",
            "optional": true,
            "field": "mobile_phone_number",
            "defaultValue": "пустое",
            "description": "<p>Номер мобильного телефона.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..24",
            "optional": true,
            "field": "phone_number_1",
            "defaultValue": "пустое",
            "description": "<p>Номер телефона.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..24",
            "optional": true,
            "field": "phone_number_2",
            "defaultValue": "пустое",
            "description": "<p>Номер телефона.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..24",
            "optional": true,
            "field": "fax_phone_number",
            "defaultValue": "пустое",
            "description": "<p>Номер факса.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..254",
            "optional": true,
            "field": "email",
            "defaultValue": "пустое",
            "description": "<p>Адрес email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "company_name",
            "defaultValue": "пустое",
            "description": "<p>Название компании.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..512",
            "optional": true,
            "field": "comment",
            "defaultValue": "пустое",
            "description": "<p>Примечание. Хотя бы одно из полей ФИО или примечание должно быть указано.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..9",
            "optional": true,
            "field": "bank_account_blz",
            "defaultValue": "пустое",
            "description": "<p>BLZ банковского аккаунта абонента.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..11",
            "optional": true,
            "field": "bank_account_bic",
            "defaultValue": "пустое",
            "description": "<p>BIC банковского аккаунта абонента.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..40",
            "optional": true,
            "field": "bank_account_number",
            "defaultValue": "пустое",
            "description": "<p>Номер банковского аккаунта абонента.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..34",
            "optional": true,
            "field": "bank_account_iban",
            "defaultValue": "пустое",
            "description": "<p>IBAN банковского аккаунта абонента.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "bank_account_bank_name",
            "defaultValue": "пустое",
            "description": "<p>Название банка для банковского аккаунта абонента.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..128",
            "optional": true,
            "field": "bank_account_owner_name",
            "defaultValue": "пустое",
            "description": "<p>Имя владельца банковского аккаунта абонента.</p>"
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object",
            "optional": false,
            "field": "error_fields",
            "description": "<p>Словарь сообщений об ошибках.</p>"
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
            "description": "<p>Абонент не найден.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Переданные параметры абонента не прошли валидацию. Детали в error_message.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/customer/payment/create/",
    "title": "CustomerPaymentCreate: создание платежа для абонента",
    "name": "CustomerPaymentCreate",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Customer ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..64",
            "optional": false,
            "field": "ext_id",
            "description": "<p>Уникальный идентификатор абонента в биллинговой системе провайдера. Должен быть передан либо ext_id, либо customer_id.</p>"
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Внешняя ошибка платежного шлюза (Пример - сетевая ошибка).</p>"
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
            "description": "<p>Подозрение на мошенничество.</p>"
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
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "10",
            "description": "<p>Некорректная карта.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "11",
            "description": "<p>Ошибка банка-эмитента.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "12",
            "description": "<p>Пользователь не зареристрирован.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "13",
            "description": "<p>Операция не поддерживается мерчантом.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "14",
            "description": "<p>Ошибка при регистрации.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "100",
            "description": "<p>Абонент не найден.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "723",
            "description": "<p>Некорректная конфигурация платёжного шлюза.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/customer/payment/process/",
    "title": "CustomerPaymentProcess: передача платежных данных шлюзу",
    "name": "CustomerPaymentProcess",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Customer ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..64",
            "optional": false,
            "field": "ext_id",
            "description": "<p>Уникальный идентификатор абонента в биллинговой системе провайдера. Должен быть передан либо ext_id, либо customer_id.</p>"
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
            "description": "<p>Внешняя ошибка платежного шлюза (Пример - сетевая ошибка).</p>"
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
            "description": "<p>Подозрение на мошенничество.</p>"
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
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "10",
            "description": "<p>Некорректная карта.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "11",
            "description": "<p>Ошибка банка-эмитента.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "12",
            "description": "<p>Пользователь не зареристрирован.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "13",
            "description": "<p>Операция не поддерживается мерчантом.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "14",
            "description": "<p>Ошибка при регистрации.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "100",
            "description": "<p>Абонент не найден.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/customer/tariff/assign/",
    "title": "CustomerTariffAssign: подключение тарифного пакета абоненту",
    "name": "CustomerTariffAssign",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Customer ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..64",
            "optional": false,
            "field": "ext_id",
            "description": "<p>Уникальный идентификатор абонента в биллинговой системе провайдера. Должен быть передан либо ext_id, либо customer_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "subscribe_svod",
            "defaultValue": "0",
            "description": "<p>Принудительно создаёт подписку megogo и/или start, если есть ассоциированный с тарифом обработчик API.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "tariff_id",
            "description": "<p>Идентификатор тарифного пакета в Smarty. Необходимо передать значение, если не переданы vtariff_id или tariff_ext_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "vtariff_id",
            "description": "<p>Идентификатор виртуального тарифного пакета в Smarty. Необходимо передать значение, если не переданы tariff_id или tariff_ext_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "tariff_ext_id",
            "description": "<p>Идентификатор виртуального или обычного тарифного пакета в Smarty. Необходимо передать значение, если не переданы vtariff_id или tariff_id.</p>"
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
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
            "description": "<p>Абонент не найден.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Тарифный пакет не найден.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/customer/tariff/remove/",
    "title": "CustomerTariffRemove: отключение тарифного пакета у абонента",
    "name": "CustomerTariffRemove",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Customer ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..64",
            "optional": false,
            "field": "ext_id",
            "description": "<p>Уникальный идентификатор абонента в биллинговой системе провайдера. Должен быть передан либо ext_id, либо customer_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tariff_id",
            "description": "<p>Идентификатор тарифного пакета в Smarty.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vtariff_id",
            "description": "<p>Идентификатор виртуального тарифного пакета в Smarty.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tariff_ext_id",
            "description": "<p>Идентификатор виртуального или обычного тарифного пакета в Smarty.</p>"
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
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
            "description": "<p>Абонент не найден.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Тарифный пакет не найден.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>Ошибка при отключении тарифа, вероятнее всего возникшая у внешнего провайдера.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/customer/tariffsubscription/create/",
    "title": "CustomerTariffSubscriptionCreate: подключение подписки абоненту",
    "name": "CustomerTariffSubscriptionCreate",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Customer ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..64",
            "optional": false,
            "field": "ext_id",
            "description": "<p>Уникальный идентификатор абонента в биллинговой системе провайдера. Должен быть передан либо ext_id, либо customer_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tariff_id",
            "description": "<p>Идентификатор тарифного пакета в Smarty.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "price",
            "description": "<p>Сумма списания в валюте тарифа. Если не указано, то используется сумма, указанная в тарифе. Автоматически выставляет флаг переопределения цены.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "duration",
            "description": "<p>Продолжительность подписки в днях. Делает подписку непериодической, если указан.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "allowedValues": [
              "yyyy-mm-dd"
            ],
            "optional": true,
            "field": "price_expiration",
            "description": "<p>Дата окончания действия переопределённой цены. Нельзя использовать без указания параметра price.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "allowedValues": [
              "yyyy-mm-dd"
            ],
            "optional": true,
            "field": "end_date",
            "description": "<p>Дата окончания подписки. Приоритетнее, чем duration.</p>"
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tariffsubscription_id",
            "description": "<p>Идентификатор подписки в Smarty.</p>"
          }
        ],
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
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
            "description": "<p>Абонент не найден.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Тарифный пакет не найден.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>Ошибка при создании подписки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "100",
            "description": "<p>Не используется подписочная модель.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/customer/tariffsubscription/delete/",
    "title": "CustomerTariffSubscriptionDelete: удаление подписки",
    "name": "CustomerTariffSubscriptionDelete",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID подписки.</p>"
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
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
            "description": "<p>Подписка не найдена.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Неизвестная ошибка.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "100",
            "description": "<p>Не используется подписочная модель.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/customer/transaction/list/",
    "title": "CustomerTransactionList: Cписок доступных тарифных опций в Smarty",
    "name": "CustomerTransactionList",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Customer ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..64",
            "optional": false,
            "field": "ext_id",
            "description": "<p>Уникальный идентификатор абонента в биллинговой системе провайдера. Должен быть передан либо ext_id, либо customer_id.</p>"
          },
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
            "type": "Number",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Список транзакций.</p>"
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
            "field": "payments.amount",
            "description": "<p>Сумма транзакции.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "payments.source",
            "description": "<p>Источник транзакции.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "payments.datetime",
            "description": "<p>Дата и время проведения транзакции.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "payments.comment",
            "description": "<p>Примечание к транзакции.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "payments.processed",
            "description": "<p>Завершена ли транзакция.</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
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
            "description": "<p>Абонент не найден.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/session/list/",
    "title": "SessionList: Список текущих сессий",
    "name": "SessionList",
    "group": "Session",
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "field": "sessions",
            "description": "<p>Список текущих сессий.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "sessions.account",
            "description": "<p>Абонемент.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "sessions.ip",
            "description": "<p>IP-адрес.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "sessions.uid",
            "description": "<p>MAC/UID устройства.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "sessions.online",
            "description": "<p>Онлайн/оффайн.</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
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
    "filename": "../../../billing/api.py",
    "groupTitle": "Session"
  },
  {
    "type": "post",
    "url": "/tariff/additional/list/",
    "title": "TariffAdditionalList: Cписок доступных дополнительных тарифных пакетов в Smarty",
    "name": "TariffAdditionalList",
    "group": "Tariff",
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Список доступных дополнительных тарифных пакетов.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs.id",
            "description": "<p>Идентификатор тарифного пакета.</p>"
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
            "type": "Decimal",
            "optional": false,
            "field": "tariffs.period",
            "description": "<p>Период оплаты. Если 0, то тариф является системным.</p>"
          },
          {
            "group": "Ответ",
            "type": "Decimal",
            "optional": false,
            "field": "tariffs.price",
            "description": "<p>Стоимость подписки.</p>"
          },
          {
            "group": "Ответ",
            "type": "Decimal",
            "optional": false,
            "field": "tariffs.activation_price",
            "description": "<p>Стоимость активации.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs.sessions_count",
            "description": "<p>Максимальное количество одновременных сессий для дополнительных устройств.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs.basic_sessions_count",
            "description": "<p>Максимальное количество одновременных сессий для базовых устройств.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "tariffs.ip_restriction",
            "description": "<p>Режим ограничения по IP-адресу для одновременных сессий (0 - отключено, 1 - включено, сессии разрешены только с одинакового IP-адреса).</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "tariffs.channels",
            "description": "<p>Список телеканалов в тарифном пакете.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs.channels.id",
            "description": "<p>Идентификатор канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "tariffs.channels.name",
            "description": "<p>Название канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "tariffs.channels.icon",
            "description": "<p>URL иконки канала.</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
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
    "filename": "../../../billing/api.py",
    "groupTitle": "Tariff"
  },
  {
    "type": "post",
    "url": "/tariff/basic/list/",
    "title": "TariffBasicList: Cписок доступных базовых тарифных пакетов в Smarty",
    "name": "TariffBasicList",
    "group": "Tariff",
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Список доступных базовых тарифных пакетов.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs.id",
            "description": "<p>Идентификатор тарифного пакета.</p>"
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
            "type": "Decimal",
            "optional": false,
            "field": "tariffs.period",
            "description": "<p>Период оплаты. Если 0, то тариф является системным.</p>"
          },
          {
            "group": "Ответ",
            "type": "Decimal",
            "optional": false,
            "field": "tariffs.price",
            "description": "<p>Стоимость подписки.</p>"
          },
          {
            "group": "Ответ",
            "type": "Decimal",
            "optional": false,
            "field": "tariffs.activation_price",
            "description": "<p>Стоимость активации.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs.basic_tariff_priority",
            "description": "<p>Приоритет/признак принадлежности тарифа к базовому пакету. 10 - наивысший, 1 - наименьший. Базовый тариф с наивысшим приоритетом автоматически подключается абоненту при регистрации.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs.sessions_count",
            "description": "<p>Максимальное количество одновременных сессий для дополнительных устройств.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs.basic_sessions_count",
            "description": "<p>Максимальное количество одновременных сессий для базовых устройств.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "tariffs.ip_restriction",
            "description": "<p>Режим ограничения по IP-адресу для одновременных сессий (0 - отключено, 1 - включено, сессии разрешены только с одинакового IP-адреса).</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "tariffs.channels",
            "description": "<p>Список телеканалов в тарифном пакете.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs.channels.id",
            "description": "<p>Идентификатор канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "tariffs.channels.name",
            "description": "<p>Название канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "tariffs.channels.icon",
            "description": "<p>URL иконки канала.</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
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
    "filename": "../../../billing/api.py",
    "groupTitle": "Tariff"
  },
  {
    "type": "post",
    "url": "/tariff/create/",
    "title": "TariffCreate: создание тарифного пакета",
    "name": "TariffCreate",
    "group": "Tariff",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Название тарифа.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "period",
            "description": "<p>Период оплаты. Если 0, то тариф -- системный.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "price",
            "defaultValue": "0.0",
            "description": "<p>Стоимость тарифного пакета (за рассчетный период).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "default_activation_price",
            "defaultValue": "None",
            "description": "<p>Стоимость активации по-умолчанию.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "enabled",
            "defaultValue": "1",
            "description": "<p>Включен.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "assigned_by_default",
            "defaultValue": "0",
            "description": "<p>Является тарифным пакетом, подключаемым по умолчанию.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "required",
            "defaultValue": "0",
            "description": "<p>Обязательный. Такой пакет нельзя отключить в личном кабинете.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sessions_count",
            "description": "<p>Максимальное количество одновременных сессий дополнительных устройств.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "ip_restriction",
            "defaultValue": "0",
            "description": "<p>Флаг, означающий, включено ли ограничение по IP-адресу для одновременных сессий дополнительных устройств.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "basic_sessions_count",
            "description": "<p>Максимальное количество привязанных базовых устройств.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "basic_tariff_priority",
            "description": "<p>Признак базового тарифа. При значении 0 пакет не будет являться базовым тарифным пакетом, значения от 1 до 10 определяют приоритет пакета (1 - наименьший, 10 - наивысший).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "available_for_inactive_accounts",
            "defaultValue": "0",
            "description": "<p>Доступен только для неактивных аккаунтов.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "available_everywhere",
            "defaultValue": "1",
            "description": "<p>Доступен во всех городах и странах.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "display_in_channels_widget",
            "defaultValue": "1",
            "description": "<p>Показывать каналы из этого пакета на сайте в личном кабинете.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "used_for_channel_list",
            "defaultValue": "1",
            "description": "<p>Используется для выборки списка каналов.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "used_for_video_list",
            "defaultValue": "1",
            "description": "<p>Используется для выборки списка фильмов.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "used_for_radio_list",
            "defaultValue": "1",
            "description": "<p>Используется для выборки списка радио.</p>"
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object",
            "optional": false,
            "field": "error_fields",
            "description": "<p>Словарь сообщений об ошибках.</p>"
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
            "description": "<p>Устойство не найдено.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Tariff"
  },
  {
    "type": "post",
    "url": "/tariff/delete/",
    "title": "TariffDelete: удаление тарифного пакета",
    "name": "TariffDelete",
    "group": "Tariff",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tariff_id",
            "description": "<p>Идентификатор тарифного пакета.</p>"
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
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
            "description": "<p>Тарифный пакет не найден.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Неизвестная ошибка.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Tariff"
  },
  {
    "type": "post",
    "url": "/tariff/list/",
    "title": "TariffList: Cписок доступных тарифных пакетов в Smarty",
    "name": "TariffList",
    "group": "Tariff",
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Список доступных тарифных пакетов.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs.id",
            "description": "<p>Идентификатор тарифного пакета.</p>"
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
            "type": "Decimal",
            "optional": false,
            "field": "tariffs.period",
            "description": "<p>Период оплаты. Если 0, то тариф является системным.</p>"
          },
          {
            "group": "Ответ",
            "type": "Decimal",
            "optional": false,
            "field": "tariffs.price",
            "description": "<p>Стоимость подписки.</p>"
          },
          {
            "group": "Ответ",
            "type": "Decimal",
            "optional": false,
            "field": "tariffs.activation_price",
            "description": "<p>Стоимость активации.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs.basic_tariff_priority",
            "description": "<p>Приоритет/признак принадлежности тарифа к базовому пакету. 10 - наивысший, 1 - наименьший, 0 - не является базовым тарифом. Базовый тариф с наивысшим приоритетом автоматически подключается абоненту при регистрации.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs.sessions_count",
            "description": "<p>Максимальное количество одновременных сессий для дополнительных устройств.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs.basic_sessions_count",
            "description": "<p>Максимальное количество одновременных сессий для базовых устройств.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "tariffs.ip_restriction",
            "description": "<p>Режим ограничения по IP-адресу для одновременных сессий (0 - отключено, 1 - включено, сессии разрешены только с одинакового IP-адреса).</p>"
          },
          {
            "group": "Ответ",
            "type": "Object[]",
            "optional": false,
            "field": "tariffs.channels",
            "description": "<p>Список телеканалов в тарифном пакете.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs.channels.id",
            "description": "<p>Идентификатор канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "tariffs.channels.name",
            "description": "<p>Название канала.</p>"
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "tariffs.channels.icon",
            "description": "<p>URL иконки канала.</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
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
    "filename": "../../../billing/api.py",
    "groupTitle": "Tariff"
  },
  {
    "type": "post",
    "url": "/tariff/modify/",
    "title": "TariffModify: изменение тарифного пакета",
    "name": "TariffModify",
    "group": "Tariff",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tariff_id",
            "description": "<p>Идентификатор тарифного пакета в Smarty.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Название тарифа.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "period",
            "description": "<p>Период оплаты. Если 0, то тариф -- системный.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "price",
            "description": "<p>Стоимость тарифного пакета (за рассчетный период).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "default_activation_price",
            "defaultValue": "None",
            "description": "<p>Стоимость активации по-умолчанию.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "enabled",
            "description": "<p>Включен.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "assigned_by_default",
            "description": "<p>Является тарифным пакетом, подключаемым по умолчанию.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "required",
            "description": "<p>Обязательный. Такой пакет нельзя отключить в личном кабинете.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "sessions_count",
            "description": "<p>Максимальное количество одновременных сессий дополнительных устройств.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "ip_restriction",
            "description": "<p>Флаг, означающий, включено ли ограничение по IP-адресу для одновременных сессий дополнительных устройств.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "basic_sessions_count",
            "description": "<p>Максимальное количество привязанных базовых устройств.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "basic_tariff_priority",
            "description": "<p>Признак базового тарифа. При значении 0 пакет не будет являться базовым тарифным пакетом, значения от 1 до 10 определяют приоритет пакета (1 - наименьший, 10 - наивысший).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "available_for_inactive_accounts",
            "description": "<p>Доступен только для неактивных аккаунтов.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "display_in_channels_widget",
            "description": "<p>Показывать каналы из этого пакета на сайте в личном кабинете.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "used_for_channel_list",
            "description": "<p>Используется для выборки списка каналов.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "used_for_video_list",
            "description": "<p>Используется для выборки списка фильмов.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "used_for_radio_list",
            "description": "<p>Используется для выборки списка радио.</p>"
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
          },
          {
            "group": "Ответ",
            "type": "Object",
            "optional": false,
            "field": "error_fields",
            "description": "<p>Словарь сообщений об ошибках.</p>"
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
            "description": "<p>Тарифный пакет не найден.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Tariff"
  },
  {
    "type": "post",
    "url": "/tariff/option/list/",
    "title": "TariffOptionList: Cписок доступных тарифных опций в Smarty",
    "name": "TariffOptionList",
    "group": "Tariff",
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Список доступных тарифных опций.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs.id",
            "description": "<p>Идентификатор тарифного пакета.</p>"
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
            "type": "Decimal",
            "optional": false,
            "field": "tariffs.period",
            "description": "<p>Период оплаты. Если 0, то тариф является системным.</p>"
          },
          {
            "group": "Ответ",
            "type": "Decimal",
            "optional": false,
            "field": "tariffs.price",
            "description": "<p>Стоимость подписки.</p>"
          },
          {
            "group": "Ответ",
            "type": "Decimal",
            "optional": false,
            "field": "tariffs.activation_price",
            "description": "<p>Стоимость активации.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs.sessions_count",
            "description": "<p>Максимальное количество одновременных сессий для дополнительных устройств.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "tariffs.basic_sessions_count",
            "description": "<p>Максимальное количество одновременных сессий для базовых устройств.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "tariffs.ip_restriction",
            "description": "<p>Режим ограничения по IP-адресу для одновременных сессий (0 - отключено, 1 - включено, сессии разрешены только с одинакового IP-адреса).</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
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
    "filename": "../../../billing/api.py",
    "groupTitle": "Tariff"
  },
  {
    "type": "post",
    "url": "/tariff/streamservice/assign/",
    "title": "TariffStreamServiceAssign: привязка стриминг-сервиса к тарифному пакету",
    "name": "TariffStreamServiceAssign",
    "group": "Tariff",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tariff_id",
            "description": "<p>Идентификатор тарифного пакета.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "service_id",
            "description": "<p>Идентификатор стриминг-сервиса.</p>"
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
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
            "description": "<p>Тарифный пакет не найден.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Стриминг-сервис не найден.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>Неизвестная ошибка.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Tariff"
  },
  {
    "type": "post",
    "url": "/tariff/streamservice/remove/",
    "title": "TariffStreamServiceRemove: отвязка стриминг-сервиса от тарифного пакета",
    "name": "TariffStreamServiceRemove",
    "group": "Tariff",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tariff_id",
            "description": "<p>Идентификатор тарифного пакета.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "service_id",
            "description": "<p>Идентификатор стриминг-сервиса.</p>"
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
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
            "description": "<p>Тарифный пакет не найден.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Стриминг-сервис не найден.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>Неизвестная ошибка.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Tariff"
  },
  {
    "type": "get",
    "url": "/transaction/create/",
    "title": "TransactionCreate: создание финансовой операции",
    "name": "TransactionCreate",
    "group": "Transaction",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "ext_id",
            "description": "<p>Уникальный идентификатор транзакции в биллинговой системе провайдера. Необходимо указывать это значение для отделения внутренних транзакций Smarty от внешних.</p>"
          },
          {
            "group": "Parameter",
            "type": "Decimal",
            "optional": true,
            "field": "amount",
            "defaultValue": "0",
            "description": "<p>Сумма денежных средств для зачисления. Для нецелочисленных значений используется разделитель &quot;.&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "processed",
            "defaultValue": "0",
            "description": "<p>Флаг, если значение 1, то транзакция считается обработанной.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "comment",
            "defaultValue": "пустое",
            "description": "<p>Комментарий.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Customer ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "transaction_type",
            "defaultValue": "пустое",
            "description": "<p>Тип покупки. Варианты: 1 - покупка фильма.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "..64",
            "optional": true,
            "field": "video_ext_id",
            "defaultValue": "пустое",
            "description": "<p>Уникальный идентификатор фильма в биллинговой системе провайдера. (обязательно, если transaction_type=1)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "allowedValues": [
              "YYYY-MM-DD",
              "hh:mm:ss"
            ],
            "optional": true,
            "field": "video_available_until",
            "defaultValue": "пустое",
            "description": "<p>Дата и время, до которого абоненту будет доступен просмотр фильма(в UTC+0).</p>"
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
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
            "description": "<p>Нет ошибки, транзакция создана успешно.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Транзакция с идентификатором ext_id уже существует.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Не указан идентификатор ext_id транзакции.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>Не указан video_ext_id.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "4",
            "description": "<p>Видео с таким ext_id не существует.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "5",
            "description": "<p>Некорректный формат даты.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Transaction"
  },
  {
    "type": "post",
    "url": "/transaction/delete/",
    "title": "TransactionDelete: удаление финансовой операции",
    "name": "TransactionDelete",
    "group": "Transaction",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "..255",
            "optional": false,
            "field": "ext_id",
            "description": "<p>Уникальный идентификатор транзакции в биллинговой системе провайдера.</p>"
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
            "field": "signature",
            "description": "<p>Подпись.</p>"
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
            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"
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
            "description": "<p>Нет ошибки, транзакция удалена успешно.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "1",
            "description": "<p>Транзакции с данным ext_id не существует.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Не указан идентификатор ext_id транзакции.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../billing/api.py",
    "groupTitle": "Transaction"
  }
] });
