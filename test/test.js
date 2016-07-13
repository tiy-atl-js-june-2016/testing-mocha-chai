// Import Chai
import chai from 'chai';

// Import Any Files to Test
import { Person } from '../src/js/person';
import { Cat } from '../src/js/cat';

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

// Tests about our person
describe('About our person', function () {

  let p;

  beforeEach(function () {
    p = new Person();
  });
  
  describe('The creation of a Person instance', function () {
    it('should be an instance of Person', function () {
      expect(p).to.be.an.instanceof(Person);
    });
  });

  describe('Person should have a property of name', function () {
    it('should have the passed in name', function () {
      p = new Person('Bill');
      expect(p.name).to.equal('Bill');
      p = new Person('Stacy');
      expect(p.name).to.equal('Stacy');
    });
    it('should default to "anon" when no name is passed in', function () {
      expect(p.name).to.equal('anon');
    });
  });

});

describe('About our Cat', () => {

  describe('Creation of our cat', () => {

    it('should be an instance of', () => {
      let c = new Cat();
      expect(c).to.be.an.instanceof(Cat);
    });

  }); 

});