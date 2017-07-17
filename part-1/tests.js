import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import { month } from './functions.js'
// import { month,
//          reverseSentence,
//          nameProps,
//          filterBetween } from './functions.js'

chai.use(chaiChange)

describe('month()', function(){

  it.only('should be a function', function(){
    expect( month ).to.be.a('function')
  })

  it('Checks if function returns correct month', function(){
    let date = new Date(2017, 5, 19)
    expect( month( date ) ).to.equal( "June" )
  })


  it('Checks if user enters valid input and throws an error providing feedback', function(){
    let date = new Date(2017, "June", 19)
    expect( month( date ) ).to.throw('Please enter a valid month with the format YYYY,MM,DD')
  })
})
