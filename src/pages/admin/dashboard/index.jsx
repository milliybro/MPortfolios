import { Fragment } from "react";
import "./style.scss";

const DashboardPage = () => {
  
  return<Fragment>
    <div className="dashCard">
        Hello Admin!
    </div>

  <div className="dash__head">
    <div className="col-xl-3 col-lg-6 mb-4">
      <div className="bg-white rounded-lg p-5 shadow">
        <h2 className="h6 font-weight-bold text-center mb-4">Overall progress</h2>

       
        <div className="progress mx-auto" data-value='80'>
          <span className="progress-left">
                        <span className="progress-bar border-primary"></span>
          </span>
          <span className="progress-right">
                        <span className="progress-bar border-primary"></span>
          </span>
          <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
            <div className="h2 font-weight-bold">80<sup className="small">%</sup></div>
          </div>
        </div>
        

        
        <div className="row text-center mt-4">
          <div className="col-6 border-right">
            <div className="h4 font-weight-bold mb-0">28%</div><span className="small text-gray">Last week</span>
          </div>
          <div className="col-6">
            <div className="h4 font-weight-bold mb-0">60%</div><span className="small text-gray">Last month</span>
          </div>
        </div>
        
      </div>
    </div>

    <div className="col-xl-3 col-lg-6 mb-4">
      <div className="bg-white rounded-lg p-5 shadow">
        <h2 className="h6 font-weight-bold text-center mb-4">Work hours</h2>


        <div className="progress mx-auto" data-value='25'>
          <span className="progress-left">
                        <span className="progress-bar border-danger"></span>
          </span>
          <span className="progress-right">
                        <span className="progress-bar border-danger"></span>
          </span>
          <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
            <div className="h2 font-weight-bold">25<sup className="small">%</sup></div>
          </div>
        </div>
        

  
        <div className="row text-center mt-4">
          <div className="col-6 border-right">
            <div className="h4 font-weight-bold mb-0">28%</div><span className="small text-gray">Last week</span>
          </div>
          <div className="col-6">
            <div className="h4 font-weight-bold mb-0">60%</div><span className="small text-gray">Last month</span>
          </div>
        </div>
        
      </div>
    </div>

    <div className="col-xl-3 col-lg-6 mb-4">
      <div className="bg-white rounded-lg p-5 shadow">
        <h2 className="h6 font-weight-bold text-center mb-4">Server time</h2>

      
        <div className="progress mx-auto" data-value='76'>
          <span className="progress-left">
                        <span className="progress-bar border-success"></span>
          </span>
          <span className="progress-right">
                        <span className="progress-bar border-success"></span>
          </span>
          <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
            <div className="h2 font-weight-bold">76<sup className="small">%</sup></div>
          </div>
        </div>
        

        
        <div className="row text-center mt-4">
          <div className="col-6 border-right">
            <div className="h4 font-weight-bold mb-0">28%</div><span className="small text-gray">Last week</span>
          </div>
          <div className="col-6">
            <div className="h4 font-weight-bold mb-0">60%</div><span className="small text-gray">Last month</span>
          </div>
        </div>
        
      </div>
    </div>

    <div className="col-xl-3 col-lg-6 mb-4">
      <div className="bg-white rounded-lg p-5 shadow">
        <h2 className="h6 font-weight-bold text-center mb-4">Total overdue</h2>

        
        <div className="progress mx-auto" data-value='12'>
          <span className="progress-left">
                        <span className="progress-bar border-warning"></span>
          </span>
          <span className="progress-right">
                        <span className="progress-bar border-warning"></span>
          </span>
          <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
            <div className="h2 font-weight-bold">12<sup className="small">%</sup></div>
          </div>
        </div>

        <div className="row text-center mt-4">
          <div className="col-6 border-right">
            <div className="h4 font-weight-bold mb-0">28%</div><span className="small text-gray">Last week</span>
          </div>
          <div className="col-6">
            <div className="h4 font-weight-bold mb-0">60%</div><span className="small text-gray">Last month</span>
          </div>
        </div>
        
      </div>
    </div>
  </div>;
  </Fragment> 
};

export default DashboardPage