const prisma = require('../database/index');

module.exports.getAllMessageByRoom = async (req, res) => {
    try {
        const messages = await prisma.message.findMany({ where: { chatRoomId: +req.params.chatRoomId } })
        console.log(messages);
        res.json(messages);
    } catch (error) {
        console.error(error);
    }
}
module.exports.addMessage = async (req, res) => {
    try {
        const messages = await prisma.message.create({ data: req.body })
        console.log(messages);
        res.json(messages);
    } catch (error) {
        console.error(error);
    }
}