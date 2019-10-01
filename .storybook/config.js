import { configure } from "@storybook/vue";

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
  console.log(req)
  req.keys().map(filename => req(filename));
}

configure(loadStories, module);

