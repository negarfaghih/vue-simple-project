<template>
  <div>
    <div class="btn-1">
      <v-btn  v-on:click="show1()">نمایش جستجوی پیشرفته </v-btn>
      <v-btn  v-on:click="show2()"> عدم نمایش جستجوی پیشرفته</v-btn>
    </div>

    <v-app id="inspire" class="hide">
      <v-card>
        <v-card-title>
          <v-container grid-list-md text-xs-center>
            <v-layout row class="lay-filt">
              <v-flex xs4>
                <!-- call method searchName after leaving textfield-->
                <v-text-field
                  label="نام"
                  single-line
                  hide-details
                  @change="searchName"
                ></v-text-field>
              </v-flex>
              <v-flex xs4>
                <!-- call method searchFamily after leaving textfield-->
                <v-text-field
                  label="نام و نام خانوادگی"
                  single-line
                  hide-details
                  @change="searchFamily"
                ></v-text-field>
              </v-flex>
              <v-flex xs4>
                <!-- call method searchFieldname after leaving textfield-->
                <v-text-field
                  label="نام دوره"
                  single-line
                  hide-details
                  @change="searchFieldname"
                ></v-text-field>
              </v-flex>
              <v-flex xs4>
                <!-- call method searchdate after leaving textfield-->
                <v-text-field
                  label="تاریخ دوره"
                  single-line
                  hide-details
                  @change="searchdate"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-title>
        <v-data-table :headers="headers" :items="filteredItems">
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.id }}</td>
            <td class="text-xs-left">{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.family }}</td>
            <td class="text-xs-left">{{ props.item.fieldname }}</td>
            <td class="text-xs-left">{{ props.item.date }}</td>
          </template>
          <template v-slot:no-results>
            <v-alert :value="true" color="error" icon="warning">
              Found no results.
            </v-alert>
          </template>
        </v-data-table>
      </v-card>
    </v-app>
  </div>
</template>

<script>
import {request} from "../utils/http_interceptor";

export default {
  data() {
    return {
      filterQry: {
        //you can use Object if you want to do multiple-filter
        //or you can use String if you just want to single-filter
        qryName: "",
        qryFamily: "",
        qryField: "",
        qrydate: "",
      },
      headers: [
        {
          text: "ID",
          value: "id",
        },
        {
          text: "Name",
          value: "name",
        },
        {
          text: "Family",
          value: "family",
        },
        {
          text: "Fieldname",
          value: "fieldname",
        },
        {
          text: "Date",
          value: "date",
        },
      ],
      employee: [
        {
          id: 1,
          name: "ابراهیم",
          family: "ابراهیمی",
          fieldname: "مارکتینگ",
          date: "1964/03/16",
        },
        {
          id: 2,
          name: "ابوالفضل",
          family: "کریمی",
          fieldname: "مارکتینگ",
          date: "1981/06/03",
        },
        {
          id: 3,
          name: "اتابک",
          family: "امیری",
          fieldname: "مارکتینگ",
          date: "1974/09/07",
        },
        {
          id: 4,
          name: "احسان",
          family: "سعیذی",
          fieldname: "مارکتینگ ",
          date: "1974/09/07",
        },
        {
          id: 5,
          name: "محیا",
          family: "رضایی",
          fieldname: "برنامه نویسی",
          date: "1974/09/07",
        },
        {
          id: 6,
          name: "سعید",
          family: "احمدی",
          fieldname: "برنامه نویسی",
          date: "1981/06/03",
        },
        {
          id: 7,
          name: "کامران",
          family: "کریمی",
          fieldname: "برنامه نویسی",
          date: "1981/06/03",
        },
        {
          id: 8,
          name: "علی",
          family: "مولایی",
          fieldname: "برنامه نویسی",
          date: "1981/06/03",
        },
        {
          id: 9,
          name: "سینا",
          family: "رضایی",
          fieldname: "برنامه نویسی",
          date: "1981/06/03",
        },
        {
          id: 10,
          name: "زیبا",
          family: "فلاحی",
          fieldname: "برنامه نویسی",
          date: "1964/03/16",
        },
      ],
    };
  },
  computed: {
    //use this filteredItems as the items prop in v-data-table
    filteredItems: function () {
      //call the filterItems method
      return this.filterItems(this.employee, this.filterQry);
    },
  },
  methods: {
    //method to update the name query
    searchName: function (val) {
      this.filterQry.qryName = val;
    },
    //method to update the family query
    searchFamily: function (val) {
      this.filterQry.qryFamily = val;
    },

    //method to update the fieldname query
    searchFieldname: function (val) {
      this.filterQry.qryField = val;
    },

    //method to update the fieldname query
    searchdate: function (val) {
      this.filterQry.qrydate = val;
    },

    //method to filter the items.
    filterItems: function (arr, query) {
      console.log("--filter item--");
      return arr.filter(function (item) {
        let name = item.name
          .toLowerCase()
          .includes(query.qryName.toLowerCase());
        let family = item.family
          .toLowerCase()
          .includes(query.qryFamily.toLowerCase());
        let fieldname = item.fieldname
          .toLowerCase()
          .includes(query.qryField.toLowerCase());
        let date = item.date
          .toLowerCase()
          .includes(query.qrydate.toLowerCase());
        return name && family && fieldname && date;
      });
    },
    show1() {
      console.log("hello");
      request("", "PUT");
      // document.getElementById("inspire").style.display = "none";
      // document.getElementsByClassName("hide").style.display = "block";
    },
    show2() {
      document.getElementsByClassName("hide").style.display = "none";
    },
  },
};
</script>
<style scoped>
.lay-filt {
  flex-wrap: nowrap;
}
.v-btn:not(.v-btn--round).v-size--default {
  background-color: salmon;
  margin: 10px;
}
.btn-1{
  text-align: center;
}
.hide {
  /* display: none; */
}
</style>