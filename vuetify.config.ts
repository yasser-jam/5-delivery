import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration';

import colors from 'vuetify/util/colors'

export default defineVuetifyConfiguration({
  /* vuetify options */

  defaults: {
    global: {
      ripple: false,
    },
    
    VSheet: {
      elevation: 4,
    },

    VChip: {
      rounded: 'lg',
      size: 'small'
    }

  },

  theme: {
      themes: {
      light: {
        dark: false,
        colors: {
          primary: '#FFA800',
          secondary: '#000e30', // #E53935
          success: colors.teal.darken1, // #FFCDD2
          warning: colors.amber.darken3,
          error: colors.red.darken4
        }
      },
    }
  }

  
});
