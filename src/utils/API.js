import axios from 'axios'

// generates random user information
const BASEURL = 'https://randomuser.me/api/?results=20&nat=us'

export default {
    search: function() {
        return axios.get(BASEURL)
    }
}


