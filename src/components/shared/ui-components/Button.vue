<template>
  <button
    v-on:click="buttonActivate"
    class="button"
    v-bind:type="type"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    confirmation: {
      type: Boolean,
      required: true,
    },
    buttonStyle: {
      type: String,
    },
  },
  methods: {
    buttonActivate() {
      if (this.confirmation) {
        if (confirm("Nuke the page")) {
          this.$emit("buttonActivated");
        }
        return;
      } else {
        this.$emit("buttonActivated");
      }
    },
  },
  computed: {
  },
};
</script>

<style>
.button {
  border-radius: 50px;
  background-color: #7f00bf;
  color: white;
  border: 0;
  padding: 5px 50px;
}
</style>