import React ,{Suspense}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'flag-icon-css/css/flag-icon.min.css'
import RootStore from './store/RootStore';
 import './store/i18n';



ReactDOM.render(
<Suspense fallback="loading">
<RootStore>
<App />
</RootStore>
  </Suspense>




  

  ,
  document.getElementById('root')
);

