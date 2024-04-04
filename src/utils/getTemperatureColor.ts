export const getTemperatureColor = (temperature?: number): string => {
  if (!temperature) {
    return 'white';
  }

  if (temperature < -10) {
    return 'white';
  } else if (temperature <= 0) {
    return 'blue';
  } else if (temperature <= 10) {
    return 'lightblue';
  } else if (temperature <= 15) {
    return 'yellow';
  } else if (temperature <= 20) {
    return 'yellow';
  } else if (temperature <= 25) {
    return 'orange';
  } else if (temperature <= 30) {
    return 'red';
  } else {
    return 'darkred';
  }
};
