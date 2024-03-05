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
  due_date?: InputMaybe<Scalars['String']>;
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
  due_date?: Maybe<Scalars['String']>;
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
  due_date?: InputMaybe<Scalars['String']>;
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

export type GetProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProjectsQuery = { __typename?: 'Query', getProjects: Array<{ __typename?: 'Project', id: string, name: string }> };

export type CreateProjectMutationVariables = Exact<{
  project: CreateProjectDto;
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject: { __typename?: 'Project', id: string, name: string } };

export type UpdateProjectMutationVariables = Exact<{
  project: UpdateProjectDto;
}>;


export type UpdateProjectMutation = { __typename?: 'Mutation', updateProject: { __typename?: 'Project', id: string, name: string } };

export type DeleteProjectMutationVariables = Exact<{
  deleteProjectId: Scalars['String'];
}>;


export type DeleteProjectMutation = { __typename?: 'Mutation', deleteProject: { __typename?: 'CommonResponse', success: boolean, message?: string | null } };

export type GetTasksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTasksQuery = { __typename?: 'Query', getTasks: Array<{ __typename?: 'Task', id: string, title: string, description?: string | null, due_date?: string | null, priority?: string | null, is_completed: boolean, is_deleted: boolean, created_at: any, updated_at: any, project?: { __typename?: 'Project', id: string, name: string } | null }> };

export type GetTaskByIdQueryVariables = Exact<{
  getTaskByIdId: Scalars['String'];
}>;


export type GetTaskByIdQuery = { __typename?: 'Query', getTaskById: { __typename?: 'Task', id: string, title: string, description?: string | null, due_date?: string | null, priority?: string | null, is_completed: boolean, is_deleted: boolean, created_at: any, updated_at: any, project?: { __typename?: 'Project', id: string, name: string } | null } };

export type CreateTaskMutationVariables = Exact<{
  task: CreateTaskDto;
}>;


export type CreateTaskMutation = { __typename?: 'Mutation', createTask: { __typename?: 'Task', id: string } };

export type UpdateTaskMutationVariables = Exact<{
  task: UpdateTaskDto;
}>;


export type UpdateTaskMutation = { __typename?: 'Mutation', updateTask: { __typename?: 'Task', id: string } };

export type DeleteTaskMutationVariables = Exact<{
  deleteTaskId: Scalars['String'];
}>;


export type DeleteTaskMutation = { __typename?: 'Mutation', deleteTask: { __typename?: 'CommonResponse', success: boolean, message?: string | null } };


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
export const GetProjectsDocument = `
    query GetProjects {
  getProjects {
    id
    name
  }
}
    `;
export const CreateProjectDocument = `
    mutation CreateProject($project: CreateProjectDto!) {
  createProject(project: $project) {
    id
    name
  }
}
    `;
export const UpdateProjectDocument = `
    mutation UpdateProject($project: UpdateProjectDto!) {
  updateProject(project: $project) {
    id
    name
  }
}
    `;
export const DeleteProjectDocument = `
    mutation DeleteProject($deleteProjectId: String!) {
  deleteProject(id: $deleteProjectId) {
    success
    message
  }
}
    `;
export const GetTasksDocument = `
    query GetTasks {
  getTasks {
    id
    title
    description
    due_date
    priority
    is_completed
    is_deleted
    project {
      id
      name
    }
    created_at
    updated_at
  }
}
    `;
export const GetTaskByIdDocument = `
    query GetTaskById($getTaskByIdId: String!) {
  getTaskById(id: $getTaskByIdId) {
    id
    title
    description
    due_date
    priority
    is_completed
    is_deleted
    project {
      id
      name
    }
    created_at
    updated_at
  }
}
    `;
export const CreateTaskDocument = `
    mutation CreateTask($task: CreateTaskDto!) {
  createTask(task: $task) {
    id
  }
}
    `;
export const UpdateTaskDocument = `
    mutation UpdateTask($task: UpdateTaskDto!) {
  updateTask(task: $task) {
    id
  }
}
    `;
export const DeleteTaskDocument = `
    mutation DeleteTask($deleteTaskId: String!) {
  deleteTask(id: $deleteTaskId) {
    success
    message
  }
}
    `;

const injectedRtkApi = graphql_api.injectEndpoints({
  endpoints: (build) => ({
    Login: build.mutation<LoginMutation, LoginMutationVariables>({
      query: (variables) => ({ document: LoginDocument, variables })
    }),
    GetProjects: build.query<GetProjectsQuery, GetProjectsQueryVariables | void>({
      query: (variables) => ({ document: GetProjectsDocument, variables })
    }),
    CreateProject: build.mutation<CreateProjectMutation, CreateProjectMutationVariables>({
      query: (variables) => ({ document: CreateProjectDocument, variables })
    }),
    UpdateProject: build.mutation<UpdateProjectMutation, UpdateProjectMutationVariables>({
      query: (variables) => ({ document: UpdateProjectDocument, variables })
    }),
    DeleteProject: build.mutation<DeleteProjectMutation, DeleteProjectMutationVariables>({
      query: (variables) => ({ document: DeleteProjectDocument, variables })
    }),
    GetTasks: build.query<GetTasksQuery, GetTasksQueryVariables | void>({
      query: (variables) => ({ document: GetTasksDocument, variables })
    }),
    GetTaskById: build.query<GetTaskByIdQuery, GetTaskByIdQueryVariables>({
      query: (variables) => ({ document: GetTaskByIdDocument, variables })
    }),
    CreateTask: build.mutation<CreateTaskMutation, CreateTaskMutationVariables>({
      query: (variables) => ({ document: CreateTaskDocument, variables })
    }),
    UpdateTask: build.mutation<UpdateTaskMutation, UpdateTaskMutationVariables>({
      query: (variables) => ({ document: UpdateTaskDocument, variables })
    }),
    DeleteTask: build.mutation<DeleteTaskMutation, DeleteTaskMutationVariables>({
      query: (variables) => ({ document: DeleteTaskDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useLoginMutation, useGetProjectsQuery, useLazyGetProjectsQuery, useCreateProjectMutation, useUpdateProjectMutation, useDeleteProjectMutation, useGetTasksQuery, useLazyGetTasksQuery, useGetTaskByIdQuery, useLazyGetTaskByIdQuery, useCreateTaskMutation, useUpdateTaskMutation, useDeleteTaskMutation } = injectedRtkApi;

