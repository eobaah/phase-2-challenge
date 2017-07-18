const fs = require( 'fs' )

fs.readFile( './clients.json', ( error, json ) => {
  if ( error ) throw new Error( ' Wait! I couldn\' t get your file homie' );
  const directory = JSON.parse( json )

  const allCompanies = []
  let query = process.argv[2]

  directory.forEach( function( element ) {
    let lowerCaseElementName = element.company
    lowerCaseElementName = lowerCaseElementName.toLowerCase()
    let lowerCaseQueryName = query.toLowerCase()
    if( lowerCaseElementName.includes( lowerCaseQueryName ) ) {
      const contact = {}
      contact.id = element.id
      contact.company = element.company
      contact.phone = element.phone
      allCompanies.push( contact )
    }
  })
  console.log( allCompanies )
} )
