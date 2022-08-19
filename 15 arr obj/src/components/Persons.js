import persons from '../data/persons.js'
import Person from './Person.js';

function Persons() {
    return <div className="cards">
         {persons.map((person) => {
          // спрэд оператор разделает объект на св-ва
      return <Person {...person} key={person.id} />
       })}
    </div>
}

export default Persons