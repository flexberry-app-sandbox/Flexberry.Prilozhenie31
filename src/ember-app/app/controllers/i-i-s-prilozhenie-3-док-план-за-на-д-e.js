import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-prilozhenie-3-док-план-за-на-д-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-prilozhenie-3-т-ч-пл-з-на-д+спрКонтрАг':
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

      }
    }

    return cellComponent;
  },
});
