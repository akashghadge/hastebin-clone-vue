const { Router } = require('express')

const router = Router();
const Code = require("../models/Code.model");

router.post('/save-code', async (req, res) => {
    const { codeData } = req.body;
    console.log(req.body);
    try {
        let newCode = new Code({
            text: codeData
        });
        let data = await newCode.save();
        console.log(data);
        res.status(200).json(data);

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "internal server error" })
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const CodeSnippet = await Code.findById(id);
        console.log(CodeSnippet);
        if (!CodeSnippet)
            return res.json('Wrong URL')
        return res.status(200).json(CodeSnippet.text);
    } catch (err) {
        res.status(500).json({ message: "internal server error" })

    }
})

module.exports = router;