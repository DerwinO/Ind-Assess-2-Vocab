import showVocabCards from '../../api/cards/vocabCards';
import {
  csharpVocab,
  cssVocab, getVocab, htmlVocab, javascriptVocab, pythonVocab
} from '../../api/vocabData';

const filterButtonEvents = (uid) => {
  document.querySelector('#filter-container').addEventListener('click', (e) => {
    if (e.target.id.includes('html-btn')) {
      htmlVocab(uid).then(showVocabCards);
    }
    if (e.target.id.includes('js-btn')) {
      javascriptVocab(uid).then(showVocabCards);
    }
    if (e.target.id.includes('css-btn')) {
      cssVocab(uid).then(showVocabCards);
    }
    if (e.target.id.includes('python-btn')) {
      pythonVocab(uid).then(showVocabCards);
    }
    if (e.target.id.includes('c#-btn')) {
      csharpVocab(uid).then(showVocabCards);
    }
    if (e.target.id.includes('all-btn')) {
      getVocab(uid).then(showVocabCards);
    }
  });
};

export default filterButtonEvents;
