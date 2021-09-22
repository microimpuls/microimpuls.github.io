define({ "api": [
  {
    "type": "post",
    "url": "/actor/delete/",
    "title": "ActorDelete: удаление актера",
    "name": "Actor",
    "group": "Actor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID актера.</p>"
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
    "groupTitle": "Actor",
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
    "url": "/camera/create/",
    "title": "CameraCreate: создание камеры",
    "name": "CameraCreate",
    "group": "Camera",
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
            "optional": true,
            "field": "category",
            "description": "<p>ID категории в системе Smarty.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "additional_categories",
            "description": "<p>Список ID категорий в системе Smarty.</p>"
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
            "description": "<p>Флаг, включена ли камера.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "sort_after_cid",
            "description": "<p>Поместить камеру в сортировке после указанной. Если не указано, то помещается в конец.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "epg_channel",
            "description": "<p>ID EpgChannel в системе Smarty.</p>"
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
            "field": "stream_services",
            "description": "<p>Список ID стриминг сервисов в системе Smarty.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "uri",
            "description": "<p>Прямой URL потока.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "url_prefix",
            "description": "<p>URL-префикс.</p>"
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
            "type": "String",
            "optional": true,
            "field": "multicast_address",
            "description": "<p>Multicast-адрес.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "secondary_multicast_address",
            "description": "<p>Multicast-адрес для записи.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id_for_stream_service",
            "description": "<p>Переопределить ID для видео-серверов.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "comment",
            "description": "<p>Примечание.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "option1",
            "defaultValue": "пусто",
            "description": "<p>Опция 1.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "option2",
            "defaultValue": "пусто",
            "description": "<p>Опция 2.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "option3",
            "defaultValue": "пусто",
            "description": "<p>Опция 3.</p>"
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
            "description": "<p>ID созданной камеры.</p>"
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
    "groupTitle": "Camera",
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
    "url": "/camera/delete/",
    "title": "CameraDelete: удаление камеры",
    "name": "CameraDelete",
    "group": "Camera",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID камеры.</p>"
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
    "groupTitle": "Camera",
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
    "url": "/channel/create/",
    "title": "ChannelCreate: создание канала",
    "name": "ChannelCreate",
    "group": "Channel",
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
            "field": "hbb_channel_pid",
            "description": "<p>HbbTV ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "uri",
            "description": "<p>Прямой URL потока.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "url_prefix",
            "description": "<p>URL-префикс.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "multicast_address",
            "description": "<p>Multicast-адрес.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "secondary_multicast_address",
            "description": "<p>Multicast-адрес для записи.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id_for_stream_service",
            "description": "<p>Переопределить ID для видео-серверов.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "comment",
            "description": "<p>Примечание.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "version",
            "description": "<p>Версия.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "option1",
            "description": "<p>Опция 1.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "option2",
            "description": "<p>Опция 2.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "option3",
            "description": "<p>Опция 3.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "telemeter_account_name",
            "description": "<p>Название аккаунта в телеизмерителе.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "telemeter_tmsec_name",
            "description": "<p>TmsecName в телеизмерителе.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "telemeter_cat_id",
            "description": "<p>Cat ID в телеизмерителе.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "telemeter_vc_id",
            "description": "<p>Content ID в телеизмерителе.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "telemeter_vc_version",
            "description": "<p>Content version в телеизмерителе.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "mediahills_id",
            "defaultValue": "0",
            "description": "<p>MediaHills ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pause_live_tv_shift",
            "defaultValue": "0",
            "description": "<p>Временной сдвиг для функции Pause Live TV.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "lcn_number",
            "defaultValue": "0",
            "description": "<p>Логический номер канала (LCN).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "recording_days",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0"
            ],
            "optional": true,
            "field": "telemeter",
            "description": "<p>Телеизмеритель. 0 - Mediascope.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1",
              "2",
              "3"
            ],
            "optional": true,
            "field": "aspect_ratio",
            "defaultValue": "0",
            "description": "<p>Соотношение сторон по умолчанию. 0 - Auto. 1 - 16:9 2 - 4:3 3 - На весь экран.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "show_in_all",
            "defaultValue": "1",
            "description": "<p>Отображать канал в категории 'Все'.</p>"
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
            "field": "display_on_site",
            "defaultValue": "1",
            "description": "<p>Показывать данный канал на сайте.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "category",
            "description": "<p>ID категории в системе Smarty.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "epg_channel",
            "description": "<p>ID EpgChannel в системе Smarty.</p>"
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
            "field": "price_category",
            "description": "<p>ID ценовой категории в системе Smarty.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "sort_after_cid",
            "description": "<p>Поместить канал в сортировке после указанного. Если не указано, то помещается в конец.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "additional_categories",
            "description": "<p>Список ID категорий в системе Smarty.</p>"
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
            "field": "stream_services",
            "description": "<p>Список ID стриминг сервисов в системе Smarty.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "hbb_providers",
            "description": "<p>Список ID провайдеров HBB в системе Smarty.</p>"
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
            "description": "<p>ID созданного канала.</p>"
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
    "groupTitle": "Channel",
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
    "url": "/channel/delete/",
    "title": "ChannelDelete: удаление канала",
    "name": "Channel",
    "group": "ChannelDelete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID канала.</p>"
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
    "groupTitle": "ChannelDelete",
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
    "url": "/epg/program/time/specify/",
    "title": "EPGProgramTimeSpecify: установка точных временных меток начала передачи",
    "name": "EPGProgramTimeSpecify",
    "group": "EPGProgram",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "external_id",
            "description": "<p>ID эфирного события (event_id).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start",
            "description": "<p>Фактическое время начала эфирного события.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Пример тела запроса: ",
        "content": "<programme external_id=\"267d3120-831d-4b39-9c71-5d581f81ea88\" start=\"2019041509\"/>",
        "type": "xml"
      }
    ],
    "version": "1.40.0",
    "filename": "../../../content/api.py",
    "groupTitle": "EPGProgram",
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
    "url": "/radio/delete/",
    "title": "RadioDelete: удаление радио",
    "name": "RadioDelete",
    "group": "Radio",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID радио.</p>"
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
    "groupTitle": "Radio",
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
    "url": "/seance/delete/",
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
    "url": "/video/delete/",
    "title": "VideoDelete: удаление фильма",
    "name": "VideoDelete",
    "group": "Video",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID видео.</p>"
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
    "groupTitle": "Video",
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
