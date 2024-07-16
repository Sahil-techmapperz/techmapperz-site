import React from "react";
import styles from './choose.module.css';
import Image from 'next/image';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box,
} from '@chakra-ui/react';
import { BsCaretRightFill } from 'react-icons/bs';

const Choose = () => {
    return (
        <div className={styles.main}>
            <section className={styles.first_part}>
                <div className={`grid grid-cols-2 items-center gap-[4rem]`}>
                    <div>
                        <Image src="/Photos/Aboutus3.png" alt="About Us" width={500} height={300} />
                    </div>

                    <div className={styles.company_info}>
                        <h2 className={`${styles.heading} mb-[2rem]`}>Why Choose Techmapperz?</h2>
                        <p>The smaller things make big difference in everything that we do, we at Techmapperz also believe in the attention
                            to detail methodology. Our eye for detail in every project that we manage is what makes us stand out from the
                            rest. We have a 4-step approach on how we execute a project.</p>
                    </div>
                </div>

                <div className={styles.second_paragraph}>
                    <p>All the services that Techmapperz offers ensure that this four-step methodology is followed, one of the many reasons that
                        most of our clients are either referred by our existing clients or are returning clients. Working with us will always make you
                        feel a sense of calmness and confidence; we treat our clients this way because we would want to be treated this way.</p>

                    <Accordion allowToggle>
                        <div className={styles.dropdown}>
                            <AccordionItem border={"none"}>
                                <AccordionButton border={"1px solid"} className="text-white">
                                    <Box as="span" flex='1' textAlign='left' className="ml-10px text-lg">
                                        Plan
                                    </Box>
                                    <BsCaretRightFill />
                                </AccordionButton>
                                <AccordionPanel textAlign={"justify"} color={"#A3A3A3"} border={"1px solid"} pb={4}>
                                    This is the first and foremost step in delivering your project ahead of your expectations, though we are driven by results, we never let that hamper our course of understanding you and requirement. We ensure that our research is onto every vertical that involves the company competitors, target market, and customer psychographics. This is critical and crucial in our further action plan.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem border={"none"}>
                                <AccordionButton border={"1px solid"} className="text-white">
                                    <Box as="span" flex='1' textAlign='left'>
                                        Create
                                    </Box>
                                    <BsCaretRightFill />
                                </AccordionButton>
                                <AccordionPanel textAlign={"justify"} color={"#A3A3A3"} border={"1px solid"} pb={4}>
                                    We have a talent pool to make any company jealous, and we use this talent pool to do the creation in such a way it serves our mission statement "simple solution for complex scenarios". What our team creates not just fills the vacuum of your requirement but also ensures that the solution remains simple while doing so. In the process, we also ensure that we remain committed to the budget and deadline.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem border={"none"}>
                                <AccordionButton border={"1px solid"} className="text-white">
                                    <Box as="span" flex='1' textAlign='left'>
                                        Leads
                                    </Box>
                                    <BsCaretRightFill />
                                </AccordionButton>
                                <AccordionPanel textAlign={"justify"} color={"#A3A3A3"} border={"1px solid"} pb={4}>
                                    The word leads define a lot of internal and external factors and processes that we do to ensure that everything goes as planned. This is always project dependent, but the crucial step that we undertake under this is to keep your project and requirement confidential, keep it to a need-to-know basis amongst all sections of employees, also maintaining multiple tier experts for the tab on billing or unexpected or additional expenses. With a lot of government and time-sensitive clients' jobs that we do, this layering guarantees us that we don't miss a deadline.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem border={"none"}>
                                <AccordionButton border={"1px solid"} className="text-white">
                                    <Box as="span" flex='1' textAlign='left'>
                                        Achieve
                                    </Box>
                                    <BsCaretRightFill />
                                </AccordionButton>
                                <AccordionPanel textAlign={"justify"} color={"#A3A3A3"} border={"1px solid"} pb={4}>
                                    This is it! The execution of the project, no matter how much ever ecstatic it may make us feel, but this is one step we take with utmost precaution. We make certain that everything goes and works as planned, and usually, this is a smooth one for us since we take so much care of everything that precedes this.
                                </AccordionPanel>
                            </AccordionItem>
                        </div>
                    </Accordion>
                </div>
            </section>
        </div>
    )
}

export default Choose;
