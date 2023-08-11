import React from "react";
import MainLayoutAuth from "../../layouts/MainLayoutAuth";

const RecordData = () => {
  return (
    <div class="page-wrapper">
      <div class="content container-fluid">
        <div class="page-header">
          <div class="row">
            <div class="col">
              <h3 class="page-title">HEALTH & SAFETY AUDIT CHECKLIST</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li class="breadcrumb-item active">Checklist</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Workplace Details</h5>
              </div>
              <div class="card-body">
                <form action="#">
                  <div class="row">
                    <div class="col-md-12">
                      <h5 class="card-title">Workplace Particulars</h5>
                      <div class="form-group">
                        <label>Name:</label>
                        <input type="text" class="form-control" />
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>P.O. Box:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>Postal Code:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>Town:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>Tel:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>Mobile:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>Email:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Location:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>LR No:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Type of Workplace:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Workplace Registration:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <h5 class="card-title">Workers Bio Data</h5>
                      <div class="row">
                        <div class="col-md-3">
                          <div class="form-group">
                            <label>Total No of Workers:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="form-group">
                            <label>No of Men:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="form-group">
                            <label>No of Women:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="form-group">
                            <label>No of Disabled Workers:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label>H/S Policy:</label>
                        <input type="text" class="form-control" />
                      </div>

                      <div class="form-group">
                        <label>Other EHS Related Policies:</label>
                        <input type="text" class="form-control" />
                      </div>

                      <div class="form-group">
                        <label>H/S Policy:</label>
                        <input type="text" class="form-control" />
                      </div>

                      <h5 class="card-title">Trainings</h5>
                      <div class="row">
                        <div class="col-md-3">
                          <div class="form-group">
                            <label>HS Comm Training:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="form-group">
                            <label>Fire Training:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="form-group">
                            <label>First Aid Training:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="form-group">
                            <label>Covid 19 Related :</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>

                      <h5 class="card-title">Occupational Health</h5>
                      <h5 class="card-title">Occupational Health Provisions</h5>

                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>No of First Aid Kits:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Distribution First Aid Kits:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>Tel:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>Mobile:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>Email:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>No of First Aiders:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>No of Trained First Aiders:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>No of Untrained First Aiders:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>Ailments:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>Referral Hospital:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="form-group">
                            <label>WIBA Insurance:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>

                      <h5 class="card-title">Occupational Health Programs</h5>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Statutory Medical Exams conducted:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>
                              When was Statutory Medical Exams conducted:
                            </label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label>Name of DHP:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>No. of Workers Examined:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>No. of workers with abnormal results:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Work posing risk to workers health:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label>
                              Health Programs:eg health education,hearing
                              conservation,counseling,HIV/AIDS
                            </label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label>Accidents / Diseases Reported:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label>Accident Investigation Procedures:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                   
                  </div>
                  {/* <div class="text-end">
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </div> */}
                </form>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                  <h5 class="card-title">COVID 19 ASSESSMENT</h5>
                </div>
                <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Temperature Monitoring:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Registration of Staff, clients,Visitors:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Hand washing facilities with soap & water:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Drying of hands:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Sanitizers:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Eye/Face Protection:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Facility Cleaning & Disinfection:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Social Distancing:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-8">
                    <div class="form-group">
                      <label>Covid related PPEs issuance,usage, maintenance and enforcement:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Workers exhibiting Symptoms of Covid-19:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                
                
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label>Mental Health:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  
                </div>

                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Emergency Response Plan:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Special Covid-19 Emergency Response and Evacuation Plan:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Isolation Facility/ Room:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Trainings and Information:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Special Covid-19 Emergency Response and Evacuation Plan:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Travel:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Facility Fumigation:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Safe food handling:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                 
                </div>

                <h5 class="card-title">Medical Waste Management</h5>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label>Segregation:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label>Containment:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label>Handling and storage:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label>Transport:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label>Treatment and destruction:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label>Disposal:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label>Any Other Issue ( Covid 19 Related):</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Chemicals :</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>MSDS :</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Permits to Work :</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Machinery :</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Plants :</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Electrical Safety :</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <h5 class="card-title">Fire Safety</h5>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Fire Safety Exits:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Flammables:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Hazcoms:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Fire Fighting Equipts:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Last Date of Service By Fire Fighting Team:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Fire Alarm:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Fire Assy Point:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Fire Drill:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Construction Safety:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Compliance to BOWEC Rules 1984:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  
                </div>
                <h5 class="card-title">PPEs</h5>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>PPEs Provision :</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>PPEs Maintenance:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>PPEs Storage:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>PPEs Training on usage & Maintenance:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>PPEs Replacement:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>

                <h5 class="card-title">Ventilation</h5>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Natural Ventilation :</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Artificial Ventilation :</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>LEV:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>      
                </div>

                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Overcrowding :</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>House Keeping:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Lighting:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Materials Handling :</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Noise:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Vibrations:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Radiation:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Thermal Conditions:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Pressures:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Ergonomics:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>

                <h5 class="card-title">Welfare</h5>
                <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                      <label>First Aid Box:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Sanitary Facilities:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Washing Facilities:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>

                <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                      <label>Sitting Facilities:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Drinking Water:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label>Accommodation for Clothing:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>


                <h5 class="card-title">Any Other Issue/ Comments</h5>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label>Any Other Issue/ Comments:</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>


                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="row">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Basic Form</h5>
              </div>
              <div class="card-body">
                <form action="#">
                  <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label>Email Address</label>
                    <input type="email" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label>Repeat Password</label>
                    <input type="password" class="form-control" />
                  </div>
                  <div class="text-end">
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Address Form</h5>
              </div>
              <div class="card-body">
                <form action="#">
                  <div class="form-group">
                    <label>Address Line 1</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label>Address Line 2</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label>City</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label>State</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label>Country</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label>Postal Code</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="text-end">
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title">Two Column Vertical Form</h5>
              </div>
              <div class="card-body">
                <form action="#">
                  <div class="row">
                    <div class="col-md-6">
                      <h5 class="card-title">Personal details</h5>
                      <div class="form-group">
                        <label>Name:</label>
                        <input type="text" class="form-control" />
                      </div>
                      <div class="form-group">
                        <label>Password:</label>
                        <input type="password" class="form-control" />
                      </div>
                      <div class="form-group">
                        <label>State:</label>
                        <select class="select">
                          <option>Select State</option>
                          <option value="1">California</option>
                          <option value="2">Texas</option>
                          <option value="3">Florida</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label>Your Message:</label>
                        <textarea
                          rows="5"
                          cols="5"
                          class="form-control"
                          placeholder="Enter message"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <h5 class="card-title">Personal details</h5>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>First Name:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Last Name:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Email:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Phone:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label>Address line:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Country:</label>
                            <select class="select">
                              <option>Select Country</option>
                              <option value="1">USA</option>
                              <option value="2">France</option>
                              <option value="3">India</option>
                              <option value="4">Spain</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>State/Province:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>ZIP code:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>City:</label>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text-end">
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MainLayoutAuth(RecordData);
