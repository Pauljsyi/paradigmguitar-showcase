// eslint-disable import/no-anonymous-default-export 
import { useEffect } from 'react';

const useOnClickOutside = (ref, handler) => {

    useEffect(() => {
        const listener = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                // console.log('ref', ref)
                return;
            };
            // console.log('handler', handler())

            handler();

        };

        document.addEventListener('mouseup', listener);
        // document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mouseup', listener);
            // document.removeEventListener('touchstart', listener);
        };
    }, 
    [ref, handler]
    );
};


export default useOnClickOutside;