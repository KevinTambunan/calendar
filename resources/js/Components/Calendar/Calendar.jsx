import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const events = [
    {
        title: 'event1',
        start: '2022-12-21'
    },
    {
        title: 'event2',
        start: '2022-12-05',
        end: '2022-12-29'
    },
    {
        title: 'event3',
        start: '2022-12-23T12:30:00',
        backgroundColor: 'yellow',
        borderColor: 'red'
    },
    {
        title: 'event3',
        start: '2022-12-22T12:50:00',
    }
]

const toolBar =
{
    start: 'today prev,next',
    center: 'title',
    end: 'dayGridMonth,dayGridWeek,dayGridDay'
}
const eventClick = function(info) {
    alert('Event: ' + info.event.title);
}

function renderEventContent(eventInfo) {
    return (
        <>
            <b className='mr-2'>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    )
}

export function DemoApp() {
    return (
        <div className='pl-14 pt-10 pr-2'>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                weekends={true}
                events={events}
                eventContent={renderEventContent}
                height={700}
                eventColor={'#378006'}
                headerToolbar={toolBar}
                eventClick={eventClick}
            />
        </div>
    )
}

