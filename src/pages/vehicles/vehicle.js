import { useEffect, useState } from "react";
import NavbarBottom from "../../components/navbar/navbarBottom";
import NavbarTop from "../../components/navbar/navbarTop";
// import NavbarBottom from "../../components/navbar/navbarBottom";
import Search from "../../components/search";
import VehicleCard from "../../components/vehicle/vehicleCard";
import IsAuth from "../../middlewares/isAuth";
import { Spinner } from "react-bootstrap";

import GetVehiclesService from "../../services/vehicle/getVehicles";
import FormatDateToBrazilian from "../../utils/formatDataToBrazilian";
import { useSearchParams } from "react-router-dom";
import SearchVehiclesService from "../../services/vehicle/searchVehicles";

const baseURL = `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`;

const Vehicle = () => {
    const [vehicles, setVehicles] = useState([]);
    const [loadingVehicles, setLoadingVehicles] = useState(true);

    const token = localStorage.getItem('token');

    const [searchParams] = useSearchParams();

    const search = searchParams.get("search");

    const id = 1;

    useEffect(() => {
        const getAllVehicles = async () => {
            try {
                const response = await GetVehiclesService();
                setVehicles(response.data.data);
            } catch (err) {
                alert("Ocorreu um erro ao carregar os veículos!");
                console.log(err);
            } finally {
                setLoadingVehicles(false);
            }
        }

        const searchVehicles = async () => {
            try {
                const response = await SearchVehiclesService(search, token);
                setVehicles(response.data.data);
            } catch (err) {
                alert("Ocorreu um erro ao carregar os veículos!");
                console.log(err);
                console.log(err.config.url)
            } finally {
                setLoadingVehicles(false);
            }
        }

        if (search && search.length > 0)
            searchVehicles();
        else
            getAllVehicles();
    }, [id]);

    return (
        <>
            <NavbarTop />
            <main className="bg-light pt-5">

                <div>
                    <Search />
                </div>

                <div className="pt-5" style={{ height: "100vh" }}>

                    <div className="d-flex flex-wrap gap-4 mb-5 justify-content-center align-items-center">
                        {loadingVehicles ? (
                            <Spinner animation="border" variant="danger" />
                        ) : (
                            vehicles.map((vehicle) => (
                                <VehicleCard
                                    id={vehicle.id}
                                    key={vehicle.id}
                                    name={vehicle.name}
                                    model={vehicle.model}
                                    value={vehicle.price}
                                    date={FormatDateToBrazilian(vehicle.created_at)}
                                    km={vehicle.km}
                                    imgUrl={baseURL + vehicle.image}
                                />
                            ))
                        )}

                    </div>
                </div>
            </main>
            <NavbarBottom isFixed={false} />
        </>
    )
}

export default IsAuth(Vehicle);