import React from 'react'
import Wrapper from '../../../Components/HOC/wrapper'
import HeaderComponent from './components/HeaderComponent'
import SectionComponent from './components/SectionComponent'
import FooterComponent from './components/FooterComponent'
const HomeComponent = () => {
  return (
    <Wrapper>
      <div className='container py-4'>
        <HeaderComponent></HeaderComponent>
        <SectionComponent />
        <FooterComponent></FooterComponent>
      </div>
    </Wrapper>
  )
}
export default HomeComponent;
