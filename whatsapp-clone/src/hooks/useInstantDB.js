import { useCallback } from "react";
import { init } from "@instantdb/react";

const useInstantDB = () => {
  const apiKey = "3be11bc6-c5bc-4cd7-b991-04993a051b89";

  const getContacts = useCallback(async () => {
    // Replace with InstantDB API call
    const db = init({
      appId: process.env.API_KEY,
    });
    const query = { goals: {} };
    const { isLoading, error, data } = db.useQuery(query);

    const response = await fetch("https://api.instantdb.com/contacts", {
      headers: { Authorization: `Bearer ${apiKey}` },
    });
    return response.ok ? await response.json() : [];
  }, []);

  const sendMessage = useCallback(async (contactId, message) => {
    // Replace with InstantDB API call

    await fetch(`https://api.instantdb.com/messages/${contactId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  }, []);

  return { getContacts, sendMessage };
};

export default useInstantDB;
