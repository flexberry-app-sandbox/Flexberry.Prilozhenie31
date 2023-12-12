import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времПриб: DS.attr('date'),
  колЧас: DS.attr('decimal'),
  обГруз: DS.attr('decimal'),
  обРаб: DS.attr('string'),
  стЗатрат: DS.attr('string'),
  спрВидыРаб: DS.belongsTo('i-i-s-prilozhenie-3-спр-виды-раб', { inverse: null, async: false }),
  спрЕдИзмер: DS.belongsTo('i-i-s-prilozhenie-3-спр-ед-измер', { inverse: null, async: false }),
  спрКонтрАг: DS.belongsTo('i-i-s-prilozhenie-3-спр-контр-аг', { inverse: null, async: false }),
  спрНомен: DS.belongsTo('i-i-s-prilozhenie-3-спр-номен', { inverse: null, async: false }),
  спрТипТрансСр: DS.belongsTo('i-i-s-prilozhenie-3-спр-тип-транс-ср', { inverse: null, async: false }),
  спрТранспСр: DS.belongsTo('i-i-s-prilozhenie-3-спр-трансп-ср', { inverse: null, async: false }),
  докПланЗаНаД: DS.belongsTo('i-i-s-prilozhenie-3-док-план-за-на-д', { inverse: 'тЧПлЗНаД', async: false })
});

export let ValidationRules = {
  времПриб: {
    descriptionKey: 'models.i-i-s-prilozhenie-3-т-ч-пл-з-на-д.validations.времПриб.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  колЧас: {
    descriptionKey: 'models.i-i-s-prilozhenie-3-т-ч-пл-з-на-д.validations.колЧас.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  обГруз: {
    descriptionKey: 'models.i-i-s-prilozhenie-3-т-ч-пл-з-на-д.validations.обГруз.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  обРаб: {
    descriptionKey: 'models.i-i-s-prilozhenie-3-т-ч-пл-з-на-д.validations.обРаб.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стЗатрат: {
    descriptionKey: 'models.i-i-s-prilozhenie-3-т-ч-пл-з-на-д.validations.стЗатрат.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  спрВидыРаб: {
    descriptionKey: 'models.i-i-s-prilozhenie-3-т-ч-пл-з-на-д.validations.спрВидыРаб.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрЕдИзмер: {
    descriptionKey: 'models.i-i-s-prilozhenie-3-т-ч-пл-з-на-д.validations.спрЕдИзмер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрКонтрАг: {
    descriptionKey: 'models.i-i-s-prilozhenie-3-т-ч-пл-з-на-д.validations.спрКонтрАг.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрНомен: {
    descriptionKey: 'models.i-i-s-prilozhenie-3-т-ч-пл-з-на-д.validations.спрНомен.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрТипТрансСр: {
    descriptionKey: 'models.i-i-s-prilozhenie-3-т-ч-пл-з-на-д.validations.спрТипТрансСр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  спрТранспСр: {
    descriptionKey: 'models.i-i-s-prilozhenie-3-т-ч-пл-з-на-д.validations.спрТранспСр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  докПланЗаНаД: {
    descriptionKey: 'models.i-i-s-prilozhenie-3-т-ч-пл-з-на-д.validations.докПланЗаНаД.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧПлЗНаДE', 'i-i-s-prilozhenie-3-т-ч-пл-з-на-д', {
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
  });
};
