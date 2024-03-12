import renderToDOM from '../utils/renderToDom';

const filterButtons = () => {
  const domString = `
  <button type="button" class="btn btn-primary" id="js-btn">Javascript</button>
  <button type="button" class="btn btn-secondary" id="html-btn">HTML</button>
  <button type="button" class="btn btn-success" id="css-btn">CSS</button>
  <button type="button" class="btn btn-danger" id="python-btn">Python</button>
  <button type="button" class="btn btn-warning" id="c#-btn">C#</button>
  <button type="button" class="btn btn-primary" id="all-btn">All Cards</button>`;

  renderToDOM('#filter-container', domString);
};

export default filterButtons;
