import navBar from '../shared/navBar';
import logoutButton from '../components/logoutButton';
import filterButtons from '../components/filterButtons';
import domBuilder from '../shared/domBuilder';
import showVocabCards from '../api/cards/vocabCards';
import { getVocab } from '../api/vocabData';

const startApp = (user) => {
  domBuilder(user); // BUILD THE DOM
  // domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM
  // formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  filterButtons();
  // navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // TODO: Put all vocab on the DOM on App load
  getVocab(user).then((vocab) => showVocabCards(vocab));
};

export default startApp;
