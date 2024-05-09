import './eventOrderPage.css';
import EventOrderTitle from '../../components/eventOrderComp/eventOrderTitleComp' 
import EventOrderInfo from '../../components/eventOrderComp/eventOrderInfo' 
import EventOrderSelector from '../../components/eventOrderComp/eventOrderSelector' 
import EventOrderBtn from '../../components/eventOrderComp/eventOrderButton' 

function eventsPage() {
    return (
        <>
            <EventOrderTitle />
            <EventOrderInfo />
            <EventOrderSelector />
            <EventOrderBtn />
        </>
    )
}

export default eventsPage