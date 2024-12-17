import React from "react";
import "../CSS/ImageComponent.css";

interface ImageComponentProps {
  src: string;
  alt: string;
  className?: string; 
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt, className = "" }) => {
  return (
    <div className={`image-wrapper ${className}`}>
      <img src={src} alt={alt} className="image" />
    </div>
  );
};

export default ImageComponent;
