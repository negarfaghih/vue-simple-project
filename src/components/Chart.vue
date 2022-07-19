<template>
  <v-container fluid>
    <apexchart
      type="bar"
      :height="chartOptions.xaxis.categories.length * 40"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </v-container>
</template>

<script>
// import MonthlySalesChart from "./components/MonthlySalesChart";
var categorieslist = [
  "ابراهیم",
  "ابوالفضل",
  "اتابک",
  "احسان",
  "ابراهیم",
  "ابوالفضل",
  "اتابک",
  "احسان",
  "احسان",
  "ابراهیم",
  "ابوالفضل",
  "اتابک",
  "احسان",
];
var images = [];
let getTheme = function () {
  return localStorage.getItem("theme") === "dark" ? "dark" : "light";
};
export default {
  name: "app",
  data() {
    return {
      ThemeChart: localStorage.getItem("theme") === "dark" ? "dark" : "light",
      series: [
        {
          data: [
            0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200,
          ],
        },
      ],
      chartOptions: {
        chart: {
          // redrawOnParentResize: true,
          // redrawOnWindowResize: true,
          type: "bar",
          fontFamily: "Vazir, Arial, sans-serif",
          height: categorieslist.length * 40,
          dropShadow: {
            enabled: false,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.35,
          },
        },
        annotations: {
          xaxis: [
            {
              x: 0,
              borderColor: "#E1BEE7",
              label: {
                borderColor: "#E1BEE7",
                orientation: "horizontal",
                offsetX: 0,
                offsetY: 0,
                style: {
                  color: "#E1BEE7",
                  background: "#E1BEE7",
                },
                text: "*",
              },
            },
             {
              x: 100,
              borderColor: "#AB47BC",
              label: {
                borderColor: "#AB47BC",
                orientation: "horizontal",
                offsetX: 0,
                offsetY: 0,
                style: {
                  color: "#AB47BC",
                  background: "#AB47BC",
                },
                text: "*",
              },
            },
             {
              x: 200,
              borderColor: "#6A1B9A",
              label: {
                borderColor: "#6A1B9A",
                orientation: "horizontal",
                offsetX: 0,
                offsetY: 0,
                style: {
                  color: "#6A1B9A",
                  background: "#6A1B9A",
                },
                text: "*",
              },
            },
             {
              x: 300,
              borderColor: "#E040FB",
              label: {
                borderColor: "#E040FB",
                orientation: "horizontal",
                offsetX: 0,
                offsetY: 0,
                style: {
                  color: "#E040FB",
                  background: "#E040FB",
                },
                text: "*",
              },
            },
             {
              x: 400,
              borderColor: "#F0F4C3",
              label: {
                borderColor: "#F0F4C3",
                orientation: "horizontal",
                offsetX: 0,
                offsetY: 0,
                style: {
                  color: "#F0F4C3",
                  background: "#F0F4C3",
                },
                text: "*",
              },
            },
             {
              x: 500,
              borderColor: "#D4E157",
              label: {
                borderColor: "#D4E157",
                orientation: "horizontal",
                offsetX: 0,
                offsetY: 0,
                style: {
                  color: "#D4E157",
                  background: "#D4E157",
                },
                text: "*",
              },
            },
             {
              x: 600,
              borderColor: "#9E9D24",
              label: {
                borderColor: "#9E9D24",
                orientation: "horizontal",
                offsetX: 0,
                offsetY: 0,
                style: {
                  color: "#9E9D24",
                  background: "#9E9D24",
                },
                text: "*",
              },
            },
             {
              x: 700,
              borderColor: "#EEFF41",
              label: {
                borderColor: "#EEFF41",
                orientation: "horizontal",
                offsetX: 0,
                offsetY: 0,
                style: {
                  color: "#EEFF41",
                  background: "#EEFF41",
                },
                text: "*",
              },
            },
             {
              x: 800,
              borderColor: "#C8E6C9",
              label: {
                borderColor: "#C8E6C9",
                orientation: "horizontal",
                offsetX: 0,
                offsetY: 0,
                style: {
                  color: "#C8E6C9",
                  background: "#C8E6C9",
                },
                text: "*",
              },
            },
             {
              x: 900,
              borderColor: "#66BB6A",
              label: {
                borderColor: "#66BB6A",
                orientation: "horizontal",
                offsetX: 0,
                offsetY: 0,
                style: {
                  color: "#66BB6A",
                  background: "#66BB6A",
                },
                text: "*",
              },
            },
             {
              x: 1000,
              borderColor: "#2E7D32",
              label: {
                borderColor: "#2E7D32",
                orientation: "horizontal",
                offsetX: 0,
                offsetY: 0,
                style: {
                  color: "#2E7D32",
                  background: "#2E7D32",
                },
                text: "*",
              },
            },
             {
              x: 1100,
              borderColor: "#69F0AE",
              label: {
                borderColor: "#69F0AE",
                orientation: "horizontal",
                offsetX: 0,
                offsetY: 0,
                style: {
                  color: "#69F0AE",
                  background: "#69F0AE",
                },
                text: "*",
              },
            },
             {
              x: 1200,
              borderColor: "#FFCDD2",
              label: {
                borderColor: "#FFCDD2",
                orientation: "horizontal",
                offsetX: 0,
                offsetY: 0,
                style: {
                  color: "#FFCDD2",
                  background: "#FFCDD2",
                },
                text: "*",
              },
            },
          ],
        },
        plotOptions: {
          bar: {
            horizontal: true,
            borderRadius: 10,
          },
        },

        dataLabels: {
          enabled: true,
          textAnchor: "middle",
          formatter: function (val, opt) {
            let value =
              val === 100
                ? " لیست آشنایان"
                : val === 200
                ? "لینکدین"
                : val === 300
                ? " تعامل آشنایان"
                : val === 400
                ? " تعامل لینکدین"
                : val === 500
                ? "انعقاد قرارداد"
                : val === 600
                ? "ساخت اکانت"
                : val === 700
                ? "پروفایل"
                : val === 800
                ? "پرتفولیو"
                : val === 900
                ? "پروژه داخلی"
                : val === 1000
                ? "ارسال بید"
                : val === 1100
                ? "اولین پروژه "
                : val === 1200
                ? "تایید نهایی "
                : " ";
            if (val === 0) {
              return " ";
            } else {
              return opt.w.globals.labels[opt.dataPointIndex] + ":  " + value;
            }
          },
          offsetX: 3,
        },
        xaxis: {
          type: "category",
          categories: categorieslist,
          position: "top",
          labels: {
            show: true,
            rotate: -15,
            rotateAlways: true,
            hideOverlappingLabels: false,
            style: {
              colors: [],
              fontSize: "12px",
              fontFamily: "Vazir, Arial, sans-serif",
              fontWeight: 400,
              cssClass: "apexcharts-xaxis-label",
            },
            offsetX: 0,
            offsetY: 0,
            formatter: function (value, t, op) {
              console.log(value, t, op);

              let step =
                value === 100
                  ? " لیست آشنایان"
                  : value === 200
                  ? "لینکدین "
                  : value === 300
                  ? "تعامل آشنایان"
                  : value === 400
                  ? " تعامل لینکدین"
                  : value === 500
                  ? "انعقاد قرارداد"
                  : value === 600
                  ? "ساخت اکانت"
                  : value === 700
                  ? "پروفایل"
                  : value === 800
                  ? "پرتفولیو"
                  : value === 900
                  ? "پروژه داخلی"
                  : value === 1000
                  ? "ارسال بید"
                  : value === 1100
                  ? "اولین پروژه "
                  : value === 1200
                  ? "تایید نهایی "
                  : "معرفی";

              return step;
              // The formatter function overrides format property
            },
          },
        },
        grid: {
          show: false,
          xaxis: {
            lines: {
              show: false,
            },
            yaxis: {
              lines: {
                show: false,
              },
            },
          },
          column: {
            colors: [
              "#ff000052",
              "#00800052",
              "#ffff0052",
              "#0000ff4f",
              
            ],
          },
        },
        yaxis: {
          reversed: true,
          axisTicks: {
            show: true,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: ["#4CB8C4", "#3CD3AD"], // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 100],
            colorStops: [
              [
                {
                  offset: 0,
                  color: "#1FA2FF",
                  opacity: 1,
                },
                {
                  offset: 0.6,
                  color: "#12D8FA",
                  opacity: 50,
                },
                {
                  offset: 100,
                  color: "#A6FFCB",
                  opacity: 1,
                },
              ],
            ],
          },
        },
        colors: ["#12D8FA"],
        tooltip: {
          custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            const srcimage = images[dataPointIndex];
            const val = series[seriesIndex][dataPointIndex];
            const step =
              val === 100
                ? " لیست آشنایان"
                : val === 200
                ? "لینکدین "
                : val === 300
                ? "تعامل آشنایان"
                : val === 400
                ? " تعامل لینکدین"
                : val === 500
                ? "انعقاد قرارداد"
                : val === 600
                ? "ساخت اکانت"
                : val === 700
                ? "پروفایل"
                : val === 800
                ? "پرتفولیو"
                : val === 900
                ? "پروژه داخلی"
                : val === 1000
                ? "ارسال بید"
                : val === 1100
                ? "اولین پروژه "
                : val === 1200
                ? "تایید نهایی "
                : "معرفی";
            return (
              '<div class="arrow_box">' +
              '<img src="./' +
              srcimage +
              '"  style="width:50px;height:50px;border-radius: 50%;">' +
              '<span  class="arrow_box_span">' +
              w.globals.labels[dataPointIndex] +
              "</span>" +
              '<span  class="arrow_box_span">' +
              step +
              "</span>" +
              "</div>"
            );
          },
        },
        theme: {
          mode: getTheme(),
          palette: "palette1",
          monochrome: {
            enabled: false,
            color: "#255aee",
            shadeTo: "light",
            shadeIntensity: 0.65,
          },
        },
        responsive: [
          {
            breakpoint: 769,
            options: {
              dataLabels: {
                enabled: true,
                style: {
                  fontSize: "9px",
                },
              },
            },
          },
          {
            breakpoint: 426,
            options: {
              dataLabels: {
                enabled: false,
              },
            },
          },
        ],
      },
    };
  },
  mounted() {
    images = [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "4.jpg",
      "5.jpg",
      "4.jpg",
      
    ];
    getTheme();
  },
};
</script>
<style>
.arrow_box {
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 35%,
    rgba(17, 113, 111, 1) 100%
  );
  border: 2px solid #000000;
  padding: 0.5rem;
}
.arrow_box img {
  margin-bottom: 0.5rem;
}
.arrow_box:after,
.arrow_box:before {
  left: 100%;
  top: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}

.arrow_box:after {
  border-color: rgba(85, 85, 85, 0);
  border-right-color: #555;
  border-width: 10px;
  margin-top: -10px;
}
.arrow_box:before {
  border-color: rgba(0, 0, 0, 0);
  border-right-color: #000000;
  border-width: 13px;
  margin-top: -13px;
}
.arrow_box_span {
  color: white;
  font-size: 10px;
}
.apexcharts-xaxis-unic {
  padding: 2rem;
  width: 100%;
}
</style>
