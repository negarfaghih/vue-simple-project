<template>
  <v-app id="inspire">
    <Header @changeTheme="changeTheme"></Header>
     <Sidebar></Sidebar>
     <Filtering></Filtering>
    <RoadMap></RoadMap>
   
    <Chart v-if="renderComponent"></Chart>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chart from "./components/Chart";
import RoadMap from "./components/RoadMap.vue";
import Sidebar from "./components/Sidebar.vue";
import Filtering from "./components/Filtering.vue";
export default {
  name: "App",

  components: {
    Header,
    Footer,
    Chart,
    RoadMap,
    Sidebar,
    Filtering,
  },
  mounted() {
  },
  methods:{
    changeTheme(val){
      this.theme = val
      this.renderComponent = false;
      this.$nextTick (() => {
          // add my-component component in DOM
          this.renderComponent = true;
        });
      
    }
  },

  data: () => ({
    drawer: null,
    theme:localStorage.getItem('theme'),
    renderComponent:true,
  }),
};
</script>
