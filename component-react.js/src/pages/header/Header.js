import React from 'react';
import './Header.css';


 
const Header = () => {
  return (
    <section className={'header'}>
  <section className={'container'}>
    <div className={'headflex'}>

      <div className={'head1'}>
      <i className={"bi bi-facebook"}></i>
      <input type={'text'} placeholder={'search for facebook'}/>
      </div>
      <div className={'head2'}>
      <i className={"bi bi-house-door"}></i>
      <i className={"bi bi-play-btn"}></i>
      <i className={"bi bi-house-fill"}></i>
      <i className={"bi bi-people-fill"}></i>
      <i className={"bi bi-controller"}></i>
      </div>
      <div className={'head3'}>
      <i className={"bi bi-dice-6"}></i>
      <i className={"bi bi-messenger"}></i>
      <i className={"bi bi-bell"}></i>
      <i className={"bi bi-person-circle"}></i>
      </div>

    </div>
  </section>
   </section>
  )
}

export default Header
