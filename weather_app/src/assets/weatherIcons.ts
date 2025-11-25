type iconsTypes = Record<number, { 0: string; 1: string }>;

export const weatherIcons: iconsTypes = {
  1000: { 1: "clear-day.svg", 0: "clear-night.svg" }, // Sunny / Clear
  1003: { 1: "cloudy-1-day.svg", 0: "cloudy-1-night.svg" }, // Partly cloudy
  1006: { 1: "cloudy-2-day.svg", 0: "cloudy-2-night.svg" }, // Cloudy
  1009: { 1: "cloudy-2-day.svg", 0: "cloudy-2-day.svg" }, // Overcast

  1030: { 1: "fog-day.svg", 0: "fog-night.svg" }, // Mist
  1063: { 1: "rainy-1-day.svg", 0: "rainy-1-night.svg" }, // Patchy rain possible

  1066: { 1: "snowy-1-day.svg", 0: "snowy-1-night.svg" }, // Patchy snow possible
  1069: { 1: "sleet.svg", 0: "sleet.svg" }, // Patchy sleet possible
  1072: { 1: "rain-and-sleet-mix.svg", 0: "rain-and-sleet-mix.svg" }, // Patchy freezing drizzle possible

  1087: {
    1: "isolated-thunderstorms-day.svg",
    0: "isolated-thunderstorms-night.svg",
  }, // Thundery outbreaks possible

  1114: { 1: "snowy-3-day.svg", 0: "snowy-3-night.svg" }, // Blowing snow
  1117: { 1: "snowy-6.svg", 0: "snowy-6.svg" }, // Blizzard

  1135: { 1: "fog-day.svg", 0: "fog-night.svg" }, // Fog
  1147: { 1: "fog-day.svg", 0: "fog-night.svg" }, // Freezing fog

  1150: { 1: "rainy-1-day.svg", 0: "rainy-1-night.svg" }, // Patchy light drizzle
  1153: { 1: "rainy-1-day.svg", 0: "rainy-1-night.svg" }, // Light drizzle
  1168: { 1: "rain-and-sleet-mix.svg", 0: "rain-and-sleet-mix.svg" }, // Freezing drizzle
  1171: { 1: "rain-and-sleet-mix.svg", 0: "rain-and-sleet-mix.svg" }, // Heavy freezing drizzle

  1180: { 1: "rainy-1-day.svg", 0: "rainy-1-night.svg" }, // Patchy light rain
  1183: { 1: "rainy-1-day.svg", 0: "rainy-1-night.svg" }, // Light rain
  1186: { 1: "rainy-2-day.svg", 0: "rainy-2-night.svg" }, // Moderate rain at times
  1189: { 1: "rainy-2-day.svg", 0: "rainy-2-night.svg" }, // Moderate rain

  1192: { 1: "rainy-3-day.svg", 0: "rainy-3-night.svg" }, // Heavy rain at times
  1195: { 1: "rainy-3-day.svg", 0: "rainy-3-night.svg" }, // Heavy rain

  1198: { 1: "rain-and-sleet-mix.svg", 0: "rain-and-sleet-mix.svg" }, // Light freezing rain
  1201: { 1: "rain-and-sleet-mix.svg", 0: "rain-and-sleet-mix.svg" }, // Moderate or heavy freezing rain

  1204: { 1: "sleet.svg", 0: "sleet.svg" }, // Light sleet
  1207: { 1: "snow-and-sleet-mix.svg", 0: "snow-and-sleet-mix.svg" }, // Moderate or heavy sleet

  1210: { 1: "snowy-1-day.svg", 0: "snowy-1-night.svg" }, // Patchy light snow
  1213: { 1: "snowy-1-day.svg", 0: "snowy-1-night.svg" }, // Light snow
  1216: { 1: "snowy-2-day.svg", 0: "snowy-2-night.svg" }, // Patchy moderate snow
  1219: { 1: "snowy-2-day.svg", 0: "snowy-2-night.svg" }, // Moderate snow
  1222: { 1: "snowy-3-day.svg", 0: "snowy-3-night.svg" }, // Patchy heavy snow
  1225: { 1: "snowy-3-day.svg", 0: "snowy-3-night.svg" }, // Heavy snow

  1237: { 1: "hail.svg", 0: "hail.svg" }, // Ice pellets -> hail
  1240: { 1: "rainy-1-day.svg", 0: "rainy-1-night.svg" }, // Light rain shower
  1243: { 1: "rainy-2-day.svg", 0: "rainy-2-night.svg" }, // Moderate or heavy rain shower
  1246: { 1: "rainy-3-day.svg", 0: "rainy-3-night.svg" }, // Torrential rain shower

  1249: { 1: "sleet.svg", 0: "sleet.svg" }, // Light sleet showers
  1252: { 1: "snow-and-sleet-mix.svg", 0: "snow-and-sleet-mix.svg" }, // Moderate or heavy sleet showers

  1255: { 1: "snowy-1-day.svg", 0: "snowy-1-night.svg" }, // Light snow showers
  1258: { 1: "snowy-2-day.svg", 0: "snowy-2-night.svg" }, // Moderate or heavy snow showers

  1261: { 1: "rain-and-snow-mix.svg", 0: "rain-and-snow-mix.svg" }, // Light showers of ice pellets
  1264: { 1: "rain-and-snow-mix.svg", 0: "rain-and-snow-mix.svg" }, // Moderate or heavy showers of ice pellets

  1273: {
    1: "isolated-thunderstorms-day.svg",
    0: "isolated-thunderstorms-night.svg",
  }, // Patchy light rain with thunder
  1276: { 1: "severe-thunderstorm.svg", 0: "severe-thunderstorm.svg" }, // Moderate or heavy rain with thunder
  1279: {
    1: "isolated-thunderstorms-day.svg",
    0: "isolated-thunderstorms-night.svg",
  }, // Patchy light snow with thunder
  1282: { 1: "severe-thunderstorm.svg", 0: "severe-thunderstorm.svg" }, // Moderate or heavy snow with thunder
};
