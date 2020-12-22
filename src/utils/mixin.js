import axios from 'axios';


export const mixin = {
  methods: {
    getItems(type, filter) {
return axios.get(`https://ruths-collection-app.herokuapp.com/api/${type}${filter}`)
.then(res => {
  return res.data
})
},
deleteItem(type, filter, id) {
  return axios.delete(`https://ruths-collection-app.herokuapp.com/api/${type}${filter}/${id}`)
  .then(res => res.status)
}
  }
}


