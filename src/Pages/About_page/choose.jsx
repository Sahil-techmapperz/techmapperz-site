import React from "react";
import styles from './choose.module.css';
import Aboutus3 from '../../Photos/Aboutus3.png';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    grid,
} from '@chakra-ui/react'


const Choose = () => {

    return (
        <div className={styles.main}>

            <section className={styles.first_part}>
                <div className={styles.first_part_main}>

                    {/* <div className={styles.video_contaner}>
                        <video autoplay controls loop muted>
                            <source src="https://techmapperz.com/media/videos/2022/07/04/whatsapp-video-2022-07-04-at-10.57.43-am.mp4" type="video/mp4"></source>
                        </video>
                    </div> */}
                    <img src={Aboutus3} />

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





                    <Accordion allowToggle>
                        <div className={styles.dropdown}>

                            <AccordionItem  border={"none"}>
                                
                                    <AccordionButton border={"1px solid"}>
                                        <Box as="span" flex='1' textAlign='left'>
                                        Plan
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                
                                <AccordionPanel  border={"1px solid"} pb={4}>
                                  This is the first and foremost step in delivering your project ahead of your expection, though we are driven by results, we never let that hamper our course of understanding you and requirement, we ensure that our research is onto every vertical that involves the company competitors, target market and customer psychographics, this is critical and crucial in our further action plan.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem border={"none"}>
                                
                                    <AccordionButton border={"1px solid"}>
                                        <Box as="span" flex='1' textAlign='left'>
                                        Create
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                
                                <AccordionPanel border={"1px solid"} pb={4}>
                                   We have a talent pool to make any company jealous, and we use this talent pool to do the creation in such a way it serves our mission statement "simple solution for complex scenarios". what our team creates not just fills the vacuum of your requirenment. But also ensure that the solution remains simple while doing so.in the process also ensure that we remain committed to the budget and deadline.. 
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem  border={"none"}>
                                
                                    <AccordionButton border={"1px solid"}>
                                        <Box as="span" flex='1' textAlign='left'>
                                        Leads
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                
                                <AccordionPanel  border={"1px solid"} pb={4}>
                                    The word defines a lot of internal and external factors and processes that we do to ensure that everything goes as planned, this is always project dependent, but the the crucial step that we undertake under this is to keep your project and requirement confidential,keep it to need to know basis amongest all sections of employees, also maintaining multiple tier experts for the tab on the biling or unexpected or additional expenses. With a lot of government  and time-sensitive clients' jobs that we do, this layering guarantees us that we don't miss a deadline..
                            </AccordionItem>

                            <AccordionItem border={"none"}>
                                
                                    <AccordionButton border={"1px solid"}>
                                        <Box as="span" flex='1' textAlign='left'>
                                        Achieve
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                
                                <AccordionPanel border={"1px solid"} pb={4}>
                               This is it! T     
                            </AccordionItem>


                        </div>
                    </Accordion>
                </div>

            </section>



        </div>

    )
}
export default Choose