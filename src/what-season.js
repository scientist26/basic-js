module.exports = function getSeason(date) {
  const seasons = ['winter', 'spring', 'summer', 'autumn',];

  if (date === undefined) {
    return 'Unable to determine the time of year!'
  }

  if (date.hasOwnProperty('getMonth')) throw Error;


  
      let season = (date.getMonth() == 11 || date.getMonth() == 0 || date.getMonth() == 1) ? seasons[0] :
      (date.getMonth() > 1 && date.getMonth() <= 4) ? seasons[1] :
      (date.getMonth() > 4 && date.getMonth() <= 7) ? seasons[2] : seasons[3];
    
      return season

      

};
