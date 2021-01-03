import ezcomponent from "ezcomponent"
import "./components/Header";
import "./components/Main";
import "./components/Footer";

ezcomponent({
  name: "my-app",
  render: (info, props, component) => `
  <my-header></my-header>
  <my-main></my-main>
  <my-footer></my-footer>
  `
})

//Inject into body
const body = document.querySelector("body");
body.innerHTML = `<my-app></my-app>`;
