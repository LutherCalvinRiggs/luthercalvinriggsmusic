import { servicesArray } from './servicesArray.js'

const servicesModule = (() => {

    function _createServicesList() {
        const servicesList = document.createElement('section')
        servicesList.id = 'services-list'
       
        const header = _createHeader('Pro Services')
        servicesList.appendChild(header)

        servicesArray.forEach(service => {
            const serviceBlock = _createSerivceBlock(service)
            servicesList.appendChild(serviceBlock)
        })

        const cta = _createCTA()
        servicesList.appendChild(cta)

        return servicesList
    }

        function _createHeader(headerText) {
            const header = document.createElement('h1')
            header.classList.add('header')
            header.textContent = headerText

            return header
        }

        function _createSerivceBlock(service) {
            const serviceBlock = document.createElement('article')
            serviceBlock.classList.add('service-block')

            const serviceTitle = _createServiceTitle(service)
            const serviceImage = _createServiceImage(service)
            const serviceDescription = _createServiceDescription(service)

            serviceBlock.appendChild(serviceTitle)
            serviceBlock.appendChild(serviceImage)
            serviceBlock.appendChild(serviceDescription)

            return serviceBlock
        }

            function _createServiceTitle(service) {
                const serviceTitle = document.createElement('h2')
                serviceTitle.classList.add('service-title')
                serviceTitle.textContent = service.title
                
                return serviceTitle
            }
            
            function _createServiceImage(service) {
                const serviceImage = document.createElement('img')
                serviceImage.classList.add('service-image')
                serviceImage.src = service.imgSrc
                serviceImage.alt = service.title + ' image'

                return serviceImage
            }
            
            function _createServiceDescription(service) {
                const serviceDescription = document.createElement('div')
                serviceDescription.classList.add('service-description-block')

                const descriptionArray = service.descriptionText
                descriptionArray.forEach(text => {
                    const textPara = document.createElement('p')
                    textPara.classList.add('service-description')
                    textPara.textContent = text
                    serviceDescription.appendChild(textPara)
                })
                
                return serviceDescription
            }

    function _createCTA() {
        const cta = document.createElement('h3')
        cta.id = "call-to-action"
        cta.innerHTML = "For bookings: <br> luthercalvinriggsmusic@gmail.com"

        return cta
    }


    function showServices() {
        const appContentBlock = document.querySelector('#app-content')
        appContentBlock.removeChild(appContentBlock.childNodes[0])
        
        // _updateBackgroundImage(appContentBlock)

        const servicesList = _createServicesList()
        appContentBlock.appendChild(servicesList)
    }
    
        function _updateBackgroundImage(appContentBlock) {
            appContentBlock.style.backgroundImage = "url('images/page-image-services.jpg')"
        }

    return {
        showServices
    }
})();


export { servicesModule }