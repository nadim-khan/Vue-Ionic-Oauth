<template>
  <base-layout page-title="Add a Memory" page-default-back-link="/memories">
    <registeration-form @save-memory="saveMemory"></registeration-form>
  </base-layout>
</template>

<script>
import RegisterationForm from "../components/User/RegisterationForm.vue";

export default {
  components: {
    RegisterationForm,
  },
  methods: {
    saveMemory(memoryData) {
      this.$store.dispatch('addMemory', memoryData);
      this.$router.replace('/memories');
    }
  }
};
</script>