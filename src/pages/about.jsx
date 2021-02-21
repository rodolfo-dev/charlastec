import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'Acerca de Nostros'} />
    <Header title="Acerca de Nostros">Jujuy - Mentoring de tecnologia</Header>
    <Container center={center}>
      <h3>
        Un grupo de pibes{' '}
        <a href="https://justinformentin.com/gatsby-v2-guide">click.</a>
      </h3>
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
