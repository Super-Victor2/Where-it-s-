import './eventOrderPage.css';
import EventOrderTitle from '../../components/eventOrderComp/eventOrderTitleComp' 
import EventOrderInfoFour from '../../components/eventOrderComp/EventOrderInfo/eventOrderInfoFour' 
import EventOrderSelectorFour from '../../components/eventOrderComp/eventOrderSelector/eventOrderSelectorFour' 

function eventsPage() {
    return (
        <>
            <EventOrderTitle />
            <EventOrderInfoFour />
            <EventOrderSelectorFour />
        </>
    )
}

export default eventsPage