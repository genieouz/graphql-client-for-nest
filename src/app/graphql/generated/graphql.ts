/* THIS IS A GENERATED FILE - DO NOT MODIFY */
/* tslint:disable  */
import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any,
};




export type Mutation = {
   __typename?: 'Mutation',
  addTalent: Talent,
  updateTalent: Talent,
  deleteTalent: Scalars['Boolean'],
};


export type MutationAddTalentArgs = {
  userInput: UserInput,
  talentInput: TalentInput
};


export type MutationUpdateTalentArgs = {
  talentInput: TalentInput,
  id: Scalars['ID']
};


export type MutationDeleteTalentArgs = {
  id: Scalars['ID']
};

export type Query = {
   __typename?: 'Query',
  fetchTalents: Array<Talent>,
  fetchTalent: Talent,
};


export type QueryFetchTalentArgs = {
  id: Scalars['ID']
};

export type Talent = {
   __typename?: 'Talent',
  _id: Scalars['String'],
  prenom: Scalars['String'],
  nom: Scalars['String'],
  dateNaissance?: Maybe<Scalars['DateTime']>,
  user: User,
};

export type TalentInput = {
  prenom: Scalars['String'],
  nom: Scalars['String'],
  dateNaissance?: Maybe<Scalars['DateTime']>,
};

export type User = {
   __typename?: 'User',
  _id: Scalars['ID'],
  username: Scalars['String'],
  role?: Maybe<Scalars['String']>,
};

export type UserInput = {
  username: Scalars['String'],
  role: Scalars['String'],
};

export type AddTalentMutationVariables = {
  userInput: UserInput,
  talentInput: TalentInput
};


export type AddTalentMutation = (
  { __typename?: 'Mutation' }
  & { addTalent: (
    { __typename?: 'Talent' }
    & Pick<Talent, '_id' | 'prenom' | 'nom'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'username' | 'role'>
    ) }
  ) }
);

export type FetchTalentsQueryVariables = {};


export type FetchTalentsQuery = (
  { __typename?: 'Query' }
  & { fetchTalents: Array<(
    { __typename?: 'Talent' }
    & Pick<Talent, '_id' | 'prenom' | 'nom'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'username' | 'role'>
    ) }
  )> }
);

export type UpdateTalentMutationVariables = {
  talentInput: TalentInput,
  id: Scalars['ID']
};


export type UpdateTalentMutation = (
  { __typename?: 'Mutation' }
  & { updateTalent: (
    { __typename?: 'Talent' }
    & Pick<Talent, '_id' | 'prenom' | 'nom'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'username' | 'role'>
    ) }
  ) }
);


export const AddTalentDocument = gql`
    mutation AddTalent($userInput: UserInput!, $talentInput: TalentInput!) {
  addTalent(userInput: $userInput, talentInput: $talentInput) {
    _id
    prenom
    nom
    user {
      username
      role
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddTalentGQL extends Apollo.Mutation<AddTalentMutation, AddTalentMutationVariables> {
    document = AddTalentDocument;
    
  }
export const FetchTalentsDocument = gql`
    query FetchTalents {
  fetchTalents {
    _id
    prenom
    nom
    user {
      username
      role
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchTalentsGQL extends Apollo.Query<FetchTalentsQuery, FetchTalentsQueryVariables> {
    document = FetchTalentsDocument;
    
  }
export const UpdateTalentDocument = gql`
    mutation UpdateTalent($talentInput: TalentInput!, $id: ID!) {
  updateTalent(talentInput: $talentInput, id: $id) {
    _id
    prenom
    nom
    user {
      username
      role
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateTalentGQL extends Apollo.Mutation<UpdateTalentMutation, UpdateTalentMutationVariables> {
    document = UpdateTalentDocument;
    
  }