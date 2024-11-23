import { Button, Card } from "react-bootstrap";

const VehicleCard = ({ name, model, value, date, km }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="corolla.jpg" />
            <Card.Body>
                <Card.Title className="fw-bold text-secondary">{name}</Card.Title>
                <Card.Subtitle className="fw-bolder text-body-tertiary text-truncate">{model}</Card.Subtitle>

                <h2 className="fw-bold mt-2 text-danger">R$ {value}</h2>

                <div className="d-flex justify-content-between">
                    <span className="fw-bold">{date}</span> 
                    <span className="fw-bold">{km} Km</span>
                </div>

                <Button variant='danger' href="/show" size="sm" className='fw-bolder text-body-light mt-2'>Ver mais</Button>
            </Card.Body>
        </Card>
    )
}

export default VehicleCard;