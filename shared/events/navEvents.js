import addVocabForm from '../../pages/forms/addVocabForm';

const navEvents = (uid) => {
  document.querySelector('#navigation')
    .addEventListener('click', (e) => {
      if (e.target.id.includes('add-vocab-btn')) {
        addVocabForm(uid);
      }
    });
};

export default navEvents;
