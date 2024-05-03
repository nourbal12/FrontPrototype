import { Component, OnInit } from '@angular/core';
import { Person, PersonService } from './person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  people!: Person[];
  newPerson: Person = {
    name: '', age: 0,
    id: 0
  }; // Initialize newPerson object
  selectedPerson!: Person;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(): void {
    this.personService.getPeople()
      .subscribe(people => this.people = people);
  }

  addPerson(): void {
    if (this.newPerson.name.trim() && this.newPerson.age) {
      this.personService.addPerson(this.newPerson)
        .subscribe(() => {
          this.getPeople(); // Refresh the list after adding a new person
          this.newPerson = { name: '', age: 0,id:1 }; // Clear the form
        });
    }
  }

  getPersonDetails(person: Person): void {
    this.selectedPerson = person;
  }
}
 