
import { NextResponse } from 'next/server';


let CaseStudiesData = [
    {
        image: "/Photos/IT_1.png", category: "IT", name: "Fabcon",link:"fabcon", details: [
            "Elevate your interior design skills with Fabcon, a user-friendly app that helps you optimize your space. From smart storage solutions to expert tips, this app empowers you to maximize the potential of any room while maintaining your personal style.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        ]
    },
    {
        image: "/Photos/Site_Suitability_Analysis.png", category: "GIS", name: "Site Suitability Analysis",link:"site_mapping", details: [
            "In our recent project, we've utilized advanced drone imagery to develop comprehensive maps for various Industrial Areas. This process included the meticulous digitization of over twenty distinct layers for each region,",

        ]
    },
    {
        image: "/Photos/IT_2.png", category: "IT", name: "Cocreate Lab",link:"cocreatelabs", details: [
            "A game-changer in the startup ecosystem It enables access to a global platform that brings together the best and brightest entrepreneurs, investors, mentors, and philanthropic organizations in an integrated ecosystem With............",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        ]
    },
    {
        image: "/Photos/Agricultural_Mapping.png", category: "GIS", name: "Agricultural Mapping",link:"", details: [
            "We have done the Landuse and Landcover mapping with the help of Higher esolution drone imagery. Digitization of more than 12 layers and 9 sub layers for mapping are done.",

        ]
    },
    {
        image: "/Photos/IT_3.png", category: "IT", name: "SHRC",link:"shrc", details: [
            "Special Human Rights comissions is a civil rights’ group comprised of advocates, social activists and grassroots para- legal social workers dedicated to using the legal system to protect and advance the civil and human...................",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        ]
    },
    {
        image: "/Photos/Land_Use_Land_Cover_Mapping.png", category: "GIS", name: "Land-Use  Land -Cover Mapping",link:"landcover_mapping", details: [
            "We have prepared map for City Mapping. Here we have used Drone Imagery as the source of digitization. We captured all the features in 1:100 scale",

        ]
    },
    {
        image: "/Photos/IT_4.png", category: "IT", name: "Premium Auto Services", link:"premierautosource", details: [
            "Experience optimal performance and efficiency with PAS Auto Source, a leading manufacturer of automotive drivetrain components. Visit our website to explore our innovative drivetrain solutions, including pow............",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        ]
    },
    {
        image: "/Photos/Georeferencing_of_Maps.png", category: "GIS", name: "Georeferencing of Maps", link:"", details: [
            "We have prepared map for City Mapping. Here we have used Drone Imagery as the source of digitization. We captured all the features in 1:100 scale",

        ]
    },
    {
        image: "/Photos/IT_5.png", category: "IT", name: "Welho", link:"welho", details: [
            "Say hello to Welho..! Welcome to the world of wellness. Made with high-quality natural ingredients and no artificial colours or flavours, our dairy-based refreshing beverages offer the perfect blend of nutrition ..........................",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        ]
    },
    {
        image: "/Photos/IT_6.png", category: "IT", name: "Manusher Ghorbari", link:"manusherghorbari", details: [
            "Manusher Ghorbari is not just a weekend destination only. Here one may experience a unique way of living life. Being inspired by Atin Bandopadhyay's four-part tetralogy on Partition (Nilka.......................",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        ]
    },
    {
        image: "/Photos/Industrial_Planning_and_Mapping.png", category: "GIS", name: "Industrial Planning and Mapping", link:"industrial_mapping", details: [
            "We have used Drone Imagery for digitization and mapping of habitation areas. We have digitized more than Eight (8) Layers in this project and more than 8 other sub layers too as per the individual areas. All the feature extraction is done in 1:50 scale.",

        ]
    },
    {
        image: "/Photos/City_Mapping.png", category: "GIS", name: "City Mapping", link:"city_mapping", details: [
            "Georeferencing of images are done in this project. Digitization of sheets of a particular Village or Tehsil is done when the sheets are aligned after Georeferencing.",

        ]
    },
    {
        image: "/Photos/IT_7.png", category: "IT", name: "Techmapperz CRM", link:"crm", details: [
            "Say hello to Welho..! Welcome to the world of wellness. Made with high quality natural ingredients and no artificial colours or flavours, our dairy-based refreshing beverages offer the perfect blend of nutrition ..........................",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        ]
    },


];



export async function GET(req, { params }) {
    const { category } = params;
    let data=category== "All" ? CaseStudiesData :  CaseStudiesData.filter((response) => response.category === category);
    let response = NextResponse.json(data);
    return response;
  }