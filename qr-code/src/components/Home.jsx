import {Container} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import qrCode from '../assets/img/image-qr-code.png';

const Home = ()=>{
    return (
       
            <Container style={{backgroundColor: '#bde7f2'}}>
                <Card style={{ width: '16rem', height: '27rem', margin: 'auto', backgroundColor: '#fff', borderRadius: '15px'}}>
                    <Card.Img variant='top' src={qrCode} style={{width: '14rem', borderRadius: '20px', padding: '15px'}} />
                    <Card.Body>
                        <Card.Title style={{fontWeight: 'bold', marginBottom: '10px', padding: '10px', textAlign: 'center', fontSize: '1.2rem' }}>
                            Improve your front-end skills by building projects</Card.Title>
                        <Card.Text style={{padding: '10px', textAlign: 'center', marginBottom: '20px'}}>Scan the QR Code to visit Frontend Mentor and take your coding skill to the next level</Card.Text>
                    </Card.Body>
                </Card>
            </Container>
       
    )
}

export default Home;