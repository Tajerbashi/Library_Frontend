import React from 'react'
import Wrapper from '../../../Components/HOC/wrapper'
import HeaderComponent from './components/Header/HeaderComponent'
import SectionComponent from './components/Section/SectionComponent'
import FooterComponent from './components/Footer/FooterComponent'
const HomeComponent = () => {
  return (
    <Wrapper>
        <HeaderComponent></HeaderComponent>
        <SectionComponent />
        <FooterComponent></FooterComponent>
    </Wrapper>
  )
}
export default HomeComponent;
