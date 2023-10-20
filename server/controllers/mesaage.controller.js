const prisma = require('../database/index');

module.exports.getAllMessageByRoom = async (req, res) => {
    try {
        const messages = await prisma.message.findMany({ where: { chatRoomId: +req.params.chatRoomId } })
        res.json(messages);
    } catch (error) {
        res.json({ error: error })
    }
}
module.exports.addMessage = async (req, res) => {
    try {
        const messages = await prisma.message.create({ data: req.body })
        res.json(messages);
    } catch (error) {
        res.json({ error: error })
    }
}