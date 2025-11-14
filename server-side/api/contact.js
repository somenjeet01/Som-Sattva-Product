export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    try {
      // Simulate saving to a database
      console.log("Contact form submitted:", { name, email, message });

      return res
        .status(200)
        .json({ message: "Contact form submitted successfully!" });
    } catch (error) {
      console.error("Error saving contact form:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }
}
