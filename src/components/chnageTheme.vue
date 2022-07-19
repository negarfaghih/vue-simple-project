<template>
  <v-switch
    v-model="switch1"
    inset
    :label="`حالت شب: ${switch1 ? 'روشن' : 'خاموش'}`"
  ></v-switch>
</template>
<script>
export default {
  data() {
    return {
      switch1: false,
    };
  },
  mounted(){
     const theme =  localStorage.getItem('theme')
     this.switch1 = theme === 'dark' ? true : false
     this.$vuetify.theme.dark = this.switch1;
    
  },
  watch:{
      switch1(){
            this.$vuetify.theme.dark = this.switch1;

    localStorage.setItem("theme", this.$vuetify.theme.dark ? "dark" : "light");
     this.$emit('changeTheme',this.switch1)
      }
  }
};
</script>