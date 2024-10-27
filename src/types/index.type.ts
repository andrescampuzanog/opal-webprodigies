export type WorkspaceProps = {
    data: {
        subscription: {
            plan: "Free" | "Pro"
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