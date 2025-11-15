import sql from "../../lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({ error: "Email is required" });
      }

      await sql`
        INSERT INTO newsletter (email)
        VALUES (${email})
      `;

      res
        .status(200)
        .json({ success: true, message: "Subscribed successfully" });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
