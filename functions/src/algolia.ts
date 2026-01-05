import { onCall } from "firebase-functions/v2/https";
import { AlgoliaEntry } from "./types";

export const transformEntryForSearch = onCall(
  { region: "us-central1" }, // Configuration object
  async (request) => {
    const data: AlgoliaEntry = request.data;

    return {
      objectID: data.objectID, // Required for Algolia
      id: data.id,
      readableId: data.readableId,
      title: data.title.replace(/<[^>]+>/gm, "").replace(/&nbsp;/g, " "),
      body: data.body.replace(/<[^>]+>/gm, "").replace(/&nbsp;/g, " "),
      date: data.date,
      blockchain: data.filters.blockchain,
      tech: data.filters.tech,
      collection: data.collection,
      theme: data.filters.theme,
    };
  }
);
