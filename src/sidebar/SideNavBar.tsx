import {
  AlignRight,
  ArrowLeftRight,
  BellDot,
  FileSearch,
  LocateFixed,
  MapPin,
  Settings,
  Truck,
  User2,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { cn } from "src/lib/utils";

type Props = {};

export const SideBar: React.FC<Props> = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const toggleNavBar = () => setIsNavBarOpen(!isNavBarOpen);

  return (
    <div
      className={cn(
        "w-[8%] md:w-[5%] lg:w-[3%] h-full transition-all duration-100 z-50 bg-white min-h-screen absolute left-0",
        isNavBarOpen && "w-1/4 md:w-1/5 lg:w-1/6"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center py-2 mb-3",
          isNavBarOpen && "justify-end"
        )}
      >
        <AlignRight
          size={36}
          onClick={toggleNavBar}
          className={cn("cursor-pointer px-2 text-red-500")}
        />
      </div>
      <div className="flex flex-col justify-center px-2 gap-y-4">
        <IconLink isNavbarOpen={isNavBarOpen} name="Live Track">
          <MapPin />
        </IconLink>
        <Link to="/trips">
        <IconLink isNavbarOpen={isNavBarOpen} name="Trips">
          <ArrowLeftRight />
        </IconLink>
        </Link>

        <IconLink isNavbarOpen={isNavBarOpen} name="Vehicle">
          <Truck />
        </IconLink>
        <IconLink isNavbarOpen={isNavBarOpen} name="Geofence">
          <LocateFixed />
        </IconLink>
        <IconLink isNavbarOpen={isNavBarOpen} name="Notification">
          <BellDot />
        </IconLink>
        <IconLink isNavbarOpen={isNavBarOpen} name="User">
          <User2 />
        </IconLink>
        <IconLink isNavbarOpen={isNavBarOpen} name="Report">
          <FileSearch />
        </IconLink>
        <IconLink isNavbarOpen={isNavBarOpen} name="Settings">
          <Settings />
        </IconLink>
      </div>
    </div>
  );
};

type IconLinkProps = {
  children: React.ReactNode;
  name: string;
  isNavbarOpen: boolean;
  href?: string | undefined;
};

const IconLink: React.FC<IconLinkProps> = ({
  children,
  isNavbarOpen,
  name,
}) => {
  return (
    <div
      className={cn(
        "cursor-pointer text-blue-600 flex items-center justify-center gap-x-2 hover:bg-red-500 p-1 rounded-md",
        isNavbarOpen && "justify-start"
      )}
      title={name}
    >
      <div className="">{children}</div>
      {isNavbarOpen && <p>{name}</p>}
    </div>
  );
};
