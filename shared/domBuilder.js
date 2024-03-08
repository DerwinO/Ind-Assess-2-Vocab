import renderToDOM from '../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navBar"></div>
  <div id ="filterButtons"></div>
  <div id="vocab"></div>
  <div id="main-container"`;
  renderToDOM('#app', domString);
};

export default domBuilder;
