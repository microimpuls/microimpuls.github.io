define({ "api": [  {    "type": "get",    "url": "/transaction/create/",    "title": "TransactionCreate: создание финансовой операции",    "name": "TransactionCreate",    "group": "Transaction",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>Уникальный идентификатор транзакции в биллинговой системе провайдера. Необходимо указывать это значение для отделения внутренних транзакций Smarty от внешних.</p>"          },          {            "group": "Parameter",            "type": "Decimal",            "optional": false,            "field": "amount",            "description": "<p>Сумма денежных средств для зачисления. Для нецелочисленных значений используется разделитель &quot;.&quot;.</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "customer_id",            "description": "<p>Customer ID.</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "client_id",            "description": "<p>Client ID.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "signature",            "description": "<p>Signature.</p>"          }        ]      }    },    "success": {      "fields": {        "Ответ": [          {            "group": "Ответ",            "type": "Number",            "optional": false,            "field": "error",            "description": "<p>Код ошибки.</p>"          },          {            "group": "Ответ",            "type": "String",            "optional": false,            "field": "error_message",            "description": "<p>Текст ошибки. Пустой, если error = 0.</p>"          }        ]      }    },    "error": {      "fields": {        "Коды ошибок error": [          {            "group": "Коды ошибок error",            "optional": false,            "field": "0",            "description": "<p>Нет ошибки, транзакция создана успешно.</p>"          },          {            "group": "Коды ошибок error",            "optional": false,            "field": "1",            "description": "<p>Транзакция с идентификатором id уже существует.</p>"          },          {            "group": "Коды ошибок error",            "optional": false,            "field": "2",            "description": "<p>Не указан идентификатор id.</p>"          }        ]      }    },    "version": "1.40.0",    "filename": "/Users/ksotik/Work/Microimpuls/git/smarty/billing/api.py",    "groupTitle": "Transaction"  }] });
