import './eventOrderPage.css';
import EventOrderTitle from '../../components/eventOrderComp/eventOrderTitleComp' 
import EventOrderInfoOne from '../../components/eventOrderComp/EventOrderInfo/eventOrderInfoOne'
import EventOrderSelectorOne from '../../components/eventOrderComp/eventOrderSelector/eventOrderSelectorOne' 

function eventsPage() {
    return (
        <>
            <EventOrderTitle />
            <EventOrderInfoOne />
            <EventOrderSelectorOne />
        </>
    )
}

export default eventsPage