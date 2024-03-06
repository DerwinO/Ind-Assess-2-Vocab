import navBar from '../shared/navBar';
import logoutButton from '../components/logoutButton';
import filterButtons from '../components/filterButtons';
import domBuilder from '../shared/domBuilder';

const startApp = (user) => {
  domBuilder(user); // BUILD THE DOM
  // domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM
  // formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  filterButtons();
  // navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // TODO: Put all books on the DOM on App load
  // getBooks(user.uid).then((books) => showBooks(books));
};

export default startApp;
