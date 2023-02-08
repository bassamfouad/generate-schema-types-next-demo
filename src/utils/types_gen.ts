export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `DateTime` scalar type represents a DateTime. The DateTime is serialized as an RFC 3339 quoted string */
  DateTime: any;
  /** Any JSON value */
  JSON: any;
};

export type IGenAsset = {
  __typename: 'Asset';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  author?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dominantColor?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  keywords?: Maybe<Scalars['String']>;
  originType?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type IGenAsset_Connection = {
  __typename: 'Asset_Connection';
  edges?: Maybe<Array<Maybe<IGenAsset_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenAsset_ConnectionEdge = {
  __typename: 'Asset_ConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenAsset>;
};

export type IGenAsset_CreateInput = {
  author?: InputMaybe<Scalars['String']>;
  copyright?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  dominantColor?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Scalars['String']>;
  originType?: InputMaybe<Scalars['String']>;
  originalName?: InputMaybe<Scalars['String']>;
  src?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IGenAsset_Sort = {
  author?: InputMaybe<IGenOrder>;
  copyright?: InputMaybe<IGenOrder>;
  description?: InputMaybe<IGenOrder>;
  dominantColor?: InputMaybe<IGenOrder>;
  keywords?: InputMaybe<IGenOrder>;
  originType?: InputMaybe<IGenOrder>;
  originalName?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
};

export type IGenAsset_UpdateInput = {
  author?: InputMaybe<Scalars['String']>;
  copyright?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  dominantColor?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Scalars['String']>;
  originType?: InputMaybe<Scalars['String']>;
  originalName?: InputMaybe<Scalars['String']>;
  src?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IGenAsset_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenAsset_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenAsset_Where>>>;
  author?: InputMaybe<IGenCaisyField_String_Where>;
  copyright?: InputMaybe<IGenCaisyField_String_Where>;
  description?: InputMaybe<IGenCaisyField_String_Where>;
  dominantColor?: InputMaybe<IGenCaisyField_Color_Where>;
  keywords?: InputMaybe<IGenCaisyField_String_Where>;
  originType?: InputMaybe<IGenCaisyField_String_Where>;
  originalName?: InputMaybe<IGenCaisyField_String_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenBlogArticle = {
  __typename: 'BlogArticle';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['JSON']>;
  title?: Maybe<Scalars['String']>;
};

export type IGenBlogArticle_Connection = {
  __typename: 'BlogArticle_Connection';
  edges?: Maybe<Array<Maybe<IGenBlogArticle_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenBlogArticle_ConnectionEdge = {
  __typename: 'BlogArticle_ConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenBlogArticle>;
};

export type IGenBlogArticle_CreateInput = {
  slug?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['JSON']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IGenBlogArticle_Sort = {
  slug?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
};

export type IGenBlogArticle_UpdateInput = {
  slug?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['JSON']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IGenBlogArticle_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenBlogArticle_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenBlogArticle_Where>>>;
  slug?: InputMaybe<IGenCaisyField_String_Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenCaisyDocument_Meta = {
  __typename: 'CaisyDocument_Meta';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  locale?: Maybe<Scalars['String']>;
  locales?: Maybe<Array<Maybe<Scalars['String']>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IGenCaisyField_Color_Where = {
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
};

export type IGenCaisyField_Richtext_Where = {
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
};

export type IGenCaisyField_String_Where = {
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
};

export type IGenMutation = {
  __typename: 'Mutation';
  createAsset?: Maybe<IGenAsset>;
  createBlogArticle?: Maybe<IGenBlogArticle>;
  deleteAsset?: Maybe<Scalars['Boolean']>;
  deleteBlogArticle?: Maybe<Scalars['Boolean']>;
  updateAsset?: Maybe<IGenAsset>;
  updateBlogArticle?: Maybe<IGenBlogArticle>;
};


export type IGenMutationCreateAssetArgs = {
  input: IGenAsset_CreateInput;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenMutationCreateBlogArticleArgs = {
  input: IGenBlogArticle_CreateInput;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenMutationDeleteAssetArgs = {
  id: Scalars['ID'];
};


export type IGenMutationDeleteBlogArticleArgs = {
  id: Scalars['ID'];
};


export type IGenMutationUpdateAssetArgs = {
  id: Scalars['ID'];
  input: IGenAsset_UpdateInput;
  locale?: InputMaybe<Scalars['String']>;
  merge?: InputMaybe<Scalars['Boolean']>;
};


export type IGenMutationUpdateBlogArticleArgs = {
  id: Scalars['ID'];
  input: IGenBlogArticle_UpdateInput;
  locale?: InputMaybe<Scalars['String']>;
  merge?: InputMaybe<Scalars['Boolean']>;
};

export enum IGenOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type IGenPageInfo = {
  __typename: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  startCursor?: Maybe<Scalars['String']>;
};

export type IGenQuery = {
  __typename: 'Query';
  Asset?: Maybe<IGenAsset>;
  BlogArticle?: Maybe<IGenBlogArticle>;
  allAsset?: Maybe<IGenAsset_Connection>;
  allBlogArticle?: Maybe<IGenBlogArticle_Connection>;
};


export type IGenQueryAssetArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenQueryBlogArticleArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenQueryAllAssetArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenAsset_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenAsset_Where>>>;
};


export type IGenQueryAllBlogArticleArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenBlogArticle_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenBlogArticle_Where>>>;
};
