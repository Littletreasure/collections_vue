import axios from 'axios';


export const mixin = {
  methods: {
    getItems(type, filter) {
return axios.get(`https://ruths-collection-app.herokuapp.com/api/${type}${filter}`)
.then(res => res.data
)
},
deleteItem(type, filter, id) {
  return axios.delete(`https://ruths-collection-app.herokuapp.com/api/${type}${filter}/${id}`)
  .then(res => res.status)
},
postItem(type, filter, title, string) {
  if (type == 'books') {
    return axios.post(`https://ruths-collection-app.herokuapp.com/api/${type}${filter}`, {title: title, author: string})
    .then(res => res.data.book)
  } else {
    return axios.post(`https://ruths-collection-app.herokuapp.com/api/${type}${filter}`, {title: title, format: string})
    .then(res => res.data.film)
  }
}
  }
}

