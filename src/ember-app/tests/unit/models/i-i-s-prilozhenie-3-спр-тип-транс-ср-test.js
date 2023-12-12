import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-prilozhenie-3-спр-тип-транс-ср', 'Unit | Model | i-i-s-prilozhenie-3-спр-тип-транс-ср', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-prilozhenie-3-док-план-за-на-д',
    'model:i-i-s-prilozhenie-3-спр-виды-раб',
    'model:i-i-s-prilozhenie-3-спр-ед-измер',
    'model:i-i-s-prilozhenie-3-спр-контр-аг',
    'model:i-i-s-prilozhenie-3-спр-номен',
    'model:i-i-s-prilozhenie-3-спр-объект-стр',
    'model:i-i-s-prilozhenie-3-спр-пользов',
    'model:i-i-s-prilozhenie-3-спр-тип-транс-ср',
    'model:i-i-s-prilozhenie-3-спр-трансп-ср',
    'model:i-i-s-prilozhenie-3-т-ч-пл-з-на-д',
    'model:i-i-s-prilozhenie-3-т-ч-факт-вып-р',
    'model:i-i-s-prilozhenie-3-факт-выпол-раб',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
