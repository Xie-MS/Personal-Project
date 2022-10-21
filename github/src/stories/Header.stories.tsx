import React from "react";

import HeaderLogo from "../HeaderLogo";
import HeaderMobileMenu from "../HeaderMobileMenu";
import HeaderSearch from "../HeaderSearch";
import HeaderSignIn from "../HeaderSignIn";
import HeaderSignOut from "../HeaderSignOut";

export default {
  title: "Example/Header",
  component: HeaderLogo,
  HeaderSearch,
  HeaderSignIn,
  HeaderSignOut,
  HeaderMobileMenu,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const headerLogo = (args: any) => <HeaderLogo {...args} />;
const headerSearch = (args: any) => <HeaderSearch {...args} />;
const headerSignIn = (args: any) => <HeaderSignIn {...args} />;
const headerSignOut = (args: any) => <HeaderSignOut {...args} />;
const headerMobileMenu = (args: any) => <HeaderMobileMenu {...args} />;

export const Header_Logo: any = headerLogo.bind({});
Header_Logo.args = {};

export const Header_Search: any = headerSearch.bind({});
Header_Search.args = {};

export const Header_SignIn: any = headerSignIn.bind({});
Header_SignIn.args = {};

export const Header_SignOut: any = headerSignOut.bind({});
Header_SignOut.args = {};

export const Header_MobileMenu: any = headerMobileMenu.bind({});
Header_MobileMenu.args = {};
