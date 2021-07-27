import { useEffect } from 'react';
import { useHistory } from 'react-router';

function useProtectedPage () {

    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token === null){
            window.alert("Você precisa realizar login para acessar esta página!");
            history.push('/login');
        }
    })
}

export default useProtectedPage;