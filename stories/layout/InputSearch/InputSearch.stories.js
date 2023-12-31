import InputSearch from "@/components/layout/InputSearch.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: "Layout/InputSearch",
  component: InputSearch,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    icon: {
      control: "select",
      options: ["$vuetify", "mdi-Plus", "mdi-Account"],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {},
};
