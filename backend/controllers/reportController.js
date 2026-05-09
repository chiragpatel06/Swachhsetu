import Report from "../models/Report.js";

export const createReport = async (req, res) => {
  try {
    const { name, email, location, wasteType, description } = req.body;

    const photoUrl = req.file
      ? req.file.path
      : "";

    const report = await Report.create({
      userId: req.user._id,
      name,
      email,
      location,
      wasteType,
      description,
      photo: photoUrl,
    });

    res.status(201).json({
      message: "Report submitted successfully ✅",
      report,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};