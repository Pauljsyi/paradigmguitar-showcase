// eslint-disable import/no-anonymous-default-export 
import { useEffect } from 'react';

const useOnClickOutside = (ref, handler) => {

    useEffect(() => {
        const listener = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                return;
            };
            handler();
        };
        document.addEventListener('mouseup', listener);
        return () => {
            document.removeEventListener('mouseup', listener);
        };
    }, 
    [ref, handler]
    );
};


export default useOnClickOutside;