import renderToDOM from '../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navBar"></div>
  <div id ="filterButtons"></div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
