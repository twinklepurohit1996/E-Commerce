"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cateDrop = exports.addProduct = void 0;
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
const SECRET_KEY = "NOTESAPI";
const productService_1 = require("../services/productService");
const categoriesService_1 = require("../services/categoriesService");
// Backend Categories Contoller
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("hello");
    console.log(req.body);
    if (!req.body || !req.file) {
        res.json({ "status": 404, "message": "Please Fill the field Properly" });
    }
    else {
        const { product_name, price, size, cate_Id, description } = req.body;
        const file = req.file.originalname;
        const cate = yield (0, productService_1.findProduct)({ product_name: product_name });
        if (cate) {
            res.json({ "status": 400, "message": "Product Already Registered" });
        }
        else {
            const mydata = yield (0, productService_1.createProduct)({ product_name: product_name, file: file, price: price, size: size, description: description, cate_Id: cate_Id });
            res.json({ "status": 200, "message": "Product is successfully Inserted!!" });
        }
    }
});
exports.addProduct = addProduct;
const cateDrop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cate = yield (0, categoriesService_1.findC)();
    res.json({ "status": 200, "message": "Data is successfully Get of Dropdown!!", data: cate });
});
exports.cateDrop = cateDrop;
