import React, { useEffect, useState } from 'react'

const dashboard = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [dashboardData, setDashboardData] = useState("")
    useEffect( () => {
        (async function(){
            setIsLoading(true)
            const fetchDashboardData = await fetch("http://localhost:4000/dashboard");
            const actData = await fetchDashboardData.json();
            setDashboardData(actData);
            setIsLoading(false)
        })()
    }, [])
    
    if(isLoading){
        return (
            <div className='loading'>
                <h3>Loading...</h3>
            </div>
        )
    }

    return (
        <div className='dashboard'>
            {dashboardData && (
            <div className='dashboard_data'>
                <h3>{dashboardData.posts}</h3>
                <h3>{dashboardData.likes}</h3>
                <h3>{dashboardData.followers}</h3>
                <h3>{dashboardData.following}</h3>
            </div>)}
        </div>
    )
}

export default dashboard