class MainApi {
    constructor({ baseUrl}) {
      this._baseUrl = baseUrl;
    }
  
    get _headers() {
      return {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    }
  
    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    }
  
    getProfile() {
      return fetch(`${this._baseUrl}/users/me`,
        {
          headers: this._headers,
        })
        .then(this._checkResponse)
    }
  
    getInitialCards() {
      return fetch(`${this._baseUrl}/cards`,
        {
          headers: this._headers,
        })
        .then(this._checkResponse)
    }
  
    editProfile(data) {
      return fetch(`${this._baseUrl}/users/me `,
        {
          method: "PATCH",
          headers: this._headers,
          body: JSON.stringify({
            name: data.name,
            about: data.about
          })
        })
        .then(this._checkResponse)
    }
  
  
    changeLikeCardStatus(id, isLiked) {
      return fetch(`${this._baseUrl}/cards/${id}/likes`,
        {
          method: isLiked ? "PUT" : "DELETE",
          headers: this._headers,
        })
        .then(this._checkResponse)
    }
    addAvatar(data) {
      return fetch(`${this._baseUrl}/users/me/avatar`,
        {
          method: "PATCH",
          headers: this._headers,
          body: JSON.stringify({
            avatar: data.avatar
          })
        })
        .then(this._checkResponse)
    }
  }
  
  export const api = new MainApi({
    // baseUrl: 'https://api.diploma39.nomoredomains.xyz',
    baseUrl: `http://localhost:3001`,
    headers: {
      'authorization': `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    }
  });