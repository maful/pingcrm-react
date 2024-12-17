import { dashboard, organizations } from "@/api";
import MainMenuItem from '@/components/Menu/MainMenuItem';
import { Building, CircleGauge, Printer, Users } from 'lucide-react';
import { useMemo } from "react";

interface MainMenuProps {
  className?: string;
}

export default function MainMenu({ className }: MainMenuProps) {
  const routes = useMemo(() => {
    return {
      root: dashboard.index.path(),
      organizations: organizations.index.path(),
    }
  }, [])

  return (
    <div className={className}>
      <MainMenuItem
        text="Dashboard"
        link={routes.root}
        icon={<CircleGauge size={20} />}
      />
      <MainMenuItem
        text="Organizations"
        link={routes.organizations}
        icon={<Building size={20} />}
      />
      <MainMenuItem
        text="Contacts"
        link="contacts"
        icon={<Users size={20} />}
      />
      <MainMenuItem
        text="Reports"
        link="reports"
        icon={<Printer size={20} />}
      />
    </div>
  );
}
