const utils = require('../utilities/utils');
const categoryModel = require('../models/category.model');

async function saveNewCategory(request) {
  let newCategoryInfo = new categoryModel(request.body);
  let result = await newCategoryInfo.save();
  const successResponse = utils.successResposeBuilder(
    request,
    result,
    200,
    'category saved successfully'
  );
  return successResponse;
}

module.exports = {
  saveNewCategory: saveNewCategory,
};
