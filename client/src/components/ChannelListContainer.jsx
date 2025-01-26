import React from "react";
// import {ChannelList, useChatContext} from 'stream-chat-react'
// import Cookies from 'universal-cookie'
import {
  faHospital,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChannelList } from "stream-chat-react";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";

const SideBar = () => (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <FontAwesomeIcon icon={faHospital} size="2x" />
      </div>
    </div>
    <div className="channel-list__sidebar__icon2">
      <div className="icon1__inner">
        <FontAwesomeIcon icon={faRightFromBracket} size="2x" />
      </div>
    </div>
  </div>
);

const CompanyHeader = () => {
  return (
    <div className="channel-list__header">
      <p className="channel-list__header__text">Medical Pager</p>
    </div>
  );
};

const ChannelListContainer = () => {
  return (
    <div className="channel-list__container">
      <SideBar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => <TeamChannelList {...listProps} type="team" />}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="team" />
          )}
        />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => (
            <TeamChannelList {...listProps} type="messaging" />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="messaging" />
          )}
        />
      </div>
    </div>
  );
};

export default ChannelListContainer;
