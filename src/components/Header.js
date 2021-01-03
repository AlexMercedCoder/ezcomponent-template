import ezcomponent from "ezcomponent";

ezcomponent({
  name: "my-header",
  render: (info, props, component) => `<h1>I am the header component</h1>`,
});