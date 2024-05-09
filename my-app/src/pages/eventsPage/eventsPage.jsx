import './eventsPage.css';
import EventsTop from  '../../components/eventsComp/eventTop';
import EventOne from  '../../components/eventsComp/eventOne';
import EventTwo from  '../../components/eventsComp/eventTwo';
import EventThree from  '../../components/eventsComp/eventThree';
import EventFour from  '../../components/eventsComp/eventFour';
import EventFive from  '../../components/eventsComp/eventFive';
import EventsDesign from  '../../components/eventsComp/eventDesign';
import EventButton from  '../../components/eventsComp/eventButton';

function eventsPage() {
    return (
        <>
            <EventsTop />
            <EventOne />
            <EventTwo />
            <EventThree />
            <EventFour />
            <EventFive />
            <EventButton />
        </>
        
    )
}

export default eventsPage