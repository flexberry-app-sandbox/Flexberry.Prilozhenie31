import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISPrilozhenie_3ДокПланЗаНаДLForm from './forms/i-i-s-prilozhenie-3-док-план-за-на-д-l';
import IISPrilozhenie_3СпрВидыРабLForm from './forms/i-i-s-prilozhenie-3-спр-виды-раб-l';
import IISPrilozhenie_3СпрЕдИзмерLForm from './forms/i-i-s-prilozhenie-3-спр-ед-измер-l';
import IISPrilozhenie_3СпрКонтрАгLForm from './forms/i-i-s-prilozhenie-3-спр-контр-аг-l';
import IISPrilozhenie_3СпрНоменLForm from './forms/i-i-s-prilozhenie-3-спр-номен-l';
import IISPrilozhenie_3СпрОбъектСтрLForm from './forms/i-i-s-prilozhenie-3-спр-объект-стр-l';
import IISPrilozhenie_3СпрПользовLForm from './forms/i-i-s-prilozhenie-3-спр-пользов-l';
import IISPrilozhenie_3СпрТипТрансСрLForm from './forms/i-i-s-prilozhenie-3-спр-тип-транс-ср-l';
import IISPrilozhenie_3СпрТранспСрLForm from './forms/i-i-s-prilozhenie-3-спр-трансп-ср-l';
import IISPrilozhenie_3ФактВыполРабLForm from './forms/i-i-s-prilozhenie-3-факт-выпол-раб-l';
import IISPrilozhenie_3ДокПланЗаНаДEForm from './forms/i-i-s-prilozhenie-3-док-план-за-на-д-e';
import IISPrilozhenie_3СпрВидыРабEForm from './forms/i-i-s-prilozhenie-3-спр-виды-раб-e';
import IISPrilozhenie_3СпрЕдИзмерEForm from './forms/i-i-s-prilozhenie-3-спр-ед-измер-e';
import IISPrilozhenie_3СпрКонтрАгEForm from './forms/i-i-s-prilozhenie-3-спр-контр-аг-e';
import IISPrilozhenie_3СпрНоменEForm from './forms/i-i-s-prilozhenie-3-спр-номен-e';
import IISPrilozhenie_3СпрОбъектСтрEForm from './forms/i-i-s-prilozhenie-3-спр-объект-стр-e';
import IISPrilozhenie_3СпрПользовEForm from './forms/i-i-s-prilozhenie-3-спр-пользов-e';
import IISPrilozhenie_3СпрТипТрансСрEForm from './forms/i-i-s-prilozhenie-3-спр-тип-транс-ср-e';
import IISPrilozhenie_3СпрТранспСрEForm from './forms/i-i-s-prilozhenie-3-спр-трансп-ср-e';
import IISPrilozhenie_3ФактВыполРабEForm from './forms/i-i-s-prilozhenie-3-факт-выпол-раб-e';
import IISPrilozhenie_3ДокПланЗаНаДModel from './models/i-i-s-prilozhenie-3-док-план-за-на-д';
import IISPrilozhenie_3СпрВидыРабModel from './models/i-i-s-prilozhenie-3-спр-виды-раб';
import IISPrilozhenie_3СпрЕдИзмерModel from './models/i-i-s-prilozhenie-3-спр-ед-измер';
import IISPrilozhenie_3СпрКонтрАгModel from './models/i-i-s-prilozhenie-3-спр-контр-аг';
import IISPrilozhenie_3СпрНоменModel from './models/i-i-s-prilozhenie-3-спр-номен';
import IISPrilozhenie_3СпрОбъектСтрModel from './models/i-i-s-prilozhenie-3-спр-объект-стр';
import IISPrilozhenie_3СпрПользовModel from './models/i-i-s-prilozhenie-3-спр-пользов';
import IISPrilozhenie_3СпрТипТрансСрModel from './models/i-i-s-prilozhenie-3-спр-тип-транс-ср';
import IISPrilozhenie_3СпрТранспСрModel from './models/i-i-s-prilozhenie-3-спр-трансп-ср';
import IISPrilozhenie_3ТЧПлЗНаДModel from './models/i-i-s-prilozhenie-3-т-ч-пл-з-на-д';
import IISPrilozhenie_3ТЧФактВыпРModel from './models/i-i-s-prilozhenie-3-т-ч-факт-вып-р';
import IISPrilozhenie_3ФактВыполРабModel from './models/i-i-s-prilozhenie-3-факт-выпол-раб';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-prilozhenie-3-док-план-за-на-д': IISPrilozhenie_3ДокПланЗаНаДModel,
    'i-i-s-prilozhenie-3-спр-виды-раб': IISPrilozhenie_3СпрВидыРабModel,
    'i-i-s-prilozhenie-3-спр-ед-измер': IISPrilozhenie_3СпрЕдИзмерModel,
    'i-i-s-prilozhenie-3-спр-контр-аг': IISPrilozhenie_3СпрКонтрАгModel,
    'i-i-s-prilozhenie-3-спр-номен': IISPrilozhenie_3СпрНоменModel,
    'i-i-s-prilozhenie-3-спр-объект-стр': IISPrilozhenie_3СпрОбъектСтрModel,
    'i-i-s-prilozhenie-3-спр-пользов': IISPrilozhenie_3СпрПользовModel,
    'i-i-s-prilozhenie-3-спр-тип-транс-ср': IISPrilozhenie_3СпрТипТрансСрModel,
    'i-i-s-prilozhenie-3-спр-трансп-ср': IISPrilozhenie_3СпрТранспСрModel,
    'i-i-s-prilozhenie-3-т-ч-пл-з-на-д': IISPrilozhenie_3ТЧПлЗНаДModel,
    'i-i-s-prilozhenie-3-т-ч-факт-вып-р': IISPrilozhenie_3ТЧФактВыпРModel,
    'i-i-s-prilozhenie-3-факт-выпол-раб': IISPrilozhenie_3ФактВыполРабModel
  },

  'application-name': 'Prilozhenie_3',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Prilozhenie_3',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie_3',
          title: 'Prilozhenie_3'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'диспетчеризация-транспортных-средств': {
          caption: 'Диспетчеризация транспортных средств',
          title: 'Диспетчеризация транспортных средств',
          'i-i-s-prilozhenie-3-док-план-за-на-д-l': {
            caption: 'Документ плановая заявка на день',
            title: ''
          },
          'i-i-s-prilozhenie-3-спр-тип-транс-ср-l': {
            caption: 'Справочник тип транспортного средства',
            title: ''
          },
          'i-i-s-prilozhenie-3-спр-трансп-ср-l': {
            caption: 'Справочник транспортное средство',
            title: ''
          },
          'i-i-s-prilozhenie-3-спр-номен-l': {
            caption: 'Справочник номенклатура',
            title: ''
          },
          'i-i-s-prilozhenie-3-спр-контр-аг-l': {
            caption: 'Справочник контрагенты',
            title: ''
          },
          'i-i-s-prilozhenie-3-спр-ед-измер-l': {
            caption: 'Справочник единицы измерения',
            title: ''
          },
          'i-i-s-prilozhenie-3-спр-виды-раб-l': {
            caption: 'Справочник виды работ',
            title: ''
          },
          'i-i-s-prilozhenie-3-спр-объект-стр-l': {
            caption: 'Справочник объект строительства',
            title: ''
          },
          'i-i-s-prilozhenie-3-спр-пользов-l': {
            caption: 'Справочник пользователи',
            title: ''
          },
          'i-i-s-prilozhenie-3-факт-выпол-раб-l': {
            caption: 'Документ фактическое выполнение работ',
            title: ''
          }
        },
        'prilozhenie-3': {
          caption: 'Prilozhenie_3',
          title: 'Prilozhenie_3',
          'i-i-s-prilozhenie-3-док-план-за-на-д-l': {
            caption: 'Документ плановая заявка на день',
            title: ''
          },
          'i-i-s-prilozhenie-3-спр-тип-транс-ср-l': {
            caption: 'Справочник тип транспортного средства',
            title: ''
          },
          'i-i-s-prilozhenie-3-спр-трансп-ср-l': {
            caption: 'Справочник транспортное средство',
            title: ''
          },
          'i-i-s-prilozhenie-3-спр-номен-l': {
            caption: 'Справочник номенклатура',
            title: ''
          },
          'i-i-s-prilozhenie-3-спр-контр-аг-l': {
            caption: 'Справочник контрагенты',
            title: ''
          },
          'i-i-s-prilozhenie-3-спр-ед-измер-l': {
            caption: 'Справочник единицы измерения',
            title: ''
          },
          'i-i-s-prilozhenie-3-спр-виды-раб-l': {
            caption: 'Справочник виды работ',
            title: ''
          },
          'i-i-s-prilozhenie-3-спр-объект-стр-l': {
            caption: 'Справочник объект строительства',
            title: ''
          },
          'i-i-s-prilozhenie-3-спр-пользов-l': {
            caption: 'Справочник пользователи',
            title: ''
          },
          'i-i-s-prilozhenie-3-факт-выпол-раб-l': {
            caption: 'Фактическое выполнение работ',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-prilozhenie-3-док-план-за-на-д-l': IISPrilozhenie_3ДокПланЗаНаДLForm,
    'i-i-s-prilozhenie-3-спр-виды-раб-l': IISPrilozhenie_3СпрВидыРабLForm,
    'i-i-s-prilozhenie-3-спр-ед-измер-l': IISPrilozhenie_3СпрЕдИзмерLForm,
    'i-i-s-prilozhenie-3-спр-контр-аг-l': IISPrilozhenie_3СпрКонтрАгLForm,
    'i-i-s-prilozhenie-3-спр-номен-l': IISPrilozhenie_3СпрНоменLForm,
    'i-i-s-prilozhenie-3-спр-объект-стр-l': IISPrilozhenie_3СпрОбъектСтрLForm,
    'i-i-s-prilozhenie-3-спр-пользов-l': IISPrilozhenie_3СпрПользовLForm,
    'i-i-s-prilozhenie-3-спр-тип-транс-ср-l': IISPrilozhenie_3СпрТипТрансСрLForm,
    'i-i-s-prilozhenie-3-спр-трансп-ср-l': IISPrilozhenie_3СпрТранспСрLForm,
    'i-i-s-prilozhenie-3-факт-выпол-раб-l': IISPrilozhenie_3ФактВыполРабLForm,
    'i-i-s-prilozhenie-3-док-план-за-на-д-e': IISPrilozhenie_3ДокПланЗаНаДEForm,
    'i-i-s-prilozhenie-3-спр-виды-раб-e': IISPrilozhenie_3СпрВидыРабEForm,
    'i-i-s-prilozhenie-3-спр-ед-измер-e': IISPrilozhenie_3СпрЕдИзмерEForm,
    'i-i-s-prilozhenie-3-спр-контр-аг-e': IISPrilozhenie_3СпрКонтрАгEForm,
    'i-i-s-prilozhenie-3-спр-номен-e': IISPrilozhenie_3СпрНоменEForm,
    'i-i-s-prilozhenie-3-спр-объект-стр-e': IISPrilozhenie_3СпрОбъектСтрEForm,
    'i-i-s-prilozhenie-3-спр-пользов-e': IISPrilozhenie_3СпрПользовEForm,
    'i-i-s-prilozhenie-3-спр-тип-транс-ср-e': IISPrilozhenie_3СпрТипТрансСрEForm,
    'i-i-s-prilozhenie-3-спр-трансп-ср-e': IISPrilozhenie_3СпрТранспСрEForm,
    'i-i-s-prilozhenie-3-факт-выпол-раб-e': IISPrilozhenie_3ФактВыполРабEForm
  },

});

export default translations;
