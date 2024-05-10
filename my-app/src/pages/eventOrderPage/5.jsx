import './eventOrderPage.css';
import EventOrderTitle from '../../components/eventOrderComp/eventOrderTitleComp'
import EventOrderInfoFive from '../../components/eventOrderComp/EventOrderInfo/eventOrderInfoFive'
import EventOrderSelectorFive from '../../components/eventOrderComp/eventOrderSelector/eventOrderSelectorFive'

function eventsPage() {
    return (
        <>
            <EventOrderTitle />
            <EventOrderInfoFive />
            <EventOrderSelectorFive />
        </>
    )
}

export default eventsPage