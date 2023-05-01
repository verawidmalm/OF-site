import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  /* getAll(): Product[] {
    return[
      {
        id: 1,
        name: 'Green Roof Design and Installation',
        price: 1000,
        description:
          'Design and installation of green roofs for urban buildings',
        tags: ['green roof', 'sustainable', 'urban design'],
        imageUrl: '../assets/images/product-1.jpg',
        categories: ['landscape architecture', 'urbanism'],
        features: ['low-maintenance', 'reduces heat island effect'],
      },
      {
        id: 2,
        name: 'Urban Park Design and Construction',
        price: 50000,
        description: 'Design and construction of urban parks for public use',
        tags: ['park', 'urban design', 'public space'],
        imageUrl: '../assets/images/product-2.jpg',
        categories: ['landscape architecture', 'urbanism'],
        features: ['accessible', 'sustainable materials'],
      },
      {
        id: 3,
        name: 'Community garden design and management',
        price: 50000,
        description: 'We assist you in the planning of the local community garden and how it can be structured for public use',
        tags: ['garden', 'urban design', 'public space', 'management'],
        imageUrl: '../assets/images/product-3.jpg',
        categories: ['landscape architecture','park planning', 'urbanism'],
        features: ['accessible', 'sustainable materials'],
      },
      {
        id: 4,
        name: 'Streetscape design and revitalization',
        price: 50000,
        description: 'Our company provides Streetscape design and revitalization services aimed at enhancing the visual appeal, safety, and functionality of public spaces. From conceptualization to implementation, we work closely with clients to create custom solutions that transform streets and sidewalks into vibrant, pedestrian-friendly environments that attract and retain visitors, residents, and businesses.',
        tags: ['revitalization', 'urban design', 'public space', 'management'],
        imageUrl: '../assets/images/product-4.jpg',
        categories: ['landscape architecture', 'urbanism'],
        features: ['accessible', 'revitalization'],
      },
      {
        id: 5,
        name: 'Public plaza design and activation',
        price: 50000,
        description: 'We help activate public spaces by designing and creating unique and engaging public plazas that foster community interaction and engagement.',
        tags: ['activation', 'plaza design', 'public space', 'management'],
        imageUrl: '../assets/images/product-5.jpg',
        categories: ['landscape architecture', 'urbanism'],
        features: ['plaza planning', 'design'],
      },
      {
        id: 6,
        name: 'Waterfront planning and Design',
        price: 50000,
        description: 'We create sustainable and attractive waterfront spaces that prioritize natural preservation, accessibility, and recreation to provide an enjoyable experience for visitors and residents.',
        tags: ['waterfront', 'urban design', 'public space', 'management'],
        imageUrl: '../assets/images/product-6.jpg',
        categories: ['waterfront architecture', 'urbanism'],
        features: ['accessible', 'sustainable materials'],
      },
      {
        id: 7,
        name: 'Sustainable transportation infrastructure design',
        price: 50000,
        description: 'Our company offers Sustainable transportation infrastructure design services that prioritize safety, accessibility, and environmental sustainability. From bike lanes to pedestrian-friendly designs, we work with clients to create solutions that enhance mobility and reduce the environmental impact of transportation.',
        tags: ['transportation', 'infrastructure design'],
        imageUrl: '../assets/images/product-7.jpg',
        categories: ['landscape architecture', 'urbanism'],
        features: ['transportation', 'sustainable materials'],
      },
      {
        id: 8,
        name: 'Campus master planning and design',
        price: 50000,
        description: 'Our company provides Campus master planning and design services that help universities and colleges create sustainable and functional spaces that support the academic and social needs of students and faculty. From infrastructure planning to building design, we work with clients to create vibrant, inclusive, and forward-thinking campus environments that foster learning, innovation, and community.',
        tags: ['campus', 'urban design', 'public space', 'design'],
        imageUrl: '../assets/images/product-8.jpg',
        categories: ['landscape architecture', 'urbanism'],
        features: ['inclusive design', 'sustainable materials'],
      },
      {
        id: 9,
        name: 'Ecological restoration and conservation planning',
        price: 50000,
        description: 'Our company specializes in Ecological restoration and conservation planning services that prioritize the restoration and preservation of natural ecosystems. Using a science-based approach, we work with clients to create comprehensive restoration plans that address ecological degradation, mitigate environmental impacts, and promote biodiversity conservation for a sustainable future.',
        tags: ['garden', 'urban design', 'public space', 'management'],
        imageUrl: '../assets/images/product-9.jpg',
        categories: ['landscape architecture', 'urbanism'],
        features: ['Ecologic development'],
      },
      {
        id: 10,
        name: 'Ecological implementation of roof tiles',
        price: 50000,
        description: 'We implement tiles to cover your roof using ecological materials and installation.',
        tags: ['roof', 'eco', 'tiles', 'implementation'],
        imageUrl: '../assets/images/product-10.jpg',
        categories: ['construction', 'tiles'],
        features: ['Ecologic development'],
      },
      {
        id: 11,
        name: 'Playground design and installation',
        price: 50000,
        description: 'Our company offers Playground design and installation services that prioritize safety, creativity, and fun. From concept to construction, we work with clients to create customized playground designs that incorporate engaging play equipment, safety surfacing, and landscaping to provide children with a safe and exciting play experience.',
        tags: ['playground', 'installation', 'public space', 'design'],
        imageUrl: '../assets/images/product-11.jpg',
        categories: ['landscape architecture', 'urbanism'],
        features: ['accessible', 'child friendly'],
      },
      {
        id: 12,
        name: 'Civic art installation design and placement',
        price: 50000,
        description: 'Our company specializes in Civic art installation design and placement services that enhance public spaces by integrating art into the built environment. We work with clients to create innovative and meaningful art installations that celebrate community identity, promote civic engagement, and contribute to the cultural vitality of public spaces.',
        tags: ['art', 'urban design', 'public space', 'placement'],
        imageUrl: '../assets/images/product-12.jpg',
        categories: ['landscape architecture', 'urbanism'],
        features: ['civil art design', 'sustainable materials'],
      },
      {
        id: 13,
        name: 'Climate-responsive design and planning',
        price: 50000,
        description: 'Our company provides Climate-responsive design and planning services that prioritize resilience, sustainability, and energy efficiency. Through a holistic approach that considers climate conditions, building materials, and energy systems, we create custom solutions that reduce carbon footprint, enhance energy performance, and mitigate the impact of climate change.',
        tags: ['urban design', 'public space', 'management'],
        imageUrl: '../assets/images/product-13.jpg',
        categories: ['landscape architecture', 'urbanism'],
        features: ['Climate friendly', 'sustainable materials'],
      },
      {
        id: 14,
        name: 'Wayfinding and signage system design',
        price: 50000,
        description: 'Our company offers Wayfinding and signage system design services that improve navigation and accessibility in public spaces. From conceptualization to implementation, we work with clients to create custom wayfinding and signage systems that incorporate design, materials, and technology to provide clear and concise directions, enhance the user experience, and promote efficient movement through complex environments.',
        tags: ['garden', 'urban design', 'public space', 'management'],
        imageUrl: '../assets/images/product-14.jpg',
        categories: ['Wayfinding', 'system design'],
        features: ['Management consulting', 'sustainable materials'],
      },
      {
        id: 15,
        name: 'Biophilic design and planning',
        price: 50000,
        description: 'Our company specializes in Biophilic design and planning services that prioritize the integration of nature into the built environment. From urban landscapes to indoor spaces, we work with clients to create sustainable designs that incorporate natural elements such as daylight, greenery, and water features to enhance human health and wellbeing, reduce stress, and increase productivity.',
        tags: ['Bio planning', 'urban design', 'public space', 'management'],
        imageUrl: '../assets/images/product-15.jpg',
        categories: ['landscape architecture', 'urbanism'],
        features: ['Biofilic Design', 'sustainable materials'],
      }
    ]
  } */

  products: Product[]=[
    {
      id: 1,
      name: 'Green Roof Design and Installation',
      price: 1000,
      description:
        'Green roofs, also known as living roofs, are an eco-friendly and sustainable solution for urban buildings. Not only do they provide insulation, reduce stormwater runoff and improve air quality, but they also add aesthetic value and create natural habitats for wildlife. At our company, we specialize in the design and installation of green roofs for urban buildings of all shapes and sizes. Our team of experts work closely with our clients to create customized green roof designs that meet their specific needs and goals. We use the latest technology and materials to ensure the longevity and functionality of our green roofs. With years of experience and a passion for sustainability, we are committed to providing the best green roof design and installation services to our clients, while promoting a healthier and greener urban environment for all.',
      tags: ['green roof', 'sustainable', 'urban design'],
      imageUrl: '../assets/images/product-1.jpg',
      categories: ['landscape architecture', 'urbanism'],
      features: ['low-maintenance', 'reduces heat island effect'],
      steps: [
        "Conduct an assessment of the building's structure and load-bearing capacity",
        "Select appropriate plants and growing media for the green roof",
        "Design the green roof system, including irrigation and drainage",
        "Install the green roof system, working with a team of experienced professionals",
        "Provide ongoing maintenance and support to ensure the health and longevity of the green roof"
      ]
    },
    {
      id: 2,
      name: 'Urban Park Design and Construction',
      price: 50000,
      description: 'Design and construction of urban parks for public use is a crucial component of city planning, as it provides recreational space for residents and visitors alike. With our expertise in park design and construction, we aim to create functional, aesthetically pleasing, and environmentally sustainable parks that meet the needs of the communities they serve. Our team of landscape architects, urban planners, and engineers work collaboratively with our clients to develop park designs that incorporate the surrounding environment, cultural heritage, and community feedback. We take a holistic approach to park design, considering everything from accessibility and safety to ecological sustainability and long-term maintenance. Our construction process is equally comprehensive, with a focus on using high-quality, locally sourced materials and sustainable construction methods. Through our commitment to innovative design and responsible construction practices, we strive to create urban parks that provide lasting value to the communities they serve.',
      tags: ['park', 'urban design', 'public space'],
      imageUrl: '../assets/images/product-2.jpg',
      categories: ['landscape architecture', 'urbanism'],
      features: ['accessible', 'sustainable materials'],
      steps: [
        "Conduct a site analysis and assess the needs and goals of the project",
        "Develop a conceptual design plan that includes features such as walking paths, seating areas, water features, and plantings",
        "Present the design plan to the client and gather feedback",
        "Revise the design based on client feedback and finalize the plan",
        "Construct the park using sustainable materials and techniques, and install features such as lighting, irrigation, and signage"
      ]
      
    },
    {
      id: 3,
      name: 'Community garden design and management',
      price: 50000,
      description: 'Our team takes a comprehensive approach to community garden planning, taking into consideration the unique needs and desires of the local community. We work with community members to identify the best location for the garden, considering factors such as sunlight, water availability, and soil quality. We then help design the layout of the garden, taking into account accessibility and ease of maintenance. We also provide guidance on selecting appropriate plants and establishing sustainable gardening practices. Our goal is to create a community garden that not only provides fresh produce but also serves as a hub for community engagement and education on sustainable practices.',
      tags: ['garden', 'urban design', 'public space', 'management'],
      imageUrl: '../assets/images/product-3.jpg',
      categories: ['landscape architecture','park planning', 'urbanism'],
      features: ['accessible', 'sustainable materials'],
      steps: [
        "Assess the community's needs and interests for the garden.",
        "Determine the site and create a design plan.",
        "Prepare the soil, install irrigation, and construct garden beds.",
        "Recruit volunteers and provide garden education and programming.",
        "Maintain the garden and cultivate community partnerships."
      ]
      
    },
    {
      id: 4,
      name: 'Streetscape design and revitalization',
      price: 50000,
      description: 'Our company provides Streetscape design and revitalization services aimed at enhancing the visual appeal, safety, and functionality of public spaces. From conceptualization to implementation, we work closely with clients to create custom solutions that transform streets and sidewalks into vibrant, pedestrian-friendly environments that attract and retain visitors, residents, and businesses.',
      tags: ['revitalization', 'urban design', 'public space', 'management'],
      imageUrl: '../assets/images/product-4.jpg',
      categories: ['landscape architecture', 'urbanism'],
      features: ['accessible', 'revitalization'],
      steps: [
        "Assess the current condition of the streetscape and identify areas that need improvement.",
        "Develop a design plan that incorporates the community's input and goals for the project.",
        "Obtain necessary permits and approvals from local government agencies.",
        "Implement the design plan, including installation of new street furniture, planting of trees and plants, and upgrades to lighting and signage.",
        "Provide ongoing maintenance to ensure the streetscape remains clean, safe, and attractive to residents and visitors."
      ]
      
    },
    {
      id: 5,
      name: 'Public plaza design and activation',
      price: 50000,
      description: 'We help activate public spaces by designing and creating unique and engaging public plazas that foster community interaction and engagement.',
      tags: ['activation', 'plaza design', 'public space', 'management'],
      imageUrl: '../assets/images/product-5.jpg',
      categories: ['landscape architecture', 'urbanism'],
      features: ['plaza planning', 'design'],
      steps: [
        "Research and analysis of the plaza's location, history, and context",
        "Design concept development and presentation to stakeholders for feedback",
        "Detailed design development, including materials selection, lighting, and landscaping",
        "Coordination with relevant parties for construction and installation of design elements",
        "Activation planning and execution, including programming and events to encourage use and engagement with the plaza"
      ]
      
    },
    {
      id: 6,
      name: 'Waterfront planning and Design',
      price: 50000,
      description: 'We create sustainable and attractive waterfront spaces that prioritize natural preservation, accessibility, and recreation to provide an enjoyable experience for visitors and residents.',
      tags: ['waterfront', 'urban design', 'public space', 'management'],
      imageUrl: '../assets/images/product-6.jpg',
      categories: ['waterfront architecture', 'urbanism'],
      features: ['accessible', 'sustainable materials'],
      steps: [
        "Assess the current state of the waterfront, including any existing infrastructure, natural resources, and potential challenges.",
        "Engage with local stakeholders, including residents, business owners, and government officials, to understand their needs and vision for the waterfront.",
        "Develop a comprehensive plan for the waterfront, including design concepts, engineering specifications, and cost estimates.",
        "Manage the construction or renovation process, including oversight of contractors, compliance with regulations, and communication with stakeholders.",
        "Coordinate ongoing maintenance and management of the waterfront, including upkeep of infrastructure and programming of events and activities."
      ]
      
    },
    {
      id: 7,
      name: 'Sustainable transportation infrastructure design',
      price: 50000,
      description: 'Our company offers Sustainable transportation infrastructure design services that prioritize safety, accessibility, and environmental sustainability. From bike lanes to pedestrian-friendly designs, we work with clients to create solutions that enhance mobility and reduce the environmental impact of transportation.',
      tags: ['transportation', 'infrastructure design'],
      imageUrl: '../assets/images/product-7.jpg',
      categories: ['landscape architecture', 'urbanism'],
      features: ['transportation', 'sustainable materials'],
      steps: [
        "Conduct a site analysis and identify the most appropriate sustainable transportation options based on the location and client's needs.",
        "Design a transportation plan that prioritizes low-impact and sustainable transportation modes, such as walking, cycling, and public transit.",
        "Create detailed designs and plans for bike lanes, pedestrian walkways, transit stops, and other sustainable transportation infrastructure.",
        "Collaborate with engineers and construction teams to ensure the sustainable transportation infrastructure is built according to plan.",
        "Continuously monitor and evaluate the effectiveness of the transportation infrastructure, making adjustments as needed to ensure its sustainability and efficiency."
      ]
      
    },
    {
      id: 8,
      name: 'Campus master planning and design',
      price: 50000,
      description: 'Our company provides Campus master planning and design services that help universities and colleges create sustainable and functional spaces that support the academic and social needs of students and faculty. From infrastructure planning to building design, we work with clients to create vibrant, inclusive, and forward-thinking campus environments that foster learning, innovation, and community.',
      tags: ['campus', 'urban design', 'public space', 'design'],
      imageUrl: '../assets/images/product-8.jpg',
      categories: ['landscape architecture', 'urbanism'],
      features: ['inclusive design', 'sustainable materials'],
      steps: [
        "Research and analyze the existing campus layout and infrastructure",
        "Identify and prioritize the goals and objectives of the master plan",
        "Develop multiple design concepts and scenarios",
        "Collaborate with stakeholders to gather feedback and refine the design",
        "Produce a final master plan document with detailed design recommendations"
      ]
      
    },
    {
      id: 9,
      name: 'Ecological restoration and conservation planning',
      price: 50000,
      description: 'Our company specializes in Ecological restoration and conservation planning services that prioritize the restoration and preservation of natural ecosystems. Using a science-based approach, we work with clients to create comprehensive restoration plans that address ecological degradation, mitigate environmental impacts, and promote biodiversity conservation for a sustainable future.',
      tags: ['garden', 'urban design', 'public space', 'management'],
      imageUrl: '../assets/images/product-9.jpg',
      categories: ['landscape architecture', 'urbanism'],
      features: ['Ecologic development'],
      steps: [
        "Assessment of the ecological site conditions and the extent of damage or alteration to determine appropriate restoration approaches",
        "Developing a restoration and conservation plan, including selecting plant species, designing and implementing restoration techniques",
        "Executing the restoration plan, which may include invasive species removal, soil remediation, and planting native vegetation",
        "Monitoring the progress of the restoration to ensure success, make any necessary adjustments, and assess the ecological benefits of the project",
        "Long-term management and maintenance of the restored area to ensure the success and longevity of the restoration and conservation efforts"
        ]
    },
    {
      id: 10,
      name: 'Ecological implementation of roof tiles',
      price: 50000,
      description: 'We implement tiles to cover your roof using ecological materials and installation.',
      tags: ['roof', 'eco', 'tiles', 'implementation'],
      imageUrl: '../assets/images/product-10.jpg',
      categories: ['construction', 'tiles'],
      features: ['Ecologic development'],
      steps: [
        "Assess the site's roof characteristics and its potential for ecological implementation of roof tiles",
        "Collaborate with the client to determine the desired ecological outcomes and select appropriate plant species for the tiles",
        "Install a drainage layer and growing medium to support plant growth",
        "Install the ecological roof tiles, ensuring proper placement and coverage",
        "Provide ongoing maintenance and monitoring to ensure the long-term success of the ecological roof tiles"
      ]
      
    },
    {
      id: 11,
      name: 'Playground design and installation',
      price: 50000,
      description: 'Our company offers Playground design and installation services that prioritize safety, creativity, and fun. From concept to construction, we work with clients to create customized playground designs that incorporate engaging play equipment, safety surfacing, and landscaping to provide children with a safe and exciting play experience.',
      tags: ['playground', 'installation', 'public space', 'design'],
      imageUrl: '../assets/images/product-11.jpg',
      categories: ['landscape architecture', 'urbanism'],
      features: ['accessible', 'child friendly'],
      steps:[
        "Site Assessment: Conduct a site assessment to identify existing structures, obstacles, and opportunities for a playground design.",
        "Concept Design: Develop a concept design based on the site assessment and client needs, including selecting equipment, surfacing, and layout.",
        "Community Engagement: Engage with the local community to gain input and feedback on the playground design.",
        "Final Design and Installation: Refine the design and oversee installation of the playground equipment and surfacing.",
        "Maintenance and Safety: Develop a maintenance and safety plan to ensure the playground is properly maintained and safe for use."
      ]
    },
    {
      id: 12,
      name: 'Civic art installation design and placement',
      price: 50000,
      description: 'Our company specializes in Civic art installation design and placement services that enhance public spaces by integrating art into the built environment. We work with clients to create innovative and meaningful art installations that celebrate community identity, promote civic engagement, and contribute to the cultural vitality of public spaces.',
      tags: ['art', 'urban design', 'public space', 'placement'],
      imageUrl: '../assets/images/product-12.jpg',
      categories: ['landscape architecture', 'urbanism'],
      features: ['civil art design', 'sustainable materials'],
      steps: [
        "Conduct research to understand the local community and environment",
        "Collaborate with local artists and stakeholders to develop project concepts",
        "Create detailed design plans and proposals, including budgets and timelines",
        "Secure necessary permits and approvals",
        "Oversee the installation and placement of the artwork, including lighting and maintenance plans"
      ]
      
    },
    {
      id: 13,
      name: 'Climate-responsive design and planning',
      price: 50000,
      description: 'Our company provides Climate-responsive design and planning services that prioritize resilience, sustainability, and energy efficiency. Through a holistic approach that considers climate conditions, building materials, and energy systems, we create custom solutions that reduce carbon footprint, enhance energy performance, and mitigate the impact of climate change.',
      tags: ['urban design', 'public space', 'management'],
      imageUrl: '../assets/images/product-13.jpg',
      categories: ['landscape architecture', 'urbanism'],
      features: ['Climate friendly', 'sustainable materials'],
      steps: [
        "Assess the local climate and weather patterns",
        "Identify potential climate hazards and vulnerabilities",
        "Develop strategies to mitigate climate risks and enhance resilience",
        "Incorporate passive and active climate control measures into building design",
        "Use renewable energy sources and reduce carbon footprint in the planning process"
      ]
      
    },
    {
      id: 14,
      name: 'Wayfinding and signage system design',
      price: 50000,
      description: 'Our company offers Wayfinding and signage system design services that improve navigation and accessibility in public spaces. From conceptualization to implementation, we work with clients to create custom wayfinding and signage systems that incorporate design, materials, and technology to provide clear and concise directions, enhance the user experience, and promote efficient movement through complex environments.',
      tags: ['garden', 'urban design', 'public space', 'management'],
      imageUrl: '../assets/images/product-14.jpg',
      categories: ['Wayfinding', 'system design'],
      features: ['Management consulting', 'sustainable materials'],
      steps: [
        "Research and analyze the environment to determine the best wayfinding and signage solutions for the location.",
        "Create a wayfinding strategy and signage plan, taking into account the needs of the users and the aesthetic of the environment.",
        "Develop a comprehensive design for the wayfinding and signage system, including all necessary signage types and materials.",
        "Work with manufacturers and fabricators to produce the necessary signage elements, ensuring quality and consistency throughout the project.",
        "Install and implement the wayfinding and signage system, ensuring all elements are properly placed and meet all necessary regulations and guidelines."
      ]
      
    },
    {
      id: 15,
      name: 'Biophilic design and planning',
      price: 50000,
      description: 'Our company specializes in Biophilic design and planning services that prioritize the integration of nature into the built environment. From urban landscapes to indoor spaces, we work with clients to create sustainable designs that incorporate natural elements such as daylight, greenery, and water features to enhance human health and wellbeing, reduce stress, and increase productivity.',
      tags: ['Bio planning', 'urban design', 'public space', 'management'],
      imageUrl: '../assets/images/product-15.jpg',
      categories: ['landscape architecture', 'urbanism'],
      features: ['Biofilic Design', 'sustainable materials'],
      steps: [
        'Site analysis and assessment to identify opportunities for incorporating biophilic elements',
        'Design development to integrate biophilic features and natural elements into the project',
        'Material selection to promote healthy indoor air quality and to minimize the impact on the environment',
        'Implementation of biophilic design elements, such as green walls, indoor plants, and natural lighting',
        'Post-occupancy evaluation to measure the effectiveness of biophilic design in enhancing well-being and productivity'
      ]
    }
  ];

  getAll(){
    return this.products;
  }

  getProduct(productId: number) {
    const product = this.products.find((p) => p.id === productId);
    return product || null;
  }
}

