import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import secsch from '../assets/twss.png';
import preu from '../assets/ngeeann.png';
import singaporeflag from '../assets/sgflag.png';
import strikedeck from '../assets/strikedeck.png';
import lg from '../assets/lg.png';
import por from '../assets/selfpor.jpg';
import google from '../assets/google.png';
import orion from '../assets/orion.png';
import angelhack from '../assets/angelhack.png';
import educator from '../assets/educator.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faNewspaper, faFacebook } from '@fortawesome/free-solid-svg-icons'
import { FaRegNewspaper, FaFacebookSquare, FaLinkedin} from 'react-icons/fa';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeTab: 0 
    };
  }

  toggleCategories() {

    
    if(this.state.activeTab === 0){
      return(
        <div className="about-body">
          {/* About Me */}
          <Grid className="about-grid">
          <Cell col={12}>

            <img className="img1" src={por} alt="loading..." />


            <p className="para1"> From Singapore <img style={{maxHeight: '5%', maxWidth: '10%', right: '3%'}} src={singaporeflag} alt="sgflag"/></p> 
            
            <p className="para1">Strongly passionate about technology</p>

            <p className="para1">Loves to attend tech conferences and events</p>

            <p className="para1">Enjoy networking with people with similar interests</p>

            <p className="para1">Want to say hi? Feel free to drop me an <a href= "https://mail.google.com/mail/?view=cm&fs=1&to=kaien.yong99@gmail.com">email</a></p>
            </Cell>
            </Grid>
        </div>
      
        
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="education-body">
        {/* Education */}
        <Grid className="education-grid">
          <Cell col={12}>
          <h3 style={{fontSize: '4vh', textAlign: 'center', color: 'grey', fontWeight: 'bold'}}>EDUCATION</h3>
          <div> 
            <Education

              /* Education Level */
              educationLevel="Diploma in Information Technology"

              /* School Name */
              schoolName="NGEE ANN POLYTECHNIC"

              /* Location */
              schoolLocation="SINGAPORE"

              /* Start & End Date */
              schoolStartDate={"APRIL 2016"}
              schoolEndDate={"MAY 2020"}

              /* Description */
              schoolDescription= "Represented Ngee Ann Polytechnic in AngelHack Hackathon 2017 (Team Leader)"

              /* Description */
              schoolDescription1= "Secretary of ORION Special Interest Group (SIG)"
              
              /* Description */
              schoolDescription2= "Global Entrepreneurial Internship Programme (GEIP) Award Recipient (Featured in Ngee Ann Polytechnic Social Media and 2019's School News Publication)" 
              />
              <p style={{textAlign: 'center', fontWeight: 'bold'}}>Featured on Ngee Ann's <a href= "https://www.np.edu.sg/publications/Documents/NPNews/2019_2/NPnews_issue2_2019.pdf#page=20" target="_blank" rel="noopener noreferrer"><FaRegNewspaper size='39px'/></a><a href= "https://www.facebook.com/ngeeannpoly/photos/a.385347389797/10157904592514798/?type=3&theater" target="_blank" rel="noopener noreferrer"><FaFacebookSquare size='30px'/></a><a href= "https://www.linkedin.com/posts/ngee-ann-polytechnic_ngeeannpoly-ecommerce-entrepreneurship-activity-6620537824296960000-u4O_" target="_blank" rel="noopener noreferrer"><FaLinkedin size='31px'/></a></p>
              
              </div>
            
              <img className="ngeeannimg" src={preu}
                alt="loading..."
               />

               <Education

                 /* Education Level */
                  educationLevel="Singapore-Cambridge GCE Ordinary Level"

                  /* School Name */
                  schoolName="TECK WHYE SECONDARY SCHOOL"

                  /* Location */
                  schoolLocation="SINGAPORE"

                  /* Start & End Date */
                  schoolStartDate={"JANUARY 2012"}
                  schoolEndDate={"NOVEMBER 2015"}

                  /* Description */
                  schoolDescription="Executive Committee Member of Infocomm Club (Media Production Head)"

                  /* Description */
                  schoolDescription1="Member of Student Council (Media Production Head)"

                  /* Description */
                  schoolDescription2="Represented Teck Whye Secondary in StrITwise National Competition"

                  />

                  <img className="secschimg" src={secsch}
                  alt="loading..."
                  />

                  </Cell>
                  </Grid>
                  </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="experience-body">
        {/* Experience */}
        <Grid className="experience-grid">
          <Cell col={12}>
            <h3 style={{fontSize: '4vh', textAlign: 'center', color: 'grey', fontWeight: 'bold'}}>EXPERIENCES</h3>

            <Experience

                /* Position */
                jobName="Educator"

                /* Company Name */
                companyName="PRIVATE, TUITION CENTRES"

                /* Location */
                companyLocation="SINGAPORE"

                /* Start & End Date */
                companyStartDate={"APRIL 2017"}
                companyEndDate={"CURRENT"}

                /* Description */
                jobDescription="An experienced educator in English, Chinese, Science, Mathematics and General Programming who has mentored over 50 students taking Primary School Leaving Examination (PSLE), Cambridge International General Certificate of Secondary Education (IGCSE), Admissions Exercise for International Students (AEIS) - KEWO, Intaglio, Yvonne Educational Centre"

                />
                <img className="educatorimg" src={educator}
                alt="loading..."
                /> 



              <Experience

                /* Position */
                jobName="YouTube Partner and Content Creator"

                /* Company Name */
                companyName="GOOGLE"

                /* Location */
                companyLocation="SINGAPORE"

                /* Start & End Date */
                companyStartDate={"MAY 2011"}
                companyEndDate={"CURRENT"}

                /* Description */
                jobDescription="Total lifetime views of over 3.6 million and over 3,000 subscribers. Top rated videos have achieved over 1 million views and 400 thousand views respectively. BenQ APAC partnership."

                />
                <img className="googleimg" src={google}
                alt="loading..."
                />  

              <Experience

                /* Position */
                jobName="Shadow CEO/Software Engineer"

                /* Company Name */
                companyName="STRIKEDECK, A MEDALLIA COMPANY"

                /* Location */
                companyLocation="CALIFORNIA, UNITED STATES"

                /* Start & End Date */
                companyStartDate={"MAY 2018"}
                companyEndDate={"APRIL 2019"}

                /* Description */
                jobDescription="Global Entrepreneurship Internship Programme (GEIP) has provided me an opportunity to work as a Software Engineer for a Silicon Valley based startup company named Strikedeck for a year. GEIP utilised a “Shadow CEO” model, where I was exposed to various functions within Strikedeck. I have held additional portfolios such as Quality Assurance (QA) Analyst in the company and spearheaded projects such as QA Automation."

                />
                <img className="strikedeckimg" src={strikedeck}
                alt="loading..."
                />  


              
                <Experience

                /* Position */
                jobName="Senior Brand Ambassador"

                /* Company Name */
                companyName="LG MOBILE ELECTRONICS"

                /* Location */
                companyLocation="SINGAPORE"

                /* Start & End Date */
                companyStartDate={"DECEMBER 2015"}
                companyEndDate={"MARCH 2017"}

                /* Description */
                jobDescription="As a LG brand ambassador, I communicate and engage with customers to raise brand awareness and increase mobile sales in telecommunication stores such as SingTel, M1 and Starhub. To achieve this, I educated customers and retailers about LG mobile products. In doing so, I built rapport and trust with my customers. Many customers adopted my phone recommendations, which take into account their specific requirements and needs, and I have received numerous commendations from them on my strong product knowledge and adaptability. I worked closely with LG’s marketing team to determine the most optimal sales strategy to promote new mobile phone releases to customers and boost the overall profit of the company. Through my conversation with customers and telecom retailers, I would amalgamate their opinion or feedback regarding LG mobile phones and marketing campaigns, and submit a daily feedback report to the marketing team, to help improve future products and marketing efforts."

                />
                <img className="lgimg" src={lg}
                alt="loading..."

                />  

                <Experience

                /* Position */
                jobName="Secretary"

                /* Company Name */
                companyName="ORION"

                /* Location */
                companyLocation="SINGAPORE"

                /* Start & End Date */
                companyStartDate={"MAY 2016"}
                companyEndDate={"APRIL 2018"}

                /* Description */
                jobDescription="ORION is a school special interest group, and as an executive committee member, we organised outreach events to promote school faculty and improve digital literacy among secondary school students in Singapore. We also organized StrITwise®, the school’s annual flagship competition event."

                />
                <img className="orionimg" src={orion}
                alt="loading..."
                />  

                <Experience

                /* Position */
                jobName="Team Leader"

                /* Company Name */
                companyName="ANGELHACK GLOBAL HACKATHON SERIES"

                /* Location */
                companyLocation="SINGAPORE"

                /* Start & End Date */
                companyStartDate={"JUNE 2017"}
                companyEndDate={"JUNE 2017"}

                /* Description */
                jobDescription="Competing against international coders, designers and entrepreneurs in AngelHack hackathon, my team developed a B2B solution prototype - DreamTech. Built on multiple platforms, web and mobile applications, DreamTech provides managers and staffs the ability to check the status of office printers and pantries' inventories anytime and anywhere. A procurement order can be sent to purchase required products from multiple suppliers, establishing a mutual collaboration between the companies and suppliers. Convenience is achieved, as staff no longer spend time unnecessarily to source for third-party materials when a three-step procurement can be performed within the application."

                />
                <img className="angelhackimg" src={angelhack}
                alt="loading..."
                />  

                </Cell>
                </Grid>
                </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="skill-body">
        {/* Skills */}
        <Grid className="skill-grid">
          <Cell col={12}>
          <h3 style={{fontSize: '4vh', textAlign: 'center', color: 'grey', fontWeight: 'bold'}}>SKILLS</h3>
              <Skills
                skill="HTML"
                progress={85}
                />
                <Skills
                  skill="CSS"
                  progress={85}
                  />
                  <Skills
                  skill="Java"
                  progress={80}
                  />
                  <Skills
                    skill="JavaScript"
                    progress={80}
                    />
                    <Skills
                      skill="React"
                      progress={80}
                      />
                      <Skills
                        skill="C#"
                        progress={75}
                        />
                        <Skills
                          skill="C++"
                          progress={65}
                          />
                          <Skills
                            skill="Python"
                            progress={60}
                            />
                            <Skills
                              skill="SQL"
                              progress={60}
                              />
                              <Skills
                                skill="MongoDB"
                                progress={50}
                                />
                      </Cell>
                      </Grid>
                      </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab><b>About Me</b></Tab>
          <Tab><b>Education</b></Tab>
          <Tab><b>Experiences</b></Tab>
          <Tab><b>Skills</b></Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

      

          
            

        

export default Resume;
