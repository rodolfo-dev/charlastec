import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const ErrorPage = center => (
  <Layout>
    <Helmet title={'404'} />
    <Header title="404" />
    <Container center={center}>
      <h1>Uy, algo no funciono.</h1>
      <h3>Por el momento esta pagina no existe.</h3>
      <h3>
        Puede volver a la pagina principal <Link to="/">Inicio</Link>.
      </h3>
    </Container>
  </Layout>
);

export default ErrorPage;

ErrorPage.propTypes = {
  center: PropTypes.object,
};
