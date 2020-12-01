define({ "api": [
  {
    "type": "post",
    "url": "/actor/create/",
    "title": "ActorCreate: создание актёра",
    "name": "ActorCreate",
    "group": "Actor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Полное имя.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name_lang1",
            "description": "<p>Полное имя.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name_lang2",
            "description": "<p>Полное имя.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name_lang3",
            "description": "<p>Полное имя.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name_lang4",
            "description": "<p>Полное имя.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name_lang5",
            "description": "<p>Полное имя.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "allowedValues": [
              "YYYY-MM-DD"
            ],
            "optional": true,
            "field": "birthdate",
            "description": "<p>Дата рождения.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": true,
            "field": "gender",
            "description": "<p>Пол. 1 - Мужской. 2 - Женский.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "country",
            "description": "<p>Страна.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "country_lang1",
            "description": "<p>Страна.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "country_lang2",
            "description": "<p>Страна.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "country_lang3",
            "description": "<p>Страна.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "country_lang4",
            "description": "<p>Страна.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "country_lang5",
            "description": "<p>Страна.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "profession",
            "description": "<p>Профессия.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "profession_lang1",
            "description": "<p>Профессия.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "profession_lang2",
            "description": "<p>Профессия.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "profession_lang3",
            "description": "<p>Профессия.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "profession_lang4",
            "description": "<p>Профессия.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "profession_lang5",
            "description": "<p>Профессия.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "biography",
            "description": "<p>Биография.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "biography_lang1",
            "description": "<p>Биография.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "biography_lang2",
            "description": "<p>Биография.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "biography_lang3",
            "description": "<p>Биография.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "biography_lang4",
            "description": "<p>Биография.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "biography_lang5",
            "description": "<p>Биография.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name_orig",
            "description": "<p>Оригинальное имя.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "movie_db_id",
            "description": "<p>ID актёра в системе провайдера фильмов (кинопоиск или Cinemate).</p>"
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
            "description": "<p>ID созданного актёра.</p>"
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
    "version": "1.40.0",
    "filename": "../../../content/api.py",
    "groupTitle": "Actor",
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
            "field": "20",
            "description": "<p>Неправильно передан параметр.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "21",
            "description": "<p>Ошибка при валидации данных.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "22",
            "description": "<p>Ошибка при сохранении данных.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/radio/create/",
    "title": "RadioCreate: создание радиостанции",
    "name": "RadioCreate",
    "group": "Radio",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Название.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name_lang1",
            "description": "<p>Локализованное название (язык 1).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name_lang2",
            "description": "<p>Локализованное название (язык 2).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name_lang3",
            "description": "<p>Локализованное название (язык 3).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name_lang4",
            "description": "<p>Локализованное название (язык 4).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name_lang5",
            "description": "<p>Локализованное название (язык 5).</p>"
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
            "defaultValue": "0",
            "description": "<p>Флаг, включена ли радиостанция.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "tariffs",
            "description": "<p>Список ID тарифов в системе Smarty.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "uri",
            "description": "<p>Статичная ссылка на радоистанцию.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Описание.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "radio_channel",
            "description": "<p>ID иконки радиоканала в системе Smarty.</p>"
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
            "description": "<p>ID созданной радиостании.</p>"
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
    "version": "1.40.0",
    "filename": "../../../content/api.py",
    "groupTitle": "Radio",
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
            "field": "20",
            "description": "<p>Неправильно передан параметр.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "21",
            "description": "<p>Ошибка при валидации данных.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "22",
            "description": "<p>Ошибка при сохранении данных.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/seance/create/",
    "title": "SeanceCreate: создание сеанса",
    "name": "SeanceCreate",
    "group": "Seance",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "vid",
            "description": "<p>ID видео.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "vfid",
            "description": "<p>ID ассета. Если не указано для внутренних фильмов, то будет браться первый ассет из списка.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "allowedValues": [
              "YYYY-MM-DDThh:mm:ss.sTZD"
            ],
            "optional": false,
            "field": "date_start",
            "description": "<p>Дата начала сеанса. Формат ISO-8601.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "allowedValues": [
              "YYYY-MM-DDThh:mm:ss.sTZD"
            ],
            "optional": true,
            "field": "date_end",
            "description": "<p>Дата окончания сеанса. Формат ISO-8601. Если не указано, высчитывается исходя из длительности фильма или ассета.</p>"
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
            "description": "<p>ID созданного сеанса.</p>"
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
    "version": "1.40.0",
    "filename": "../../../content/api.py",
    "groupTitle": "Seance",
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
            "field": "20",
            "description": "<p>Неправильно передан параметр.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "21",
            "description": "<p>Ошибка при валидации данных.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "22",
            "description": "<p>Ошибка при сохранении данных.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/seance/create/",
    "title": "SeanceDelete: удаление сеанса",
    "name": "SeanceDelete",
    "group": "Seance",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID сеанса.</p>"
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
    "version": "1.40.0",
    "filename": "../../../content/api.py",
    "groupTitle": "Seance",
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
            "field": "20",
            "description": "<p>Неправильно передан параметр.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "21",
            "description": "<p>Ошибка при валидации данных.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "22",
            "description": "<p>Ошибка при сохранении данных.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/seance/ticket/create/",
    "title": "SeanceTicketCreate: создание билета для сеанса",
    "name": "SeanceTicketCreate",
    "group": "Seance",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sid",
            "description": "<p>ID сеанса.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "code",
            "description": "<p>Код билета. Если не указан то генерируется случайный 8-значный код.</p>"
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
            "description": "<p>ID билета.</p>"
          },
          {
            "group": "Ответ",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Код билета.</p>"
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
            "field": "1",
            "description": "<p>Код уже используется.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "0",
            "description": "<p>Нет ошибки.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "20",
            "description": "<p>Неправильно передан параметр.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "21",
            "description": "<p>Ошибка при валидации данных.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "22",
            "description": "<p>Ошибка при сохранении данных.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../content/api.py",
    "groupTitle": "Seance"
  },
  {
    "type": "post",
    "url": "/seance/ticket/delete/",
    "title": "SeanceTicketDelete: удаление билета",
    "name": "SeanceTicketDelete",
    "group": "Seance",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID билета.</p>"
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
    "version": "1.40.0",
    "filename": "../../../content/api.py",
    "groupTitle": "Seance",
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
            "field": "20",
            "description": "<p>Неправильно передан параметр.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "21",
            "description": "<p>Ошибка при валидации данных.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "22",
            "description": "<p>Ошибка при сохранении данных.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/video/create/",
    "title": "VideoCreate: создание фильма",
    "name": "VideoCreate",
    "group": "Video",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Название.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>Возрастной рейтинг.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name_lang1",
            "description": "<p>Название.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name_lang2",
            "description": "<p>Название.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name_lang3",
            "description": "<p>Название.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name_lang4",
            "description": "<p>Название.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name_lang5",
            "description": "<p>Название.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name_orig",
            "description": "<p>Оригинальное название.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Описание.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description_lang1",
            "description": "<p>Описание.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description_lang2",
            "description": "<p>Описание.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description_lang3",
            "description": "<p>Описание.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description_lang4",
            "description": "<p>Описание.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description_lang5",
            "description": "<p>Описание.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "year",
            "description": "<p>Год выхода.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "countries",
            "description": "<p>Страны, через запятую.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "countries_lang1",
            "description": "<p>Страны, через запятую.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "countries_lang2",
            "description": "<p>Страны, через запятую.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "countries_lang3",
            "description": "<p>Страны, через запятую.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "countries_lang4",
            "description": "<p>Страны, через запятую.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "countries_lang5",
            "description": "<p>Страны, через запятую.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "director",
            "description": "<p>Режиссер.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "director_lang1",
            "description": "<p>Режиссер.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "director_lang2",
            "description": "<p>Режиссер.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "director_lang3",
            "description": "<p>Режиссер.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "director_lang4",
            "description": "<p>Режиссер.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "director_lang5",
            "description": "<p>Режиссер.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "genres_kinopoisk",
            "description": "<p>Жанры в кинопоиске, через запятую.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "uri",
            "description": "<p>Статичная ссылка на видео.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "language",
            "description": "<p>Язык.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "language_lang1",
            "description": "<p>Язык.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "language_lang2",
            "description": "<p>Язык.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "language_lang3",
            "description": "<p>Язык.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "language_lang4",
            "description": "<p>Язык.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "language_lang5",
            "description": "<p>Язык.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "kinopoisk_id",
            "description": "<p>ID фильма в системе кинопоиска.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "kinopoisk_rating",
            "defaultValue": "0",
            "description": "<p>Рейтинг в системе кинопоиска.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "imdb_rating",
            "defaultValue": "0",
            "description": "<p>Рейтинг в системе IMDB.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "average_customers_rating",
            "defaultValue": "0",
            "description": "<p>Рейтинг пользователей.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "duration",
            "defaultValue": "0",
            "description": "<p>Длительность в минутах.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ext_id",
            "description": "<p>ID фильма в системе внешнего провайдера.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "allowedValues": [
              "YYYY-MM-DDThh:mm:ss.sTZD"
            ],
            "optional": true,
            "field": "premiere_date",
            "description": "<p>Дата премьеры. Формат ISO-8601.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "allowedValues": [
              "YYYY-MM-DDThh:mm:ss.sTZD"
            ],
            "optional": true,
            "field": "published_from",
            "description": "<p>Дата начала публикации. Формат ISO-8601.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "allowedValues": [
              "YYYY-MM-DDThh:mm:ss.sTZD"
            ],
            "optional": true,
            "field": "published_to",
            "description": "<p>Дата окончания публикации. Формат ISO-8601.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "parent_control",
            "defaultValue": "0",
            "description": "<p>Родительский контроль.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "is_announcement",
            "defaultValue": "0",
            "description": "<p>Является анонсом.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "copyright_holder",
            "description": "<p>ID правообладателя в системе Smarty.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "external_api_config",
            "description": "<p>ID обработчика API в системе Smarty.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "price_category",
            "description": "<p>ID ценовой категории в системе Smarty.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "genres",
            "description": "<p>Список ID жанров в системе Smarty.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "stream_services",
            "description": "<p>Список ID стриминг сервисов в системе Smarty.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "tariffs",
            "description": "<p>Список ID тарифов в системе Smarty.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "actors_set",
            "description": "<p>Список ID актёров в системе Smarty.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "available_on",
            "description": "<p>Список ID проигрывающих устройств в системе Smarty.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "package_videos",
            "description": "<p>Список ID видео в системе Smarty, которые будут входить в пакет видео.</p>"
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
            "description": "<p>ID созданного фильма.</p>"
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
    "version": "1.40.0",
    "filename": "../../../content/api.py",
    "groupTitle": "Video",
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
            "field": "20",
            "description": "<p>Неправильно передан параметр.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "21",
            "description": "<p>Ошибка при валидации данных.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "22",
            "description": "<p>Ошибка при сохранении данных.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/video/file/create/",
    "title": "VideofileCreate: создание ассета фильма",
    "name": "VideofileCreate",
    "group": "Video",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Название.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vid",
            "description": "<p>ID видео, для которого создается ассет.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name_lang1",
            "description": "<p>Название.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name_lang2",
            "description": "<p>Название.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name_lang3",
            "description": "<p>Название.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name_lang4",
            "description": "<p>Название.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name_lang5",
            "description": "<p>Название.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "filename",
            "description": "<p>Название файла.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "duration",
            "description": "<p>Продолжительность.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "is_trailer",
            "description": "<p>Является трейлером.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ext_id",
            "description": "<p>ID ассета фильма в системе внешнего провайдера.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "sort_after_vfid",
            "description": "<p>Поместить ассет в сортировке после указанного. Если не указано, то помещается в конец.</p>"
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
            "description": "<p>ID созданного ассета фильма.</p>"
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
    "version": "1.40.0",
    "filename": "../../../content/api.py",
    "groupTitle": "Video",
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
            "field": "20",
            "description": "<p>Неправильно передан параметр.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "21",
            "description": "<p>Ошибка при валидации данных.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "22",
            "description": "<p>Ошибка при сохранении данных.</p>"
          }
        ]
      }
    }
  }
] });