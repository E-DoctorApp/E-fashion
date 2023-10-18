const prisma = require('../database/index');

module.exports.getAllCategory = async (req, res) => {
  try {
    const categoryType = req.params.categoryType; // Assuming the category type is a route parameter

    // Assuming you have a Category model with a 'type' field
    const category = await prisma.category.findFirst({
        include:{products:true,
      where: {
        type: +categoryType,
      },
    }
});

   
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};


