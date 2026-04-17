export const projects = [
  {
    id: "01",
    image: 'menofia-hospital.png',
    title: "Menofia Hospital",
    description: "Full MEP Design for a Hospital Project, including HVAC, Firefighting, and Plumbing systems, with a focus on healthcare standards, air quality, and system integration.",
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
];
