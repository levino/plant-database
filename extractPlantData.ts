import R from "ramda";
import { JSDOM } from "jsdom";

const toDom = (html: string) =>
  new JSDOM(html, { url: "https://example.com" }).window.document;

const getTextContent = (selector: string) => (row: Element) =>
  row.querySelector(selector)?.textContent?.trim() || "";

const getQuickKey = getTextContent(".pbody-quickkey");
const getSectionTitle = getTextContent(".pbody-section-title");
const getQuickValue = getTextContent(".pbody-quickvalue");
const getQuickBlocks = R.invoker(
  1,
  "querySelectorAll"
)("#pbody-quickinfo .pbody-quickblock");
const getRows = (quickblock: Element) =>
  Array.from(quickblock.querySelectorAll(".pbody-quicktable tr"));

const getSectionData = R.pipe(
  getRows,
  R.map(R.applySpec([getQuickKey, getQuickValue])),
  // @ts-expect-error
  R.fromPairs
);

export const extractPlantData: (plantData: string) => Record<string, any> =
  R.pipe(
    toDom,
    getQuickBlocks,
    R.map(R.applySpec([getSectionTitle, getSectionData])),
    // @ts-expect-error
    R.fromPairs
  );
