import { navButtonArray } from './navButtonArray.js'
import { footerButtonArray } from './footerButtonArray.js'



const rootPageModule = (() => {

        function _createNavMenu() {
            const navMenu = document.createElement('nav')
            const navLogo = _createNavLogo()
            const navButtonList = _createNavButtonList()

            navMenu.appendChild(navLogo)
            navMenu.appendChild(navButtonList)

            return navMenu
        }

            function _createNavLogo() {
                const navLogo = document.createElement('img')
                navLogo.id = 'logo-image'
                navLogo.src = "images/logo-white-no-background.png"

                return navLogo
            }
            
            function _createNavButtonList() {
                const navButtonList = document.createElement('div')
                navButtonList.id = 'nav-button-list'

                navButtonArray.forEach(button => {
                    const navButton = _createNavButton(button)
                    navButtonList.appendChild(navButton)
                })

                return navButtonList
            }

                function _createNavButton(button) {
                    const navButton = document.createElement('div')
                    navButton.id = button.name.toLowerCase() + "-button"
                    navButton.classList.add('nav-button')

                    var navButtonIcon = _getNavButtonIcon(button)
                    var navButtonText = _getNavButtonText(button)
                    navButton.appendChild(navButtonIcon)
                    navButton.appendChild(navButtonText)

                    navButton.addEventListener('click', (e) => {
                        button.eventAction()
                        window.scrollTo(0,0)
                    })

                    return navButton
                }

                    function _getNavButtonIcon(button) {
                        var navButtonIcon = document.createElement('img')
                        navButtonIcon.id = button.name.toLowerCase() + "-icon"
                        navButtonIcon.classList.add('nav-button-icon')
                        navButtonIcon.src = button.src

                        return navButtonIcon
                    }
                    
                    function _getNavButtonText(button) {
                        var buttonText = document.createElement('p')
                        buttonText.classList.add('nav-button-text')
                        buttonText.textContent = button.name


                        return buttonText
                    }




    function _addAppContent() {
        var appContent = document.createElement('div')
        appContent.id = 'app-content'
        
        return appContent
    }
            
            


    function _createFooterMenu() {
        const footerMenu = document.createElement('footer')

        const footerButtonList = _createFooterButtonList()

        footerMenu.appendChild(footerButtonList)

        return footerMenu
    }

        function _createFooterButtonList() {
            const footerButtonList = document.createElement('div')
            footerButtonList.id = "footer-button-list"

            footerButtonArray.forEach(button => {
                const footerButton = _createFooterButton(button)
                footerButtonList.appendChild(footerButton)
            })
            
            return footerButtonList
        }

            function _createFooterButton(button) {
                const footerButton = document.createElement('a')
                footerButton.id = button.name.toLowerCase() + "-button"
                footerButton.classList.add('footer-button')
                footerButton.href = button.href
                footerButton.target = '_blank'

                var footerButtonIcon = _getFooterButtonIcon(button) 
                var footerButtonText = _getFooterButtonText(button) 
                footerButton.appendChild(footerButtonIcon)
                footerButton.appendChild(footerButtonText)

                return footerButton
            }

                function _getFooterButtonIcon(button) {
                    var footerButtonIcon = document.createElement('img')
                    footerButtonIcon.id = button.name.toLowerCase() + "-icon"
                    footerButtonIcon.classList.add('footer-button-icon')
                    footerButtonIcon.src = button.src

                    return footerButtonIcon
                }

                function _getFooterButtonText(button) {
                    var footerButtonText = document.createElement('p')
                    footerButtonText.classList.add('footer-button-text')
                    footerButtonText.textContent = button.name


                    return footerButtonText
                }

    function displayAppInterface(root) {
        const navBar = _createNavMenu()
        const appContent = _addAppContent()
        const externalNavLinks = _createFooterMenu()
        
        root.appendChild(navBar)
        root.appendChild(appContent)
        root.appendChild(externalNavLinks)

        const appContentBlock = document.querySelector('#app-content')
        _setBackgroundImage(appContentBlock)

        const landingLogo = _createLandingLogo()
        appContentBlock.appendChild(landingLogo)
    }

        function _setBackgroundImage(appContentBlock) {
            appContentBlock.style.backgroundImage = "url('images/page-image-index.jpg')"
        }

        function _createLandingLogo() {
            const landingLogoDiv = document.createElement('div')
            landingLogoDiv.id = 'landing-logo-div'

            const landingLogo = document.createElement('img')
            landingLogo.id = 'landing-logo'
            landingLogo.src = 'images/logo-white-no-background.png'

            landingLogoDiv.appendChild(landingLogo)

            return landingLogoDiv
        }

    return {
        displayAppInterface
    }

})();

export { rootPageModule }