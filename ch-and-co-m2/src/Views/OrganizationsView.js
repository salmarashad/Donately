import React, { useState } from "react";
import OrganizationCard from "../Components/OrganizationCard";
import Filter from "../Components/Filter";

const OrganizationsView = () => {
  const [organizations, setOrganizations] = useState([
    {
      title: "Dar Al Fouad Hospital",
      subtitle: "Hospital",
      description:
        "Dar Al Fouad Hospital is a leading hospital in Egypt, offering a wide range of medical services.",
      tags: {
        governorate: "Giza",
        area: "6th of October",
        type: "Hospital",
      },
      imgURL: `${process.env.PUBLIC_URL}/organizationImages/DarAlFouadHospital.png`,
    },
    {
      title: "Cleopatra Hospital",
      subtitle: "Hospital",
      description:
        "Cleopatra Hospital is a renowned healthcare facility known for its quality medical care.",
      tags: {
        governorate: "Cairo",
        area: "Nasr City",
        type: "Hospital",
      },
      imgURL: `${process.env.PUBLIC_URL}/organizationImages/CleopatraHospital.jpeg`,
    },
    {
      title: "Elite International School",
      subtitle: "School",
      description:
        "Elite International School offers quality education for students from diverse backgrounds.",
      tags: {
        governorate: "Cairo",
        area: "New Cairo",
        type: "School",
      },
      imgURL: `${process.env.PUBLIC_URL}/organizationImages/EliteSchool.jpeg`,
    },
    {
      title: "Saudi German Hospital",
      subtitle: "Hospital",
      description:
        "Saudi German Hospital provides comprehensive healthcare services with a focus on patient satisfaction.",
      tags: {
        governorate: "Giza",
        area: "Mohandessin",
        type: "Hospital",
      },
      imgURL: `${process.env.PUBLIC_URL}/organizationImages/SaudiGermanHospital.jpeg`,
    },
    {
      title: "Resala",
      subtitle: "Non-profit",
      description:
        "Resala is a charitable organization dedicated to helping those in need through various initiatives.",
      tags: {
        governorate: "Cairo",
        area: "Maadi",
        type: "Non-profit",
      },
      imgURL: `${process.env.PUBLIC_URL}/organizationImages/Resala.png`,
    },
    {
      title: "Awlady Orphanage",
      subtitle: "Orphanage",
      description:
        "Awlady Orphanage is a home for orphaned children, providing them with shelter, care, and support. It aims to create a nurturing environment where children can thrive and grow into confident individuals. Through its dedicated staff and volunteers, Awlady Orphanage offers a range of services and programs to meet the physical, emotional, and educational needs of the children under its care.",
      tags: {
        governorate: "Cairo",
        area: "Zamalek",
        type: "Orphanage",
      },
      imgURL: `${process.env.PUBLIC_URL}/organizationImages/AwladyOrphanage.png`,
    },
    {
      title: "Church of Archangel Michael",
      subtitle: "Church",
      description:
        "The Church of Archangel Michael is a place of worship and spiritual refuge located in Heliopolis, Cairo. It serves as a center for the Christian community, offering regular religious services, ceremonies, and events. With its rich history and architectural beauty, the church provides a sacred space for prayer, contemplation, and community gatherings. The Church of Archangel Michael welcomes individuals from all walks of life to come together in faith and fellowship.",
      tags: {
        governorate: "Cairo",
        area: "Heliopolis",
        type: "Church",
      },
      imgURL: `${process.env.PUBLIC_URL}/organizationImages/MichaelChurch.png`,
    },
    {
      title: "Al-Azhar Mosque",
      subtitle: "Mosque",
      description:
        "The Al-Azhar Mosque, also known as the Mosque of the Most Resplendent, is one of the most important religious and educational institutions in the Islamic world. Located in Cairo, Egypt, it serves as a center for Islamic learning, theology, and jurisprudence. Founded in the 10th century, the mosque has a rich history and architectural significance, featuring stunning domes, minarets, and intricate designs. Al-Azhar Mosque hosts daily prayers, religious lectures, and academic activities, attracting visitors and students from around the globe. As a symbol of Islamic heritage and culture, the mosque plays a vital role in promoting tolerance, unity, and understanding among people of different faiths.",
      tags: {
        governorate: "Cairo",
        area: "Islamic Cairo",
        type: "Mosque",
      },
      imgURL: `${process.env.PUBLIC_URL}/organizationImages/AlAzhar.jpeg`,
    },
  ]);
  const [filteredOrganizations, setFilteredOrganizations] = useState([]);

  const handleFilterChange = (filteredData) => {
    setFilteredOrganizations(filteredData);
  };

  return (
    <div className="grid grid-cols-4 max-w-7xl w-full mx-auto">
      <div className="col-span-1 ">
        <Filter data={organizations} setCurrentCardSet={handleFilterChange} />
      </div>
      <div className="col-span-2 mx-4">
        <div className="grid grid-cols-3 place-items-center gap-y-6 auto-rows-fr">
          {/* Render the filtered organizations */}
          {filteredOrganizations.map((organization) => (
            <OrganizationCard
              key={organization.id}
              organization={organization}
            />
          ))}
        </div>
      </div>
      <div className="col-span-1">
        {/* Add any content you want to display in the third column here */}
      </div>
    </div>
  );
};

export default OrganizationsView;
