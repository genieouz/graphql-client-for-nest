import { FetchTalentsGQL } from './../graphql/generated/graphql';
import { Component, OnInit } from '@angular/core';
import { catchError, map } from "rxjs/operators";

@Component({
  selector: "app-talent",
  templateUrl: "./talent.component.html",
  styleUrls: ["./talent.component.css"]
})
export class TalentComponent implements OnInit {
  constructor(private fetchTalentsGQL: FetchTalentsGQL) {}

  ngOnInit() {}

  fetchTalent() {
    //  this.fetchTalentsGQL.mutate({}).subscribe(
    //    (response: boolean) => {
    //    },
    //    err => {
    //      /*TODO: add error handling after back end will be ready*/
         
    //  );
    this.fetchTalentsGQL
      .watch()
      .valueChanges.pipe(map(result => {
        console.log(result.data.fetchTalents);
        return result.data.fetchTalents

      }));
  }
}
