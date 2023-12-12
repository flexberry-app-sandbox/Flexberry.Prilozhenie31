import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-prilozhenie-3-факт-выпол-раб-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-prilozhenie-3-т-ч-факт-вып-р+спрНомен':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'номенклатура',
            required: true,
            relationName: 'спрНомен',
            projection: 'СпрНоменL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-prilozhenie-3-т-ч-факт-вып-р+спрКонтрАг':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'контрагент',
            required: true,
            relationName: 'спрКонтрАг',
            projection: 'СпрКонтрАгL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-prilozhenie-3-т-ч-факт-вып-р+спрВидыРаб':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'виды работ',
            required: true,
            relationName: 'спрВидыРаб',
            projection: 'СпрВидыРабL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-prilozhenie-3-т-ч-факт-вып-р+спрТранспСр':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'транспортные средства',
            required: true,
            relationName: 'спрТранспСр',
            projection: 'СпрТранспСрL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
