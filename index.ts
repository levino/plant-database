import axios from "axios";
import { extractPlantData } from "./extractPlantData";

interface PlantData {
  [key: string]: {
    [subKey: string]: string;
  };
}

async function getPlantData(url: string): Promise<PlantData> {
  const response = await axios.get(url, { responseType: "arraybuffer" });
  const html = new TextDecoder("iso-8859-1").decode(response.data);

  return extractPlantData(html);
}

// Usage
getPlantData(
  "https://www.baumschule-horstmann.de/wulfens-wolfsmilch-698_75362.html"
)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
