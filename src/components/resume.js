/*The resume class component is supposed to be for the resume page in the. we had to import this page in main.js */
import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience'
import Skills from './skills'
import Mobile from './mobile'

 class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                <Cell col={4}>
                <div style= {{textAlign: 'center'}}>
                <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                />

                </div>


<h2 style= {{paddingTop: '2em'}}> Chibuzor Okafor</h2>
<h2 style= {{color: 'grey'}}>  Programmer</h2>
<hr style= {{borderTop: '3px solid #833fb2 ', width: '50%'}}/> 
<p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
</p> 
<hr style= {{borderTop: '3px solid #833fb2 ', width: '50%'}}/> 
<h5>Address</h5>
<p>Lagos Nigeria, West Africa.</p>
<h5>Phone</h5>
<p>(+234) 80-641-365-93</p>
<h5>Email</h5>
<p>coolbuhzor@gmail.com</p>
<h5>Web</h5>
<p>okaforchibuzor.netlify.app</p>
<hr style= {{borderTop: '3px solid #833fb2 ', width: '50%'}}/> 
</Cell>
<Cell className="resume-right-col" col={8}>
<h2>Education</h2>
<Mobile className="mobile"
school ="School"
class ="University Of Port Harcourt (2014-2018)"
/>

<Mobile className="mobile"
school = "Degree"
class = "B.sc"
/>

<Mobile className="mobile"
school = "course"
class = "Finance & Banking"

/>

<Education className = " monitor"
startYear={2014}
endYear={2018}
schoolName ="University Of Port Harcourt"
degree= "Degree"
schoolDegree = "B.sc"
course = "Discipline"
schoolDescription="Finance and Banking"
/>


<hr style= {{borderTop: '3px solid #e22947'}}></hr>

 <h2>Experience</h2>

 
 <Experience 
job= "Federal Capital Territory Abuja (FCTA) "  post= "Auditorial"
time = "January 2019 - February 2020"
jobDescription="The Federal Capital Territory Administration (FCTA) is a Nigerian
ministry that administers the Federal Capital Territory of Nigeria. It is
headed by a Minister appointed by the President, assisted by a Permanent
Secretary, who is a career civil servant.
I worked at Federal capital Territory treasury department as an auditor
and at the treasury department we audit files of different ministries and
department under the fcta and also verify documents of payment sent to
the ministry before proceeding to make payment.
"

/>

<Experience 
job= "Tech Studio, palmgroove "  

time = "February 202- Till date"
post ="Web developer (intern)"
jobDescription="Tech studio i s a Technology/Digital skill learning Centre located in Lagos.
Tech studio helps individuals to think and build like software developers.
You move from understanding programming fundamentals to launching
full-stack web apps. You do all these while learning to solve everyday
problems with constructive, well-written programs.
And finally, Tech studio offers the fundamentals of working as a team;
collaborate with other group members or team members to build, change,
maintain, and secure an application. Track your team development
process using Version Control Systems.
 "

/>

<Experience 
job= "Hotels.ng, yaba "  post= "Frontend developer (Remote intern) "

time = "June, 2020"

jobDescription="We are an online travel agency specialising in hotel bookings within
Nigeria. We help customers book hotel rooms online, provide
comprehensive help and support to our clients and make the hotel
booking process smooth and easy. We also provide hotel
recommendations and reviews, making sure that our clients stay in good,
clean and safe hotels all over the country.
"

/>

<Experience 
job= "Prime web technologies, Abuja "  post= "Frontend developer (Freelancer Remote) "
time = "January 2020 - tilldate"
jobDescription="Prime Web Technologies, is an Information technology firm, which
provides business solutions, system integration services, web services
and bespoke software solutions."

/>

<hr style= {{borderTop: '3px solid #e22947'}}></hr>

<h2>Skills</h2>
<Skills
skill = "html/css"
progress ="100"
/>
<Skills
skill = "html/css"
progress ="100"
/>
<Skills
skill = "html/css"
progress ="100"
/>
<Skills
skill = "html/css"
progress ="100"
/>



                </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;