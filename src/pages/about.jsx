import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'Acerca de Nostros'} />
    <Header title="Acerca de Nostros">Jujuy - Charlas sobre tecnologia</Header>
    <Container center={center}>
      <p>
        Somos un grupo de jovenes profesionales del ambito de la informatica interesados
        en resumir conocimientos relacionados con herramientas que pueden ser utiles en
        el dia a dia de una gran diversidad de personas. Para esto nuestra idea es la de
        preparar charlas y cursos en los cuales los participantes puedan adquirir un saber
        practico para aplicar en sus actividades.
      </p>
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
