"use client";

import { FC, useEffect, useState } from "react";

interface IH1 {
  title: string;
}

const H1: FC<IH1> = ({ title }) => {
  const [curTitle, setTitle] = useState(title);
  useEffect(() => {
    setTitle(title);
  }, [title]);
  return <h1>{curTitle}</h1>
}

export default H1;