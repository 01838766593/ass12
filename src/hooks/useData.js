import React, { useEffect, useState } from 'react';

const useData = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://still-temple-16714.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);



    return [services, setServices]

};

export default useData;