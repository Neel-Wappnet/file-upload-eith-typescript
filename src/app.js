"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const app = (0, express_1.default)();
const upload = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({
        destination: (req, file, cb) => {
            cb(null, `${__dirname}/../uploads`);
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        }
    })
}).array("files", 10);
app.post("/upload", upload, (req, res) => {
    console.log(__dirname);
    res.send("File uploaded");
});
app.get("/download/:filename", (req, res) => {
    let filename = req.params.filename;
    res.download(`${__dirname}/../uploads/${filename}`);
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server running at ${PORT}`);
});
