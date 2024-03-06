import renderToDOM from '../utils/renderToDom';

const filterButtons = () => {
  const domString = `
  <button type="button" class="btn btn-primary">Javascript</button>
  <button type="button" class="btn btn-secondary">HTML</button>
  <button type="button" class="btn btn-success">CSS</button>
  <button type="button" class="btn btn-danger">Python</button>
  <button type="button" class="btn btn-warning">C#</button>
  `;

  renderToDOM('#filterButtons', domString);
};

export default filterButtons;
