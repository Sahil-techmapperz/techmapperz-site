import React from "react";
import styles from './choose.module.css';


const Choose = () => {

    return (
        <div className={styles.main}>

            <section className={styles.first_part}>
                <div className={styles.first_part_main}>

                    <div className={styles.video_contaner}>
                        <video autoplay controls loop muted>
                            <source src="https://techmapperz.com/media/videos/2022/07/04/whatsapp-video-2022-07-04-at-10.57.43-am.mp4" type="video/mp4"></source>
                        </video>
                    </div>

                    <div className={styles.company_info}>
                        <h2 className={styles.heading}>Why Choose Techmapparz</h2>
                        <p>The smaller things make big difference in<br />everything that we do,we at Techmapperz also<br />believe in the attention
                            to detail methodology.<br />and our eye to the detail in every project that we<br />manage is what makes us stand out from the
                            rest,<br />we have a 4 step approach on how we execute a<br />project</p>
                    </div>
                </div>
            


            <div className={styles.second_paragraph}>
                <p>All the services that Techmapparz offers ensure that this four-step methodology is followed,<br />one of the many reasons that
                    most of our clients are either referred by our existing clients<br />or are returning clients.Working with us will always make you
                    feel a sense of calmness and<br />confidence, we treat our clients this way because we would want to be treat this way.</p>
            


            <div className={styles.third_part}>
                <div className={styles.third_part1}>
                    <p>Plans</p>
                </div>
                <div className={styles.third_part2}>
                    <p>Create</p>
                </div>
                <div className={styles.third_part3}>
                    <p>Leads</p>
                </div>
                <div className={styles.third_part4}>
                    <p>Achieve</p>
                </div>


            </div>
            </div>

        </section>

        

        </div>

    )
}
export default Choose