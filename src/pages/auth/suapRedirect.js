import { useEffect, useState } from "react";
import GetUserDataSuapService from "../../services/auth/suap";


// os dados devem ser pegos no backend
const SuapRedirect = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        const hash = window.location.hash;
        const params = new URLSearchParams(hash.replace("#", ''));
    
        const access_token = params.get('access_token');
    
        if (!access_token)
            window.location.href = '/';

        setAccessToken(access_token);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await GetUserDataSuapService(accessToken);
                setUserData(response.data);
            }catch(err)
            {
                setError(err);
            }finally{
                setLoading(false);
            }
        }

        if(accessToken)
            fetchData();

    }, [accessToken]);

    if(loading)
        return <p>Carregando...</p>

    return (
        <div>
            <h1>{userData ? `Matrícula: ${userData.identificacao}` : `No Data`}</h1>
            <p>Token: {accessToken}</p>
        </div>
    )
}

export default SuapRedirect;