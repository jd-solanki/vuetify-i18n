import { useI18n } from 'vue-i18n';
import { createVuetify } from 'vuetify';
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n';
import "vuetify/styles";
import i18n from './i18n';

export default createVuetify({
  locale: createVueI18nAdapter({ i18n, useI18n })
})