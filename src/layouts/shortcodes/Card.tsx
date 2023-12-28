import React from "react";

interface CardProps {
  label: string;
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ label, title, content }) => {
  return (
    <div className="rounded-lg bg-theme-light px-7 py-10 dark:bg-darkmode-theme-light card">
      <h4>{label}</h4>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;
