let date = new Date( 2017, 6 , 17 )

function month( date ) {

  let monthRange = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  if( date == 'Invalid Date' || date == undefined ) {
    throw new Error( 'Please enter a valid date STRING with the format YYYY, MM, DD' )
  } else {
    return monthRange[ date.getMonth() - 1 ]
  }
}

module.exports = {
  month
}
// module.exports = {
//   month,
//   reverseSentence,
//   nameProps,
//   filterBetween
// }
