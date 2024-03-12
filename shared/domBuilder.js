import renderToDOM from '../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div> 
  <div id="main-container">
  <div id="filter-container"></div>
  </div>
  <div id="add-button"></div>
  <div id="store"></div>
  <div id="vocab"></div>
  "`;
  renderToDOM('#app', domString);
};

export default domBuilder;
