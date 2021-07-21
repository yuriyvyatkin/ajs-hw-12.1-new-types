import Cart from './service/Cart';
import Movie from './domain/Movie';

const cart = new Cart();
console.log(cart.items);

cart.add(
  new Movie(
    1009,
    'Мстители',
    'The Avengers',
    'IMAX',
    2012,
    'США',
    'Avengers Assemble!',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    '137 мин. / 02:17',
    2000
  )
);

console.log(cart.items);
