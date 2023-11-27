import Container from '../Container';
import Header from '../Header';
import Footer from '../Footer';

const Layout = (props: any) => {
  return (
    <>
      <Container>
        <Header />
        {props.children}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
