"use client";

import { FC, useEffect, useState } from "react";

interface IText {
  text: string;
}

const Text: FC<IText> = ({ text }) => {
  const [curText, setText] = useState(text);

  useEffect(() => {
    setText(text);
  }, [text])
  return <p>{text}</p>
}

export default Text;