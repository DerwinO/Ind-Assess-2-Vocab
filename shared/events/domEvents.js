import showVocabCards from '../../api/cards/vocabCards';
import { deleteVocab, getVocab, getSingleVocabCard } from '../../api/vocabData';

import addVocabForm from '../../pages/forms/addVocabForm';

const domEvents = () => {
  document.querySelector('#vocab').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING VOCAB CARD

    // FIXME: ADD CLICK EVENT FOR DELETING VOCAB
    if (e.target.id.includes('delete-vocab-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('DELETE VOCAB', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteVocab(firebaseKey).then(() => {
          getVocab().then(showVocabCards);
        });
      }
    }

    // Click Event for Vocab Details

    if (e.target.id.includes('read-vocab-btn')) {
      console.warn('VOCAB');
      const [, firebaseKey] = e.target.id.split('--');
      getVocab(firebaseKey).then(showVocabCards);
    }

    // // FIXME: ADD CLICK EVENT FOR SHOWING FORM FOR ADDING VOCAB
    // // if (e.target.id.includes('add-author-btn')) {
    // //   console.warn('ADD VOCAB');
    // //   addAuthorForm();
    // // }
    // // FIXME: ADD CLICK EVENT FOR EDITING VOCAB

    if (e.target.id.includes('update-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleVocabCard(firebaseKey).then((vocabObj) => addVocabForm(vocabObj));
    }
  });
};

export default domEvents;
