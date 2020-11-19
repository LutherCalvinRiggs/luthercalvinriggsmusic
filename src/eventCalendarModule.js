import { eventCalendarArray } from './eventCalendarArray.js'

const eventCalendarModule = (() => {

    function _createEventCalendar() {
        const eventCalendar = document.createElement('section')
        eventCalendar.id = 'event-calendar'
       
        const header = _createHeader('Upcoming Events')
        eventCalendar.appendChild(header)

        eventCalendarArray.forEach(event => {
            const eventBlock = _createEventBlock(event)
            eventCalendar.appendChild(eventBlock)
        })
        

        return eventCalendar
    }

        function _createHeader(headerText) {
            const blockHeader = document.createElement('h1')
            blockHeader.classList.add('header')
            blockHeader.textContent = headerText
            
            return blockHeader
        }

        function _createEventBlock(event) {
            const eventBlock = document.createElement('article')
            eventBlock.classList.add('event-block')

            const eventImage = _createEventImage(event)
            const eventDetailsBlock = _createEventDetailsBlock(event)
            const eventTicketLink = _createEventTicketLink(event)
            
            eventBlock.appendChild(eventImage)
            eventBlock.appendChild(eventDetailsBlock)
            eventBlock.appendChild(eventTicketLink)
            
            return eventBlock
        }

            function _createEventImage(event) {
                const eventImage = document.createElement('img')
                eventImage.classList.add('event-image')
                eventImage.src = event.venueImgSrc
                eventImage.alt = event.title 
                
                return eventImage
            }

            function _createEventDetailsBlock(event) {
                const eventDetailsBlock = document.createElement('div')
                eventDetailsBlock.classList.add('event-details-block')

                const eventTitle = _createEventTitle(event)
                const eventDate = _createEventDate(event)
                const eventLocation = _createEventLocation(event)

                eventDetailsBlock.appendChild(eventTitle)
                eventDetailsBlock.appendChild(eventDate)
                eventDetailsBlock.appendChild(eventLocation)

                return eventDetailsBlock
            }
                
                function _createEventTitle(event) {
                    const eventTitle = document.createElement('h2')
                    eventTitle.classList.add('event-title')
                    eventTitle.innerHTML = event.title
                    
                    return eventTitle
                }
                
                function _createEventDate(event) {
                    const eventDate = document.createElement('p')
                    eventDate.classList.add('event-date')
                    eventDate.innerHTML = event.date 
                    
                    return eventDate
                }
                
                function _createEventLocation(event) {
                    const eventLocation = document.createElement('p')
                    eventLocation.classList.add('event-location')
                    eventLocation.innerHTML = event.venueName
                    
                    return eventLocation
                }
                
                function _createEventTicketLink(event) {
                    const eventTicketLink = document.createElement('a')
                    eventTicketLink.classList.add('event-ticket-link')
                    eventTicketLink.href = event.ticketLink
                    eventTicketLink.textContent = "Purchase Tickets"

                    return eventTicketLink
                }





    function showEventCalendar() {
        const appContentBlock = document.querySelector('#app-content')
        appContentBlock.removeChild(appContentBlock.childNodes[0])
        
        // _updateBackgroundImage(appContentBlock)

        const eventCalendar = _createEventCalendar()
        appContentBlock.appendChild(eventCalendar)
    }
    
        function _updateBackgroundImage(appContentBlock) {
            appContentBlock.style.backgroundImage = "url('images/page-image-calendar.jpg')"
        }

    return {
        showEventCalendar
    }
})();


export { eventCalendarModule }