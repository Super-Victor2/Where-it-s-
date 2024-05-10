import './eventOrderPage.css';
import EventOrderTitle from '../../components/eventOrderComp/eventOrderTitleComp' 
import EventOrderInfoTwo from '../../components/eventOrderComp/EventOrderInfo/eventOrderInfoTwo' 
import EventOrderSelectorTwo from '../../components/eventOrderComp/eventOrderSelector/eventOrderSelectorTwo' 

function eventsPage() {
    return (
        <>
            <EventOrderTitle />
            <EventOrderInfoTwo />
            <EventOrderSelectorTwo />
        </>
    )
}

export default eventsPage