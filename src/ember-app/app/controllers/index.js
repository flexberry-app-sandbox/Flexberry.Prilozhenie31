import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.диспетчеризация-транспортных-средств.caption'),
          title: i18n.t('forms.application.sitemap.диспетчеризация-транспортных-средств.title'),
          children: [{
            link: 'i-i-s-prilozhenie-3-док-план-за-на-д-l',
            caption: i18n.t('forms.application.sitemap.диспетчеризация-транспортных-средств.i-i-s-prilozhenie-3-док-план-за-на-д-l.caption'),
            title: i18n.t('forms.application.sitemap.диспетчеризация-транспортных-средств.i-i-s-prilozhenie-3-док-план-за-на-д-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-3-спр-тип-транс-ср-l',
            caption: i18n.t('forms.application.sitemap.диспетчеризация-транспортных-средств.i-i-s-prilozhenie-3-спр-тип-транс-ср-l.caption'),
            title: i18n.t('forms.application.sitemap.диспетчеризация-транспортных-средств.i-i-s-prilozhenie-3-спр-тип-транс-ср-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-3-спр-трансп-ср-l',
            caption: i18n.t('forms.application.sitemap.диспетчеризация-транспортных-средств.i-i-s-prilozhenie-3-спр-трансп-ср-l.caption'),
            title: i18n.t('forms.application.sitemap.диспетчеризация-транспортных-средств.i-i-s-prilozhenie-3-спр-трансп-ср-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-3-спр-номен-l',
            caption: i18n.t('forms.application.sitemap.диспетчеризация-транспортных-средств.i-i-s-prilozhenie-3-спр-номен-l.caption'),
            title: i18n.t('forms.application.sitemap.диспетчеризация-транспортных-средств.i-i-s-prilozhenie-3-спр-номен-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-3-спр-контр-аг-l',
            caption: i18n.t('forms.application.sitemap.диспетчеризация-транспортных-средств.i-i-s-prilozhenie-3-спр-контр-аг-l.caption'),
            title: i18n.t('forms.application.sitemap.диспетчеризация-транспортных-средств.i-i-s-prilozhenie-3-спр-контр-аг-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-3-спр-ед-измер-l',
            caption: i18n.t('forms.application.sitemap.диспетчеризация-транспортных-средств.i-i-s-prilozhenie-3-спр-ед-измер-l.caption'),
            title: i18n.t('forms.application.sitemap.диспетчеризация-транспортных-средств.i-i-s-prilozhenie-3-спр-ед-измер-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-3-спр-виды-раб-l',
            caption: i18n.t('forms.application.sitemap.диспетчеризация-транспортных-средств.i-i-s-prilozhenie-3-спр-виды-раб-l.caption'),
            title: i18n.t('forms.application.sitemap.диспетчеризация-транспортных-средств.i-i-s-prilozhenie-3-спр-виды-раб-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-3-спр-объект-стр-l',
            caption: i18n.t('forms.application.sitemap.диспетчеризация-транспортных-средств.i-i-s-prilozhenie-3-спр-объект-стр-l.caption'),
            title: i18n.t('forms.application.sitemap.диспетчеризация-транспортных-средств.i-i-s-prilozhenie-3-спр-объект-стр-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-3-спр-пользов-l',
            caption: i18n.t('forms.application.sitemap.диспетчеризация-транспортных-средств.i-i-s-prilozhenie-3-спр-пользов-l.caption'),
            title: i18n.t('forms.application.sitemap.диспетчеризация-транспортных-средств.i-i-s-prilozhenie-3-спр-пользов-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-prilozhenie-3-факт-выпол-раб-l',
            caption: i18n.t('forms.application.sitemap.диспетчеризация-транспортных-средств.i-i-s-prilozhenie-3-факт-выпол-раб-l.caption'),
            title: i18n.t('forms.application.sitemap.диспетчеризация-транспортных-средств.i-i-s-prilozhenie-3-факт-выпол-раб-l.title'),
            icon: 'table',
            children: null
          }]
        }
      ]
    };
  }),
})