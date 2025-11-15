import sql from "../../lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, phone, alternatePhone, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
      }

      await sql`
        INSERT INTO contacts (name, email, phone, alternate_phone, message)
        VALUES (${name}, ${email}, ${phone}, ${alternatePhone}, ${message})
      `;

      res
        .status(200)
        .json({ success: true, message: "Contact added successfully" });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  } else if (req.method === "GET") {
    try {
      const contacts = await sql`
        SELECT * FROM contacts ORDER BY created_at DESC
      `;

      res.status(200).json({ success: true, contacts });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
