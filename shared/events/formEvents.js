import showVocabCards from '../../api/cards/vocabCards';
import { getVocab, updateVocab } from '../../api/vocabData';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('update-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        firebaseKey,
      };

      updateVocab(payload).then(() => {
        getVocab().then(showVocabCards);
      });
    }
  });
};
export default formEvents;
