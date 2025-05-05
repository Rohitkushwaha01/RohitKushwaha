import React, {useEffect} from 'react'
import AuraEffect from '../Components/AuraEffect'
import Chatbot from '../Components/Chatbot'

export default function Dashboard() {
    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <AuraEffect />
            <Chatbot />

        </>
    )
}
