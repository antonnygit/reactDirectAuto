import { Button, Card } from "react-bootstrap";

const goToVehiclePage = (id) => {
    window.location.href = '/show/' + id;
}

const VehicleCard = ({ id, name, model, imgUrl, value, date, km }) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgUrl} style={{cursor: 'pointer', width: '288px'}} onClick={() => {goToVehiclePage(id)}} />
            <Card.Body>
                <Card.Title className="fw-bold text-secondary">{name}</Card.Title>
                <Card.Subtitle className="fw-bolder text-body-tertiary text-truncate">{model}</Card.Subtitle>

                <h2 className="fw-bold mt-2 text-danger">R$ {value}</h2>

                <div className="d-flex justify-content-between">
                    <span className="fw-bold">{date}</span> 
                    <span className="fw-bold">{km} Km</span>
                </div>

                <Button variant='danger' onClick={() => {goToVehiclePage(id)}} size="sm" className='fw-bolder text-body-light mt-2'>Ver mais</Button>
            </Card.Body>
        </Card>
    )
}

export default VehicleCard;