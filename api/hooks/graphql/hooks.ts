import { graphql_api } from '../../graphql-api-base';
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
  DateTime: any;
};

export type CommonResponse = {
  __typename?: 'CommonResponse';
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type CreateProjectDto = {
  name: Scalars['String'];
};

export type CreateRoleDto = {
  code: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CreateTaskDto = {
  description?: InputMaybe<Scalars['String']>;
  due_date?: InputMaybe<Scalars['DateTime']>;
  priority?: InputMaybe<Scalars['String']>;
  project_id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type JwtTokenWithUser = {
  __typename?: 'JWTTokenWithUser';
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  expires_at: Scalars['Float'];
  first_name: Scalars['String'];
  id: Scalars['ID'];
  is_active: Scalars['Boolean'];
  is_profile_updated: Scalars['Boolean'];
  is_verified: Scalars['Boolean'];
  last_name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['Float']>;
  role: Role;
  token: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type LoginDto = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProject: Project;
  createRole: Role;
  createTask: Task;
  deleteProject: CommonResponse;
  deleteTask: CommonResponse;
  deleteUser: CommonResponse;
  login: JwtTokenWithUser;
  register: CommonResponse;
  resendOtp: CommonResponse;
  updateProfile: User;
  updateProject: Project;
  updateTask: Task;
  updateUser: User;
  verifyOtp: CommonResponse;
};


export type MutationCreateProjectArgs = {
  project: CreateProjectDto;
};


export type MutationCreateRoleArgs = {
  input: CreateRoleDto;
};


export type MutationCreateTaskArgs = {
  task: CreateTaskDto;
};


export type MutationDeleteProjectArgs = {
  id: Scalars['String'];
};


export type MutationDeleteTaskArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationLoginArgs = {
  user: LoginDto;
};


export type MutationRegisterArgs = {
  user: RegisterUserDto;
};


export type MutationResendOtpArgs = {
  email: Scalars['String'];
};


export type MutationUpdateProfileArgs = {
  user: UpdateProfileDto;
};


export type MutationUpdateProjectArgs = {
  project: UpdateProjectDto;
};


export type MutationUpdateTaskArgs = {
  task: UpdateTaskDto;
};


export type MutationUpdateUserArgs = {
  user: UpdateUserDto;
};


export type MutationVerifyOtpArgs = {
  input: VerifyOtpDto;
};

export type Project = {
  __typename?: 'Project';
  id: Scalars['ID'];
  name: Scalars['String'];
  user: User;
};

export type Query = {
  __typename?: 'Query';
  getProjectById: Project;
  getProjects: Array<Project>;
  getTaskById: Task;
  getTasks: Array<Task>;
  getUserById: User;
  me: User;
  projects: Array<Project>;
  roles: Array<Role>;
  tasks: Array<Task>;
  users: Array<User>;
};


export type QueryGetProjectByIdArgs = {
  id: Scalars['String'];
};


export type QueryGetTaskByIdArgs = {
  id: Scalars['String'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['String'];
};

export type RegisterUserDto = {
  email: Scalars['String'];
};

export type Role = {
  __typename?: 'Role';
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
};

export type Task = {
  __typename?: 'Task';
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  due_date?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  is_completed: Scalars['Boolean'];
  is_deleted: Scalars['Boolean'];
  priority?: Maybe<Scalars['String']>;
  project?: Maybe<Project>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type UpdateProfileDto = {
  first_name: Scalars['String'];
  id: Scalars['String'];
  last_name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['Float']>;
};

export type UpdateProjectDto = {
  id: Scalars['String'];
  name: Scalars['String'];
};

export type UpdateTaskDto = {
  description?: InputMaybe<Scalars['String']>;
  due_date?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  is_completed?: InputMaybe<Scalars['Boolean']>;
  priority?: InputMaybe<Scalars['String']>;
  project_id?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateUserDto = {
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  last_name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['Float']>;
};

export type User = {
  __typename?: 'User';
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['ID'];
  is_active: Scalars['Boolean'];
  is_profile_updated: Scalars['Boolean'];
  is_verified: Scalars['Boolean'];
  last_name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['Float']>;
  role: Role;
  updated_at: Scalars['DateTime'];
};

export type VerifyOtpDto = {
  email: Scalars['String'];
  otp: Scalars['Float'];
};

export type LoginMutationVariables = Exact<{
  user: LoginDto;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'JWTTokenWithUser', id: string, token: string, first_name: string, last_name?: string | null, email: string, phone?: number | null, is_active: boolean, is_verified: boolean, is_profile_updated: boolean, created_at: any, updated_at: any, expires_at: number, role: { __typename?: 'Role', id: string, name: string, code: string, description?: string | null } } };


export const LoginDocument = `
    mutation Login($user: LoginDto!) {
  login(user: $user) {
    id
    token
    first_name
    last_name
    email
    phone
    is_active
    is_verified
    is_profile_updated
    role {
      id
      name
      code
      description
    }
    created_at
    updated_at
    expires_at
  }
}
    `;

const injectedRtkApi = graphql_api.injectEndpoints({
  endpoints: (build) => ({
    Login: build.mutation<LoginMutation, LoginMutationVariables>({
      query: (variables) => ({ document: LoginDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useLoginMutation } = injectedRtkApi;

