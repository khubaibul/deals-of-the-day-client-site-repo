import { useEffect } from 'react';


const useDynamicTitle = (title) => {
    useEffect(() => {
        window.document.title = `${title} - Deal Of The Day`;
    }, [title])
};


export default useDynamicTitle;