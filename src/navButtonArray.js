import { musicModule } from "./musicModule.js"
import { resourcesModule } from "./resourcesModule.js"
import { servicesModule } from "./servicesModule.js"
import { eventCalendarModule } from "./eventCalendarModule.js"

const navButtonArray = [
    { 
        name: "Music", 
        src: "images/icon-speaker-48.png",
        eventAction: function () { musicModule.showDiscography() }
    },
    { 
        name: "Services", 
        src: "images/icon-mixer-48.png",
        eventAction: function () { servicesModule.showServices() }
    },
    { 
        name: "Resources", 
        src: "images/icon-resources-48.png",
        eventAction: function () { resourcesModule.showResources() }
    },  
    { 
        name: "Calendar", 
        src: "images/icon-calendar-48.png",
        eventAction: function () { eventCalendarModule.showEventCalendar() }
    },
    { 
        name: "More", 
        src: "images/icon-hamburger-menu-48.png",
        eventAction: function () { 
            const extLinkButton = document.querySelector('#more-icon')
            // console.log(extLinkButton)
            const footer = document.querySelector('footer')
            
            if (extLinkButton.classList.contains('active')) {
                extLinkButton.classList.remove('active')
                footer.style.visibility = "collapse"
            } else {
                extLinkButton.classList.add('active')
                footer.style.visibility = "visible"
            }
        }
    }
]

export { navButtonArray }