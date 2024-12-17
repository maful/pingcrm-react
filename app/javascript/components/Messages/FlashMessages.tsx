import { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import Alert from '@/components/Alert/Alert';

export default function FlashedMessages() {
  const [visible, setVisible] = useState(true);
  const { flash, errors } = usePage<PageProps>().props;
  const formErrors = errors ? Object.keys(errors).length : 0;

  useEffect(() => {
    setVisible(true);
  }, [flash, errors]);

  return (
    <>
      {flash.success && visible && (
        <Alert
          variant="success"
          message={flash.success}
          onClose={() => setVisible(false)}
        />
      )}
      {flash.error && visible && (
        <Alert
          variant="error"
          message={flash.error}
          onClose={() => setVisible(false)}
        />
      )}
      {formErrors > 0 && visible && (
        <Alert
          variant="error"
          message={'There are ' + formErrors + ' form errors.'}
          onClose={() => setVisible(false)}
        />
      )}
    </>
  );
}
