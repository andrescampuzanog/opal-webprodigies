import { Bell, CreditCard, FileDuoToneBlack, Home, Settings } from "@/components/icons";

export const MENU_ITEMS = (
  workspaceId: string
): { title: string; href: string; icon: React.ReactNode }[] => [
  {
    title: "Home",
    href: `/dashboard/${workspaceId}/home`,
    icon: <Home />,
  },
  {
    title: "My Library",
    href: `/dashboard/${workspaceId}/home`,
    icon: <FileDuoToneBlack />,
  },
  {
    title: "Notifications",
    href: `/dashboard/${workspaceId}/home`,
    icon: <Bell />,
  },
  {
    title: "Billing",
    href: `/dashboard/${workspaceId}/home`,
    icon: <CreditCard />,
  },
  {
    title: "Settings",
    href: `/dashboard/${workspaceId}/home`,
    icon: <Settings />,
  },
];
