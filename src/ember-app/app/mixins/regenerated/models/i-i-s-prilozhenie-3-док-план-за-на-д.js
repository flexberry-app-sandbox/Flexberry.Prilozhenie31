import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  дата: DS.attr('date'),
  номер: DS.attr('number'),
  спрКонтрАг: DS.belongsTo('i-i-s-prilozhenie-3-спр-контр-аг', { inverse: null, async: false }),
  спрОбъектСтр: DS.belongsTo('i-i-s-prilozhenie-3-спр-объект-стр', { inverse: null, async: false }),
  спрПользов: DS.belongsTo('i-i-s-prilozhenie-3-спр-пользов', { inverse: null, async: false }),
  тЧПлЗНаД: DS.hasMany('i-i-s-prilozhenie-3-т-ч-пл-з-на-д', { inverse: 'докПланЗаНаД', async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-prilozhenie-3-док-план-за-на-д.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-prilozhenie-3-док-план-за-на-д.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-prilozhenie-3-док-план-за-на-д.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  спрКонтрАг: {
    descriptionKey: 'models.i-i-s-prilozhenie-3-док-план-за-на-д.validations.спрКонтрАг.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрОбъектСтр: {
    descriptionKey: 'models.i-i-s-prilozhenie-3-док-план-за-на-д.validations.спрОбъектСтр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрПользов: {
    descriptionKey: 'models.i-i-s-prilozhenie-3-док-план-за-на-д.validations.спрПользов.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧПлЗНаД: {
    descriptionKey: 'models.i-i-s-prilozhenie-3-док-план-за-на-д.validations.тЧПлЗНаД.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокПланЗаНаДE', 'i-i-s-prilozhenie-3-док-план-за-на-д', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    время: attr('Время', { index: 2 }),
    спрПользов: belongsTo('i-i-s-prilozhenie-3-спр-пользов', 'Пользователь', {
      фИО: attr('Пользователь', { index: 4 })
    }, { index: 3 }),
    спрКонтрАг: belongsTo('i-i-s-prilozhenie-3-спр-контр-аг', 'Контрагент', {
      наименование: attr('Контрагент', { index: 6 })
    }, { index: 5 }),
    спрОбъектСтр: belongsTo('i-i-s-prilozhenie-3-спр-объект-стр', 'Объект строительства', {
      наименование: attr('Объект строительства', { index: 8 })
    }, { index: 7 }),
    тЧПлЗНаД: hasMany('i-i-s-prilozhenie-3-т-ч-пл-з-на-д', 'Плановая заявка на день', {
      стЗатрат: attr('Статья затрат', { index: 0 }),
      спрКонтрАг: belongsTo('i-i-s-prilozhenie-3-спр-контр-аг', 'Контрагент', {
        наименование: attr('Контрагент', { index: 2 })
      }, { index: 1, displayMemberPath: 'контрагент' }),
      спрНомен: belongsTo('i-i-s-prilozhenie-3-спр-номен', 'Номенклатура', {
        наименование: attr('Номенклатура', { index: 4 })
      }, { index: 3, displayMemberPath: 'номенклатура' }),
      спрВидыРаб: belongsTo('i-i-s-prilozhenie-3-спр-виды-раб', 'Виды работы', {
        наименование: attr('Виды работы', { index: 6 })
      }, { index: 5, displayMemberPath: 'виды работы' }),
      обРаб: attr('Объем работ', { index: 7 }),
      спрТранспСр: belongsTo('i-i-s-prilozhenie-3-спр-трансп-ср', 'Транспортное средство', {
        наименование: attr('Транспортное средство', { index: 9 })
      }, { index: 8, displayMemberPath: 'транспортное средство' }),
      спрТипТрансСр: belongsTo('i-i-s-prilozhenie-3-спр-тип-транс-ср', 'Типы транспортного средства', {
        наименование: attr('Типы транспортного средства', { index: 11 })
      }, { index: 10, displayMemberPath: 'типы транспортного средства' }),
      времПриб: attr('Время прибытия', { index: 12 }),
      колЧас: attr('Количество часов работы', { index: 13 }),
      спрЕдИзмер: belongsTo('i-i-s-prilozhenie-3-спр-ед-измер', 'Единицы измерения', {
        наименование: attr('Единицы измерения', { index: 15 })
      }, { index: 14, displayMemberPath: 'единицы измерения' })
    })
  });

  modelClass.defineProjection('ДокПланЗаНаДL', 'i-i-s-prilozhenie-3-док-план-за-на-д', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    время: attr('Время', { index: 2 }),
    спрПользов: belongsTo('i-i-s-prilozhenie-3-спр-пользов', 'Пользователь', {
      фИО: attr('Пользователь', { index: 3 })
    }, { index: -1, hidden: true }),
    спрКонтрАг: belongsTo('i-i-s-prilozhenie-3-спр-контр-аг', 'Контрагент', {
      наименование: attr('Контрагент', { index: 4 })
    }, { index: -1, hidden: true }),
    спрОбъектСтр: belongsTo('i-i-s-prilozhenie-3-спр-объект-стр', 'Объект строительства', {
      наименование: attr('Объект строительства', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
