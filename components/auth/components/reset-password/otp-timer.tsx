import { useState, useEffect } from 'react';
import { MSButton } from '@/components';
interface IOtpTimerProps {
  countDown?: number;
  onResendOtp?: () => void;
}
export const OtpTimer = ({ countDown = 60, onResendOtp }: IOtpTimerProps) => {
  const [countdown, setCountdown] = useState(countDown);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleResendClick = () => {
    onResendOtp?.();
    setCanResend(false);
    setCountdown(countDown);
  };

  return (
    <div>
      {!canResend ? (
        <p>Resend OTP in {countdown} seconds</p>
      ) : (
        <MSButton
          onClick={handleResendClick}
          type="text"
          className="text-primary"
        >
          Resend OTP
        </MSButton>
      )}
    </div>
  );
};
