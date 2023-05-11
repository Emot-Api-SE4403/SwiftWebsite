import { Col, Row } from "react-bootstrap";


export default function AdminPage1 () {
    const styleSimpleProfile = {
        
    }

    return (

        <div className="container-fluid h-100 overflow-auto w-100">
            <Row className="h-100">
                <Col className='' xs={12} md={4} style={{
                    backgroundColor:'purple',
                }}>
                    <h1>YES</h1>
                </Col>
                <Col xs={12} md={8} style={{
                    backgroundColor:'green',
                }}>
                    <h3>lorem upsim</h3>
                </Col>
            </Row>
        </div>
    )
}