import { useEffect } from "react";
import GetUserDataSuapService from "../../services/auth/suap";
import { Spinner } from "react-bootstrap";
import AuthFromSuapService from "../../services/auth/registerSuap";


// os dados devem ser pegos no backend
const SuapRedirect = () => {

    useEffect(async () => {
        const fetchData = async () => {
            const hash = window.location.hash;
            const params = new URLSearchParams(hash.replace("#", ''));
            const access_token = params.get('access_token');

            if (!access_token) {
                window.location.href = '/';
                return;
            }

            try {
                const response = await GetUserDataSuapService(access_token);
                const { nome, email_preferencial, foto } = response.data;

                const responseSuap = await AuthFromSuapService(nome, email_preferencial, foto);
                const authToken = responseSuap.data.token;
                localStorage.setItem('token', authToken);
                window.location.href = '/vehicles';
            } catch (err) {
                window.location.href = "/";
            }
        };

        fetchData();
    }, []);

    return <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}><Spinner animation="border" variant="danger"></Spinner></div>
}

export default SuapRedirect;