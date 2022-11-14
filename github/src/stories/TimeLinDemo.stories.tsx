import React from "react";

import TimeLine from "../TimeLineDemo";

export default {
  title: "Example/TimeLine",
  component: TimeLine,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const TimeLineDemo = (args: any) => <TimeLine {...args} />;

export const ItemList: any = TimeLineDemo.bind({});
ItemList.args = {};
