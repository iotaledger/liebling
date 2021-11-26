const FOUNDATION_DATA_URL = 'https://webassets.iota.works/data/assembly.json'

fetch(FOUNDATION_DATA_URL)
    .then((resp) => resp.json())
    .then(function(data) {
        if (data.information) {
            let assemblyLegalData = data.information
            assemblyLegalData.forEach(function(item) {
                let span = document.createElement('span')
                span.innerHTML += '</br>' + item.label
                document.getElementById('assemblyLegal').appendChild(span)

                let links = item.urls
                if (links) {
                    links.forEach(function(item, index) {
                        let anchor = document.createElement('a')
                        anchor.innerHTML = item.label
                        anchor.href = item.url
                        document.getElementById('assemblyLegal').appendChild(anchor)

                        if (links[index + 1]) {
                            let span = document.createElement('span')
                            span.innerHTML += ','
                            document.getElementById('assemblyLegal').appendChild(span)
                        }
                    })
                }
                if (item.value) {
                    let span = document.createElement('span')
                    span.innerHTML = ' ' + item.value
                    document.getElementById('assemblyLegal').appendChild(span)
                }
            })
        }
        if (data.registeredAddress) {
            let registeredAddressData = data.registeredAddress.value
            registeredAddressData.forEach(function(item) {
                let span = document.createElement('span')
                document.getElementById('assemblyRegisteredAddress').appendChild(span)
                span.innerHTML += item
            })
        }
    })
    .catch(function(error) {
        /*   console.log(error)*/
    })
