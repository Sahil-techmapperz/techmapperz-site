import React from 'react'
import Styles from "./Career.module.css";
const Career = () => {
  return (
    <div className={Styles.career}>
      <section className={Styles.first_section}>
      <h1>Career</h1>
        <p>Home / Career</p>
      </section>
      <section className={Styles.secend_section}>
        <h3>Get Involve Now</h3>
        <h1>Let's join with us !!</h1>
        <div className={Styles.secend_section_main}>
          <div className={Styles.secend_section_main_one}>
            <div>
              <h3>Full Time</h3>
              <h1>Senior Business Development Executive</h1>
              <p>Experience: 3 to 5 Years</p>
              <p>Location: Delhi</p>
              <button>Apply Now</button>
            </div>
            <div>
              <h3>Full Time</h3>
              <h1>Senior Business Development Executive</h1>
              <p>Experience: 3 to 5 Years</p>
              <p>Location: Delhi</p>
              <button>Apply Now</button>
            </div>
            <div>
              <h3>Full Time</h3>
              <h1>Senior Business Development Executive</h1>
              <p>Experience: 3 to 5 Years</p>
              <p>Location: Delhi</p>
              <button>Apply Now</button>
            </div>
            <div>
              <h3>Full Time</h3>
              <h1>Senior Business Development Executive</h1>
              <p>Experience: 3 to 5 Years</p>
              <p>Location: Delhi</p>
              <button>Apply Now</button>
            </div>

          </div>
          <div className={Styles.secend_section_main_two}>
            <h2>Be a Volunteer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ex. Dolorem ipsum</p>
          <div className={Styles.input_from}>
            <input placeholder='Your Name'/>
            <input placeholder='Your Mobile Number'/>
            <textarea placeholder='Type your Message'></textarea>
            <input type="file" className={Styles.resume} name="uploadfile" id="Resume"/>
            <label for="Resume">Upload Resume*</label>
            <button>Submit</button>
          </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Career
