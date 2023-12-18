//



import axios from 'axios';
export const API_BASE_URL = "http://16.171.239.100:3003";
const api = axios.create({
  baseURL: API_BASE_URL,
});
const Data = "h"
export const getPhotos = async () => {
  const response = await api.get('/photos');
  return response.data;
};
export const getPhotoById = async (photoId) => {
    const response = await api.get(`/photos/${photoId}`);
    return response.data;
  };
export const createPhoto = async (photoData) => {
  const response = await api.post('/photos', photoData);
  return response.data;
};

export const updatePhoto = async (photoId, photoData) => {
  const response = await api.put(`/photos/${photoId}`, photoData);
  return response.data;
};

export const deletePhoto = async (photoId) => {
  const response = await api.delete(`/photos/${photoId}`);
  return response.data;
};


export const Data_sample = [
  {
    id: "0",
    firstName: "Sachin ",
    lastName: "Tendulkar",
    email: "sachintendulkar10@gamil.com",
    is_verified: "yes",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Sachin-Tendulkar_%28cropped%29.jpg/220px-Sachin-Tendulkar_%28cropped%29.jpg",
    description:
      "Sachin Tendulkar is an Indian former international cricketer who captained the Indian national team. He is widely regarded as one of the greatest batsmen in the history of cricket.",
  },
  {
    id: "1",
    firstName: "Barack",
    lastName: "Obama",
    email: "barackobamaus@gmail.com",
    is_verified: "true",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/220px-President_Barack_Obama.jpg",
    description:
      "Barack Obama born August 4, 1961) is an American politician who served as the 44th president of the United States from 2009 to 2017. A member of the Democratic Party, he was the first African-American president of the United States.",
  },
  {
    id: "2",
    firstName: "Elon ",
    lastName: "Musk",
    email: "tesla2023@gmail.com",
    is_verified: "false",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/220px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
    description:
      "Elon Reeve Musk is a business magnate and investor. He is the founder, CEO and chief engineer of SpaceX; angel investor, CEO and product architect of Tesla, Inc.; owner and CEO of Twitter, Inc.; founder of the Boring Company; co-founder of Neuralink and OpenAI and president of the philanthropic Musk Foundation",
  },
  {
    id: "3",
    firstName: "Tom",
    lastName: " Cruise",
    email: "tom5m@gmail.com",
    is_verified: "true",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg/220px-Tom_Cruise_by_Gage_Skidmore_2.jpg",
    description:
      "Thomas Cruise   is an American actor and producer. One of the world's highest-paid actors,he has received various accolades, including an Honorary Palme d'Or and three Golden Globe Awards",
  },
  {
    id: "4",
    firstName: "Malala",
    lastName: "Yousafzai",
    email: "malala@gmail.com",
    is_verified: "true",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Shinz%C5%8D_Abe_and_Malala_Yousafzai_%281%29_Cropped.jpg/220px-Shinz%C5%8D_Abe_and_Malala_Yousafzai_%281%29_Cropped.jpg",
    description:
      "Malala Yousafzai is a Pakistani female education activist and the 2014 Nobel Peace Prize laureate. Awarded when she was 17, she is the world's youngest Nobel Prize laureate, and the second Pakistani and the first Pashtun to receive a Nobel Prize",
  },
  {
    id: "5",
    firstName: "Jacinda",
    lastName: "Ardern",
    email: "ardernnz@gmail.com",
    is_verified: "false",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/New_Zealand_Prime_Minister_Jacinda_Ardern_in_2018.jpg/220px-New_Zealand_Prime_Minister_Jacinda_Ardern_in_2018.jpg",
    description:
      "Dame Jacinda Kate Laurell Ardern is a New Zealand politician who served as the 40th prime minister of New Zealand and leader of the Labour Party from 2017 to 2023. A member of the Labour Party, she was a member of Parliament (MP) as a list MP from 2008 to 2017, and for Mount Albert from 2017 to 2023.",
  },
  {
    id: "6",
    firstName: "Jeff",
    lastName: " Bezos",
    email: "amazon@gmail.com",
    is_verified: "false",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Jeff_Bezos_visits_LAAFB_SMC_%283908618%29_%28cropped%29.jpeg/220px-Jeff_Bezos_visits_LAAFB_SMC_%283908618%29_%28cropped%29.jpeg",
    description:
      "Jeffrey Preston Bezos is an American entrepreneur, media proprietor, investor, and commercial astronaut.[3][4] He is the founder, executive chairman, and former president and CEO of Amazon, the world's largest e-commerce and cloud computing company. With a net worth of US$125 billion as of April 2023",
  },
  {
    id: "7",
    firstName: "Sundar",
    lastName: "Pichai",
    email: "pichaisundararajan@gmail.com",
    is_verified: "true",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Sundar_pichai.png/220px-Sundar_pichai.png",
    description:
      "Pichai Sundararajan is an Indian-American business executive. He is the chief executive officer (CEO) of Alphabet Inc. and its subsidiary Google",
  },
  {
    id: "7",
    firstName: "Viswanathan ",
    lastName: "Anand",
    email: "visu@gmail.com",
    is_verified: "true",
    imageUrl: "",
    description:
      "Viswanathan Vishy Anand is an Indian chess grandmaster and a former five-time World Chess Champion.[2] He became the first grandmaster from India in 1988, and is one of the few players to have surpassed an Elo rating of 2800, a feat he first achieved in 2006.[3] In 2022, he was elected the deputy president of FIDE.",
  },
];
