import React, { Fragment } from 'react';

import FetchApproach from './FetchApproach';
import AxiosApproach from './AxiosApproach';
import AsyncAwaitApproach from './AsyncAwaitApproach';
import HigherOrderComponentApproach from './HigherOrderComponentApproach';
import RenderPropApproach from './RenderPropApproach';

const Ajax = () =>
  <Fragment>
    <p style={{fontSize:'15px',fontWeight:'bold'}}>Ajax Approch of topic'Redux' </p>
  <p> Rander Prop Approch </p>
    <RenderPropApproach />
  <p> High order Component </p>
    <HigherOrderComponentApproach />
  <p> Fetch Approch </p>
  <FetchApproach />
  <p> Axios Approch </p>
   <AxiosApproach />
   <p> Async Await Approach </p>
   <AsyncAwaitApproach />


    </Fragment>
  // <RenderPropComponentApproach />

export default Ajax;
