/* eslint-disable react/jsx-no-target-blank */
import './App.css';
import Card from './components/Card';

import Chart from "./components/Chart.jsx"

function App() {
  return (
    <body class="path-node page-node-type-landing-page">
      <div className="layout-container">
        <main role="main" className="main-content">
          <div class="layout-content">
            <div class="region region-content">
              <div className="bg-grey">
              <div className="container">
                <div className="bs-1col">
                  <div className="bs-region bs-region--main">
                    <br/><br/>
                    <div className="row flex-column flex-md-row  small ">
                      <div class="mb-12 pb-1 col-12 col-md-12 col-lg-12">
                        <h2 class="h2 text-align-center text-black pt-5 mt-5 pt-lg-0 mt-lg-0 mb-4 pb-lg-2 mx-0 mx-lg-5 px-0 px-lg-5">
                          <div className="field field--name-field-title field--type-string field--label-hidden field__item">What do you do in your organization?</div>
                        </h2>
                      </div>
                    </div>
                    <div className="featured-cards-content row flex-column flex-md-row  small">
                    <Card title="I am an Employee"/>
                    <Card title="I am an HR professional"/>
                    <Card title="I am an Executive"/>
                    </div>
                    <br/><br/>
                    <div className="row flex-column flex-md-row  small ">
                      <div class="mb-12 pb-1 col-12 col-md-12 col-lg-12">
                        <Chart/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </body>
  );
}

export default App;
