import logoutButton from '../components/logoutButton';
import filterButtons from '../components/filterButtons';
import domBuilder from '../shared/domBuilder';
import showVocabCards from '../api/cards/vocabCards';
import { getVocab } from '../api/vocabData';
import domEvents from '../shared/events/domEvents';
import filterButtonEvents from '../shared/events/filterButtonEvents';
import navBar from '../components/navBar';
import formEvents from '../shared/events/formEvents';

const startApp = (uid) => {
  domBuilder(); // BUILD THE DOM
  domEvents(uid);
  filterButtons();
  filterButtonEvents(uid);
  // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(uid); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT

  // navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // TODO: Put all vocab on the DOM on App load
  getVocab(uid).then((vocab) => showVocabCards(vocab));
};

export default startApp;
