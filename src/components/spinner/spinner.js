import React from "react"
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import "./spinner.css"
import { ThemeProvider } from '@zendeskgarden/react-theming';

import { Dots } from '@zendeskgarden/react-loaders';
 export default class Spinner extends React.Component {
  //other logic
    render() {
     return(
         <div className="spinner">
             <div className="spinnerinner">
        <ThemeProvider >
        <Loader
         type="MutatingDots"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs

      />
      </ThemeProvider>
      </div>
      </div>

     
     );
    }
 }