import NavbarBottom from "../../components/navbar/navbarBottom";
import NavbarTop from "../../components/navbar/navbarTop";
// import NavbarBottom from "../../components/navbar/navbarBottom";
import Search from "../../components/search";
import VehicleCard from "../../components/vehicle/vehicleCard";

const Vehicle = () => {
    return (
        <>
            <NavbarTop />
            <main className="bg-light pt-5">
                
                <div>
                    <Search />
                </div>

                <div className="pt-5" style={{ height: "100%" }}>

                    <div className="d-flex flex-wrap gap-4 mb-5 justify-content-center align-items-center">
                        <VehicleCard
                            name={"TOYOTA COROLLA"}
                            model={"2.0 VVT-IE FLEX XEI DIRECT SHIFT"}
                            value={"129.000"}
                            date={"12/04/2023"}
                            km={"100.000"}
                        />
                        <VehicleCard
                            name={"HONDA CIVIC"}
                            model={"2.0 16V FLEX EXL CVT"}
                            value={"115.000"}
                            date={"10/05/2023"}
                            km={"80.000"}
                        />
                        <VehicleCard
                            name={"FORD FUSION"}
                            model={"2.5 16V FLEX TITANIUM CVT"}
                            value={"105.000"}
                            date={"08/03/2023"}
                            km={"90.000"}
                        />
                        <VehicleCard
                            name={"CHEVROLET ONIX"}
                            model={"1.0 FLEX LTZ"}
                            value={"55.000"}
                            date={"15/06/2023"}
                            km={"50.000"}
                        />
                    </div>
                </div>
            </main>
            <NavbarBottom isFixed={false} />
        </>
    )
}

export default Vehicle;