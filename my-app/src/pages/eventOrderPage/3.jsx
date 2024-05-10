import './eventOrderPage.css';
import EventOrderTitle from '../../components/eventOrderComp/eventOrderTitleComp' 
import EventOrderInfoThree from '../../components/eventOrderComp/EventOrderInfo/eventOrderInfoThree' 
import EventOrderSelectorThree from '../../components/eventOrderComp/eventOrderSelector/eventOrderSelectorThree' 

function eventsPage() {
    return (
        <>
            <EventOrderTitle />
            <EventOrderInfoThree />
            <EventOrderSelectorThree />
        </>
    )
}

export default eventsPage