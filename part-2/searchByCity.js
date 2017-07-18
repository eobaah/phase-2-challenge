const fs = require( 'fs' )

fs.readFile( './clients.json', ( error, json ) => {
  if ( error ) throw new Error( ' Wait! I couldn\' t get your file homie' );
  const directory = JSON.parse( json )

  const allCompanies = []
  let query = process.argv[2]

  directory.forEach( function( element ) {
    let lowerCaseElementCity = element.city
    lowerCaseElementCity = lowerCaseElementCity.toLowerCase()
    let lowerCaseQueryName = query.toLowerCase()
    if( lowerCaseElementCity.includes( lowerCaseQueryName ) ) {
      const contact = {}
      contact.id = element.id
      contact.rep_name = element.rep_name
      contact.company = element.company
      contact.city = element.city
      contact.state = element.state
      allCompanies.push( contact )
    }
  })
  console.log( allCompanies )
} )
