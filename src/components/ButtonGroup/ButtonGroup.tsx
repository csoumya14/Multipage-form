import { FC } from 'react';
import styles from './ButtonGroup.module.scss';
import { useRouter } from 'next/router';
import { Button } from '@/components/Button/Button';

// ...

interface ButtonGroupProps {
  isValid?: boolean;
  forwardHref: string;
  backHref: string;
  forwardTextLabel: string;
}

export const ButtonGroup: FC<ButtonGroupProps> = ({
  isValid,
  forwardHref,
  backHref,
  forwardTextLabel,
}) => {
  const router = useRouter();

  return (
    <div className={styles.buttonWrapper}>
      <Button type="submit" onClick={() => router.push(`/${backHref}`)}>
        Previous
      </Button>
      <Button disabled={!isValid} type="submit" onClick={() => router.push(`/${forwardHref}`)}>
        {forwardTextLabel}
      </Button>
    </div>
  );
};
