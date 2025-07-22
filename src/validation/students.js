import Joi from 'joi';

export const createStudentSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is required',
  }),
  age: Joi.number().integer().min(6).max(16).required().messages({
    'number.base': 'Age should be a number',
    'number.integer': 'Age should be an integer',
    'number.min': 'Age should be at least {#limit}',
    'number.max': 'Age should be at most {#limit}',
    'any.required': 'Age is required',
  }),
  gender: Joi.string()
    .min(3)
    .max(20)
    .valid('male', 'female', 'other')
    .required()
    .messages({
      'string.base': 'Gender must be a string',
      'string.min': 'Gender must be at least {#limit}',
      'string.max': 'Gender must be at most {#limit}',
      'any.only': 'Gender must be one of [male, female, other]',
      'any.required': 'Gender is required',
    }),
  avgMark: Joi.number().min(2).max(12).required().messages({
    'number.base': 'Average mark must be a number',
    'number.min': 'Average mark must be at least {#limit}',
    'number.max': 'Average mark must be at most {#limit}',
    'any.required': 'Average mark is required',
  }),
  onDuty: Joi.boolean().messages({
    'boolean.base': 'onDuty must be a boolean value',
  }),
});

export const updateStudentSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is required',
  }),
  age: Joi.number().integer().min(6).max(16).messages({
    'number.base': 'Age should be a number',
    'number.integer': 'Age should be an integer',
    'number.min': 'Age should be at least {#limit}',
    'number.max': 'Age should be at most {#limit}',
    'any.required': 'Age is required',
  }),
  gender: Joi.string()
    .min(3)
    .max(20)
    .valid('male', 'female', 'other')
    .messages({
      'string.base': 'Gender must be a string',
      'string.min': 'Gender must be at least {#limit}',
      'string.max': 'Gender must be at most {#limit}',
      'any.only': 'Gender must be one of [male, female, other]',
      'any.required': 'Gender is required',
    }),
  avgMark: Joi.number().min(2).max(12).messages({
    'number.base': 'Average mark must be a number',
    'number.min': 'Average mark must be at least {#limit}',
    'number.max': 'Average mark must be at most {#limit}',
    'any.required': 'Average mark is required',
  }),
  onDuty: Joi.boolean().messages({
    'boolean.base': 'onDuty must be a boolean value',
  }),
});
