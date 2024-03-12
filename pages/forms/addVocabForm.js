import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab-btn--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" placeholder="title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="language">Language</label>
        <input type="text" class="form-control" id="language" placeholder="language" value="${obj.language || ''}" required>
      </div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <input type="text" class="form-control" id="definition" placeholder="Definition" value="${obj.definition || ''}" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3" >Update Vocab</button>
    </form>`;

  renderToDOM('#vocab', domString);
};

export default addVocabForm;
