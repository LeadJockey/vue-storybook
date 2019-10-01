<template>
  <div>
    <h1>APP</h1>
    <button-default></button-default>
  </div>
</template>

<script>
import ButtonDefault from "./atoms/button/Button";

export default {
  name: "app",
  components: {
    ButtonDefault
  }
};
</script>
