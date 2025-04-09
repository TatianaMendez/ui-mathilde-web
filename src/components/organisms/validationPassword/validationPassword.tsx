import { PasswordInput } from '@components/molecules/input/passwordInput';
import { PasswordValidationList } from '@components/molecules/listValidation/listValidationPassword';
import usePasswordValidation from '@hooks/usePasswordValidation';
import type { FormikProps } from 'formik';

interface PasswordFormValues {
  password: string;
  confirmPassword: string;
}

interface ValidationPasswordProps {
  formik: FormikProps<PasswordFormValues>;
}

export const ValidationPassword = ({ formik }: ValidationPasswordProps) => {
  const {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    validations,
  } = usePasswordValidation();

  return (
    <>
      <div className="block">
        <PasswordInput
          placeholder="Contraseña"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            formik.setFieldValue('password', e.target.value);
          }}
          onBlur={formik.handleBlur('password')}
        />
        {formik.errors.password && formik.touched.password && (
          <div className="my-2 text-sm text-red-500">
            {String(formik.errors.password)}
          </div>
        )}
      </div>
      <div className="block">
        <PasswordInput
          placeholder="Confirmar contraseña"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            formik.setFieldValue('confirmPassword', e.target.value);
          }}
          onBlur={formik.handleBlur('confirmPassword')}
        />
        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
          <div className="my-2 text-sm text-red-500">
            {String(formik.errors.confirmPassword)}
          </div>
        )}
      </div>
      <PasswordValidationList validations={validations} />
    </>
  );
};

export default ValidationPassword;
