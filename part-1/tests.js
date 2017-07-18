import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import { month, reverseSentence, nameProps } from './functions.js'
// import { month,
//          reverseSentence,
//          nameProps,
//          filterBetween } from './functions.js'

chai.use( chaiChange )

describe('month()', function(){

  it( 'should be a function', function() {
    expect( month ).to.be.a( 'function' )
  })

  it('Checks if function returns correct month', function() {
    let date = new Date( "2017, 6, 19" )
    expect( month( date ) ).to.equal( "May" )
  })

  it('Checks if user enters an invalid input and throws an error providing feedback', function(){
    let date = new Date( '2017, "June", 19' )

    expect( month.bind( date ) ).to.throw( 'Please enter a valid date STRING with the format YYYY, MM, DD')
  })
})

describe( 'reverseSentence()', function() {

  it( 'should be a function', function() {
    expect( reverseSentence ).to.be.a( 'function' )
  })

  it( 'Takes a string of words and returns a string with the words in reverse order', function() {
    let string = "That's me in the corner. That's me in the spotlight. Losing my religion"
    expect( reverseSentence( string ) ).to.equal( "religion my Losing spotlight. the in me That's corner. the in me That's" )
  })

  it( 'Checks if user enters an invalid input and throws an error providing feedback', function() {
    let string = 1979

    expect( reverseSentence.bind( string ) ).to.throw( "Please enter a valid string enclosed in quotation marks" )
  })
})

describe( 'nameProps()', function() {

  it( 'should be a function', function() {
    expect( nameProps ).to.be.a( 'function' )
  })

  it( 'returns the names of the properties an object has in alphabetical order', function() {
    let friend = {
      name: 'Dominique',
      age: 30,
      phone: '555-555-5555'
    }
    expect( nameProps( friend ) ).to.eql( ['age', 'name', 'phone'] )
  })

  it( 'returns an empty array when an empty object is entered', function() {
    let friend = {}
    expect( nameProps( friend ) ).to.eql( [] )
  })

  it( 'Checks if user enters an invalid input and throws an error providing feedback', function() {
    let friend = [
      "art: 'Basic'",
      "age: 30",
      "0: '646-345-8585'"
    ]
    expect( nameProps.bind( friend ) ).to.throw( 'Please enter a valid object containing key and value pairs' )
  })
})
