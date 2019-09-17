/**
  * Either examples in comparison with imperative code
  *
  */

const fs = require('fs');
const { Left, Right, fromNullable } = require('./either');

// mocks
const currentUser = '';
const renderPage = () => 'success: page rendered';
const showLogin = () => 'error: session missing';

// Imperative style
function imperative_1 () {
  const openSite = () => {
    if (currentUser) {
      return renderPage(currentUser);
    } else {
      return showLogin();
    }
  };

  return openSite();
}

console.log('Imperative 1:', imperative_1());

// Functional style
function functional_1 () {
  const openSite = () =>
    fromNullable(currentUser)
      .fold(showLogin, renderPage)

  return openSite();
}

console.log('Functional 1:', functional_1());

// mocks
const user = { premium: false, preferences: { message: 'success: preferences loaded' } };
const defaultPreferences = { message: 'error: user not premium' };
const loadPreferences = p => p.message;

// Imperative style
function imperative_2 () {
  const getPrefs = user => {
    if (user.premium) {
      return loadPreferences(user.preferences);
    } else {
      return loadPreferences(defaultPreferences);
    }
  };

  return getPrefs(user);
}

console.log('Imperative 2:', imperative_2());

// Functional style
function functional_2 () {
  const getPrefs = user =>
    (user.premium ? Right(user) : Left(null))
      .fold(() => loadPreferences(defaultPreferences), u => loadPreferences(u.preferences));

  return getPrefs(user);
}

console.log('Functional 2:', functional_2());

// mocks
const student = { address_: { street: { name: 'success: my street name' } } };
const defaultStreet = { name: 'error: no street' };

// Imperative style
function imperative_3 () {
  const streetName = student => {
    const address = student.address;

    if (address) {
      const street = address.street;

      if (street) {
        return street.name;
      }
    }

    return defaultStreet.name;
  };

  return streetName(student);
}

console.log('Imperative 3:', imperative_3());

// Functional style
function functional_3 () {
  const streetName = student =>
    fromNullable(student.address)
      .chain(address => fromNullable(address.street))
      .fold(() => defaultStreet.name, street => street.name)

  return streetName(student);
}

console.log('Functional 3:', functional_3());
