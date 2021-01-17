// sleep cal not yet done! will finish later

const getSleepHours = day => {

  if(day === 'monday') {
    return 7;
  }
  else if(day === 'tuesday') {
    return 6;
  }
  else if(day === 'wednesday') {
    return 5;
  }
  else if(day === 'thursday') {
    return 4;
  }
  else if(day === 'friday') {
    return 3;
  }
  else if(day === 'saturday') {
    return 2;
  }
  else if(day === 'sunday') {
    return 1;
  }
  else {
    return error;
  }
};

const getActualSleepHours = () => 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

  console.log(getActualSleepHours('monday'));
  console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getActualSleepHours();
};
