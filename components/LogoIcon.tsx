import React from "react";

const LogoIcon: React.FC<{ className?: string }> = ({ className = "w-40 h-40" }) => (
  <div className={`relative ${className}`}>
    <img
      src="https://i.ibb.co/KcMWjCXB/logo.png"
      alt="Logo"
      className="object-contain w-full h-full"
      style={{
        background: "transparent",
      }}
    />
  </div>
);

export default LogoIcon;
