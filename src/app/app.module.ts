import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { TalentComponent } from './talent/talent.component';

@NgModule({
  declarations: [
    AppComponent,
    TalentComponent
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: (httpLink: HttpLink) => {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: "http://localhost:3000/graphql"
        })
      };
    },
    deps: [HttpLink]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
