export const UserRolesEnum = {
    ADMIN: "admin",
    PROJECT_ADMIN: "project_admin",
    PROJECT_MEMBER: "project_member",
}

export const AvailableUserRole = Object.values(UserRolesEnum);

export const TaskStatusEnum = {
    TODO: "todo",
    IN_PROGRESS: "in_progress",
    DONE: "done",
    BLOCKED: "blocked",
}

export const AvailableTaskStatuses = Object.values(TaskStatusEnum)