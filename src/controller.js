import Axios from "axios";

export const fetchDogs = async (urlEnding) => {
  const { data } = await Axios.get(`https://dog.ceo/api/${urlEnding}`);

  const dogArray = [];

  for (const dog in data.message) {
    if (data.message[dog].length === 0) {
      dogArray.push(dog);
    } else {
      data.message[dog].forEach((breed) => dogArray.push(`${breed} ${dog}`));
    }
  }

  return dogArray;
};
