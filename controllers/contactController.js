import sql from "../config/db.js";

// Add a new contact
export const addContact = async (req, res) => {
  try {
    const { name, email, phone, alternatePhone, message } = req.body;

    await sql`
      INSERT INTO contacts (name, email, phone, alternate_phone, message)
      VALUES (${name}, ${email}, ${phone}, ${alternatePhone}, ${message})
    `;

    res.json({ success: true, message: "Contact added successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Get all contacts
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await sql`
      SELECT * FROM contacts ORDER BY created_at DESC
    `;

    res.json({ success: true, contacts });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Update a contact
export const updateContact = async (req, res) => {
  try {
    const { id, name, email, phone, alternatePhone } = req.body;

    const [contact] = await sql`
      SELECT * FROM contacts WHERE id = ${id}
    `;

    if (!contact) {
      return res.json({ success: false, message: "Contact not found" });
    }

    await sql`
      UPDATE contacts
      SET name = ${name}, email = ${email}, phone = ${phone}, alternate_phone = ${alternatePhone}
      WHERE id = ${id}
    `;

    res.json({ success: true, message: "Contact updated successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
