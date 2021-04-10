import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = props => {
    const { location } = props;
    return (
        <>
        <Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
          
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>

                <Nav className="mr-auto" defaultactiveKey='Search' activeKey={location.pathname}>
                <Navbar.Brand>
      <img
        src="https://icons-for-free.com/iconfiles/png/512/share+sharing+url+icon-1320191834584268227.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt=""
      />
    </Navbar.Brand>
                    <Nav.Item>
                        <Nav.Link href="/About">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/Edit'>Edit</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/Search'>Search</Nav.Link>
                    
                    </Nav.Item>
                </Nav>
                   
                </Navbar.Collapse>
      
        </Navbar>
        </>
        
    );
}

export default Header
