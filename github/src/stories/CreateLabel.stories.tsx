import React from "react";
import CreateLabel from "../CreateLabel";
export default {
  title: "Example/CreateLabel",
  component: CreateLabel,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args: any) => <CreateLabel {...args} />;

export const CreateLabels: any = Template.bind({});
CreateLabels.args = {};
