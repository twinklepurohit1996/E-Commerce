"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
//multer used to upload productImage of Product
const multer_1 = __importDefault(require("multer"));
var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/image/productImage');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
var upload = (0, multer_1.default)({ storage: storage });
const productController_1 = require("../controller/productController");
const productRoutes = express_1.default.Router();
exports.productRoutes = productRoutes;
// Backend Add Categories route
productRoutes.post('/addProduct', upload.single('file'), productController_1.addProduct);
productRoutes.get('/cateDrop', productController_1.cateDrop);
