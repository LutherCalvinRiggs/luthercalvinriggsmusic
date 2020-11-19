import { freeResourceArray } from './freeResourceArray.js'
import { paidResourceArray } from './paidResourceArray.js'

const resourcesModule = (() => {

    function _createResources() {
        const resources = document.createElement('section')
        resources.id = 'resources-list'

        const header = _createHeader('Aritst Resources')
        const freeResourcesBlock = _createFreeResourcesBlock()
        const paidResourcesBlock = _createPaidResourcesBlock()

        resources.appendChild(header)
        resources.appendChild(freeResourcesBlock)
        resources.appendChild(paidResourcesBlock)

        return resources
    }

        function _createHeader(headerText) {
            const header = document.createElement('h1')
            header.classList.add('header')
            header.textContent = headerText
            
            return header
        }

        function _createFreeResourcesBlock() {
            const freeResourcesBlock = document.createElement('section')
            freeResourcesBlock.id = 'free-resources-block'
            freeResourcesBlock.classList.add('resource-block')

            freeResourceArray.forEach(resource => {
                const freeResource = _createFreeResource(resource)
                freeResourcesBlock.appendChild(freeResource)
            })

            return freeResourcesBlock
        }

            function _createFreeResource(resource) {
                const freeResource = document.createElement('article')
                freeResource.classList.add('free-resource-block')
                
                const freeResourceTitle = _freeResourceTitle(resource)
                const freeResourceImage = _freeResourceImage(resource)
                const freeResourceLink = _freeResourceLink(resource)

                freeResource.appendChild(freeResourceTitle)
                freeResource.appendChild(freeResourceImage)
                freeResource.appendChild(freeResourceLink)

                return freeResource
            }

                function _freeResourceTitle(resource) {
                    const freeResourceTitle = document.createElement('h2')
                    freeResourceTitle.classList.add('free-resource-title')
                    freeResourceTitle.innerHTML = resource.name

                    return freeResourceTitle
                }

                function _freeResourceImage(resource) {
                    const freeResourceImage = document.createElement('img')
                    freeResourceImage.classList.add('free-resource-image')
                    freeResourceImage.src = resource.imgSrc
                    
                    return freeResourceImage
                }

                function _freeResourceLink(resource) {
                    const freeResourceLink = document.createElement('a')
                    freeResourceLink.classList.add('free-resource-button')
                    freeResourceLink.target = "_black"
                    freeResourceLink.href = resource.href
                    freeResourceLink.innerHTML = `Free Download`
                    
                    return freeResourceLink
                }

        function _createPaidResourcesBlock() {
            const paidResourcesBlock = document.createElement('section')
            paidResourcesBlock.id = 'paid-resources-block'
            paidResourcesBlock.classList.add('resource-block')

            paidResourceArray.forEach(resource => {
                const paidResource = _createPaidResource(resource)
                paidResourcesBlock.appendChild(paidResource)
            })

            return paidResourcesBlock
        }

            function _createPaidResource(resource) {
                const paidResource = document.createElement('article')
                paidResource.classList.add('paid-resource-block')
                
                const paidResourceTitle = _paidResourceTitle(resource)
                paidResource.appendChild(paidResourceTitle)
                const paidResourceImage = _paidResourceImage(resource)
                paidResource.appendChild(paidResourceImage)
                if (resource.audio) {
                    const paidResourceAudio = _paidResourceAudio(resource)
                    paidResource.appendChild(paidResourceAudio)

                }
                const paidResourceLink = _paidResourceLink(resource)
                paidResource.appendChild(paidResourceLink)
                
                return paidResource
            }

                function _paidResourceTitle(resource) {
                    const paidResourceTitle = document.createElement('h2')
                    paidResourceTitle.classList.add('paid-resource-title')
                    paidResourceTitle.innerHTML = resource.name

                    return paidResourceTitle
                }

                function _paidResourceImage(resource) {
                    const paidResourceImage = document.createElement('img')
                    paidResourceImage.classList.add('paid-resource-image')
                    paidResourceImage.src = resource.imgSrc
                    
                    return paidResourceImage
                }
                
                function _paidResourceAudio(resource) {
                    const paidResourceAudio = document.createElement('audio')
                    paidResourceAudio.classList.add('paid-resource-audio')
                    paidResourceAudio.src = resource.audio
                    paidResourceAudio.controls = true

                    const mp3 = _createTemplateAudio(resource)

                    paidResourceAudio.appendChild(mp3)
                    
                    return paidResourceAudio
                }

                    function _createTemplateAudio(resource) {
                        const templateAudio = document.createElement('source')
                        templateAudio.src = resource.audio
                        templateAudio.type = resource.audioType

                        return templateAudio
                    }

                function _paidResourceLink(resource) {
                    const paidResourceLink = document.createElement('a')
                    paidResourceLink.classList.add('paid-resource-button')
                    paidResourceLink.target = "_black"
                    paidResourceLink.href = resource.href
                    paidResourceLink.innerHTML = `Purchase Template`
                    
                    return paidResourceLink
                }
            


    function showResources() {
        const appContentBlock = document.querySelector('#app-content')
        appContentBlock.removeChild(appContentBlock.childNodes[0])
        
        // _updateBackgroundImage(appContentBlock)

        const resourses = _createResources()
        appContentBlock.appendChild(resourses)
    }
    
        function _updateBackgroundImage(appContentBlock) {
            appContentBlock.style.backgroundImage = "url('images/page-image-resources.jpg')"
        }

    return {
        showResources
    }
})();


export { resourcesModule }