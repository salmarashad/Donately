import React, { useContext, useState } from 'react';
import { DetailedContext } from "../App";
import DropoffCard from '../Components/DropoffCard.js';


function OrganizationDelivery(props) { 

    const { setIsDetailedView } = useContext(DetailedContext);
    const [dropoffData, setDropoffData] = useState([
        {   
            key: "1",
            title: "Board games by Jana",
            quantity: "5",
            dropoffdate: "00/00/0000",
            dropofftime: "00:00",
            isSet: "true"
        },
        {   
            key: "2",
            title: "Clothes by Farah",
            quantity: "20",
            dropoffdate: "00/00/0000",
            dropofftime: "00:00",
            isSet: "true"
        },
        {   
            key: "3",
            title: "MRI Machine by Ziad",
            quantity: "1",
            dropoffdate: "00/00/0000",
            dropofftime: "00:00",
            isSet: "false"
        },
        {   
            key: "4",
            title: "Pens by Salma",
            quantity: "30",
            dropoffdate: "00/00/0000",
            dropofftime: "00:00",
            isSet: "false"
        },
        {   
            key: "5",
            title: "Fruits and Vegetables by Omar",
            quantity: "25",
            dropoffdate: "00/00/0000",
            dropofftime: "00:00",
            isSet: "true"
        },
        {   
            key: "6",
            title: "Blood Pressure Machine by Jana",
            quantity: "5",
            dropoffdate: "00/00/0000",
            dropofftime: "00:00",
            isSet: "true"
        },
        {   
            key: "7",
            title: "Stuffed animals by Ziad",
            quantity: "10",
            dropoffdate: "00/00/0000",
            dropofftime: "00:00",
            isSet: "true"
        },
        {   
            key: "8",
            title: "Canned Foods by Yara",
            quantity: "25",
            dropoffdate: "00/00/0000",
            dropofftime: "00:00",
            isSet: "false"
        },
        {   
            key: "9",
            title: "Notebooks by Omar",
            quantity: "30",
            dropoffdate: "00/00/0000",
            dropofftime: "00:00",
            isSet: "false"
        },
        {   
            key: "10",
            title: "Baked goods by Farah",
            quantity: "40",
            dropoffdate: "00/00/0000",
            dropofftime: "00:00",
            isSet: "false"
        },
        {   
            key: "11",
            title: "Pain Killers by Salma",
            quantity: "10",
            dropoffdate: "00/00/0000",
            dropofftime: "00:00",
            isSet: "true"
        },
        {   
            key: "12",
            title: "Cough Medicine by Jana",
            quantity: "10",
            dropoffdate: "00/00/0000",
            dropofftime: "00:00",
            isSet: "true"
        },
    
    ]);
    
    return(
        <div className='grid grid-cols-2'>
            {dropoffData.map((dropoff)=> (
                <DropoffCard 
                key={dropoff.key}
                data={dropoff}
                isSet={props.isSet}/>
            ))}
        </div>
    );
}
export default OrganizationDelivery;