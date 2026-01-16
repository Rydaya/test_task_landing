import React from "react";
import ReactPixel from "react-facebook-pixel";
import { Button } from "../../shared/ui/Button";

export const LeadForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    ReactPixel.track("Lead");

    const clickId = new URLSearchParams(window.location.search).get("click_id");

    fetch("https://KEITARO_API_URL", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        click_id: clickId,
        event: "cta_click",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Test API response:", data);
      })
      .catch((err) => {
        console.log("Test API error (expected in mock):", err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button type="submit">Попробовать бесплатно</Button>
    </form>
  );
};
