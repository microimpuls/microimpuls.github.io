define({ "api": [
  {
    "type": "get",
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
            "description": "<p>ID ассета.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "allowedValues": [
              "YYYY-MM-DD",
              "hh:mm:ss"
            ],
            "optional": false,
            "field": "date_start",
            "description": "<p>Дата начала сеанса.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "allowedValues": [
              "YYYY-MM-DD",
              "hh:mm:ss"
            ],
            "optional": true,
            "field": "date_end",
            "description": "<p>Дата окончания сеанса. Если не указано, высчитывается исходя из длительности фильма или ассета.</p>"
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
    "type": "get",
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
    "type": "get",
    "url": "/video/create/",
    "title": "VideoCreate: создание фильма",
    "name": "VideoCreate",
    "group": "Video",
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
