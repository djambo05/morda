import React, {useEffect, useState} from "react";

export default function Post (props) {
    const [result, setResult] = useState({})
    useEffect(() => {
            fetch(`https://hacker-news.firebaseio.com/v0/item/${props.id}.json`)
            .then(response => response.json())
            .then(result => setResult(result))
    }, [])
    return(
    <div>
        {result.title}
    </div>
    );
}