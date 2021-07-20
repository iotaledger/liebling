const FOUNDATION_DATA_URL = 'https://webassets.iota.org/data/foundation.json'

fetch(FOUNDATION_DATA_URL)
    .then((resp) => resp.json())
    .then(function (data) {
        if (data.information) {
            let foundationLegalData = data.information
            foundationLegalData.forEach(function (item) {
                let span = document.createElement('span')
                span.innerHTML += '</br>' + item.label
                document.getElementById('foundationLegal').appendChild(span)

                let links = item.urls
                if (links) {
                    links.forEach(function (item, index) {
                        let anchor = document.createElement('a')
                        anchor.innerHTML = item.label
                        anchor.href = item.url
                        document.getElementById('foundationLegal').appendChild(anchor)

                        if (links[index + 1]) {
                            let span = document.createElement('span')
                            span.innerHTML += ','
                            document.getElementById('foundationLegal').appendChild(span)
                        }
                    })
                }
                if (item.value) {
                    let span = document.createElement('span')
                    span.innerHTML = ' ' + item.value
                    document.getElementById('foundationLegal').appendChild(span)
                }
            })
        }
        if (data.registeredAddress) {
            let registeredAddressData = data.registeredAddress.value
            registeredAddressData.forEach(function (item) {
                let span = document.createElement('span')
                document.getElementById('foundationRegisteredAddress').appendChild(span)
                span.innerHTML += item
            })
        }
    })
    .catch(function (error) {
        /*   console.log(error)*/
    })
