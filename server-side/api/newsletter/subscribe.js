export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    try {
      // Simulate saving to a database
      console.log("Newsletter subscription:", { email });

      return res
        .status(200)
        .json({ message: "Successfully subscribed to the newsletter!" });
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }
}
