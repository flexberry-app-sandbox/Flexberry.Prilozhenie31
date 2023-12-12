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
  тЧФактВыпР: DS.hasMany('i-i-s-prilozhenie-3-т-ч-факт-вып-р', { inverse: 'фактВыполРаб', async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-prilozhenie-3-факт-выпол-раб.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-prilozhenie-3-факт-выпол-раб.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-prilozhenie-3-факт-выпол-раб.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  спрКонтрАг: {
    descriptionKey: 'models.i-i-s-prilozhenie-3-факт-выпол-раб.validations.спрКонтрАг.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрОбъектСтр: {
    descriptionKey: 'models.i-i-s-prilozhenie-3-факт-выпол-раб.validations.спрОбъектСтр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрПользов: {
    descriptionKey: 'models.i-i-s-prilozhenie-3-факт-выпол-раб.validations.спрПользов.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧФактВыпР: {
    descriptionKey: 'models.i-i-s-prilozhenie-3-факт-выпол-раб.validations.тЧФактВыпР.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФактВыполРабE', 'i-i-s-prilozhenie-3-факт-выпол-раб', {
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
    }, { index: 7 })
  });

  modelClass.defineProjection('ФактВыполРабL', 'i-i-s-prilozhenie-3-факт-выпол-раб', {
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
