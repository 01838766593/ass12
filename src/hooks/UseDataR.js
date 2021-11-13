import React, { useEffect, useState } from 'react';

const UseDataR = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://still-temple-16714.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                console.log(reviews);
            })
    }, []);

    return [reviews, setReviews]

};
export default UseDataR;