const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  const k = 0.693 / HALF_LIFE_PERIOD;

  if (typeof sampleActivity !== 'string') {
    return false
  }
  if (sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) {
    return false
  }
  if (isNaN(parseFloat(sampleActivity))) {
    return false
  }
  
  return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k)
};
