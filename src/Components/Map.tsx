import React from "react";
import {
  Chart,
  ChartWrapperOptions,
  ReactGoogleChartEvent,
} from "react-google-charts";

export const Map = () => {
  const data = [
    ["State Code", "State", "Population"],
    ["IN-BR", "Bihar", 200],
    ["IN-UP", "Uttar Pradesh", 300],
    ["IN-MP", "Madhya Pradesh", 400],
    ["IN-RJ", "Rajasthan", 500],
    ["IN-MH", "Maharashtra", 600],
    ["IN-KA", "Karnataka", 700],
    ["IN-TN", "Tamil Nadu", 800],
    ["IN-AP", "Andhra Pradesh", 900],
    ["IN-GJ", "Gujarat", 1000],
    ["IN-WB", "West Bengal", 1100],
    ["IN-OR", "Orissa", 1200],
    ["IN-AS", "Assam", 1300],
    ["IN-NL", "Nagaland", 1400],
    ["IN-AN", "Andaman and Nicobar Islands", 1500],
    ["IN-PY", "Puducherry", 1600],
    ["IN-CH", "Chandigarh", 1700],
    ["IN-LD", "Ladakh", 1800],
    ["IN-SK", "Sikkim", 1900],
    ["IN-TR", "Tripura", 2000],
    ["IN-AR", "Arunachal Pradesh", 2100],
    ["IN-MN", "Manipur", 2200],
    ["IN-MZ", "Mizoram", 2300],
    ["IN-NL", "Nagaland", 2400],
    ["IN-PB", "Punjab", 2500],
    ["IN-HR", "Haryana", 2600],
    ["IN-JK", "Jammu and Kashmir", 2700],
    ["IN-JH", "Jharkhand", 2800],
    ["IN-CT", "Chhattisgarh", 2900],
    ["IN-GA", "Goa", 3000],
    ["IN-KL", "Kerala", 3100],
    ["IN-DN", "Dadra and Nagar Haveli", 3200],
    ["IN-DD", "Daman and Diu", 3300],
    ["IN-DL", "Delhi", 3400],
    ["IN-LD", "Lakshadweep", 3500],
    ["IN-ML", "Meghalaya", 3700],
    ["IN-LA", "Ladakh", 3800],
    ["IN-UT", "Uttarakhand", 3400],
  ];
  const options: ChartWrapperOptions["options"] = {
    region: "IN",
    domain: "IN",
    displayMode: "regions", //'regions',
    resolution: "provinces",
    colorAxis: { colors: ["#00b21c", "#00853f", "#e31b23"] },
    // backgroundColor: '#81d4fa',
    // datalessRegionColor: '#fcfcfc',
    // defaultColor: '#f5f5f5',
  };

  const chartEvents: ReactGoogleChartEvent[] = [
    {
      eventName: "select",
      callback: ({ chartWrapper }) => {
        const chart = chartWrapper.getChart();
        const selection = chart.getSelection();
      },
    },
  ];

  return (
    <div className="map-wrapper">
      <Chart
        options={options}
        height={"100%"}
        width={"100%"}
        chartType="GeoChart"
        data={data}
        chartEvents={chartEvents}
      />
    </div>
  );
};
