const parseEnv = () => {
  console.log(
    Object.entries(process.env)
      .filter((arr) => arr[0].includes("RSS_"))
      .map((arr) => `${arr[0]}=${arr[1]}`)
      .join("; ")
  );
};

parseEnv();
