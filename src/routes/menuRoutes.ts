import { Router } from "express";
import { menuData } from "../data/menuData";

const router = Router();

// GET /api/menu?id=peri-paradise
router.get("/:id", (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.json(menuData);
  }

  const product = menuData.find((item) => item.id === +id);
  if (!product) {
    return res.status(404).json({ error: "Menu item not found" });
  }

  return res.json(product);
});

export default router;
