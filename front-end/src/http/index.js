import axios from 'axios'


const _BASE_URL = "http://localhost:9094"

export function getData(url, params) {
    let _url = _BASE_URL + url
    return new Promise((resolve, reject) => {
        axios.get(_url, {params:params}).then(function (response) {
            resolve(response)
        })
        .catch(function (err) {
            reject(err)
        })
    })
}

export function postData(url, params) {
    let _url = _BASE_URL + url
    return new Promise((resolve, reject) => {
        axios.post(_url, params).then(function (response) {
            resolve(response)
        })
            .catch(function (err) {
                reject(err)
            })
    })
}