import { GraphQLResolveInfo } from 'graphql';
import { Genre as PrismaGenre, Movie as PrismaMovie, Actor as PrismaActor } from './prisma-client/client';
import { GraphQLContext } from '../context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Actor = {
  __typename?: 'Actor';
  birthYear: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CreateActorInput = {
  birthYear: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type CreateGenreInput = {
  movies?: InputMaybe<Array<Scalars['ID']['input']>>;
  name: Scalars['String']['input'];
};

export type CreateMovieInput = {
  actors?: InputMaybe<Array<Scalars['ID']['input']>>;
  director: Scalars['String']['input'];
  genres?: InputMaybe<Array<Scalars['ID']['input']>>;
  releaseYear: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type Genre = {
  __typename?: 'Genre';
  id: Scalars['ID']['output'];
  movies?: Maybe<Array<Movie>>;
  name: Scalars['String']['output'];
};

export type Movie = {
  __typename?: 'Movie';
  actors?: Maybe<Array<Actor>>;
  director: Scalars['String']['output'];
  genres?: Maybe<Array<Genre>>;
  id: Scalars['ID']['output'];
  releaseYear: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createActor: Actor;
  createGenre: Genre;
  createMovie: Movie;
  deleteActor?: Maybe<Actor>;
  deleteGenre?: Maybe<Genre>;
  deleteMovie?: Maybe<Movie>;
  updateActor?: Maybe<Actor>;
  updateGenre?: Maybe<Genre>;
  updateMovie?: Maybe<Movie>;
};


export type MutationCreateActorArgs = {
  input: CreateActorInput;
};


export type MutationCreateGenreArgs = {
  input: CreateGenreInput;
};


export type MutationCreateMovieArgs = {
  input: CreateMovieInput;
};


export type MutationDeleteActorArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteGenreArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMovieArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateActorArgs = {
  id: Scalars['ID']['input'];
  input: UpdateActorInput;
};


export type MutationUpdateGenreArgs = {
  id: Scalars['ID']['input'];
  input: UpdateGenreInput;
};


export type MutationUpdateMovieArgs = {
  id: Scalars['ID']['input'];
  input: UpdateMovieInput;
};

export type Query = {
  __typename?: 'Query';
  actor?: Maybe<Actor>;
  actors?: Maybe<Array<Actor>>;
  genre?: Maybe<Genre>;
  genres?: Maybe<Array<Genre>>;
  movie?: Maybe<Movie>;
  movies?: Maybe<Array<Movie>>;
};


export type QueryActorArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGenreArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMovieArgs = {
  id: Scalars['ID']['input'];
};

export type UpdateActorInput = {
  birthYear?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateGenreInput = {
  movies?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMovieInput = {
  actors?: InputMaybe<Array<Scalars['ID']['input']>>;
  director?: InputMaybe<Scalars['String']['input']>;
  genres?: InputMaybe<Array<Scalars['ID']['input']>>;
  releaseYear?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = Record<PropertyKey, never>, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;





/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Actor: ResolverTypeWrapper<PrismaActor>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateActorInput: CreateActorInput;
  CreateGenreInput: CreateGenreInput;
  CreateMovieInput: CreateMovieInput;
  Genre: ResolverTypeWrapper<PrismaGenre>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Movie: ResolverTypeWrapper<PrismaMovie>;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateActorInput: UpdateActorInput;
  UpdateGenreInput: UpdateGenreInput;
  UpdateMovieInput: UpdateMovieInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Actor: PrismaActor;
  Boolean: Scalars['Boolean']['output'];
  CreateActorInput: CreateActorInput;
  CreateGenreInput: CreateGenreInput;
  CreateMovieInput: CreateMovieInput;
  Genre: PrismaGenre;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Movie: PrismaMovie;
  Mutation: Record<PropertyKey, never>;
  Query: Record<PropertyKey, never>;
  String: Scalars['String']['output'];
  UpdateActorInput: UpdateActorInput;
  UpdateGenreInput: UpdateGenreInput;
  UpdateMovieInput: UpdateMovieInput;
}>;

export type ActorResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Actor'] = ResolversParentTypes['Actor']> = ResolversObject<{
  birthYear?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type GenreResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Genre'] = ResolversParentTypes['Genre']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  movies?: Resolver<Maybe<Array<ResolversTypes['Movie']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type MovieResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Movie'] = ResolversParentTypes['Movie']> = ResolversObject<{
  actors?: Resolver<Maybe<Array<ResolversTypes['Actor']>>, ParentType, ContextType>;
  director?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  genres?: Resolver<Maybe<Array<ResolversTypes['Genre']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  releaseYear?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createActor?: Resolver<ResolversTypes['Actor'], ParentType, ContextType, RequireFields<MutationCreateActorArgs, 'input'>>;
  createGenre?: Resolver<ResolversTypes['Genre'], ParentType, ContextType, RequireFields<MutationCreateGenreArgs, 'input'>>;
  createMovie?: Resolver<ResolversTypes['Movie'], ParentType, ContextType, RequireFields<MutationCreateMovieArgs, 'input'>>;
  deleteActor?: Resolver<Maybe<ResolversTypes['Actor']>, ParentType, ContextType, RequireFields<MutationDeleteActorArgs, 'id'>>;
  deleteGenre?: Resolver<Maybe<ResolversTypes['Genre']>, ParentType, ContextType, RequireFields<MutationDeleteGenreArgs, 'id'>>;
  deleteMovie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<MutationDeleteMovieArgs, 'id'>>;
  updateActor?: Resolver<Maybe<ResolversTypes['Actor']>, ParentType, ContextType, RequireFields<MutationUpdateActorArgs, 'id' | 'input'>>;
  updateGenre?: Resolver<Maybe<ResolversTypes['Genre']>, ParentType, ContextType, RequireFields<MutationUpdateGenreArgs, 'id' | 'input'>>;
  updateMovie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<MutationUpdateMovieArgs, 'id' | 'input'>>;
}>;

export type QueryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  actor?: Resolver<Maybe<ResolversTypes['Actor']>, ParentType, ContextType, RequireFields<QueryActorArgs, 'id'>>;
  actors?: Resolver<Maybe<Array<ResolversTypes['Actor']>>, ParentType, ContextType>;
  genre?: Resolver<Maybe<ResolversTypes['Genre']>, ParentType, ContextType, RequireFields<QueryGenreArgs, 'id'>>;
  genres?: Resolver<Maybe<Array<ResolversTypes['Genre']>>, ParentType, ContextType>;
  movie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<QueryMovieArgs, 'id'>>;
  movies?: Resolver<Maybe<Array<ResolversTypes['Movie']>>, ParentType, ContextType>;
}>;

export type Resolvers<ContextType = GraphQLContext> = ResolversObject<{
  Actor?: ActorResolvers<ContextType>;
  Genre?: GenreResolvers<ContextType>;
  Movie?: MovieResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

