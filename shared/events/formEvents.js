import showVocabCards from '../../api/cards/vocabCards';
import { createVocab, getVocab, updateVocab } from '../../api/vocabData';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('update-vocab-btn')) {
      console.warn('update');
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        language: document.querySelector('#language').value,
        definition: document.querySelector('#definition').value,
        firebaseKey,
        uid,
      };

      updateVocab(payload).then(() => {
        getVocab(uid).then(showVocabCards);
      });
    }

    if (e.target.id.includes('submit-vocab-btn')) {
      console.warn('CLICKED SUBMIT VOCAB', e.target.id);
      const payload = {
        title: document.querySelector('#title').value,
        language: document.querySelector('#language').value,
        definition: document.querySelector('#definition').value,
        // languageID: document.querySelector('#languageID').value,
        // timeSubmitted: document.querySelector('#timeSubmitted').checked,
      };

      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocab(patchPayload).then(() => {
          getVocab(uid).then(showVocabCards);
        });
      });
    }
  });
};
export default formEvents;
