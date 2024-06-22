import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { createAdminValidationSchema } from '../Admin/admin.validation';
import { createFacultyValidationSchema } from '../Faculty/faculty.validation';
import { studentValidations } from '../student/student.validationZod';
import { userController } from './user.controller';

const router = express.Router();





router.post('/create-student', validateRequest(studentValidations.studentValidationSchema), userController.createStudent);

router.post(
    '/create-faculty',
    validateRequest(createFacultyValidationSchema),
    userController.createFaculty,
);

router.post(
    '/create-admin',
    validateRequest(createAdminValidationSchema),
    userController.createAdmin,
);

export const userRoutes = router;
