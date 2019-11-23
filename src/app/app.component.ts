import { FetchTalentsGQL, AddTalentGQL, UpdateTalentGQL } from './graphql/generated/graphql';
import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "graphql-client";
  constructor(private fetchTalentsGQL: FetchTalentsGQL, private addTalentGQL: AddTalentGQL, private updateTalentGQL: UpdateTalentGQL) {}
  fetchTalents() {
    this.fetchTalentsGQL.watch().valueChanges.subscribe(results => {
      console.log(results.data.fetchTalents);
    });
  }

  addTalent() {
    this.addTalentGQL
      .mutate({
        userInput: {
          role: "user",
          username: "nas1"
        },
        talentInput: {
          nom: "am",
          prenom: "Sakho"
        }
      })
      .subscribe(
        (response: any) => {
          console.log(response);
        },
        err => {
          /*TODO: add error handling after back end will be ready*/
        }
      );
  }
}
