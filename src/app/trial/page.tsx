"use client"; // Ensure this component runs on the client side
import { useEffect, useState } from "react";
import Query from "@irys/query";
const UploadText = () => {
  useEffect(() => {
    const Fetch = async () => {
      const myQuery = new Query();
      const results = await myQuery
        .search("irys:transactions")
        .ids(["3CZvMXVGv4CvNDWeKfMTEpyRpWEeoYgYpfE4yw61y62d"]);
      console.log(results);
    };
    Fetch();
  }, []);

  const [text, setText] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/upload-to-arweave", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: text }), // Correctly stringify the body
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      setTransactionId(data.txid);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="mt-40">
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here"
          required
        />
        <button className="bg-white" type="submit">
          Upload Text
        </button>
      </form>
      <div className="text-white">
        {transactionId && <p>Transaction ID: {transactionId}</p>}
      </div>
    </div>
  );
};

export default UploadText;
