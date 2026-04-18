export const projects = [
  {
    id: "01",
    image: "menofia-hospital.png",
    title: "Menofia Hospital",
    description:
      "Full MEP Design for a Hospital Project, including HVAC, Firefighting, and Plumbing systems, with a focus on healthcare standards, air quality, and system integration.",
    category: [
      {
        name: "Fire Fighting",
        description:
          "Classified hazards and selected fire protection systems per NFPA standards. Designed fire network (Grid/Tree) with full layout and sprinkler system. Performed hydraulic calculations using Elite Fire. Selected fire pumps and designed pump room. Distributed hose cabinets (Class I, II, III) based on  requirements.",
        pdf: ["/04.pdf", "/05.pdf", "/06.pdf", "/07.pdf", "/08.pdf", "/09.pdf"],
      },
      {
        name: "Plumbing",
        description:
          "Calculated drainage systems using DFU method.Designed full drainage network and connected to main sewer.Designed garage drainage and sump pit systems.Designed storm drainage and catch basins.Ensured compliance with plumbing codes and proper slope design for efficient drainage flow. Calculated water demand and sized water tanks (UG & Roof tanks). Selected pumps (lifting, booster, circulation) and central heater. Designed hot & cold water supply networks as per codes. Designed sump pit and storm drainage systems.",
        pdf: ["/P05-Drain.pdf", "/P05 Supply.pdf"],
      },
      {
        name: "HVAC",
        description:
          "Calculated cooling loads based on heat loads and ACH requirements. Defined pressure zones (positive/negative) and calculated ACH per ASHRAE standards. Selected air terminals and HVAC equipment (AHUs, FCUs, fans). Designed air distribution and calculated external static pressure (ESP).",
        pdf: [
          "/H02-2505140.pdf",
          "H03-2505140.pdf",
          "/H04-2505140.pdf",
          "/H05-2505140.pdf",
        ],
      },
    ],
  },
  {
    id: "02",
    image: "elbaloushi.png",
    title: "Villa Badrya Elbalooshi",
    description: "Performed HVAC and Plumbing design for a residential villa, including cooling load calculations, system sizing, and detailed 3D modeling using Revit to ensure efficient and coordinated systems",
    category: [
      {
        name: "Villa Badrya Elbalooshi",
        description:
          "Performed HVAC and Plumbing design for a residential villa, including cooling load calculations, system sizing, and detailed 3D modeling using Revit to ensure efficient and coordinated systems",
        pdf: ["/P-08-0195.pdf"],
      },
    ],
  },
  {
    id: "03",
    image: "v.jpeg",
    title: "villa Mousa",
    description: "Designed and modeled HVAC (Split system) and Plumbing for a residential villa, including load calculations and system sizing. Utilized Revit for detailed modeling and drafting, producing drawings with AutoCAD-level precision and coordination.",
    category: [
      {
        name: "villa Mousa",
        description:
          "Designed and modeled HVAC (Split system) and Plumbing for a residential villa, including load calculations and system sizing. Utilized Revit for detailed modeling and drafting, producing drawings with AutoCAD-level precision and coordination.",
        pdf: ["/P-04-0195.pdf"],
      },
    ],
  },
  {
    id: "04",
    image: "offic.png",
    title: "Office Building",
    description: "Delivered full MEP design and modeling for an office building in Cairo, including HVAC, Firefighting, and Plumbing systems, supported by manual calculations and load analysis. Developed detailed modeling for the chilled water system across the entire building and a fully coordinated fire pump room, including quick hydraulic and equipment sizing calculations, ensuring efficient, integrated, and code-compliant systems.",
    category: [
      {
        name: "Office Building",
        description:
          "Delivered full MEP design and modeling for an office building in Cairo, including HVAC, Firefighting, and Plumbing systems, supported by manual calculations and load analysis. Developed detailed modeling for the chilled water system across the entire building and a fully coordinated fire pump room, including quick hydraulic and equipment sizing calculations, ensuring efficient, integrated, and code-compliant systems.",
        pdf: ["/RVT-2505140.pdf"],
      },
    ],
  },
];

export const experience = [
  {
    role: "Mechanical Design Engineer",
    company: "ASECBIM",
    location: "Remote",
    time: "10/2025 — Present",
    desc: "  Design and revision MEP projects. Prepare shop drawings for HVAC, Firefighting and plumbing works. Study and prepare requests for information (RFIs). Run clash detection analyses to identify potential conflicts between different systems.",
    skills: ["MEP Design", "Revit MEP", "BIM", "Coordination"],
  },

  {
    role: "Mechanical Design Engineer",
    company: "ENGX",
    location: "Egypt",
    time: "02/2025 — 09/2025",
    desc: " Deep knowledge and practice on technical systems (HVAC, firefighting, plumbing and medical gases). Healthcare HVAC Systems Training. Contributed to the design of firefighting and plumbing systems, including pipe sizing, layout development, and equipment selection. Coordinated with other disciplines to ensure efficient system integration and code compliance. Applied HVAC, Firefighting, and Plumbing design concepts in a hotel project as part of final training. ",
    skills: ["AutoCAD", "HVAC", "Plumbing", "Firefighting"],
  },
  {
    role: "Quality Control Engineer",
    company: "U.S. Chamber of Commerce",
    location: "Egypt",
    time: "08/2023 — 09/2023",
    desc: "Implemented statistical quality improvement methodologies and measurement systems. Detected failure modes and optimized solutions for process management.",
    skills: ["PFMEA", "Statistical Quality", "Process Design"],
  },
];

export const education = [
  {
    uni: "Mansoura University",
    degree: "Mechanical Engineering",
    period: "2022 — 2026",
    code: "MNSR-01",
    details: ["Dynamics", "Material Science", "CAD/CAM"],
    status: "ACTIVE_ENROLLMENT",
    accent: "#3b82f6",
  },
  {
    uni: "Port Said University",
    degree: "GENERAL ENGINEERING",
    period: "2021 — 2022",
    code: "PRSD-02",
    details: ["Statics", "Calculus", "Physics"],
    status: "COMPLETED_LOG",
    accent: "#10b981",
  },
];
