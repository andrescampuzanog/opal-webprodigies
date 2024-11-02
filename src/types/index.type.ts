export type WorkspaceProps = {
    data: {
        subscription: {
            plan: "FREE" | "PRO"
        } | null,
        workspace: {
            id: string,
            name: string
            type: "PERSONAL" | "PUBLIC"
        }[]
        members: {
            WorkSpace: {
                id: string,
                name: string,
                type: "PERSONAL" | "PUBLIC"
            }
        }[]
    }
}

export type NotificationsProps = {
    status: number
    data: {
        _count: {
            notifications: number
        }
    }
}