import { Icon, IconButton } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { ImageUploaderButton, ImageUploaderContainer } from "./styles";

export type ImageUploaderProps = {
  formData?: FormData;
};

const ImageUploader = ({ formData }: ImageUploaderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = React.useState<File[]>([]);

  const onImageLoad = (event: any) => {
    const file = event.target.files;
    setImages((prev) => [...prev, ...file]);
  };

  useEffect(() => {
    if (images && images.length > 0) {
      formData!.set("file", images[0]);
    } else {
      formData!.delete("file");
      inputRef.current!.value = "";
    }
  }, [images]);

  return (
    <ImageUploaderContainer>
      <input
        type="file"
        accept="image/*"
        name="file"
        onChange={onImageLoad}
        style={{ display: "none" }}
        ref={inputRef}
        multiple
      />
      <ImageUploaderButton
        onClick={() => {
          inputRef.current?.click();
        }}
      >
        <Icon>add</Icon>
        <span>이미지 추가</span>
      </ImageUploaderButton>
      {images &&
        images.length > 0 &&
        images.map((image) => (
          <div
            key={image.name}
            style={{
              position: "relative",
              marginLeft: "8px",
            }}
          >
            <img
              style={{ objectFit: "cover" }}
              width="150px"
              height="150px"
              alt={image.name}
              src={URL.createObjectURL(image)}
            />
            <IconButton
              style={{ position: "absolute", top: "0", right: "0" }}
              onClick={() =>
                setImages(images.filter((i) => i.name !== image.name))
              }
            >
              <Icon>cancel</Icon>
            </IconButton>
          </div>
        ))}
    </ImageUploaderContainer>
  );
};

ImageUploader.defaultProps = {
  formData: new FormData(),
};

export default ImageUploader;
