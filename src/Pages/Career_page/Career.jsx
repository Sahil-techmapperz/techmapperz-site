import React, { useState } from 'react'
import Styles from "./Career.module.css";
const init = {
  "name": "",
  "mobile": "",
  "message": "",
  "resume": ""
}
const Career = () => {
  const [careerdata, setcareerdata] = useState(init);
  const [base64Data, setBase64Data] = useState('');


const handalechange=async(e)=>{
  const{name,value,files}=e.target;
  
  if(name=="resume"){
    let file=files[0]
    const base64 = await convertBase64(file);
    setBase64Data(base64);
    
    // if(base64){
    // setcareerdata({...careerdata,"resume":base64})
    // console.log(careerdata.resume);
    // }
  }
  setcareerdata({...careerdata,[name]:value})

}


const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};


const handalesubmit=async()=>{
  const {name,mobile,message}=careerdata;
  const resume=btoa(base64Data);
  if(name&&message&&mobile&&resume){

    // console.log(base64Data)
   let Data={...careerdata,"resume":resume}
   console.log(Data)




    fetch("http://localhost:8080/career", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Data)
    }).then(res => {
      console.log(res)

    }).catch(err => {
      console.log("error")
      
    })
  }
}


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
            <input value={careerdata.name} placeholder='Your Name' type={"text"} name="name" onChange={handalechange}/>
            <input value={careerdata.mobile} placeholder='Your Mobile Number' name='mobile' type={"number"} onChange={handalechange}/>
            <textarea value={careerdata.message} placeholder='Type your Message' type='text'name='message'  onChange={handalechange}></textarea>
            <input  type="file" className={Styles.resume} name="resume" id="Resume" onChange={handalechange}/>
            <label for="Resume">{careerdata.resume?"Uploded" :"Upload Resume*"}</label>
            <button onClick={handalesubmit}>Submit</button>
          </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Career;
