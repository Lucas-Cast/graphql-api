import { GraphQLResolveInfo } from 'graphql';
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

export type CreateMovieInput = {
  __typename?: 'CreateMovieInput';
  actors?: Maybe<Array<Scalars['ID']['output']>>;
  director: Scalars['String']['output'];
  releaseYear: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type Movie = {
  __typename?: 'Movie';
  actors?: Maybe<Array<Actor>>;
  director: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  releaseYear: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createActor: Actor;
  createMovie: Movie;
  deleteActor?: Maybe<Actor>;
  deleteMovie?: Maybe<Movie>;
  updateActor?: Maybe<Actor>;
  updateMovie?: Maybe<Movie>;
};


export type MutationCreateActorArgs = {
  input: CreateActorInput;
};


export type MutationCreateMovieArgs = {
  input: CreateMovieInput;
};


export type MutationDeleteActorArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMovieArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateActorArgs = {
  id: Scalars['ID']['input'];
  input: UpdateActorInput;
};


export type MutationUpdateMovieArgs = {
  id: Scalars['ID']['input'];
  input: UpdateMovieInput;
};

export type Query = {
  __typename?: 'Query';
  actor?: Maybe<Actor>;
  actors?: Maybe<Array<Actor>>;
  movie?: Maybe<Movie>;
  movies?: Maybe<Array<Movie>>;
};


export type QueryActorArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMovieArgs = {
  id: Scalars['ID']['input'];
};

export type UpdateActorInput = {
  birthYear?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMovieInput = {
  __typename?: 'UpdateMovieInput';
  actors?: Maybe<Array<Scalars['ID']['output']>>;
  director?: Maybe<Scalars['String']['output']>;
  releaseYear?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};



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
export type ResolversTypes = {
  Actor: ResolverTypeWrapper<Actor>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateActorInput: CreateActorInput;
  CreateMovieInput: ResolverTypeWrapper<CreateMovieInput>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Movie: ResolverTypeWrapper<Movie>;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateActorInput: UpdateActorInput;
  UpdateMovieInput: ResolverTypeWrapper<UpdateMovieInput>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Actor: Actor;
  Boolean: Scalars['Boolean']['output'];
  CreateActorInput: CreateActorInput;
  CreateMovieInput: CreateMovieInput;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Movie: Movie;
  Mutation: Record<PropertyKey, never>;
  Query: Record<PropertyKey, never>;
  String: Scalars['String']['output'];
  UpdateActorInput: UpdateActorInput;
  UpdateMovieInput: UpdateMovieInput;
};

export type ActorResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Actor'] = ResolversParentTypes['Actor']> = {
  birthYear?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type CreateMovieInputResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['CreateMovieInput'] = ResolversParentTypes['CreateMovieInput']> = {
  actors?: Resolver<Maybe<Array<ResolversTypes['ID']>>, ParentType, ContextType>;
  director?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  releaseYear?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type MovieResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Movie'] = ResolversParentTypes['Movie']> = {
  actors?: Resolver<Maybe<Array<ResolversTypes['Actor']>>, ParentType, ContextType>;
  director?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  releaseYear?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type MutationResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createActor?: Resolver<ResolversTypes['Actor'], ParentType, ContextType, RequireFields<MutationCreateActorArgs, 'input'>>;
  createMovie?: Resolver<ResolversTypes['Movie'], ParentType, ContextType, RequireFields<MutationCreateMovieArgs, 'input'>>;
  deleteActor?: Resolver<Maybe<ResolversTypes['Actor']>, ParentType, ContextType, RequireFields<MutationDeleteActorArgs, 'id'>>;
  deleteMovie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<MutationDeleteMovieArgs, 'id'>>;
  updateActor?: Resolver<Maybe<ResolversTypes['Actor']>, ParentType, ContextType, RequireFields<MutationUpdateActorArgs, 'id' | 'input'>>;
  updateMovie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<MutationUpdateMovieArgs, 'id' | 'input'>>;
};

export type QueryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  actor?: Resolver<Maybe<ResolversTypes['Actor']>, ParentType, ContextType, RequireFields<QueryActorArgs, 'id'>>;
  actors?: Resolver<Maybe<Array<ResolversTypes['Actor']>>, ParentType, ContextType>;
  movie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<QueryMovieArgs, 'id'>>;
  movies?: Resolver<Maybe<Array<ResolversTypes['Movie']>>, ParentType, ContextType>;
};

export type UpdateMovieInputResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['UpdateMovieInput'] = ResolversParentTypes['UpdateMovieInput']> = {
  actors?: Resolver<Maybe<Array<ResolversTypes['ID']>>, ParentType, ContextType>;
  director?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  releaseYear?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = GraphQLContext> = {
  Actor?: ActorResolvers<ContextType>;
  CreateMovieInput?: CreateMovieInputResolvers<ContextType>;
  Movie?: MovieResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UpdateMovieInput?: UpdateMovieInputResolvers<ContextType>;
};

