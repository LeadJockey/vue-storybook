<template>
  <button
    :class="{button:true, _round:isRounded}"
    :style="{color, backgroundColor}"
    :disabled="isDisabled"
    @click="onClicked"
  >
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: 'button-default',
  props: {
    isRounded: { type: Boolean, default: false },
    isDisabled: { type: Boolean, default: false },
    color: { type: String, default: '#333' },
    backgroundColor: { type: String, default: '#fff' },
    onClicked: { type: Function, default: () => () => null }
  }
}
</script>

<style>
._round {
  border-radius: 5px;
}
.button {
  border: 3px solid;
  padding: 10px 20px;
}
</style>