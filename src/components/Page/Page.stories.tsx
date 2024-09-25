import Page from ".";

export default {
  title: "MyComponents/Page",
  component: Page,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "The title of the Page",
      control: {
        type: "text",
      },
    },
    children: {
      description: "The children of the page",
    },
  },
};

export const PageOne = {
  args: {
    title: "This is page one",
    children: "This is page One children",
  },
};

export const PageTwo = {
  args: {
    title: "This is Page Two title",
    children: "These are the Page Two children",
  },
};
