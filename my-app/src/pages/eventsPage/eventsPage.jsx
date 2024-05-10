import './eventsPage.css';
import EventsTop from  '../../components/eventsComp/eventTop';
import EventTwo from  '../../components/eventsComp/eventTwo';
import EventButton from  '../../components/eventsComp/eventButton';

function eventsPage() {
    return (
        <>
            <EventsTop />
            <EventTwo />
            <EventButton />
        </>
        
    )
}

export default eventsPage