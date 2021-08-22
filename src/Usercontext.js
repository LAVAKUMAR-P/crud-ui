import React, { useState } from "react";

let UserContext = React.createContext();

export default UserContext;

export const UserProvider = ({ children }) => {
  const [userList, setUserList] = useState([
    {
        name : "Abbie",
        job  : "District Infrastructure Developer",
        image: "https://cdn.fakercloud.com/avatars/bargaorobalo_128.jpg",
        id   : 1
      },
      {
        name : "Abigayle",
        job  : "Direct Configuration Agent",
        image: "https://cdn.fakercloud.com/avatars/Chakintosh_128.jpg",
        id   : 2
      },
      {
        name : "Melody",
        job  : "Global Security Developer",
        image: "https://cdn.fakercloud.com/avatars/oscarowusu_128.jpg",
        id   : 3
      },
      {
        name : "Nakia",
        job  : "Chief Mobility Supervisor",
        image: "https://cdn.fakercloud.com/avatars/rehatkathuria_128.jpg",
        id   : 4
      },
      {
        name : "Shane",
        job  : "Forward Mobility Consultant",
        image: "https://cdn.fakercloud.com/avatars/ahmetalpbalkan_128.jpg",
        id   : 5
      },
      {
        name : "Carleton",
        job  : "Customer Mobility Assistant",
        image: "https://cdn.fakercloud.com/avatars/nastya_mane_128.jpg",
        id   : 6
      },
      {
        name : "Dane",
        job  : "Investor Solutions Assistant",
        image: "https://cdn.fakercloud.com/avatars/flexrs_128.jpg",
        id   : 7
      },
      {
        name : "Caterina",
        job  : "Human Applications Planner",
        image: "https://cdn.fakercloud.com/avatars/xilantra_128.jpg",
        id   : 8
      },
      {
        name : "Wilfrid",
        job  : "Dynamic Tactics Assistant",
        image: "https://cdn.fakercloud.com/avatars/madebybrenton_128.jpg",
        id   : 9
      },
      {
        name : "Keven",
        job  : "Human Solutions Manager",
        image: "https://cdn.fakercloud.com/avatars/yassiryahya_128.jpg",
        id   : 10
      },
      {
        name : "Marjorie",
        job  : "Future Data Liaison",
        image: "https://cdn.fakercloud.com/avatars/perretmagali_128.jpg",
        id   : 11
      },
      {
        name : "Matilda",
        job  : "Global Quality Orchestrator",
        image: "https://cdn.fakercloud.com/avatars/markwienands_128.jpg",
        id   : 12
      },
      {
        name : "Elna",
        job  : "Regional Factors Officer",
        image: "https://cdn.fakercloud.com/avatars/dansowter_128.jpg",
        id   : 13
      },
      {
        name : "Valentine",
        job  : "Legacy Mobility Assistant",
        image: "https://cdn.fakercloud.com/avatars/logorado_128.jpg",
        id   : 14
      },
      {
        name : "Leslie",
        job  : "Dynamic Configuration Architect",
        image: "https://cdn.fakercloud.com/avatars/dzantievm_128.jpg",
        id   : 15
      }
  ]);
  return (
    <UserContext.Provider value={{ userList, setUserList }}>
      {children}
    </UserContext.Provider>
  );
};