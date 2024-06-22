import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { studentController } from './student.controller';
import { studentValidations } from './student.validationZod';
const router = express.Router();

// will call controller function

router.get('/', studentController.getAllStudent);
router.get('/:id', studentController.getSingleStudent);
router.delete('/:id', studentController.deleteStudent);
router.patch('/:id', validateRequest(studentValidations.updateStudentValidationSchema), studentController.updateStudent);

export const studentRoutes = router;
