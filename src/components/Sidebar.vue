<template>
  <div>
    <v-app id="inspire">
      <v-navigation-drawer
        app
        v-model="drawer"
        :color="color"
        :expand-on-hover="expandOnHover"
        :right="right"
        :src="bg"
        absolute
        dark
        class="nav-draw-1"
      >
        <v-list dense nav class="py-0">
          <v-list-item two-line :class="miniVariant && 'px-0'">
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/men/81.jpg" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>پروفایل من </v-list-item-title>
              <v-list-item-subtitle>علی احمدی</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-switch
          v-model="expandOnHover"
          class="ma-2"
          label="حالت نمایش داشبورت"
        ></v-switch>
      </v-navigation-drawer>

      <v-content>
        <v-card>
          <v-row justify="space-around" class="conten">
            <v-col cols="12">
              <v-select
                v-model="color"
                :items="colors"
                label="تغییر رنگ پس زمینه"
                class="color-item"
              ></v-select>
            </v-col>

            <v-switch v-model="drawer" class="ma-2" label="داشبورت"></v-switch>
            <v-switch
              v-model="expandOnHover"
              class="ma-2"
              label="حالت نمایش داشبورت"
            ></v-switch>

            <v-switch
              v-model="background"
              class="ma-2"
              label="پس زمینه"
            ></v-switch>

            <v-switch v-model="right" class="ma-2" label="راست"></v-switch>
          </v-row>
        </v-card>
      </v-content>
    </v-app>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "داشبورت", icon: "mdi-view-dashboard" },
        { title: "عکس ها", icon: "mdi-image" },
        { title: "درباره ما", icon: "mdi-help-box" },
         { title: "ارتباط با ما", icon: "mdi-help-box" },
      ],
      color: "primary",
      colors: ["primary", "blue", "success", "red", "teal"],
      right: false,
      expandOnHover: true,
      background: false,
    };
  },
  computed: {
    bg() {
      return this.background
        ? "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        : undefined;
    },
  },
};
</script>

<style scoped>
.nav-draw-1 {
  height: 160px !important;
}
.v-sheet.v-card {
  /* border-radius: 4px; */
  margin-top: 13px;
  margin-left: 5px;
}
.conten {
  height: 162px;
}
.theme--light.v-application {
  height: 229px;
}
.color-item {
  padding-right: 20px;
}
</style>



