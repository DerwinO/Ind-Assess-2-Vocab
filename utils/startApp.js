import logoutButton from '../components/logoutButton';
import filterButtons from '../components/filterButtons';
import domBuilder from '../shared/domBuilder';
import { getVocab } from '../api/vocabData';
import domEvents from '../shared/events/domEvents';
import filterButtonEvents from '../shared/events/filterButtonEvents';
import navBar from '../components/navBar';
import formEvents from '../shared/events/formEvents';
import navEvents from '../shared/events/navEvents';
import showVocabCards from '../api/cards/vocabCards';

const startApp = (uid) => {
  domBuilder(uid); // BUILD THE DOM
  domEvents(uid); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(uid); // ADD FORM EVENT LISTERNERS TO THE DOM
  navBar();
  filterButtons();
  filterButtonEvents(uid);
  // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navEvents(uid); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // TODO: Put all vocab on the DOM on App load
  getVocab(uid).then((vocab) => showVocabCards(vocab));
};

export default startApp;
