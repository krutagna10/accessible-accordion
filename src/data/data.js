import boatImage from "../assets/boat.webp";
import anchorImage from "../assets/anchor.webp";
import fishingImage from "../assets/fishing.webp";
import lighthouseImage from "../assets/lighthouse.webp";
import reefImage from "../assets/reef.webp";

const panels = [
  {
    id: 1,
    title: "Boating",
    description:
      "Port mutiny draught handsomely ye furl flogging line shrouds hulk. Spirits Plate Fleet code of conduct.",
    icon: "#boat",
    image: boatImage,
    alt: "A sailboat at sea during sunset",
  },
  {
    id: 2,
    title: "Anchors",
    description:
      "Ahoy league hands Sea Legs keelhaul salmagundi fire ship crimp Privateer galleon. Booty boom yard boatswain quarter.",
    icon: "#anchor",
    image: anchorImage,
    alt: "Closeup of a metal chain connected to a metal ring in the ground",
  },
  {
    id: 3,
    title: "Fishing",
    description:
      "No prey, no pay heave down splice the main brace furl cable snow walk the plank chase guns piracy bucko",
    icon: "#fishing",
    image: fishingImage,
    alt: "A person fishing in the ocean",
  },
  {
    id: 4,
    title: "Lighthouses",
    description:
      "Deadlights squiffy salmagundi cable pinnace parrel topsail Corsair Arr mizzenmast.",
    icon: "#lighthouse",
    image: lighthouseImage,
    alt: "A white lighthouse with red top",
  },
  {
    id: 5,
    title: "Reefs",
    description:
      "Keel yard poop deck brigantine gaff six pounders bring a sprin upon her cable interloper lad pink.",
    icon: "#reef",
    image: reefImage,
    alt: "reef outcropping with a lot of orange fish swimming around it",
  },
];

export default panels;
