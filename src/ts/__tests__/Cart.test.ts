import Cart from '../service/Cart';
import Movie from '../domain/Movie';

const cart = new Cart();

test('adding a Movie object to the cart works correctly', () => {
  const expected = {
    id: 1009,
    name: 'Мстители',
    originalName: 'The Avengers',
    format: 'IMAX',
    year: 2012,
    country: 'США',
    motto: 'Avengers Assemble!',
    genres: ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    time: '137 мин. / 02:17',
    price: 2000,
  };

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
      2000,
    ),
  );

  expect(cart.items[0]).toEqual(expected);
  expect(cart.items[0]).toBeInstanceOf(Movie);
});
