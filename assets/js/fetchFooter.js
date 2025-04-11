const FOUNDATION_DATA_URL = 'https://webassets.iota.org/data/foundation.json'

fetch(FOUNDATION_DATA_URL)
    .then((resp) => resp.json())
    .then(function (data) {
        const wrapper = document.getElementById('foundationWrapper')

        const currentYear = new Date().getFullYear()
        const copyright = document.createElement('p')
        copyright.textContent = `© ${currentYear} IOTA Foundation. All rights reserved.`
        wrapper.appendChild(copyright)

        const columnsContainer = document.createElement('div')
        columnsContainer.className = 'footer-legal-columns'
        wrapper.appendChild(columnsContainer)

        const addressCol = document.createElement('div')
        addressCol.className = 'footer-column'
        columnsContainer.appendChild(addressCol)

        const addressTitle = document.createElement('p')
        addressTitle.textContent = 'Registered Address'
        addressCol.appendChild(addressTitle)

        if (data.registeredAddress?.value) {
            data.registeredAddress.value.forEach(function (line) {
                let span = document.createElement('span')
                span.innerHTML = line + '<br>'
                addressCol.appendChild(span)
            })
        }

        const legalCol = document.createElement('div')
        legalCol.className = 'footer-column'
        columnsContainer.appendChild(legalCol)

        const legalTitle = document.createElement('p')
        legalTitle.textContent = 'Company'
        legalCol.appendChild(legalTitle)

        const desiredLabels = [
            'ID/Company No.:',
            'EU public ID number in the EU Transparency Register:',
            'VAT ID:'
        ]

        if (data.information) {
            data.information.forEach(function (item) {
                if (desiredLabels.includes(item.label) && item.value) {
                    let span = document.createElement('span')
                    span.innerHTML = `${item.label} ${item.value}<br>`
                    legalCol.appendChild(span)
                }
            })
        }
    })
    .catch(function (error) {
        console.error('Error loading foundation data:', error)
    })
