import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const showVocabCards = (array) => {
  clearDom();
  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-vocab-btn">Add Vocab</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <h5 class="card-language">${item.language}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.definition}</h6>
        <hr>
        <i class="btn btn-success fas fa-eye" id="read-vocab-btn--${item.firebaseKey}"></i>
        <i class="fas fa-edit btn btn-info" id="update-vocab-btn--${item.firebaseKey}"></i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-vocab-btn--${item.firebaseKey}"></i>
      </div>
    </div>`;
  });
  renderToDOM('#vocab', domString);
};

export default showVocabCards;
