import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});

export default async (req, res) => {
  // grab prompt from the front end
  let prompt = await req.body.prompt;
  console.log("hello");
  console.log(prompt);

  try {
    const response = await openai.images.generate({
      prompt: prompt,
    });
    console.log("response after open.img.generate");
    console.log(response);
    let image_url = response.data[0].url;
    // send url to front end to display the image
    res.status(200).json({
      success: true,
      data: image_url,
    });
  } catch (error) {
    console.log(error);
    // send error to front end, so user can easily see that something went wrong
    res.status(400).json({
      success: false,
      error: "The image could not be generated",
    });
  }
};
