<template>
  <div>
    <v-sheet class="mx-auto my-4" max-width="800">
      <v-slide-group multiple show-arrows>
        <v-slide-item v-for="(n, index) in listItems" :key="index">
          <v-btn
            class="mx-2"
            :input-value="active"
            active-class="purple white--text"
            depressed
            rounded
            @click="toggle"
          >
            <v-badge serve dot :color="n.color">
              {{ n.name }}
            </v-badge>
          </v-btn>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>
<script>

export default {
  data: () => ({
    model: null,
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
    max_step: 14,
  }),
  methods: {
    toggle() {
      console.log("click");
    },
  },
  components: {
 
  },
};
</script>
<style>
.theme--light.v-btn:hover::before {
  opacity: 0.7;
  background-color: #56c0a6;
}

/* .mx-2:active:before:after {
    background: #2F8D46;
} */
</style>