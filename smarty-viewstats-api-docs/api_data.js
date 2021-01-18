define({ "api": [
  {
    "type": "get",
    "url": "/stat/push",
    "title": "StatPush: отправка данных телесмотрения",
    "name": "StatPush",
    "group": "Stat",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "channel_id",
            "description": "<p>Идентификатор телеканала, который в данный момент воспроизводится.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "program_id",
            "description": "<p>Идентификатор передачи, которая в данный момент воспроизводится. По умолчанию будет выбрана текущая передача на канале.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "channel_session",
            "description": "<p>Идентификатор уникальной сессии просмотра, значение должно меняться при каждом переключении канала.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "timeshift_offset",
            "defaultValue": "0",
            "description": "<p>Часовой сдвиг текущей трансляции LIVE TV.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "defaultValue": "live",
            "description": "<p>Тип сессии просмотра. Возможные значения: live, pvr.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "previous_channel_id",
            "description": "<p>Идентификатор телеканала, который воспроизводился до этого.</p>"
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
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "error_message",
            "description": "<p>Описание ошибки.</p>"
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
            "description": "<p>Отсутствует или неверный обязательный параметр, подробнее в error_message.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Ошибка связи с базой данных телесмотрения.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>Функция недоступна для данного Client ID.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../viewstats/views.py",
    "groupTitle": "Stat"
  },
  {
    "type": "get",
    "url": "/stat/video/push",
    "title": "StatVideoPush: отправка данных просмотра видео",
    "name": "StatVideoPush",
    "group": "Stat",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "video_id",
            "description": "<p>Идентификатор видео, который в данный момент воспроизводится.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "video_position",
            "description": "<p>Позиция видео в секундах.</p>"
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
          },
          {
            "group": "Ответ",
            "type": "String",
            "optional": false,
            "field": "error_message",
            "description": "<p>Описание ошибки.</p>"
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
            "description": "<p>Отсутствует или неверный обязательный параметр, подробнее в error_message.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "2",
            "description": "<p>Ошибка связи с базой данных телесмотрения.</p>"
          },
          {
            "group": "Коды ошибок error",
            "optional": false,
            "field": "3",
            "description": "<p>Функция недоступна для данного Client ID.</p>"
          }
        ]
      }
    },
    "version": "1.40.0",
    "filename": "../../../viewstats/views.py",
    "groupTitle": "Stat"
  }
] });
