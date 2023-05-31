import Portrait from './components/portrait/Portrait';
import Cards from './components/cards/Cards';
import Artshop from './components/artshop/Artshop';
import Form from './components/form/Form';
import IconChevron from '../src/components/iconsSvg/IconChevron';
import Loop from '../src/components/loop/Loop';
import './scss/global.scss';


import React, { useState, useEffect } from 'react';


export default function Portfolio() {
    return (
      <>
        


        < Loop />

        < Portrait/>
        < Cards />
        < Artshop />
        < Form/>
        < IconChevron className="icon--large" size="large"  />

      </>
    );
}

