import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withNotes } from '@storybook/addon-notes'
import { withKnobs, text, number, boolean, array, select, color, date } from '@storybook/addon-knobs'

import ButtonDefault from './Button'

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default', () => ({
    components: { ButtonDefault },
    props: {
      isRounded: { default: boolean('IS_ROUND', true) },
      isDisabled: { default: boolean('IS_DISABLED', false) },
      text: { default: text('SLOT_TEXT', 'Click') },
      color: { default: color('FONT_COLOR', '#333') },
      backgroundColor: { default: color('BG_COLOR', '#fff') }
    },
    methods: { onClicked: action('clicked text button') },
    template: `
      <button-default 
        :isRounded="isRounded" 
        :isDisabled="isDisabled" 
        :color="color" 
        :backgroundColor="backgroundColor" 
        :on-clicked="onClicked"
      >
        {{text}}
      </button-default>
    `
  }))
