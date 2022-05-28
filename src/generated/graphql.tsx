import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AlphaString: any;
  DateTime: any;
  Email: any;
  ObjectId: any;
  PhoneCountryCode: any;
  PhoneNumber: any;
  Point: any;
  ShortDate: any;
  Time: any;
  URL: any;
};

export type Avatar = {
  __typename?: 'Avatar';
  name?: Maybe<Scalars['String']>;
  signedUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type AvatarInput = {
  name: Scalars['String'];
  signedUrl?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
};

export type BaseResponse = {
  message: Scalars['String'];
  statusCode: Scalars['Int'];
};

export type Categories = {
  __typename?: 'Categories';
  categories?: Maybe<Array<Maybe<Category>>>;
  count?: Maybe<Scalars['Int']>;
};

export type CategoriesResponse = BaseResponse & {
  __typename?: 'CategoriesResponse';
  message: Scalars['String'];
  result?: Maybe<Categories>;
  statusCode: Scalars['Int'];
};

export type Category = {
  __typename?: 'Category';
  createdAt?: Maybe<Scalars['DateTime']>;
  image?: Maybe<Avatar>;
  inActiveNote?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<ParentCategory>;
  parents?: Maybe<Array<Maybe<ParentCategory>>>;
  uid?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryCreateInput = {
  image?: InputMaybe<AvatarInput>;
  name: Scalars['String'];
  parentCategoryUid?: InputMaybe<Scalars['String']>;
};

export type CategoryFilterInput = {
  name?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type CategoryResponse = BaseResponse & {
  __typename?: 'CategoryResponse';
  message: Scalars['String'];
  result?: Maybe<Category>;
  statusCode: Scalars['Int'];
};

export enum Day {
  Fri = 'FRI',
  Mon = 'MON',
  Sat = 'SAT',
  Sun = 'SUN',
  Thu = 'THU',
  Tue = 'TUE',
  Wed = 'WED'
}

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Others = 'OTHERS'
}

export type GenericLocalization = {
  __typename?: 'GenericLocalization';
  bn?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
};

export type GenericLocalizationCreateInput = {
  bn: Scalars['String'];
  en: Scalars['String'];
};

export type GenericLocalizationUpdateInput = {
  bn?: InputMaybe<Scalars['String']>;
  en?: InputMaybe<Scalars['String']>;
};

export type GenericReference = {
  __typename?: 'GenericReference';
  name?: Maybe<GenericLocalization>;
  uid?: Maybe<Scalars['String']>;
};

export type GenericReferenceCreateInput = {
  name: GenericLocalizationCreateInput;
  uid: Scalars['String'];
};

export type GenericReferenceUpdateInput = {
  name?: InputMaybe<GenericLocalizationUpdateInput>;
  uid?: InputMaybe<Scalars['String']>;
};

export enum HttpMethod {
  Delete = 'DELETE',
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT'
}

export type Mutation = {
  __typename?: 'Mutation';
  createCategory?: Maybe<CategoryResponse>;
  updateCategory?: Maybe<CategoryResponse>;
};


export type MutationCreateCategoryArgs = {
  category: CategoryCreateInput;
};


export type MutationUpdateCategoryArgs = {
  category: UpdateCategoryCreateInput;
  categoryUid: Scalars['String'];
};

export type PaginationInput = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ParentCategory = {
  __typename?: 'ParentCategory';
  name?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
};

export enum PlatformType {
  B2B = 'B2B',
  B2C = 'B2C',
  B2E = 'B2E'
}

export type Query = {
  __typename?: 'Query';
  getCategories?: Maybe<CategoriesResponse>;
  getUploadSignedUrl?: Maybe<UploadResponse>;
  getUploadSignedUrlForSystem?: Maybe<UploadResponse>;
};


export type QueryGetCategoriesArgs = {
  filter?: InputMaybe<CategoryFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryGetUploadSignedUrlArgs = {
  ext: Scalars['String'];
  isPrivate?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGetUploadSignedUrlForSystemArgs = {
  ext: Scalars['String'];
  isPrivate?: InputMaybe<Scalars['Boolean']>;
};

export type SmtpSetting = {
  __typename?: 'SMTPSetting';
  emailPassword?: Maybe<Scalars['String']>;
  fromEmailAddress?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isSSLEnable?: Maybe<Scalars['Boolean']>;
  smtpPort?: Maybe<Scalars['Int']>;
  smtpServerUrl?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
};

export type SmtpSettingCreateInput = {
  emailPassword: Scalars['String'];
  fromEmailAddress: Scalars['String'];
  isActive?: InputMaybe<Scalars['Boolean']>;
  isSSLEnable: Scalars['Boolean'];
  smtpPort: Scalars['Int'];
  smtpServerUrl: Scalars['String'];
  userName: Scalars['String'];
};

export type SmtpSettingUpdateInput = {
  emailPassword?: InputMaybe<Scalars['String']>;
  fromEmailAddress?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isSSLEnable?: InputMaybe<Scalars['Boolean']>;
  smtpPort?: InputMaybe<Scalars['Int']>;
  smtpServerUrl?: InputMaybe<Scalars['String']>;
  userName?: InputMaybe<Scalars['String']>;
};

export type SharedCreateId = {
  __typename?: 'SharedCreateId';
  id?: Maybe<Scalars['ObjectId']>;
};

export type SharedResponse = BaseResponse & {
  __typename?: 'SharedResponse';
  message: Scalars['String'];
  result?: Maybe<SharedCreateId>;
  statusCode: Scalars['Int'];
};

export type Upload = {
  __typename?: 'Upload';
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type UploadResponse = BaseResponse & {
  __typename?: 'UploadResponse';
  message: Scalars['String'];
  result?: Maybe<Upload>;
  statusCode: Scalars['Int'];
};

export enum UserType {
  Client = 'CLIENT',
  Operator = 'OPERATOR'
}

export type UpdateCategoryCreateInput = {
  image?: InputMaybe<AvatarInput>;
  inActiveNote?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CategoryListQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoryListQuery = { __typename?: 'Query', getCategories?: { __typename?: 'CategoriesResponse', message: string, statusCode: number, result?: { __typename?: 'Categories', count?: number | null, categories?: Array<{ __typename?: 'Category', uid?: string | null, name?: string | null, isActive?: boolean | null, inActiveNote?: string | null, createdAt?: any | null, updatedAt?: any | null, parent?: { __typename?: 'ParentCategory', name?: string | null, uid?: string | null } | null, parents?: Array<{ __typename?: 'ParentCategory', name?: string | null, uid?: string | null } | null> | null } | null> | null } | null } | null };


export const CategoryListDocument = gql`
    query CategoryList {
  getCategories(pagination: {limit: 100, skip: 0}) {
    message
    statusCode
    result {
      count
      categories {
        uid
        name
        parent {
          name
          uid
        }
        parents {
          name
          uid
        }
        isActive
        inActiveNote
        createdAt
        updatedAt
      }
    }
  }
}
    `;

/**
 * __useCategoryListQuery__
 *
 * To run a query within a React component, call `useCategoryListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryListQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoryListQuery(baseOptions?: Apollo.QueryHookOptions<CategoryListQuery, CategoryListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryListQuery, CategoryListQueryVariables>(CategoryListDocument, options);
      }
export function useCategoryListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryListQuery, CategoryListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryListQuery, CategoryListQueryVariables>(CategoryListDocument, options);
        }
export type CategoryListQueryHookResult = ReturnType<typeof useCategoryListQuery>;
export type CategoryListLazyQueryHookResult = ReturnType<typeof useCategoryListLazyQuery>;
export type CategoryListQueryResult = Apollo.QueryResult<CategoryListQuery, CategoryListQueryVariables>;