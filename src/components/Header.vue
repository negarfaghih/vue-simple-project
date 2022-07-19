<template>
    <div>
      <v-app-bar class="">
        <v-spacer></v-spacer>
        <div class="text-center">
          <h2 class="teal--text text--accent-4 slide-in-left">نمودار پیشرفت</h2>
          <h3 class="slide-in-right">بررسی عملکرد مخاطبان وبینار</h3>
        </div>
        <v-spacer></v-spacer>

       
            <changeTheme @changeTheme="changeThemeing"></changeTheme>
        
       
        
      </v-app-bar>
     
    </div>
  
</template>

<script>
import changeTheme from './chnageTheme.vue'
export default {
  components:{
    changeTheme
  },
  data: () => ({
    drawer:null,
    items: [
      { title: "خانه", icon: "mdi-home" },
      { title: "درباره ما", icon: "mdi-scatter-plot" },
    ],
  }),
  methods:{
    changeThemeing(val){
      this.$emit('changeTheme',val)
    }
  },
};
</script>

<style>
</style>