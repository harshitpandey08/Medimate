const convertTime = time=>{

  // timeparts will return an array
  const timeparts = time.split(':');
  let hours = parseInt(timeparts[0]);
  const minutes = parseInt(timeparts[1]);

  let meridiem = 'am'

  if(hours >= 12){
    meridiem='pm'

    if(hours >12){
      hours -= 12;
    }

  }

  return ( 
    hours.toString().padStart(2) + 
    ":" +
    minutes.toString().padStart(2,"0") + 
    " " +
    meridiem 
  );
};

export default convertTime;