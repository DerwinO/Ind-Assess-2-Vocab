import showVocabCards from '../../api/cards/vocabCards';
import { createVocab, getVocab, updateVocab } from '../../api/vocabData';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    if (e.target.id.includes('update-vocab')) {
      e.preventDefault();
      console.warn('payload');
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        language: document.querySelector('#language').value,
        definition: document.querySelector('#definition').value,
        // languageID: document.querySelector('languageID').value,
        firebaseKey,
        uid

      };

      updateVocab(payload).then(() => {
        getVocab(uid).then((vocab) => showVocabCards(vocab, uid));
      });
    }

    if (e.target.id.includes('submit-vocab')) {
      console.warn('CLICKED SUBMIT VOCAB', e.target.id);
      const payload = {
        title: document.querySelector('#title').value,
        language: document.querySelector('#language').value,
        definition: document.querySelector('#definition').value,
        languageID: document.querySelector('#languageID').value,
        uid
      };

      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocab(patchPayload).then(() => {
          getVocab(uid).then((vocab) => showVocabCards(vocab, uid));
        });
      });
    }
  });
};
export default formEvents;
