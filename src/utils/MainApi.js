// export const BASE_URL = 'https://api.diploma39.nomoredomains.xyz'
export const BASE_URL = 'http://localhost:3001';

const _checkResponse = (res) => {
  if (res.ok) {
      return res.json();
  }

  return res.json()
      .then((data) => {
          console.log('возвращаем данные', data)
          throw new Error(data.message[0].messages[0]);
      });
};
const _getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`;
}

export const getSavedMovies = () => {
  return fetch(`${BASE_URL}/movies`,
    {
      headers: {
        'Authorization': _getToken(),
      }
    })
    .then(_checkResponse)
}

export const saveMovie = (movie) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': _getToken(),
    },
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co/${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    })
  })
    .then(_checkResponse)
}

export const deleteMovie = (id) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': _getToken(),
    }
  })
    .then(_checkResponse)
}

export const register = (name, email, password) => {
  console.log(name, email, password);
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password })
  })
  .then(console.log(fetch))
    .then(_checkResponse)
}

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( email, password )
  })
    .then(_checkResponse)
}

export const getUser = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Authorization': _getToken(),
    }
  })
    .then(_checkResponse)
}

export const updateUser = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Authorization': _getToken(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email })
  })
    .then(_checkResponse)
}
