import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    rtl: true,
    defaultAssets: {
        font: {
            family: 'Vazir'
        }
    },
    theme: {
        dark: localStorage.getItem('theme') === 'dark',
    }
});