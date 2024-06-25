export const getInstagramFeed = async () => {
  const fields = process.env.REACT_APP_INSTAGRAM_API_FIELDS;
  const token = process.env.REACT_APP_INSTAGRAM_TOKEN;
  const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${token}`;

  const res = await fetch(url);
  const data = await res.json();

  console.log(data.data);

  return data.data;
};
