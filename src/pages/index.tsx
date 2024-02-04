import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { Container, Text } from '@chakra-ui/react';
import { EmailHeading } from '@/components/EmailHeading';

function EmailButton() {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const mailref = useRef();
  const sendVerificationEmail = () => {
    // send mail
    const templateParams = {
        from_name: 'pick.pickpickhy02@gmail.com',
        to_email: 'pick.pickpickhy02@gmail.com',
        message: () => <>{mailref.current}</>
    };

    

    emailjs.sendForm(
            'service_vrg33ev', // 서비스 ID
            'template_13yagkw', // 템플릿 ID
            mailref.current,
            's4p2wDpADOE-5i3Sf', // public-key
        )
        .then((response) => {
            console.log('이메일이 성공적으로 보내졌습니다:', response);
            setIsEmailSent(true);
            // 이메일 전송 성공 처리 로직 추가
        })
        .catch((error) => {
            console.error('이메일 보내기 실패:', error);
            // 이메일 전송 실패 처리 로직 추가
        });
};

const handleVerification = () => {
    sendVerificationEmail();
};

return (
  <>
    <div>
        <h2>이메일 인증</h2>
        {isEmailSent ? (
            <p>
                인증 이메일이 성공적으로 발송되었습니다. 이메일을
                확인해주세요!
            </p>
        ) : (
            <button onClick={handleVerification}>인증</button>
        )}
    </div>
    <form ref={mailref}>
        <input>hihi</input>
        <button>buton</button>
    </form>
  </>
  );
}

export default EmailButton;