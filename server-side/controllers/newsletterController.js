import sql from "../config/db.js";

// Subscribe to the newsletter
export const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email is required" });
    }

    await sql`
      INSERT INTO newsletter (email)
      VALUES (${email})
    `;

    res.json({ success: true, message: "Subscribed successfully" });
  } catch (error) {
    if (error.code === "23505") {
      res
        .status(409)
        .json({ success: false, message: "Email already subscribed" });
    } else {
      res.status(500).json({ success: false, message: error.message });
    }
  }
};
