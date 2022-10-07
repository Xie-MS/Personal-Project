import React from "react";

import CreateIssueItemList from "../ItemList";

export default {
  title: "Example/CreateIssueItemList",
  component: CreateIssueItemList,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const CreateIssue_ItemList = (args: any) => <CreateIssueItemList {...args} />;

export const ItemList: any = CreateIssue_ItemList.bind({});
ItemList.args = {};
