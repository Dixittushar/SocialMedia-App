import React from "react";
import FollowersCard from "../FollowersCards/FollowersCard";
import InfoCard from "../InfoCard/InfoCard";
import LogoSearch from "../LogoSearch/LogoSearch";
const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileLeft;
