const router = require("express").Router();
const { standardLimiter } = require("../middleware/rateLimiter");
const validateObjectId = require("../middleware/validateObjectId");
const productController = require("../controllers/product.controllers");

router.get("/", standardLimiter, productController.getAllProduct);

router.post("/", productController.createProduct);

router.get(
  "/:productId",
  standardLimiter,
  validateObjectId,
  productController.getProductById,
);

router.put(
  "/:productId",
  standardLimiter,
  validateObjectId,
  productController.updateProduct,
);

router.delete(
  "/:productId",
  standardLimiter,
  validateObjectId,
  productController.deleteProduct,
);

module.exports = router;
