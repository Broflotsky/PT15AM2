import React from 'react';
import ContactUs from './components/ContactUs/ContactUs';
import Map from './components/Map/Map';
import InfoEnviada from './components/InfoEnviada/InfoEnviada';
import './home.css';

export default function Home() {
   return (
      <div className='homeBg'>
         <ContactUs />
         <div style={{ height: '100vh', width: '30vw', padding: '0rem' }}>
            <Map />
            <InfoEnviada />
         </div>
      </div>
   );
}
