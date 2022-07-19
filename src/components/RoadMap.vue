<template>
  <div>
    <v-stepper alt-labels v-show="!$vuetify.breakpoint.xs">
      <v-stepper-header>
        <v-divider></v-divider>
        <v-stepper-step
          editable
          v-for="(n, index) in listItems"
          :step="index + 1"
          :key="index"
          class="stepper-step"
          :class="{active:index<=selectcurrent}"
          @click="submititem(index)"
        >
          <v-badge bordered dot :color="n.color">{{ n.name }}</v-badge>
        </v-stepper-step>
        <v-divider></v-divider>
      </v-stepper-header>
    </v-stepper>
    <RoadMapSm v-show="$vuetify.breakpoint.xs"></RoadMapSm>
  </div>
</template>
<script>
import RoadMapSm from "./RoadMapSmallDivice.vue";
export default {
  components: {
    RoadMapSm,
  },
  data() {
    return {
      listItems: [
        { color: "#E1BEE7", name: "معرفی" },
        { color: "#AB47BC", name: "لیست آشنایان " },
        { color: "#6A1B9A", name: "لینکدین" },
        { color: "#E040FB", name: "تعامل آشنایان" },
        { color: "#F0F4C3", name: "تعامل لینکدین" },
        { color: "#D4E157", name: "انعقاد قرارداد" },
        { color: "#9E9D24", name: "ساخت اکانت" },
        { color: "#EEFF41", name: "پروفایل" },
        { color: "#C8E6C9", name: "پرتفولیو" },
        { color: "#66BB6A", name: "پروژه داخلی" },
        { color: "#2E7D32", name: "ارسال بید" },
        { color: "#69F0AE", name: "اولین پروژه" },
        { color: "#FFCDD2", name: " تایید نهایی" },
      ],
      selectcurrent:0
     
    };
  },
  methods:{
    submititem(index){
      this.selectcurrent=index;
    }
  }
 };
</script>
<style >
.v-stepper--alt-labels .v-stepper__step {
  flex-basis: 90px !important;
}
.v-application--is-rtl .v-stepper__label {
  text-align: center !important;
  font-size: 13px;
}
@media only screen and (min-width: 768px) {
  .v-stepper:not(.v-stepper--vertical) .v-stepper__label {
    display: block !important;
  }
}
@media (max-width: 991.98px) {
  .v-stepper--alt-labels {
    padding-left: 29px;
  }
}
.active .v-stepper__step__step {
  background-color:#1976d2 !important;
  border-color: #1976d2 !important;
}
</style>